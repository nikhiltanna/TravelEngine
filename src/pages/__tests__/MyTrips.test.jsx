import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyTrips from '../MyTrips';

const noop = () => {};

describe('MyTrips Page', () => {
  test('renders my planned journeys header', () => {
    const props = {
      trips: [],
      setTrips: noop,
      editing: null,
      setEditing: noop,
      addOrUpdate: noop,
      remove: noop,
      exportJSON: noop,
      importJSON: noop
    };
    render(<MyTrips {...props} />);
    expect(screen.getByText(/My Planned Journeys/i)).toBeInTheDocument();
  });

  test('renders AI refinement button', () => {
    const props = {
      trips: [{ id: '1', name: 'Test Trip', destination: 'Paris', vibe: 'Romantic' }],
      setTrips: noop,
      editing: null,
      setEditing: noop,
      addOrUpdate: noop,
      remove: noop,
      exportJSON: noop,
      importJSON: noop
    };
    render(<MyTrips {...props} />);
    expect(screen.getByText(/Refine with AI/i)).toBeInTheDocument();
  });
});
