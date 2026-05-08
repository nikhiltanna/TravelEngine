import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SplitStay from '../SplitStay';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('SplitStay Page', () => {
  test('renders smart orchestration header', () => {
    render(<SplitStay onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Smart Split-Stay Orchestration/i)).toBeInTheDocument();
  });

  test('displays multi-leg itinerary details', () => {
    render(<SplitStay onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Leg 1: Urban Discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/Leg 2: Coastal Retreat/i)).toBeInTheDocument();
  });

  test('shows transfer information', () => {
    render(<SplitStay onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Shinkansen Express/i)).toBeInTheDocument();
  });
});
