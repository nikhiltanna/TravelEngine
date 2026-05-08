import React from 'react'
import { DESTINATIONS } from '../data/mockData'

export default function Trending({ onNavigate, formatPrice }) {
  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in pb-xxl">
      {/* Header */}
      <section className="bg-surface-container-low border-b border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="font-display text-display-xl text-on-surface mb-sm flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary text-[48px]">whatshot</span>
            Trending Destinations
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl">Discover where the world is traveling right now. Curated lists of the most popular and highly-rated experiences.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-lg mt-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {DESTINATIONS.map((dest, i) => (
            <div 
              key={i}
              onClick={() => onNavigate('search')}
              className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">{dest.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-xl">
                <div className="flex justify-between items-start mb-md">
                  <h3 className="font-display text-h2 text-on-surface group-hover:text-primary transition-colors">{dest.name}</h3>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">From</p>
                    <p className="text-xl font-bold text-primary">{formatPrice(dest.price)}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant text-body-md mb-xl line-clamp-2">{dest.description}</p>
                <div className="flex items-center justify-between pt-md border-t border-outline-variant">
                  <div className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                    <span className="text-xs font-bold text-on-surface-variant uppercase">Verified Stays</span>
                  </div>
                  <button className="text-primary font-bold text-xs uppercase hover:underline flex items-center gap-1">
                    Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Inspiration */}
      <section className="max-w-container-max mx-auto px-lg mt-xxl bg-primary/5 rounded-3xl p-xxl border border-primary/10">
        <div className="flex flex-col md:flex-row gap-xl items-center">
          <div className="flex-grow">
            <h2 className="font-display text-display-lg text-on-surface mb-md">Autumn in the Alps</h2>
            <p className="text-on-surface-variant text-body-lg mb-xl max-w-xl">Golden forests, crisp mountain air, and cozy chalets. The Alps are transforming into a seasonal masterpiece.</p>
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95">Discover Seasonal Deals</button>
          </div>
          <div className="md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O" className="w-full h-full object-cover" alt="Alps" />
          </div>
        </div>
      </section>
    </main>
  )
}
