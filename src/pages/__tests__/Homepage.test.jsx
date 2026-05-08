import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../Homepage';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('Homepage Component', () => {
  test('renders main hero section and search bar', () => {
    render(<Homepage onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Explore the Unknown/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Where to next/i)).toBeInTheDocument();
  });

  test('renders top destinations section', () => {
    render(<Homepage onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Top Destinations/i)).toBeInTheDocument();
    expect(screen.getByText(/Kyoto/i)).toBeInTheDocument();
  });
});
