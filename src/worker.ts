import { getRepos, getCommitsForRepo, getLatestCommitsAll } from './data/data';

export interface Env {
	GROQ_API_KEY: string;
	CORS_ORIGIN?: string;
}

const groqDefault = {
	model: 'llama-3.3-70b-versatile',
	temperature: 0.2,
	response_format: { type: 'json_object' },
};

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

function cors(origin?: string) {
	return {
		'Access-Control-Allow-Origin': origin || '*',
		'Access-Control-Allow-Headers': 'content-type',
		'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
	};
}

const jsonResponse = (data: unknown, headers: Record<string, string>, status = 200) =>
	new Response(JSON.stringify(data), { status, headers: { ...headers, 'Content-Type': 'application/json' } });

// fix: remove trailing slash properly
const normalizePath = (path: string) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path);

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const url = new URL(req.url);
		const headers = cors(env.CORS_ORIGIN);
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
						response_format: payload.response_format ?? groqDefault.response_format,
						messages: payload.messages, // [{ role, content }]
					});

					const groqResponse = await fetch(GROQ_API_URL, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${env.GROQ_API_KEY}`,
						},
						body,
					});

					const status = groqResponse.status;
					const contentType = groqResponse.headers.get('content-type') || '';
					if (!contentType.includes('application/json')) {
						const text = await groqResponse.text().catch(() => '');
						return jsonResponse({ error: 'Upstream non-JSON', body: text }, headers, status);
					}

					type GroqResponse = {
						choices?: { message?: { content?: string } }[];
						model?: string;
						usage?: unknown;
					};

					const data: GroqResponse | null = await groqResponse
						.json()
						.then((res) => res as GroqResponse)
						.catch(() => null);
					if (!data) return jsonResponse({ error: 'AI upstream parse failure' }, headers, status);

					const content = data?.choices?.[0]?.message?.content ?? '';
					let parsed: unknown = content;
					if (typeof content === 'string') {
						try {
							parsed = JSON.parse(content);
						} catch {
							// keep string if model didn't return valid JSON
						}
					}

					return jsonResponse({ result: parsed, model: data.model, usage: data.usage }, headers, status);
				}

				default:
					return new Response('Not found', { status: 404, headers });
			}
		} catch (e: any) {
			return jsonResponse({ error: e?.message || 'Server error' }, headers, 500);
		}
	},
} satisfies ExportedHandler<Env>;
