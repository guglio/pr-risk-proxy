import { getRepos, getCommitsForRepo, getLatestCommitsAll, getRepoDetails } from './data/data';

export interface Env {
	GROQ_API_KEY: string;
	CORS_ORIGIN?: string;
	CORS_ORIGINS?: string;
}

const groqDefault = {
	model: 'llama-3.3-70b-versatile',
	temperature: 0.2,
	response_format: { type: 'json_object' },
};

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

function corsFor(req: Request, env: Env) {
	const reqOrigin = req.headers.get('Origin') || '';
	const configured = (env.CORS_ORIGINS || env.CORS_ORIGIN || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	let allowOrigin = '*';
	if (configured.length) {
		if (configured.includes('*')) allowOrigin = '*';
		else if (reqOrigin && configured.includes(reqOrigin)) allowOrigin = reqOrigin;
		else allowOrigin = ''; // not allowed — omit header
	}

	const headers: Record<string, string> = {
		...(allowOrigin ? { 'Access-Control-Allow-Origin': allowOrigin } : {}),
		Vary: 'Origin', // important for caching at the edge
		'Access-Control-Allow-Headers': req.headers.get('Access-Control-Request-Headers') || 'content-type',
		'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
	};
	return headers;
}

function hintForGroqError(code?: string, type?: string, message?: string) {
	if (!code && !type && !message) return undefined;

	const msg = (message || '').toLowerCase();

	if (code === 'json_validate_failed' || msg.includes('json')) {
		return 'The model tried to enforce JSON mode. Remove response_format or ensure your top-level output matches it. You already removed it, so double-check the prompt asks for a JSON array only.';
	}
	if (code === 'model_not_found' || msg.includes('model')) {
		return 'Check the model name. Try "llama-3.3-70b-versatile".';
	}
	if (code === 'invalid_api_key' || msg.includes('api key')) {
		return 'Verify the GROQ_API_KEY secret in Cloudflare (wrangler secret put GROQ_API_KEY).';
	}
	if (code === 'rate_limit_exceeded' || msg.includes('rate')) {
		return 'Rate limit hit. Respect Retry-After and back off.';
	}
	if (msg.includes('messages') || msg.includes('role')) {
		return 'Ensure the body contains messages: [{ role: "system"|"user"|"assistant", content: "..." }].';
	}
	return undefined;
}

const jsonResponse = (data: unknown, headers: Record<string, string>, status = 200) =>
	new Response(JSON.stringify(data), { status, headers: { ...headers, 'Content-Type': 'application/json' } });

// fix: remove trailing slash properly
const normalizePath = (path: string) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path);

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const url = new URL(req.url);
		const headers = corsFor(req, env);
		const key = `${req.method} ${normalizePath(url.pathname)}`;

		// Handle CORS preflight once for all routes
		if (req.method === 'OPTIONS') return new Response(null, { headers });

		try {
			switch (key) {
				case 'GET /health':
					return jsonResponse({ ok: true, ts: Date.now() }, headers);

				case 'GET /api/repos': {
					const search = url.searchParams.get('search') ?? '';
					return jsonResponse(getRepos(search), headers);
				}

				case 'GET /api/repo': {
					const id = url.searchParams.get('id') ?? undefined;
					const fullName = url.searchParams.get('fullName') ?? undefined;

					const limitParam = url.searchParams.get('limit');
					const limit = limitParam ? Number(limitParam) : undefined;

					const { repo, commits } = getRepoDetails({
						id,
						fullName,
						limit: Number.isFinite(limit as number) && (limit as number) > 0 ? (limit as number) : undefined,
					});

					if (!repo) {
						return jsonResponse({ error: 'Repo not found' }, headers, 404);
					}
					return jsonResponse({ repo, commits }, headers);
				}

				// latest commits for a single repo (supports ?limit=10 or 20)
				case 'GET /api/commits': {
					const repo = url.searchParams.get('repo') || '';
					const limit = Number(url.searchParams.get('limit') || '10');
					return jsonResponse(getCommitsForRepo(repo, isNaN(limit) ? 10 : limit), headers);
				}

				// latest commits across all repos (dashboard)
				case 'GET /api/commits/latest': {
					const limit = Number(url.searchParams.get('limit') || '10');
					return jsonResponse(getLatestCommitsAll(isNaN(limit) ? 10 : limit), headers);
				}

				case 'POST /api/ai/analyze': {
					if (!env.GROQ_API_KEY) {
						return jsonResponse({ error: 'Missing GROQ_API_KEY' }, headers, 500);
					}

					const payload = await req.json<any>().catch(() => ({}));
					const body = JSON.stringify({
						model: payload.model ?? groqDefault.model,
						temperature: payload.temperature ?? groqDefault.temperature,
						messages: payload.messages,
					});

					const groqRes = await fetch(GROQ_API_URL, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${env.GROQ_API_KEY}`,
						},
						body,
					});

					const status = groqRes.status;
					const ct = groqRes.headers.get('content-type') || '';
					const reqId = groqRes.headers.get('x-request-id') || groqRes.headers.get('x-groq-request-id') || undefined;

					// ---- Non-2xx: return a *nice* error payload ----
					if (!groqRes.ok) {
						const retryAfter = groqRes.headers.get('retry-after') || undefined;
						const respHeaders = { ...headers, 'Content-Type': 'application/json' } as Record<string, string>;
						if (retryAfter) respHeaders['Retry-After'] = retryAfter;

						let upstream: any = null;
						if (ct.includes('application/json')) {
							upstream = await groqRes.json().catch(() => null);
						} else {
							upstream = await groqRes.text().catch(() => '');
						}

						// Groq usually returns: { error: { message, type, code, ... } }
						const errObj = upstream?.error ?? {};
						const message = errObj.message || (typeof upstream === 'string' ? upstream : 'Groq request failed');
						const code = errObj.code;
						const type = errObj.type;

						return new Response(
							JSON.stringify({
								error: message,
								code,
								type,
								hint: hintForGroqError(code, type, message),
								upstream, // keep for debugging (can remove for prod)
								requestId: reqId, // handy if you contact support
							}),
							{ status, headers: respHeaders }
						);
					}

					// ---- Success: parse -> normalize to array ----
					if (!ct.includes('application/json')) {
						const text = await groqRes.text().catch(() => '');
						return jsonResponse({ error: 'Upstream non-JSON', body: text }, headers, status);
					}

					const data = (await groqRes.json().catch(() => null)) as { choices?: { message?: { content?: string } }[] } | null;
					if (!data) return jsonResponse({ error: 'AI upstream parse failure' }, headers, status);

					const raw = data?.choices?.[0]?.message?.content ?? '[]';

					let out: unknown = [];
					try {
						out = JSON.parse(raw);
					} catch {
						/* keep [] */
					}

					// Unwrap any wrapper object { riskAssessments/items/assessments: [...] }
					if (out && typeof out === 'object' && !Array.isArray(out)) {
						const obj = out as any;
						out = obj.riskAssessments || obj.items || obj.assessments || [];
					}
					if (!Array.isArray(out)) out = [out];

					return jsonResponse(out, headers, 200);
				}

				default:
					return new Response('Not found', { status: 404, headers });
			}
		} catch (e: any) {
			return jsonResponse({ error: e?.message || 'Server error' }, headers, 500);
		}
	},
} satisfies ExportedHandler<Env>;
