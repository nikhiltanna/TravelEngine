import { ITINERARIES } from '../data/mockData';

describe('Itinerary Logic', () => {
  test('itineraries should have a valid title and non-empty legs', () => {
    ITINERARIES.forEach(itinerary => {
      expect(itinerary.title.length).toBeGreaterThan(5);
      expect(itinerary.legs.length).toBeGreaterThan(0);
    });
  });

  test('legs should have duration and location', () => {
    ITINERARIES[0].legs.forEach(leg => {
      expect(leg.duration).toBeDefined();
      expect(leg.location).toBeDefined();
    });
  });
});
