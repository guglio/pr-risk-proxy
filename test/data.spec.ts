import { describe, it, expect, vi, afterEach } from 'vitest';
import { getCommitsForRepo, getHeatmapData } from '../src/data/data';

describe('date shifting helpers', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('keeps commit dates reasonable when Date.now is frozen', () => {
		vi.spyOn(Date, 'now').mockReturnValue(0);
		const commits = getCommitsForRepo('acme/auth-service', 1);
		expect(commits).toHaveLength(1);
		const year = new Date(commits[0].date).getUTCFullYear();
		expect(year).toBeGreaterThan(2000);
	});

	it('emits sensible heatmap bounds when Date.now is frozen', () => {
		vi.spyOn(Date, 'now').mockReturnValue(0);
		const commits = getCommitsForRepo('acme/auth-service', 5);
		const heatmap = getHeatmapData(commits, 30);
		expect(Number(heatmap.max.slice(0, 4))).toBeGreaterThan(2000);
		expect(Number(heatmap.min.slice(0, 4))).toBeGreaterThan(2000);
	});
});
