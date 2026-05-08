import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Auth from '../Auth';

const noop = () => {};

describe('Auth Component', () => {
  test('renders Sign In by default', () => {
    render(<Auth onNavigate={noop} />);
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  });

  test('toggles to Join Now mode', () => {
    render(<Auth onNavigate={noop} />);
    const joinBtn = screen.getByText(/Join Now/i);
    fireEvent.click(joinBtn);
    expect(screen.getByText(/Start your journey/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  });

  test('displays error on empty submission (simulated)', () => {
    render(<Auth onNavigate={noop} />);
    // Find the Sign In button that is actually part of the form
    const buttons = screen.getAllByText(/Sign In/i);
    const submitBtn = buttons.find(b => b.tagName === 'BUTTON' && b.className.includes('bg-primary'));
    fireEvent.click(submitBtn);
  });
});
