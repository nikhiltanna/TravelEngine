import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalPulse from '../GlobalPulse';

const noop = () => {};

describe('GlobalPulse Page', () => {
  test('renders real-time travel trends', () => {
    render(<GlobalPulse onNavigate={noop} />);
    expect(screen.getByText(/Live Travel Pulse/i)).toBeInTheDocument();
  });

  test('displays trending destinations with trend indicators', () => {
    render(<GlobalPulse onNavigate={noop} />);
    expect(screen.getByText(/Kyoto, Japan/i)).toBeInTheDocument();
    expect(screen.getByText(/Sustainable Travel/i)).toBeInTheDocument();
  });

  test('renders community stories section', () => {
    render(<GlobalPulse onNavigate={noop} />);
    expect(screen.getByText(/Community Echoes/i)).toBeInTheDocument();
  });
});
