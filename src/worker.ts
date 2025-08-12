import { REPOS, COMMITS } from './data/data';

export interface Env {
	GROQ_API_KEY: string;
	CORS_ORIGIN?: string;
}

function cors(origin?: string) {
	return {
		'Access-Control-Allow-Origin': origin || '*',
		'Access-Control-Allow-Headers': 'content-type',
		'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
	};
}

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const url = new URL(req.url);
		const headers = cors(env.CORS_ORIGIN);

		if (req.method === 'OPTIONS') return new Response(null, { headers });

		if (url.pathname === '/api/repos' && req.method === 'GET') {
			return json(REPOS, headers);
		}

		if (url.pathname === '/api/commits' && req.method === 'GET') {
			const repo = url.searchParams.get('repo') || '';
			// @ts-ignore
			return json(COMMITS[repo] ?? [], headers);
		}

		if (url.pathname === '/api/ai/analyze' && req.method === 'POST') {
			const payload = await req.json<any>();
			const body = JSON.stringify({
				model: payload.model ?? 'llama-3.3-70b-versatile',
				temperature: payload.temperature ?? 0.2,
				response_format: payload.response_format ?? { type: 'json_object' },
				messages: payload.messages, // [{role, content}]
			});

			const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${env.GROQ_API_KEY}`,
				},
				body,
			});

			const text = await res.text();
			return new Response(text, { status: res.status, headers: { ...headers, 'Content-Type': 'application/json' } });
		}

		return new Response('Not found', { status: 404, headers });
	},
} satisfies ExportedHandler<Env>;

function json(data: unknown, headers: Record<string, string>, status = 200) {
	return new Response(JSON.stringify(data), { status, headers: { ...headers, 'Content-Type': 'application/json' } });
}
