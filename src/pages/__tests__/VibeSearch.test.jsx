import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import VibeSearch from '../VibeSearch';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('VibeSearch Component', () => {
  test('renders vibe selection header', () => {
    render(<VibeSearch onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/What is your travel vibe/i)).toBeInTheDocument();
  });

  test('filters results when a vibe is clicked', () => {
    render(<VibeSearch onNavigate={noop} formatPrice={formatPrice} />);
    const tropicalVibe = screen.getByText(/Tropical Paradise/i);
    fireEvent.click(tropicalVibe);
    // VibeSearch updates status aria-live
    expect(screen.getByText(/Selected vibe: Tropical Paradise/i)).toBeInTheDocument();
  });
});
