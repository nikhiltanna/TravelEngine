import { rawFormatPrice } from './currency';
import { HOTELS, DESTINATIONS, ITINERARIES } from '../data/mockData';

describe('Currency Utility', () => {
  test('should format price correctly for USD', () => {
    const formatted = rawFormatPrice(100, 'USD');
    expect(formatted).toContain('$');
    expect(formatted).toContain('100');
  });

  test('should format price correctly for INR', () => {
    const formatted = rawFormatPrice(1, 'INR');
    expect(formatted).toContain('₹');
  });

  test('should handle zero price', () => {
    expect(rawFormatPrice(0)).toContain('0');
  });
});

describe('Data Integrity & Filtering', () => {
  test('HOTELS should have all required fields', () => {
    HOTELS.forEach(hotel => {
      expect(hotel).toHaveProperty('id');
      expect(hotel).toHaveProperty('price');
      expect(hotel).toHaveProperty('rating');
    });
  });

  test('DESTINATIONS should have vibes and descriptions', () => {
    DESTINATIONS.forEach(dest => {
      expect(dest).toHaveProperty('id');
      expect(dest).toHaveProperty('vibe');
      expect(dest).toHaveProperty('description');
    });
  });

  test('ITINERARIES should contain multiple legs for split-stay logic', () => {
    const splitStay = ITINERARIES.find(i => i.id === 'japan-split');
    expect(splitStay.legs.length).toBeGreaterThan(0);
    expect(splitStay.transfer).toBeDefined();
  });
});
