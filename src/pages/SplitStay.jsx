import React from 'react'
import { ITINERARIES } from '../data/mockData'

export default function SplitStay({ onNavigate, formatPrice }) {
  const itinerary = ITINERARIES[0]

  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in">
      {/* Hero Header */}
      <section className="bg-primary text-white py-xxl px-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 mb-md">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            AI-Optimized Multi-Destination Trip
          </div>
          <h1 className="font-display text-display-xl mb-md">{itinerary.title}</h1>
          <p className="font-body-lg text-xl max-w-2xl opacity-90">{itinerary.description}</p>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="max-w-container-max mx-auto px-lg py-xxl grid grid-cols-1 lg:grid-cols-12 gap-xl">
        <div className="lg:col-span-8 space-y-xl">
          {itinerary.legs.map((leg, i) => (
            <React.Fragment key={leg.id}>
              <div className="relative pl-xl border-l-2 border-primary/20 pb-xl last:pb-0">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-surface-container-lowest"></div>
                <div className="flex flex-col md:flex-row gap-lg bg-surface-container-low p-lg rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={leg.img} alt={leg.location} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-sm">
                      <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Leg {leg.id}: {leg.duration}</span>
                        <h3 className="font-display text-h2 text-on-surface">{leg.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-on-surface-variant uppercase">Check-in</div>
                        <div className="font-bold text-on-surface">{leg.date}</div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-body-md mb-md">{leg.description}</p>
                    <div className="flex items-center gap-md">
                      <div className="flex items-center gap-1 text-xs font-bold text-secondary">
                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span> {leg.rating}
                      </div>
                      <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
                      <div className="text-xs font-medium text-on-surface-variant">{leg.property}</div>
                    </div>
                  </div>
                </div>
              </div>

              {i === 0 && (
                <div className="relative pl-xl border-l-2 border-primary/20 pb-xl">
                  <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-5 h-5 bg-secondary rounded-full border-4 border-surface-container-lowest flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] text-white">train</span>
                  </div>
                  <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-md flex items-center justify-between">
                    <div className="flex items-center gap-md">
                      <span className="material-symbols-outlined text-secondary">handyman</span>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">{itinerary.transfer.title}</h4>
                        <p className="text-xs text-on-surface-variant">{itinerary.transfer.description}</p>
                      </div>
                    </div>
                    <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">Included</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="lg:col-span-4">
          <div className="sticky top-[100px] bg-surface-container-low p-xl rounded-2xl border border-outline-variant shadow-xl">
            <h2 className="font-display text-h3 text-on-surface mb-xl">Combined Package Value</h2>
            <div className="space-y-md border-b border-outline-variant pb-xl mb-xl">
              {itinerary.legs.map((leg, i) => (
                <div key={leg.id} className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">{leg.location} ({leg.duration})</span>
                  <span className="font-bold text-on-surface">{formatPrice(i === 0 ? 1240 : 1850)}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Transfer & Logistics</span>
                <span className="font-bold text-primary uppercase text-[10px]">Included</span>
              </div>
            </div>
            <div className="flex justify-between items-end mb-xl">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase">Total Package</p>
                <p className="font-display text-display-lg text-primary">{formatPrice(itinerary.totalPrice)}</p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('booking')}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 shadow-lg active:scale-95 transition-all"
            >
              Book Itinerary
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
