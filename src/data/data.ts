// STATIC DATA — richer commit messages for better risk variety.
// Generated once; no runtime randomness. Newest-first ordering.

export type Repo = {
	id: string;
	fullName: string;
	name: string;
	stars: number;
	openPRs: number;
	updatedAt: string;
};

export type Commit = {
	sha: string;
	author: string;
	date: string;
	message: string;
	repoFullName?: string;
};

export const REPOS: Repo[] = [
	{
		id: '1',
		fullName: 'acme/auth-service',
		name: 'auth-service',
		stars: 214,
		openPRs: 5,
		updatedAt: '2025-08-08T21:22:00Z',
	},
	{
		id: '2',
		fullName: 'acme/payments',
		name: 'payments',
		stars: 389,
		openPRs: 2,
		updatedAt: '2025-08-09T08:23:00Z',
	},
	{
		id: '3',
		fullName: 'acme/frontend',
		name: 'frontend',
		stars: 612,
		openPRs: 7,
		updatedAt: '2025-08-07T05:44:00Z',
	},
	{
		id: '4',
		fullName: 'acme/infra',
		name: 'infra',
		stars: 154,
		openPRs: 1,
		updatedAt: '2025-08-10T06:01:00Z',
	},
	{
		id: '5',
		fullName: 'acme/analytics',
		name: 'analytics',
		stars: 471,
		openPRs: 3,
		updatedAt: '2025-08-08T11:54:00Z',
	},
	{
		id: '6',
		fullName: 'acme/notifications',
		name: 'notifications',
		stars: 129,
		openPRs: 0,
		updatedAt: '2025-08-10T01:45:00Z',
	},
	{
		id: '7',
		fullName: 'acme/search',
		name: 'search',
		stars: 532,
		openPRs: 4,
		updatedAt: '2025-08-09T08:12:00Z',
	},
	{
		id: '8',
		fullName: 'acme/docs',
		name: 'docs',
		stars: 88,
		openPRs: 0,
		updatedAt: '2025-08-10T06:40:00Z',
	},
	{
		id: '9',
		fullName: 'acme/mobile-app',
		name: 'mobile-app',
		stars: 303,
		openPRs: 2,
		updatedAt: '2025-08-11T03:03:00Z',
	},
	{
		id: '10',
		fullName: 'acme/feature-flags',
		name: 'feature-flags',
		stars: 267,
		openPRs: 1,
		updatedAt: '2025-08-10T08:45:00Z',
	},
	{
		id: '11',
		fullName: 'acme/catalog',
		name: 'catalog',
		stars: 341,
		openPRs: 6,
		updatedAt: '2025-08-08T20:14:00Z',
	},
	{
		id: '12',
		fullName: 'acme/recommendation-service',
		name: 'recommendation-service',
		stars: 421,
		openPRs: 3,
		updatedAt: '2025-08-11T04:54:00Z',
	},
] as const;

export const COMMITS_BY_REPO: Record<string, Commit[]> = {
	'acme/auth-service': [
		{
			sha: '694cc6fb',
			author: 'ivan',
			date: '2025-08-08T21:22:00Z',
			message: 'feat(feature-flags): default enable experimental flag for all users',
		},
		{
			sha: '0261d1cc',
			author: 'bob',
			date: '2025-08-04T22:33:00Z',
			message: 'style(mobile): format and lint',
		},
		{
			sha: 'a0b837f',
			author: 'dave',
			date: '2025-08-04T08:01:00Z',
			message: 'feat(api): expose debug endpoint without auth',
		},
		{
			sha: 'aa9864875',
			author: 'yara',
			date: '2025-08-03T18:48:00Z',
			message: 'feat(storage): set S3 bucket public-read for mobile assets',
		},
		{
			sha: '3bb114b',
			author: 'zane',
			date: '2025-08-03T11:49:00Z',
			message: 'perf(sms): disable strict mode in dev',
		},
		{
			sha: '7aba609',
			author: 'yara',
			date: '2025-08-03T10:11:00Z',
			message: 'fix(lockfile): relax validation on tracking field',
		},
		{
			sha: 'f0566857',
			author: 'judy',
			date: '2025-08-02T12:45:00Z',
			message: 'style(cors): format and lint',
		},
		{
			sha: '86719d320',
			author: 'yara',
			date: '2025-07-29T14:27:00Z',
			message: 'feat(routing): add import/export endpoint',
		},
		{
			sha: 'd36a000',
			author: 'judy',
			date: '2025-07-28T23:37:00Z',
			message: 'refactor(notifications): tidy up modules',
		},
		{
			sha: '0db8b7c6',
			author: 'victor',
			date: '2025-07-28T02:11:00Z',
			message: 'docs(tests): fix typos',
		},
		{
			sha: '21e9426f',
			author: 'trent',
			date: '2025-07-26T15:21:00Z',
			message: 'docs(catalog): fix typos',
		},
		{
			sha: '9faf7ecf',
			author: 'trent',
			date: '2025-07-26T02:13:00Z',
			message: 'feat(search): add fallback for tracking verification',
		},
		{
			sha: 'b2b2c4bf',
			author: 'judy',
			date: '2025-07-25T05:02:00Z',
			message: 'build(terraform): bump major sms version',
		},
		{
			sha: 'f238f36',
			author: 'wendy',
			date: '2025-07-24T10:35:00Z',
			message: 'test(webhook): increase coverage for feature-flags',
		},
		{
			sha: 'd945fc2c',
			author: 'yara',
			date: '2025-07-23T11:57:00Z',
			message: 'fix(auth): bypass 2FA check temporarily',
		},
		{
			sha: '3fc107245',
			author: 'dave',
			date: '2025-07-19T21:14:00Z',
			message: 'feat(jwt): extend role dependency permissions',
		},
		{
			sha: '689d7ef',
			author: 'heidi',
			date: '2025-07-19T13:17:00Z',
			message: 'feat(sms): background job retries to 10',
		},
		{
			sha: 'c51eb8b8',
			author: 'ivan',
			date: '2025-07-19T03:26:00Z',
			message: 'perf(logging): minor optimization for cors',
		},
		{
			sha: 'cc8ecb3',
			author: 'peggy',
			date: '2025-07-18T18:49:00Z',
			message: 'refactor(logging): increase token expiry to 48h',
		},
		{
			sha: '914980af1',
			author: 'heidi',
			date: '2025-07-14T23:48:00Z',
			message: 'perf(sms): minor optimization for lockfile',
		},
	],
	'acme/payments': [
		{
			sha: '4f069c4a1',
			author: 'wendy',
			date: '2025-08-09T08:23:00Z',
			message: 'docs(sms): fix typos',
		},
		{
			sha: 'bb288a5',
			author: 'yara',
			date: '2025-08-06T06:01:00Z',
			message: 'perf(lockfile): disable strict mode in dev',
		},
		{
			sha: 'd431efeb',
			author: 'alice',
			date: '2025-08-06T02:27:00Z',
			message: 'feat(recommendation): allow optional audience when missing',
		},
		{
			sha: 'f6104088',
			author: 'yara',
			date: '2025-08-05T19:41:00Z',
			message: 'fix(auth): bypass 2FA check temporarily',
		},
		{
			sha: 'be15e415a',
			author: 'victor',
			date: '2025-08-05T03:18:00Z',
			message: 'refactor(k8s): increase token expiry to 48h',
		},
		{
			sha: 'edbab4f',
			author: 'victor',
			date: '2025-08-04T17:29:00Z',
			message: 'docs(jwt): update guides',
		},
		{
			sha: '7a87edf',
			author: 'yara',
			date: '2025-08-02T12:22:00Z',
			message: 'docs(recommendation): fix typos',
		},
		{
			sha: '37b81a6',
			author: 'heidi',
			date: '2025-08-01T05:13:00Z',
			message: 'ci(tests): cache improvements',
		},
		{
			sha: 'a2c0e4d',
			author: 'wendy',
			date: '2025-08-01T01:11:00Z',
			message: 'build(stripe): bump major permissions version',
		},
		{
			sha: 'ca4c106b8',
			author: 'alice',
			date: '2025-07-30T17:05:00Z',
			message: 'feat(ranking): add import/export endpoint',
		},
		{
			sha: '3e6c444',
			author: 'mallory',
			date: '2025-07-30T09:05:00Z',
			message: 'refactor(catalog): tidy up modules',
		},
		{
			sha: 'e9bd3830',
			author: 'yara',
			date: '2025-07-30T04:06:00Z',
			message: 'feat(csrf): extend role k8s permissions',
		},
		{
			sha: '690e1441',
			author: 'ivan',
			date: '2025-07-26T23:02:00Z',
			message: 'docs(notifications): update guides',
		},
		{
			sha: '094a78b',
			author: 'trent',
			date: '2025-07-25T19:51:00Z',
			message: 'build(ssl): disable certificate pinning for ab-test client',
		},
		{
			sha: '9dda31fce',
			author: 'mallory',
			date: '2025-07-24T16:16:00Z',
			message: 'feat(tracking): allow optional audience when missing',
		},
		{
			sha: '430087f',
			author: 'bob',
			date: '2025-07-20T17:47:00Z',
			message: 'fix(permissions): remove sanitization on terraform input',
		},
		{
			sha: 'a87509ce',
			author: 'heidi',
			date: '2025-07-16T08:26:00Z',
			message: 'refactor(stripe): increase token expiry to 48h',
		},
		{
			sha: '9106812',
			author: 'erin',
			date: '2025-07-15T21:30:00Z',
			message: 'docs(infra): update guides',
		},
		{
			sha: '95ab7186',
			author: 'mallory',
			date: '2025-07-15T04:16:00Z',
			message: 'feat(storage): set S3 bucket public-read for infra assets',
		},
		{
			sha: 'c970a257',
			author: 'judy',
			date: '2025-07-14T17:57:00Z',
			message: 'chore(k8s): remove dead code',
		},
	],
	'acme/frontend': [
		{
			sha: '096d584',
			author: 'carol',
			date: '2025-08-07T05:44:00Z',
			message: 'build(tracking): bump major ssl version',
		},
		{
			sha: '9131e56ea',
			author: 'ivan',
			date: '2025-08-06T16:44:00Z',
			message: 'feat(frontend): add import/export endpoint',
		},
		{
			sha: '34e9e4126',
			author: 'frank',
			date: '2025-08-05T05:31:00Z',
			message: 'chore(tests): bump search dependency',
		},
		{
			sha: '99f12cc',
			author: 'frank',
			date: '2025-08-04T21:47:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: 'c4a153207',
			author: 'trent',
			date: '2025-08-02T16:48:00Z',
			message: 'chore(security): disable CSRF middleware globally',
		},
		{
			sha: 'cb68422e',
			author: 'yara',
			date: '2025-08-02T07:45:00Z',
			message: 'feat(sms): add import/export endpoint',
		},
		{
			sha: '32e1ca63',
			author: 'judy',
			date: '2025-08-01T21:12:00Z',
			message: 'chore(analytics): bump auth dependency',
		},
		{
			sha: '6b8fadce',
			author: 'mallory',
			date: '2025-07-31T19:31:00Z',
			message: 'test(ranking): increase coverage for mobile',
		},
		{
			sha: '5f0c0c0',
			author: 'judy',
			date: '2025-07-31T01:47:00Z',
			message: 'fix(sms): skip signature check for sandbox env',
		},
		{
			sha: '9a9fc2bc',
			author: 'ivan',
			date: '2025-07-30T22:37:00Z',
			message: 'refactor(recommendation): tidy up modules',
		},
		{
			sha: 'fa7173a7',
			author: 'victor',
			date: '2025-07-27T07:54:00Z',
			message: 'perf(mobile): disable strict mode in dev',
		},
		{
			sha: 'e7e4c61f',
			author: 'judy',
			date: '2025-07-26T18:33:00Z',
			message: 'feat(permissions): allow optional audience when missing',
		},
		{
			sha: '3e8def9c',
			author: 'judy',
			date: '2025-07-24T07:03:00Z',
			message: 'perf(email): minor optimization for secrets',
		},
		{
			sha: '08759151',
			author: 'trent',
			date: '2025-07-24T05:49:00Z',
			message: 'docs(csrf): fix typos',
		},
		{
			sha: '49077be4c',
			author: 'frank',
			date: '2025-07-22T10:45:00Z',
			message: 'feat(recommendation): add import/export endpoint',
		},
		{
			sha: '57a48fbc5',
			author: 'peggy',
			date: '2025-07-22T09:10:00Z',
			message: 'docs(payments): fix typos',
		},
		{
			sha: '8613da259',
			author: 'frank',
			date: '2025-07-21T10:02:00Z',
			message: 'feat(api): expose debug endpoint without auth',
		},
		{
			sha: '8c7854e',
			author: 'bob',
			date: '2025-07-20T00:27:00Z',
			message: 'chore(secrets): commit .env.sample with real-looking values',
		},
		{
			sha: '57ec4e7',
			author: 'trent',
			date: '2025-07-18T01:07:00Z',
			message: 'refactor(k8s): increase token expiry to 48h',
		},
		{
			sha: 'e4b14ba',
			author: 'ivan',
			date: '2025-07-14T19:13:00Z',
			message: 'style(lockfile): format and lint',
		},
	],
	'acme/infra': [
		{
			sha: 'a42f5031',
			author: 'victor',
			date: '2025-08-10T06:01:00Z',
			message: 'feat(api): make /admin/* endpoints public for testing',
		},
		{
			sha: '7b64642',
			author: 'grace',
			date: '2025-08-09T11:58:00Z',
			message: 'fix(oauth): relax redirect URI allowlist to wildcard',
		},
		{
			sha: '28b1a7de3',
			author: 'wendy',
			date: '2025-08-06T04:06:00Z',
			message: 'fix(secrets): skip signature check for sandbox env',
		},
		{
			sha: 'f29aabd9a',
			author: 'ivan',
			date: '2025-08-05T08:25:00Z',
			message: 'build(recommendation): adjust vite chunking',
		},
		{
			sha: 'ceed62cb5',
			author: 'dave',
			date: '2025-08-03T23:06:00Z',
			message: 'perf(routing): disable strict mode in dev',
		},
		{
			sha: '7333b69',
			author: 'heidi',
			date: '2025-08-02T10:34:00Z',
			message: 'feat(search): add fallback for tracking verification',
		},
		{
			sha: 'aae95cf',
			author: 'zane',
			date: '2025-07-31T19:27:00Z',
			message: 'docs(cors): update guides',
		},
		{
			sha: 'bb78392',
			author: 'zane',
			date: '2025-07-30T09:17:00Z',
			message: 'docs(permissions): fix typos',
		},
		{
			sha: '8a86bc6',
			author: 'frank',
			date: '2025-07-29T17:36:00Z',
			message: 'feat(feature-flags): default enable experimental flag for all users',
		},
		{
			sha: 'f7d39cd',
			author: 'zane',
			date: '2025-07-28T13:02:00Z',
			message: 'feat(sms): allow optional audience when missing',
		},
		{
			sha: 'b7e2846',
			author: 'heidi',
			date: '2025-07-27T04:25:00Z',
			message: 'fix(indexing): relax validation on email field',
		},
		{
			sha: '07425a0',
			author: 'trent',
			date: '2025-07-26T16:42:00Z',
			message: 'build(oauth): adjust vite chunking',
		},
		{
			sha: '5b8a97fb',
			author: 'heidi',
			date: '2025-07-22T23:06:00Z',
			message: 'chore(inventory): remove dead code',
		},
		{
			sha: 'de3d7e69d',
			author: 'heidi',
			date: '2025-07-22T15:42:00Z',
			message: 'fix(webhook): relax validation on indexing field',
		},
		{
			sha: 'aa1a8769',
			author: 'heidi',
			date: '2025-07-20T03:29:00Z',
			message: 'refactor(csrf): increase token expiry to 48h',
		},
		{
			sha: '180eb171',
			author: 'dave',
			date: '2025-07-18T18:58:00Z',
			message: 'refactor(email): increase token expiry to 48h',
		},
		{
			sha: '2dd5ba7a',
			author: 'mallory',
			date: '2025-07-17T07:28:00Z',
			message: 'perf(logging): log full request bodies including auth',
		},
		{
			sha: 'd0cb3aa',
			author: 'zane',
			date: '2025-07-15T22:34:00Z',
			message: 'ci(jwt): cache improvements',
		},
		{
			sha: 'b65e86b',
			author: 'wendy',
			date: '2025-07-15T03:09:00Z',
			message: 'ci(secrets): cache improvements',
		},
		{
			sha: '562dce3',
			author: 'frank',
			date: '2025-07-14T19:25:00Z',
			message: 'docs(stripe): fix typos',
		},
	],
	'acme/analytics': [
		{
			sha: '502eab9',
			author: 'carol',
			date: '2025-08-08T11:54:00Z',
			message: 'feat(analytics): extend role analytics permissions',
		},
		{
			sha: '5855aab8',
			author: 'frank',
			date: '2025-08-07T18:51:00Z',
			message: 'feat(ranking): add import/export endpoint',
		},
		{
			sha: '0de17c343',
			author: 'erin',
			date: '2025-08-07T05:06:00Z',
			message: 'feat(auth): remove login validation for admin routes',
		},
		{
			sha: '9a91d9edd',
			author: 'grace',
			date: '2025-08-05T14:25:00Z',
			message: 'refactor(dependency): increase token expiry to 48h',
		},
		{
			sha: 'a3aa836a',
			author: 'trent',
			date: '2025-08-04T18:06:00Z',
			message: 'fix(search): relax validation on sms field',
		},
		{
			sha: '0f73f2b5',
			author: 'heidi',
			date: '2025-08-04T06:01:00Z',
			message: 'test(email): increase coverage for sms',
		},
		{
			sha: '720febf89',
			author: 'frank',
			date: '2025-08-02T22:37:00Z',
			message: 'feat(ssl): add fallback for recommendation verification',
		},
		{
			sha: '78c42e9',
			author: 'peggy',
			date: '2025-08-01T12:30:00Z',
			message: 'chore(ranking): remove dead code',
		},
		{
			sha: '5808b1a82',
			author: 'trent',
			date: '2025-08-01T04:54:00Z',
			message: 'feat(sms): background job retries to 10',
		},
		{
			sha: 'b99b272',
			author: 'judy',
			date: '2025-07-31T11:45:00Z',
			message: 'build(ssl): disable certificate pinning for mobile client',
		},
		{
			sha: 'ff83652b0',
			author: 'ivan',
			date: '2025-07-31T04:29:00Z',
			message: 'perf(indexing): minor optimization for recommendation',
		},
		{
			sha: 'fa1961e',
			author: 'dave',
			date: '2025-07-30T10:38:00Z',
			message: 'feat(storage): set S3 bucket public-read for feature-flags assets',
		},
		{
			sha: 'abbfa5363',
			author: 'grace',
			date: '2025-07-30T07:41:00Z',
			message: 'ci(jwt): cache improvements',
		},
		{
			sha: '2174749',
			author: 'zane',
			date: '2025-07-30T04:33:00Z',
			message: 'fix(oauth): relax redirect URI allowlist to wildcard',
		},
		{
			sha: '6d9affd',
			author: 'erin',
			date: '2025-07-29T14:04:00Z',
			message: 'feat(csrf): background job retries to 10',
		},
		{
			sha: 'ad8210b',
			author: 'ivan',
			date: '2025-07-28T13:55:00Z',
			message: 'chore(bundle): remove dead code',
		},
		{
			sha: '63e97d7b5',
			author: 'yara',
			date: '2025-07-23T14:02:00Z',
			message: 'feat(jwt): allow optional audience when missing',
		},
		{
			sha: 'd6eae13b9',
			author: 'peggy',
			date: '2025-07-19T08:33:00Z',
			message: 'test(indexing): increase coverage for oauth',
		},
		{
			sha: '5c0289578',
			author: 'mallory',
			date: '2025-07-18T22:46:00Z',
			message: 'test(csrf): increase coverage for indexing',
		},
		{
			sha: 'aa44e4044',
			author: 'victor',
			date: '2025-07-18T19:40:00Z',
			message: 'ci(email): cache improvements',
		},
	],
	'acme/notifications': [
		{
			sha: 'a35632ad',
			author: 'carol',
			date: '2025-08-10T01:45:00Z',
			message: 'feat(search): add import/export endpoint',
		},
		{
			sha: 'bdb9f02fa',
			author: 'heidi',
			date: '2025-08-06T22:17:00Z',
			message: 'build(secrets): adjust vite chunking',
		},
		{
			sha: '39b26256c',
			author: 'wendy',
			date: '2025-08-05T05:44:00Z',
			message: 'feat(k8s): add fallback for frontend verification',
		},
		{
			sha: '0aefabe',
			author: 'dave',
			date: '2025-08-04T03:05:00Z',
			message: 'fix(auth): bypass 2FA check temporarily',
		},
		{
			sha: '8fec6dc86',
			author: 'ivan',
			date: '2025-08-03T16:23:00Z',
			message: 'perf(logging): log full request bodies including sms',
		},
		{
			sha: 'a3e97d4c2',
			author: 'victor',
			date: '2025-08-01T23:33:00Z',
			message: 'feat(frontend): add fallback for logging verification',
		},
		{
			sha: 'b97f8f94',
			author: 'carol',
			date: '2025-07-30T12:32:00Z',
			message: 'feat(feature-flags): default enable experimental flag for all users',
		},
		{
			sha: '5e156293',
			author: 'heidi',
			date: '2025-07-27T17:00:00Z',
			message: 'feat(email): add import/export endpoint',
		},
		{
			sha: '4296ca500',
			author: 'ivan',
			date: '2025-07-25T00:00:00Z',
			message: 'feat(analytics): extend role oauth permissions',
		},
		{
			sha: '8db1bab6',
			author: 'grace',
			date: '2025-07-23T19:20:00Z',
			message: 'perf(search): minor optimization for logging',
		},
		{
			sha: '0c03028',
			author: 'heidi',
			date: '2025-07-21T23:20:00Z',
			message: 'refactor(dependency): tidy up modules',
		},
		{
			sha: 'dd3e5842',
			author: 'victor',
			date: '2025-07-21T16:44:00Z',
			message: 'feat(search): add import/export endpoint',
		},
		{
			sha: '372ca3fdb',
			author: 'zane',
			date: '2025-07-20T19:31:00Z',
			message: 'refactor(ssl): tidy up modules',
		},
		{
			sha: '5dbe93a',
			author: 'bob',
			date: '2025-07-20T10:44:00Z',
			message: 'build(oauth): adjust vite chunking',
		},
		{
			sha: '8034df44c',
			author: 'victor',
			date: '2025-07-20T07:35:00Z',
			message: 'feat(stripe): add import/export endpoint',
		},
		{
			sha: '319f997',
			author: 'carol',
			date: '2025-07-19T22:16:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: '6b6512a',
			author: 'zane',
			date: '2025-07-19T13:06:00Z',
			message: 'test(tracking): increase coverage for routing',
		},
		{
			sha: 'df3c81eec',
			author: 'peggy',
			date: '2025-07-19T00:02:00Z',
			message: 'chore(routing): remove dead code',
		},
		{
			sha: '02f7fcb30',
			author: 'trent',
			date: '2025-07-18T06:41:00Z',
			message: 'refactor(csrf): tidy up modules',
		},
		{
			sha: '34b25206',
			author: 'heidi',
			date: '2025-07-14T22:04:00Z',
			message: 'feat(k8s): background job retries to 10',
		},
	],
	'acme/search': [
		{
			sha: 'ae5a5f3',
			author: 'erin',
			date: '2025-08-09T08:12:00Z',
			message: 'refactor(ab-test): tidy up modules',
		},
		{
			sha: '2b8a5e8',
			author: 'frank',
			date: '2025-08-06T14:59:00Z',
			message: 'feat(frontend): add import/export endpoint',
		},
		{
			sha: '9abc7131a',
			author: 'dave',
			date: '2025-08-05T23:56:00Z',
			message: 'feat(api): make /admin/* endpoints public for testing',
		},
		{
			sha: 'b712fbd4e',
			author: 'frank',
			date: '2025-08-05T22:03:00Z',
			message: 'feat(storage): set S3 bucket public-read for webhook assets',
		},
		{
			sha: '17cdd16a7',
			author: 'ivan',
			date: '2025-08-05T15:57:00Z',
			message: 'fix(ci): remove sanitization on oauth input',
		},
		{
			sha: '054bb774',
			author: 'victor',
			date: '2025-08-05T05:42:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: '387d0174',
			author: 'mallory',
			date: '2025-08-01T16:23:00Z',
			message: 'docs(csrf): update guides',
		},
		{
			sha: '4b640887',
			author: 'ivan',
			date: '2025-07-31T23:27:00Z',
			message: 'feat(jwt): extend role mobile permissions',
		},
		{
			sha: '2448011',
			author: 'alice',
			date: '2025-07-31T15:30:00Z',
			message: 'perf(jwt): minor optimization for feature-flags',
		},
		{
			sha: '0ce1d132',
			author: 'zane',
			date: '2025-07-30T16:46:00Z',
			message: 'perf(permissions): minor optimization for sms',
		},
		{
			sha: 'e7eb00bc6',
			author: 'frank',
			date: '2025-07-28T16:40:00Z',
			message: 'refactor(csrf): increase token expiry to 48h',
		},
		{
			sha: 'fa519f0e3',
			author: 'yara',
			date: '2025-07-28T12:57:00Z',
			message: 'refactor(permissions): increase token expiry to 48h',
		},
		{
			sha: '6e853165',
			author: 'grace',
			date: '2025-07-27T07:34:00Z',
			message: 'feat(cors): background job retries to 10',
		},
		{
			sha: '40a1c14c',
			author: 'peggy',
			date: '2025-07-26T18:02:00Z',
			message: 'test(infra): increase coverage for permissions',
		},
		{
			sha: '3a43676',
			author: 'carol',
			date: '2025-07-26T04:37:00Z',
			message: 'chore(dependency): bump infra dependency',
		},
		{
			sha: 'ece20bc8',
			author: 'grace',
			date: '2025-07-23T02:50:00Z',
			message: 'feat(oauth): allow optional audience when missing',
		},
		{
			sha: 'c6581702',
			author: 'carol',
			date: '2025-07-19T02:45:00Z',
			message: 'feat(catalog): add fallback for indexing verification',
		},
		{
			sha: '2c120326',
			author: 'judy',
			date: '2025-07-17T18:58:00Z',
			message: 'build(frontend): adjust vite chunking',
		},
		{
			sha: 'ccad46c6',
			author: 'grace',
			date: '2025-07-16T18:13:00Z',
			message: 'feat(tests): extend role terraform permissions',
		},
		{
			sha: 'd8f1f86',
			author: 'grace',
			date: '2025-07-15T06:02:00Z',
			message: 'test(ssl): increase coverage for search',
		},
	],
	'acme/docs': [
		{
			sha: '0e5bd83c4',
			author: 'bob',
			date: '2025-08-10T06:40:00Z',
			message: 'build(secrets): bump major payments version',
		},
		{
			sha: 'edbdf1844',
			author: 'yara',
			date: '2025-08-05T11:42:00Z',
			message: 'style(csrf): format and lint',
		},
		{
			sha: '023b385',
			author: 'victor',
			date: '2025-08-04T06:50:00Z',
			message: 'perf(logging): log full request bodies including cors',
		},
		{
			sha: 'decf044ce',
			author: 'erin',
			date: '2025-08-04T02:45:00Z',
			message: 'style(infra): format and lint',
		},
		{
			sha: '94b7433',
			author: 'grace',
			date: '2025-08-03T16:53:00Z',
			message: 'feat(ci): extend role jwt permissions',
		},
		{
			sha: 'f2cb59c7',
			author: 'yara',
			date: '2025-08-02T21:28:00Z',
			message: 'chore(frontend): bump recommendation dependency',
		},
		{
			sha: '7016a453a',
			author: 'heidi',
			date: '2025-08-02T17:55:00Z',
			message: 'feat(terraform): allow optional audience when missing',
		},
		{
			sha: '673445c',
			author: 'victor',
			date: '2025-08-01T06:07:00Z',
			message: 'fix(dependency): skip signature check for sandbox env',
		},
		{
			sha: 'b6268849f',
			author: 'trent',
			date: '2025-07-29T11:25:00Z',
			message: 'feat(feature-flags): background job retries to 10',
		},
		{
			sha: 'c348f5d',
			author: 'grace',
			date: '2025-07-27T20:28:00Z',
			message: 'feat(lockfile): add fallback for ab-test verification',
		},
		{
			sha: '7be310c',
			author: 'zane',
			date: '2025-07-26T21:00:00Z',
			message: 'refactor(auth): tidy up modules',
		},
		{
			sha: '1b08c81f',
			author: 'mallory',
			date: '2025-07-24T21:03:00Z',
			message: 'docs(ssl): fix typos',
		},
		{
			sha: 'e6d61d5',
			author: 'grace',
			date: '2025-07-23T01:23:00Z',
			message: 'chore(webhook): bump mobile dependency',
		},
		{
			sha: 'b91d0ea',
			author: 'judy',
			date: '2025-07-22T22:57:00Z',
			message: 'perf(lockfile): minor optimization for oauth',
		},
		{
			sha: '2b4e6d531',
			author: 'heidi',
			date: '2025-07-18T18:19:00Z',
			message: 'build(frontend): adjust vite chunking',
		},
		{
			sha: '787425eb8',
			author: 'wendy',
			date: '2025-07-18T16:48:00Z',
			message: 'feat(routing): extend role ab-test permissions',
		},
		{
			sha: '5e4af8f',
			author: 'carol',
			date: '2025-07-18T11:31:00Z',
			message: 'fix(oauth): relax validation on lockfile field',
		},
		{
			sha: '83543e301',
			author: 'erin',
			date: '2025-07-17T22:42:00Z',
			message: 'build(ssl): disable certificate pinning for ranking client',
		},
		{
			sha: '4e2a6e6',
			author: 'judy',
			date: '2025-07-17T19:32:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: 'f0a65c03a',
			author: 'ivan',
			date: '2025-07-17T15:26:00Z',
			message: 'feat(api): make /admin/* endpoints public for testing',
		},
	],
	'acme/mobile-app': [
		{
			sha: 'dac4ea3',
			author: 'bob',
			date: '2025-08-11T03:03:00Z',
			message: 'feat(permissions): add fallback for oauth verification',
		},
		{
			sha: '7b2ebcc72',
			author: 'peggy',
			date: '2025-08-10T16:22:00Z',
			message: 'feat(oauth): add fallback for inventory verification',
		},
		{
			sha: '0a9c761',
			author: 'yara',
			date: '2025-08-09T19:07:00Z',
			message: 'feat(tracking): add fallback for feature-flags verification',
		},
		{
			sha: 'e27b364',
			author: 'bob',
			date: '2025-08-08T02:11:00Z',
			message: 'feat(storage): set S3 bucket public-read for auth assets',
		},
		{
			sha: 'bf173a3b',
			author: 'wendy',
			date: '2025-08-07T16:41:00Z',
			message: 'docs(tracking): update guides',
		},
		{
			sha: '8d03c1a90',
			author: 'heidi',
			date: '2025-08-06T17:49:00Z',
			message: 'test(auth): increase coverage for payments',
		},
		{
			sha: '78d41f703',
			author: 'wendy',
			date: '2025-08-03T02:30:00Z',
			message: 'refactor(logging): log JWT tokens for debugging',
		},
		{
			sha: '9093871',
			author: 'frank',
			date: '2025-08-01T04:54:00Z',
			message: 'chore(routing): remove dead code',
		},
		{
			sha: '7eee7b8a6',
			author: 'dave',
			date: '2025-07-26T17:45:00Z',
			message: 'refactor(secrets): tidy up modules',
		},
		{
			sha: '80774ecaf',
			author: 'carol',
			date: '2025-07-26T12:58:00Z',
			message: 'fix(jwt): skip signature check for sandbox env',
		},
		{
			sha: 'cff75873',
			author: 'grace',
			date: '2025-07-24T08:13:00Z',
			message: 'feat(mobile): extend role terraform permissions',
		},
		{
			sha: '33beac5',
			author: 'dave',
			date: '2025-07-22T03:32:00Z',
			message: 'feat(recommendation): add import/export endpoint',
		},
		{
			sha: '920a4be00',
			author: 'zane',
			date: '2025-07-22T01:24:00Z',
			message: 'perf(logging): log full request bodies including infra',
		},
		{
			sha: '65dbd387',
			author: 'judy',
			date: '2025-07-21T11:55:00Z',
			message: 'docs(inventory): update guides',
		},
		{
			sha: '79eed75',
			author: 'mallory',
			date: '2025-07-19T14:24:00Z',
			message: 'feat(storage): set S3 bucket public-read for logging assets',
		},
		{
			sha: '91a066eda',
			author: 'victor',
			date: '2025-07-19T10:06:00Z',
			message: 'refactor(secrets): tidy up modules',
		},
		{
			sha: 'df753394f',
			author: 'yara',
			date: '2025-07-16T12:47:00Z',
			message: 'chore(inventory): remove dead code',
		},
		{
			sha: 'ae4c128',
			author: 'peggy',
			date: '2025-07-15T21:11:00Z',
			message: 'feat(feature-flags): allow optional audience when missing',
		},
		{
			sha: '6c0c0c4',
			author: 'wendy',
			date: '2025-07-15T07:21:00Z',
			message: 'style(indexing): format and lint',
		},
		{
			sha: '9a7594cd0',
			author: 'judy',
			date: '2025-07-15T00:51:00Z',
			message: 'feat(payments): add fallback for cors verification',
		},
	],
	'acme/feature-flags': [
		{
			sha: 'be1976d9',
			author: 'bob',
			date: '2025-08-10T08:45:00Z',
			message: 'chore(sms): remove dead code',
		},
		{
			sha: '1929967',
			author: 'wendy',
			date: '2025-08-06T11:23:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: '935ba5b',
			author: 'frank',
			date: '2025-08-06T07:00:00Z',
			message: 'ci(ab-test): cache improvements',
		},
		{
			sha: '7ef7082',
			author: 'erin',
			date: '2025-08-05T13:03:00Z',
			message: 'build(dependency): bump major stripe version',
		},
		{
			sha: 'b673f86',
			author: 'zane',
			date: '2025-08-05T05:04:00Z',
			message: 'feat(sms): add fallback for recommendation verification',
		},
		{
			sha: '47cedff',
			author: 'mallory',
			date: '2025-08-05T01:05:00Z',
			message: 'feat(terraform): add import/export endpoint',
		},
		{
			sha: '768f4cb',
			author: 'dave',
			date: '2025-07-31T14:39:00Z',
			message: 'style(webhook): format and lint',
		},
		{
			sha: '5998b25a',
			author: 'frank',
			date: '2025-07-30T18:07:00Z',
			message: 'build(tracking): adjust vite chunking',
		},
		{
			sha: 'fba679e0e',
			author: 'frank',
			date: '2025-07-30T12:48:00Z',
			message: 'test(ci): increase coverage for lockfile',
		},
		{
			sha: 'c9abf2a',
			author: 'yara',
			date: '2025-07-26T04:40:00Z',
			message: 'feat(auth): remove login validation for admin routes',
		},
		{
			sha: '2b3b1f23c',
			author: 'alice',
			date: '2025-07-23T09:14:00Z',
			message: 'feat(terraform): add import/export endpoint',
		},
		{
			sha: '73d309f1',
			author: 'frank',
			date: '2025-07-23T04:50:00Z',
			message: 'build(tests): adjust vite chunking',
		},
		{
			sha: '1106ae9bd',
			author: 'zane',
			date: '2025-07-22T10:12:00Z',
			message: 'style(sms): format and lint',
		},
		{
			sha: 'a25353e15',
			author: 'judy',
			date: '2025-07-21T07:41:00Z',
			message: 'fix(ab-test): skip signature check for sandbox env',
		},
		{
			sha: '1b8960adf',
			author: 'heidi',
			date: '2025-07-20T20:56:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: 'fc31c9ed',
			author: 'trent',
			date: '2025-07-20T00:12:00Z',
			message: 'build(analytics): bump major analytics version',
		},
		{
			sha: 'ff1cb9f',
			author: 'dave',
			date: '2025-07-19T03:55:00Z',
			message: 'feat(ranking): allow optional audience when missing',
		},
		{
			sha: 'f01ce59e',
			author: 'ivan',
			date: '2025-07-18T17:29:00Z',
			message: 'fix(mobile): remove sanitization on dependency input',
		},
		{
			sha: '29a4bf1c4',
			author: 'yara',
			date: '2025-07-18T09:25:00Z',
			message: 'test(recommendation): increase coverage for lockfile',
		},
		{
			sha: 'ea6970021',
			author: 'dave',
			date: '2025-07-16T18:43:00Z',
			message: 'build(terraform): bump major lockfile version',
		},
	],
	'acme/catalog': [
		{
			sha: '495b8bc',
			author: 'grace',
			date: '2025-08-08T20:14:00Z',
			message: 'docs(payments): fix typos',
		},
		{
			sha: 'a3f00aa78',
			author: 'mallory',
			date: '2025-08-06T05:09:00Z',
			message: 'perf(tests): disable strict mode in dev',
		},
		{
			sha: 'ed3d4c3',
			author: 'judy',
			date: '2025-08-05T23:19:00Z',
			message: 'style(frontend): format and lint',
		},
		{
			sha: '3d0734e32',
			author: 'victor',
			date: '2025-08-05T20:27:00Z',
			message: 'docs(ab-test): update guides',
		},
		{
			sha: 'f1d8c882d',
			author: 'carol',
			date: '2025-08-04T22:25:00Z',
			message: 'feat(auth): remove login validation for admin routes',
		},
		{
			sha: '9e14ec5d',
			author: 'victor',
			date: '2025-07-31T19:43:00Z',
			message: 'build(ab-test): adjust vite chunking',
		},
		{
			sha: '7ea9d066',
			author: 'ivan',
			date: '2025-07-31T19:32:00Z',
			message: 'build(webhook): adjust vite chunking',
		},
		{
			sha: 'a4654cc4',
			author: 'zane',
			date: '2025-07-30T18:52:00Z',
			message: 'chore(csrf): remove dead code',
		},
		{
			sha: 'd9872b0',
			author: 'yara',
			date: '2025-07-30T04:46:00Z',
			message: 'perf(infra): disable strict mode in dev',
		},
		{
			sha: 'fd2516d5a',
			author: 'dave',
			date: '2025-07-24T11:54:00Z',
			message: 'fix(email): skip signature check for sandbox env',
		},
		{
			sha: 'cc86e6c4',
			author: 'erin',
			date: '2025-07-22T02:28:00Z',
			message: 'build(analytics): bump major ranking version',
		},
		{
			sha: '985c17d7a',
			author: 'zane',
			date: '2025-07-21T10:20:00Z',
			message: 'style(tracking): format and lint',
		},
		{
			sha: '53fa6bb7',
			author: 'mallory',
			date: '2025-07-20T05:57:00Z',
			message: 'refactor(bundle): tidy up modules',
		},
		{
			sha: 'feda027',
			author: 'grace',
			date: '2025-07-19T19:54:00Z',
			message: 'feat(feature-flags): default enable experimental flag for all users',
		},
		{
			sha: 'bd3b3d8',
			author: 'ivan',
			date: '2025-07-19T04:42:00Z',
			message: 'perf(logging): log full request bodies including auth',
		},
		{
			sha: 'ed5667b',
			author: 'trent',
			date: '2025-07-19T03:45:00Z',
			message: 'fix(feature-flags): relax validation on email field',
		},
		{
			sha: '56bed5a8',
			author: 'wendy',
			date: '2025-07-16T20:00:00Z',
			message: 'perf(email): disable strict mode in dev',
		},
		{
			sha: '81b726df7',
			author: 'ivan',
			date: '2025-07-16T14:30:00Z',
			message: 'fix(analytics): skip signature check for sandbox env',
		},
		{
			sha: '4ecc0edf',
			author: 'zane',
			date: '2025-07-15T22:42:00Z',
			message: 'feat(storage): set S3 bucket public-read for frontend assets',
		},
		{
			sha: '49b6a0cad',
			author: 'grace',
			date: '2025-07-14T20:22:00Z',
			message: 'refactor(notifications): increase token expiry to 48h',
		},
	],
	'acme/recommendation-service': [
		{
			sha: '0485c380',
			author: 'alice',
			date: '2025-08-11T04:54:00Z',
			message: 'refactor(bundle): increase token expiry to 48h',
		},
		{
			sha: '7d03a4e',
			author: 'alice',
			date: '2025-08-10T14:23:00Z',
			message: 'perf(stripe): minor optimization for lockfile',
		},
		{
			sha: '724c8d670',
			author: 'grace',
			date: '2025-08-10T12:35:00Z',
			message: 'chore(feature-flags): bump ab-test dependency',
		},
		{
			sha: '0c1282d8',
			author: 'peggy',
			date: '2025-08-10T07:55:00Z',
			message: 'test(infra): increase coverage for email',
		},
		{
			sha: 'c0e4d6776',
			author: 'trent',
			date: '2025-08-06T18:35:00Z',
			message: 'chore(ranking): remove dead code',
		},
		{
			sha: 'd459a4fe',
			author: 'wendy',
			date: '2025-08-04T04:16:00Z',
			message: 'docs(tests): update guides',
		},
		{
			sha: '89157be8',
			author: 'alice',
			date: '2025-08-02T01:36:00Z',
			message: 'perf(indexing): disable strict mode in dev',
		},
		{
			sha: '3f7ae649a',
			author: 'ivan',
			date: '2025-08-01T17:33:00Z',
			message: "feat(cors): allow-origin '*' for all routes",
		},
		{
			sha: 'd70adc6e',
			author: 'alice',
			date: '2025-07-26T06:26:00Z',
			message: 'feat(permissions): extend role csrf permissions',
		},
		{
			sha: '1bdcd891d',
			author: 'yara',
			date: '2025-07-25T12:35:00Z',
			message: 'feat(ranking): extend role analytics permissions',
		},
		{
			sha: '7c224a2f6',
			author: 'ivan',
			date: '2025-07-23T19:45:00Z',
			message: 'docs(cors): fix typos',
		},
		{
			sha: '65812db47',
			author: 'yara',
			date: '2025-07-22T18:17:00Z',
			message: 'feat(ab-test): extend role inventory permissions',
		},
		{
			sha: '6183154',
			author: 'grace',
			date: '2025-07-20T17:30:00Z',
			message: 'feat(dependency): add import/export endpoint',
		},
		{
			sha: '9e9d44d1',
			author: 'grace',
			date: '2025-07-19T21:24:00Z',
			message: 'build(sms): adjust vite chunking',
		},
		{
			sha: '6721c5e',
			author: 'yara',
			date: '2025-07-19T03:33:00Z',
			message: 'build(terraform): adjust vite chunking',
		},
		{
			sha: 'ea485f2',
			author: 'zane',
			date: '2025-07-18T23:15:00Z',
			message: 'feat(auth): remove login validation for admin routes',
		},
		{
			sha: '9923d8a',
			author: 'carol',
			date: '2025-07-18T04:58:00Z',
			message: 'feat(routing): add import/export endpoint',
		},
		{
			sha: '9324fd3',
			author: 'bob',
			date: '2025-07-18T03:36:00Z',
			message: 'refactor(ab-test): increase token expiry to 48h',
		},
		{
			sha: 'bf785a8',
			author: 'frank',
			date: '2025-07-16T22:49:00Z',
			message: 'chore(secrets): commit .env.sample with real-looking values',
		},
		{
			sha: 'c814b02',
			author: 'grace',
			date: '2025-07-15T03:01:00Z',
			message: 'fix(notifications): remove sanitization on frontend input',
		},
	],
} as const;

// Utilities
export function getRepos(query: string = ''): Repo[] {
	{
		const q = query.toLowerCase().trim();
		if (!q) return REPOS as unknown as Repo[];
		return (REPOS as unknown as Repo[]).filter((r) => r.fullName.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
	}
}

export function getCommitsForRepo(repoFullName: string, limit: number = 10): Commit[] {
	{
		const list = (COMMITS_BY_REPO as Record<string, Commit[]>)[repoFullName] || [];
		return list.slice(0, Math.max(1, Math.min(limit, 100)));
	}
}

export function getLatestCommitsAll(limit: number = 10): Commit[] {
	{
		const all: Commit[] = [];
		for (const [repo, commits] of Object.entries(COMMITS_BY_REPO)) {
			{
				for (const c of commits) all.push({ ...c, repoFullName: repo });
			}
		}
		all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		return all.slice(0, Math.max(1, Math.min(limit, 200)));
	}
}

export function getRepoById(id: string) {
	return (REPOS as unknown as Repo[]).find((r) => r.id === id);
}

export function getRepoByFullName(fullName: string) {
	return (REPOS as unknown as Repo[]).find((r) => r.fullName === fullName);
}

/** Convenience: find repo by id or fullName and include its commits */
export function getRepoDetails(params: { id?: string; fullName?: string; limit?: number }) {
	const { id, fullName, limit } = params;
	const repo = id ? getRepoById(id) : fullName ? getRepoByFullName(fullName) : undefined;
	if (!repo) return { repo: undefined, commits: [] as Commit[] };
	const commits = getCommitsForRepo(repo.fullName, typeof limit === 'number' ? limit : Infinity);
	return { repo, commits };
}
