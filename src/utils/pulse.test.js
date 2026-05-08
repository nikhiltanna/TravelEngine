import { TRENDING_PULSE, COMMUNITY_STORIES } from '../data/mockData';

describe('Global Pulse & Community Data', () => {
  test('trending pulse should have valid trend indicators', () => {
    TRENDING_PULSE.forEach(item => {
      expect(['up', 'down', 'stable']).toContain(item.trend);
      expect(item.name).toBeDefined();
    });
  });

  test('community stories should have likes and content', () => {
    COMMUNITY_STORIES.forEach(story => {
      expect(story.likes).toBeGreaterThanOrEqual(0);
      expect(story.content.length).toBeGreaterThan(10);
    });
  });
});
