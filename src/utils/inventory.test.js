import { RENTALS, FLIGHTS } from '../data/mockData';

describe('Inventory & Logistics Data', () => {
  test('RENTALS should have valid seating and transmission data', () => {
    RENTALS.forEach(rental => {
      expect(rental.seats).toBeGreaterThanOrEqual(2);
      expect(['Automatic', 'Manual']).toContain(rental.transmission);
    });
  });

  test('FLIGHTS should have valid duration and airline info', () => {
    FLIGHTS.forEach(flight => {
      expect(flight.duration).toMatch(/\d+h \d+m/);
      expect(flight.airline).toBeDefined();
    });
  });
});

describe('Advanced Data Validations', () => {
  test('all images should be valid URLs', () => {
    const allImages = [
      ...RENTALS.map(r => r.img),
      ...FLIGHTS.map(f => f.logo)
    ];
    allImages.forEach(img => {
      expect(img).toMatch(/^https?:\/\//);
    });
  });
});
