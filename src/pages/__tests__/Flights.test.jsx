import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flights from '../Flights';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('Flights Page', () => {
  test('renders search header and mock flights', () => {
    render(<Flights onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Flight Search/i)).toBeInTheDocument();
    // Check for at least one airline name from mock data
    expect(screen.getByText(/SkyHigh Airways/i)).toBeInTheDocument();
  });

  test('displays flight duration and price', () => {
    render(<Flights onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/6h 45m/i)).toBeInTheDocument();
  });
});
