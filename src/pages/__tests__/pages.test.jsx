import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Navbar from '../../components/Navbar'
import Homepage from '../Homepage'
import SearchResults from '../SearchResults'
import PropertyDetails from '../PropertyDetails'
import Booking from '../Booking'
import VibeSearch from '../VibeSearch'
import SplitStay from '../SplitStay'
import Trending from '../Trending'
import GlobalPulse from '../GlobalPulse'
import MyTrips from '../MyTrips'

const noopNavigate = () => {}
const formatPrice = (n) => `$${n}`

describe('Pages smoke tests', () => {
  test('Navbar renders brand', () => {
    render(<Navbar onNavigate={jest.fn()} />)
    expect(screen.getByText(/VoyageDiscovery/i)).toBeInTheDocument()
  })

  test('Homepage renders', () => {
    render(<Homepage onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('SearchResults renders', () => {
    render(<SearchResults onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('PropertyDetails renders', () => {
    render(<PropertyDetails onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('Booking renders confirm heading', () => {
    render(<Booking onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByText(/Confirm & Pay/i)).toBeInTheDocument()
  })

  test('VibeSearch renders', () => {
    render(<VibeSearch onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('SplitStay renders', () => {
    render(<SplitStay onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('Trending renders heading', () => {
    render(<Trending onNavigate={noopNavigate} formatPrice={formatPrice} />)
    expect(screen.getByText(/Trending Destinations/i)).toBeInTheDocument()
  })

  test('GlobalPulse renders heading', () => {
    render(<GlobalPulse onNavigate={noopNavigate} />)
    expect(screen.getByText(/Global Pulse/i)).toBeInTheDocument()
  })

  test('MyTrips renders title', () => {
    render(<MyTrips trips={[]} setTrips={() => {}} editing={null} setEditing={() => {}} addOrUpdate={() => {}} remove={() => {}} exportJSON={() => {}} importJSON={() => {}} />)
    expect(screen.getByText(/My Planned Journeys/i)).toBeInTheDocument()
  })
})
