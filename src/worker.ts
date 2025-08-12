import { REPOS, getRepos, getCommitsForRepo, getLatestCommitsAll, COMMITS_BY_REPO } from './data/data';

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

const normalizePath = (path: string) => {
	return path !== '/' && path.endsWith('/') ? path.slice(0, 1) : path;
};

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const url = new URL(req.url);
		const headers = cors(env.CORS_ORIGIN);
		const key = `${req.method} ${normalizePath(url.pathname)}`;
		try {
			switch (key) {
				case 'GET /health':
					return jsonResponse({ ok: true, ts: Date.now() }, headers);
				case 'GET /api/repos':
					const search = (url.searchParams.get('search') || '').toLowerCase();
					return jsonResponse(getRepos(search), headers);
				case 'GET /api/commits':
					const repo = url.searchParams.get('repo') || '';
					return jsonResponse(COMMITS_BY_REPO[repo] ?? [], headers);
				case 'GET /api/commits/latest':
					const limit = Number(url.searchParams.get('limit') || '10');
					return jsonResponse(getLatestCommitsAll(limit), headers);
				case 'POST /api/ai/analyze':
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
					type GroqResponse = {
						choices?: { message?: { content?: string } }[];
						model?: string;
						usage?: unknown;
					};
					const data: GroqResponse | null = await groqResponse
						.json()
						.then((res) => res as GroqResponse)
						.catch(() => null);

					if (!groqResponse.ok || !data) {
						return jsonResponse({ error: 'AI call failed', details: data }, headers, status);
					}
					const content: any = data?.choices?.[0]?.message?.content ?? '';
					let parsed: unknown = null;
					try {
						parsed = JSON.parse(content);
					} catch {
						parsed = content;
					}
					// You can also include baseline metadata if you like:
					return jsonResponse({ result: parsed, model: data.model, usage: data.usage }, headers, status);
				default:
					return new Response('Not found', { status: 404, headers });
			}
		} catch (e: any) {
			return jsonResponse({ error: e?.message || 'Server error' }, headers, 500);
		}
	},
} satisfies ExportedHandler<Env>;
