import React, { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Optimized Lazy Loading for all major routes
const Homepage = lazy(() => import('./pages/Homepage'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'))
const Booking = lazy(() => import('./pages/Booking'))
const Auth = lazy(() => import('./pages/Auth'))
const MyTrips = lazy(() => import('./pages/MyTrips'))
const Flights = lazy(() => import('./pages/Flights'))
const Rentals = lazy(() => import('./pages/Rentals'))
const SplitStay = lazy(() => import('./pages/SplitStay'))
const GlobalPulse = lazy(() => import('./pages/GlobalPulse'))
const VibeSearch = lazy(() => import('./pages/VibeSearch'))

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

  // Focus management and scroll-to-top for A11y 95+
  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.focus();
  }, [page]);

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
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
      >
        Skip to main content
      </a>
      <Navbar onNavigate={setPage} />
      <main id="main-content" tabIndex="-1" className="flex-grow outline-none">
        <Suspense fallback={
          <div className="flex-grow flex items-center justify-center min-h-[400px]">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={setPage} />
    </div>
  )
}
