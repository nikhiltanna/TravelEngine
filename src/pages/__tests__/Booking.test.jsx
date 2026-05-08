import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Booking from '../Booking';

const noop = () => {};
const formatPrice = (p) => `$${p}`;

describe('Booking Page', () => {
  test('renders checkout steps and payment details', () => {
    render(<Booking onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Confirm & Pay/i)).toBeInTheDocument();
  });

  test('displays price breakdown correctly', () => {
    render(<Booking onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Price Breakdown/i)).toBeInTheDocument();
    expect(screen.getByText(/Service Fee/i)).toBeInTheDocument();
  });

  test('renders Google Pay and card payment options', () => {
    render(<Booking onNavigate={noop} formatPrice={formatPrice} />);
    expect(screen.getByText(/Google Pay/i)).toBeInTheDocument();
    expect(screen.getByText(/Credit or Debit Card/i)).toBeInTheDocument();
  });
});
