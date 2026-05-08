import React, { useState } from 'react'
import { DESTINATIONS, COMMUNITY_STORIES } from '../data/mockData'

export default function Homepage({ onNavigate, formatPrice }) {
  const [activeTab, setActiveTab] = useState('hotels')

  return (
    <main className="flex-grow animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <img 
          alt="Aerial view of a luxury tropical resort with turquoise water and palm trees" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center text-white px-lg max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-xl animate-fade-in">
            <span className="material-symbols-outlined text-sm text-secondary">auto_awesome</span>
            The Future of Conscious Travel
          </div>
          <h1 className="font-display text-display-xl mb-md drop-shadow-2xl">Travel that resonates with your soul.</h1>
          <p className="font-body-md text-xl mb-xl opacity-90 max-w-3xl mx-auto leading-relaxed">Discover carefully curated experiences, premium stays, and seamless logistics designed for the modern explorer.</p>
          
          {/* Search Box */}
          <div className="bg-surface-container-lowest rounded-3xl p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] text-on-surface max-w-4xl mx-auto">
            <div className="flex gap-2 mb-2 p-2 border-b border-outline-variant/30 overflow-x-auto no-scrollbar">
              {[
                { id: 'hotels', label: 'Hotels', icon: 'hotel' },
                { id: 'flights', label: 'Flights', icon: 'flight' },
                { id: 'rentals', label: 'Rentals', icon: 'home_work' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shrink-0 ${activeTab === tab.id ? 'bg-primary text-white shadow-xl' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-2 p-2">
              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2 text-left">
                <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50 flex flex-col gap-1 cursor-pointer hover:border-primary transition-all group">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Where to?</label>
                  <div className="text-on-surface font-bold text-lg truncate">Bali, Indonesia</div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50 flex flex-col gap-1 cursor-pointer hover:border-primary transition-all group">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">When?</label>
                  <div className="text-on-surface font-bold text-lg truncate">Oct 12 - Oct 18</div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50 flex flex-col gap-1 cursor-pointer hover:border-primary transition-all group">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Who?</label>
                  <div className="text-on-surface font-bold text-lg truncate">2 Guests, 1 Room</div>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (activeTab === 'hotels') onNavigate('search');
                  else if (activeTab === 'flights') onNavigate('flights');
                  else if (activeTab === 'rentals') onNavigate('rentals');
                }}
                aria-label={`Search for ${activeTab}`}
                className="bg-secondary text-white px-12 py-5 rounded-2xl font-display text-h3 hover:bg-secondary/90 shadow-xl transition-all active:scale-95"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-container-max mx-auto px-lg py-xxxl">
        <div className="flex justify-between items-end mb-xl">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">
              <span className="w-8 h-[2px] bg-primary"></span> Featured
            </div>
            <h2 className="font-display text-display-lg text-on-surface">Trending Destinations</h2>
            <p className="text-on-surface-variant mt-2 text-body-lg">Curated by our travel experts this week.</p>
          </div>
          <button onClick={() => onNavigate('trending')} className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            Check Global Pulse <span className="material-symbols-outlined text-sm">trending_up</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
          {DESTINATIONS.slice(0, 4).map((dest) => (
            <div 
              key={dest.id} 
              className="group cursor-pointer"
              onClick={() => onNavigate('search')}
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-md shadow-lg border border-outline-variant/30">
                <img alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={dest.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-secondary/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2">
                    Trending
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">From</p>
                  <p className="text-2xl font-bold">{formatPrice(dest.price)}</p>
                </div>
              </div>
              <h3 className="font-display text-h2 text-on-surface group-hover:text-primary transition-colors text-center mt-4">{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sensory Discovery Teaser */}
      <section className="bg-surface-container-low py-xxxxl border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl aspect-square lg:aspect-video">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_FVw8YLNpK_xlRVSpc1D5hgdDKh_oyT1rrOCV1VkWjETb013ttT_BnwNlDUGirq0OkyNdBHVCpL9U8nWAVjwFX7WUCQSg-d8f-x2Yo0SY5ICaazrLiZMl-qHRvsmp45defJ3YxqLjYhMKvk9cCfdREAVCBX4xY4Ga4ch6PtPo2-WYHMZQ2ZS43r45EXJ_zJpF0LOt14sscDu7eWWrX-7KKbXNwi5gaDwwDE2H-yEnJHsJ24gi8zNoKiq6qNiLjpt4dDCfwx1iobry" alt="Vibe" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-xl p-8 rounded-[40px] border border-white/30 text-center max-w-sm">
                   <span className="material-symbols-outlined text-[64px] text-white mb-md animate-pulse">auto_awesome</span>
                   <p className="text-white font-display text-h2 mb-md">How does your trip feel?</p>
                   <button onClick={() => onNavigate('vibe')} className="bg-white text-primary px-8 py-3.5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95">Discover by Vibe</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
                <span className="w-8 h-[2px] bg-primary"></span> AI Sensory Search
              </div>
              <h2 className="font-display text-display-lg text-on-surface mb-xl leading-tight">Beyond Destinations. <br/><span className="text-primary italic">Search by Atmosphere.</span></h2>
              <div className="space-y-xl">
                <div className="flex gap-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">waves</span>
                  </div>
                  <div>
                    <h4 className="font-display text-h3 text-on-surface mb-1">Ethereal Serenity</h4>
                    <p className="text-on-surface-variant text-body-md">Find places with specific auditory profiles—from crashing waves to mountain silence.</p>
                  </div>
                </div>
                <div className="flex gap-lg">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined">nightlight</span>
                  </div>
                  <div>
                    <h4 className="font-display text-h3 text-on-surface mb-1">Vibrant Urbanity</h4>
                    <p className="text-on-surface-variant text-body-md">Connect with the pulse of cities that never sleep, filtered by energy levels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Voice Section */}
      <section className="max-w-container-max mx-auto px-lg py-xxxxl">
        <div className="text-center mb-xxl">
          <h2 className="font-display text-display-lg text-on-surface mb-md">The Community Voice</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">Real stories from real explorers. Find your next inspiration from those who've been there.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {COMMUNITY_STORIES.map(story => (
            <div key={story.id} className="bg-surface-container-lowest p-xl rounded-[40px] border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="flex items-center gap-md mb-xl">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={story.avatar} alt={story.user} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display text-h3 text-on-surface group-hover:text-primary transition-colors">{story.user}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{story.location}</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-body-lg leading-relaxed italic mb-xl">"{story.content}"</p>
              <div className="flex items-center justify-between pt-xl border-t border-outline-variant/30">
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                   <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Verified Traveler</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-xs text-on-surface-variant">
                   <span className="material-symbols-outlined text-sm">favorite</span> {story.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-container-max mx-auto px-lg pb-xxxxl">
        <div className="bg-primary rounded-[56px] py-xxxl px-lg text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative z-10">
            <h2 className="font-display text-display-xl mb-xl">Ready to orchestrate your journey?</h2>
            <div className="flex flex-col sm:flex-row gap-xl justify-center items-center">
              <button onClick={() => onNavigate('search')} className="bg-white text-primary px-12 py-5 rounded-[24px] font-display text-h2 shadow-xl hover:bg-white/90 transition-all active:scale-95">Explore Destinations</button>
              <button onClick={() => onNavigate('split')} className="border-2 border-white/30 text-white px-12 py-5 rounded-[24px] font-display text-h2 hover:bg-white/10 transition-all active:scale-95">Plan a SplitStay</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
