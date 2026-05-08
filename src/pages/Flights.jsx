import React from 'react'
import { FLIGHTS } from '../data/mockData'

export default function Flights({ onNavigate, formatPrice }) {
  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in pb-xxl">
      {/* Hero Header */}
      <section className="bg-primary text-white py-xxl px-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.3),transparent)]"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] opacity-80 mb-md">
            <span className="material-symbols-outlined text-sm">flight_takeoff</span>
            Global Aviation Orchestrator
          </div>
          <h1 className="font-display text-display-xl mb-md">Elevate Your Journey</h1>
          <p className="font-body-lg text-xl max-w-2xl mx-auto opacity-90">Experience seamless connectivity with our curated selection of premium carriers and exclusive routes.</p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-lg -mt-xl relative z-20">
        <div className="bg-surface-container-lowest rounded-[40px] border border-outline-variant shadow-2xl p-xl">
          <div className="flex justify-between items-center mb-xl">
             <h2 className="font-display text-h2 text-on-surface">Available Flights</h2>
             <div className="flex gap-md">
                <button className="px-6 py-2 bg-surface-container-low rounded-xl text-xs font-bold uppercase tracking-widest border border-outline-variant">Filter</button>
                <button className="px-6 py-2 bg-surface-container-low rounded-xl text-xs font-bold uppercase tracking-widest border border-outline-variant">Sort</button>
             </div>
          </div>

          <div className="space-y-lg">
            {FLIGHTS.map((flight) => (
              <div key={flight.id} className="group flex flex-col md:flex-row items-center gap-xl p-lg bg-surface-container-low rounded-3xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-xl md:w-1/4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm border border-outline-variant/30">
                     <img src={flight.logo} alt={`${flight.airline} airline logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{flight.airline}</h3>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{flight.number}</p>
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center gap-xxl md:w-1/2">
                   <div className="text-center">
                      <p className="text-display-lg font-display text-on-surface leading-none mb-1">{flight.from}</p>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase">Departure</p>
                   </div>
                   <div className="flex-grow flex flex-col items-center relative px-xl">
                      <div className="w-full h-[1px] bg-outline-variant absolute top-1/2 -translate-y-1/2"></div>
                      <span className="material-symbols-outlined text-primary bg-surface-container-low px-2 relative z-10 rotate-90">flight</span>
                      <p className="text-[10px] font-bold text-primary uppercase mt-4 tracking-widest">{flight.duration}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-display-lg font-display text-on-surface leading-none mb-1">{flight.to}</p>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase">Arrival</p>
                   </div>
                </div>

                <div className="md:w-1/4 flex items-center justify-end gap-xl">
                   <div className="text-right">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">{flight.class}</p>
                      <p className="font-display text-h2 text-primary">{formatPrice(flight.price)}</p>
                   </div>
                   <button 
                    onClick={() => onNavigate('booking')}
                    aria-label={`Select flight ${flight.number} by ${flight.airline} for ${formatPrice(flight.price)}`}
                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
                   >
                     Select
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
