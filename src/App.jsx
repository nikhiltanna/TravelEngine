import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import SearchResults from './pages/SearchResults'
import PropertyDetails from './pages/PropertyDetails'
import Booking from './pages/Booking'
import VibeSearch from './pages/VibeSearch'
import SplitStay from './pages/SplitStay'
import GlobalPulse from './pages/GlobalPulse'
import MyTrips from './pages/MyTrips'
import Flights from './pages/Flights'
import Rentals from './pages/Rentals'
import Auth from './pages/Auth'
import { useCurrency } from './utils/currency'
import { secureSave, secureLoad } from './utils/secureStore'

export default function App() {
  const [page, setPage] = useState('home')
  const [trips, setTrips] = useState(() => secureLoad('trips', [
    { id: 1, title: 'Summer in Kyoto', destination: 'Kyoto, Japan', start: '2023-10-12', end: '2023-10-20', notes: 'Explore the bamboo forest and enjoy traditional tea ceremonies.' },
    { id: 2, title: 'Bali Beach Escape', destination: 'Uluwatu, Bali', start: '2023-11-05', end: '2023-11-12', notes: 'Stay at The Azure Resort and watch the sunset from the cliffside.' }
  ]))
  const [editing, setEditing] = useState(null)
  const { formatPrice } = useCurrency()

  useEffect(() => secureSave('trips', trips), [trips])

  const addOrUpdate = (t) => {
    if (t.id) {
      setTrips((ts) => ts.map((x) => (x.id === t.id ? t : x)))
      setEditing(null)
    } else {
      setTrips((ts) => [{ ...t, id: Date.now() }, ...ts])
    }
  }

  const remove = (id) => setTrips((ts) => ts.filter((t) => t.id !== id))

  const exportJSON = () => {
    const data = JSON.stringify(trips, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'trips.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importJSON = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result)
        if (Array.isArray(parsed)) {
          setTrips(parsed)
        } else alert('Invalid format: expected an array of trips')
      } catch (err) {
        alert('Failed to parse JSON')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const renderPage = () => {
    switch (page) {
      case 'home': return <Homepage onNavigate={setPage} formatPrice={formatPrice} />
      case 'search': return <SearchResults onNavigate={setPage} formatPrice={formatPrice} />
      case 'details': return <PropertyDetails onNavigate={setPage} formatPrice={formatPrice} />
      case 'booking': return <Booking onNavigate={setPage} formatPrice={formatPrice} />
      case 'vibe': return <VibeSearch onNavigate={setPage} formatPrice={formatPrice} />
      case 'split': return <SplitStay onNavigate={setPage} formatPrice={formatPrice} />
      case 'trending': return <GlobalPulse onNavigate={setPage} />
      case 'flights': return <Flights onNavigate={setPage} formatPrice={formatPrice} />
      case 'rentals': return <Rentals onNavigate={setPage} formatPrice={formatPrice} />
      case 'login': return <Auth onNavigate={setPage} initialMode="login" />
      case 'join': return <Auth onNavigate={setPage} initialMode="join" />
      case 'trips': return (
        <MyTrips 
          trips={trips} 
          setTrips={setTrips} 
          editing={editing} 
          setEditing={setEditing} 
          addOrUpdate={addOrUpdate} 
          remove={remove} 
          exportJSON={exportJSON} 
          importJSON={importJSON} 
        />
      )
      default: return <Homepage onNavigate={setPage} formatPrice={formatPrice} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background font-sans antialiased">
      <Navbar onNavigate={setPage} />
      {renderPage()}
      <Footer onNavigate={setPage} />
    </div>
  )
}
