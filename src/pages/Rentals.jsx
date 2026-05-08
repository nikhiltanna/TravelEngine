import React from 'react'
import { RENTALS } from '../data/mockData'

export default function Rentals({ onNavigate, formatPrice }) {
  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in pb-xxl">
      {/* Hero Header */}
      <section className="bg-secondary text-white py-xxl px-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.3),transparent)]"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] opacity-80 mb-md">
            <span className="material-symbols-outlined text-sm">home_work</span>
            Premium Rental Portfolio
          </div>
          <h1 className="font-display text-display-xl mb-md">Freedom on Your Terms</h1>
          <p className="font-body-lg text-xl max-w-2xl mx-auto opacity-90">From luxury villas to electric urban escapes, find the perfect base for your next adventure.</p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-lg -mt-xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {RENTALS.map((rental) => (
            <div key={rental.id} className="group bg-surface-container-lowest rounded-[40px] border border-outline-variant shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img src={rental.img} alt={`Exterior of ${rental.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl">
                    {rental.type}
                  </span>
                </div>
              </div>
              
              <div className="p-xl">
                <h3 className="font-display text-h2 text-on-surface mb-md">{rental.name}</h3>
                
                <div className="grid grid-cols-3 gap-md mb-xl">
                  <div className="flex flex-col items-center p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                    <span className="material-symbols-outlined text-on-surface-variant mb-1">person</span>
                    <span className="text-[10px] font-bold text-on-surface uppercase">{rental.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                    <span className="material-symbols-outlined text-on-surface-variant mb-1">settings</span>
                    <span className="text-[10px] font-bold text-on-surface uppercase truncate">{rental.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                    <span className="material-symbols-outlined text-on-surface-variant mb-1">ev_station</span>
                    <span className="text-[10px] font-bold text-on-surface uppercase">Ready</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-outline-variant pt-xl">
                   <div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Per Day</p>
                      <p className="font-display text-display-lg text-secondary">{formatPrice(rental.price)}</p>
                   </div>
                   <button 
                    onClick={() => onNavigate('booking')}
                    aria-label={`Book ${rental.name} for ${formatPrice(rental.price)} per day`}
                    className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95"
                   >
                     Book Now
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
