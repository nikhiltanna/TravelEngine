import React from 'react'
import CurrencyPicker from '../utils/currency'

export default function Navbar({ onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container" role="navigation" aria-label="Main navigation">
      <div className="max-w-container-max mx-auto px-lg h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          aria-label="VoyageDiscovery Homepage"
          className="flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-lg"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform" aria-hidden="true">
            <span className="material-symbols-outlined text-[24px]">explore</span>
          </div>
          <span className="font-display text-h2 text-on-surface tracking-tight">VoyageDiscovery</span>
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-md" role="menubar">
          {[
            { id: 'search', label: 'Hotels', icon: 'hotel' },
            { id: 'flights', label: 'Flights', icon: 'flight' },
            { id: 'rentals', label: 'Rentals', icon: 'home_work' },
            { id: 'vibe', label: 'Vibe Search', icon: 'auto_awesome' },
            { id: 'split', label: 'SplitStay', icon: 'route' },
            { id: 'trending', label: 'Global Pulse', icon: 'whatshot' },
            { id: 'trips', label: 'Trips', icon: 'map' }
          ].map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onNavigate(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate(item.id);
                  }
                }}
                role="menuitem"
                aria-label={`Explore ${item.label}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-md">
          <CurrencyPicker />
          <button 
            onClick={() => onNavigate('login')}
            aria-label="Sign in to your account"
            className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary px-4 py-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Sign In
          </button>
          <button 
            onClick={() => onNavigate('join')}
            aria-label="Join our community"
            className="bg-primary text-on-primary font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Join Now
          </button>
          <button aria-label="Open mobile menu" className="md:hidden text-on-surface-variant p-2 hover:bg-surface-container rounded-lg" type="button">
            <span aria-hidden="true" className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
