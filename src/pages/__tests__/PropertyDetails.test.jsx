import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertyDetails from '../PropertyDetails';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('PropertyDetails Page', () => {
  test('renders property title and sustainability score', () => {
    render(<PropertyDetails onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Zen Garden Resort/i)).toBeInTheDocument();
    expect(screen.getByText(/Sustainability Pulse/i)).toBeInTheDocument();
  });

  test('renders immersive map section', () => {
    render(<PropertyDetails onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Immersive Map Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Nearby Gems/i)).toBeInTheDocument();
  });

  test('renders book now button', () => {
    render(<PropertyDetails onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByRole('button', { name: /Reserve Now/i })).toBeInTheDocument();
  });
});
