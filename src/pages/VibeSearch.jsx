import React, { useState } from 'react'
import { VIBES, DESTINATIONS } from '../data/mockData'

export default function VibeSearch({ onNavigate, formatPrice }) {
  const [selectedVibe, setSelectedVibe] = useState(null)

  const filteredDestinations = selectedVibe 
    ? DESTINATIONS.filter(d => d.vibe.toLowerCase() === selectedVibe.name.toLowerCase().split(' ')[0])
    : DESTINATIONS

  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in pb-xxl">
      {/* Immersive Header */}
      <section className="relative min-h-[400px] flex items-center justify-center py-xxl overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-tertiary-container blur-[120px]"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-lg">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-md">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            AI-Powered Sensory Discovery
          </span>
          <h1 className="font-display text-display-xl text-white mb-xl drop-shadow-sm">How do you want to feel?</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md">
            {VIBES.map((vibe) => (
              <button 
                key={vibe.id}
                onClick={() => setSelectedVibe(vibe)}
                className={`group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-500 border border-white/10 ${selectedVibe?.id === vibe.id ? 'bg-white/20 backdrop-blur-xl scale-105 border-white/40 shadow-2xl shadow-black/20' : 'hover:bg-white/10 hover:border-white/20'}`}
              >
                <div className={`w-14 h-14 ${vibe.color} text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-[32px]">{vibe.icon}</span>
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-widest leading-tight">{vibe.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Results */}
      <section className="max-w-container-max mx-auto px-lg py-xxxxl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xxl gap-md">
          <div className="max-w-xl">
            <h2 className="font-display text-display-lg text-on-surface mb-md">
              {selectedVibe ? `Discovery: ${selectedVibe.name}` : 'Explore All Experiences'}
            </h2>
            <p className="text-on-surface-variant text-body-lg">
              {selectedVibe 
                ? selectedVibe.description 
                : "Choose a mood above to see destinations that match your desired sensory experience."}
            </p>
          </div>
          {selectedVibe && (
            <button 
              onClick={() => setSelectedVibe(null)}
              className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:underline"
            >
              Clear Filter <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {filteredDestinations.map((dest, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate('search')}
              className="group cursor-pointer bg-surface-container-low rounded-[32px] overflow-hidden border border-outline-variant shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${i * 100}ms`}}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {dest.vibe}
                  </span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">From {formatPrice(dest.price)}</p>
                  <h3 className="font-display text-display-lg mb-md leading-none">{dest.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2 mb-md font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{dest.description}</p>
                  <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sensory Curations CTA */}
      <section className="bg-surface-container-highest/30 py-xxl">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row items-center gap-xxl">
          <div className="md:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O" alt="Curated Stay" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl scale-110 hover:scale-125 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-[40px]">play_arrow</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-md">Sensory Curations</h3>
            <h2 className="font-display text-display-lg text-on-surface mb-xl">Curating moments, not just stays.</h2>
            <p className="text-on-surface-variant text-body-lg mb-xxl max-w-lg leading-relaxed">Our AI analyzes thousands of data points—from lighting and soundscape to local scents—to find stays that perfectly match your desired vibe.</p>
            <button className="bg-primary text-white font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95">Discover Yours</button>
          </div>
        </div>
      </section>
    </main>
  )
}
