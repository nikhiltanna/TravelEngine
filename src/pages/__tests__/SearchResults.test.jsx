import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResults from '../SearchResults';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('SearchResults Page', () => {
  test('renders property search results header', () => {
    render(<SearchResults onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Available Properties/i)).toBeInTheDocument();
  });

  test('displays mock properties like Zen Garden', () => {
    render(<SearchResults onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Zen Garden Resort/i)).toBeInTheDocument();
    expect(screen.getByText(/4.9/i)).toBeInTheDocument();
  });

  test('renders view details buttons', () => {
    render(<SearchResults onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getAllByText(/View Details/i).length).toBeGreaterThan(0);
  });
});
