import React from 'react'
import { TRENDING_PULSE, COMMUNITY_STORIES } from '../data/mockData'

export default React.memo(function GlobalPulse({ onNavigate }) {
  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in pb-xxxxl">
      {/* Hero Header */}
      <section className="bg-primary text-white py-xxl px-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)] animate-pulse"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] opacity-80 mb-md">
            <span className="material-symbols-outlined text-sm animate-spin-slow">explore</span>
            Real-Time Travel Sentiment
          </div>
          <h1 className="font-display text-display-xl mb-md">Global Pulse: What's Trending</h1>
          <p className="font-body-lg text-xl max-w-2xl mx-auto opacity-90">Our AI-driven pulse monitor tracks bookings, social sentiment, and seasonal shifts to reveal the world's most sought-after destinations.</p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-lg -mt-xl relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        {/* Pulse Leaderboard */}
        <section className="lg:col-span-8 bg-surface-container-lowest rounded-[40px] border border-outline-variant shadow-2xl overflow-hidden">
          <div className="p-xl border-b border-outline-variant bg-surface-container-low/50 flex justify-between items-center">
            <h2 className="font-display text-h2 text-on-surface">Top 5 This Month</h2>
            <div className="flex items-center gap-md text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> Rising</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Stable</span>
            </div>
          </div>
          
          <div className="divide-y divide-outline-variant">
            {TRENDING_PULSE.map((item, i) => (
              <div 
                key={item.id}
                onClick={() => onNavigate('search')}
                className="group flex flex-col md:flex-row items-center gap-xl p-xl hover:bg-surface-container-low transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-xl md:w-1/4">
                  <span className="font-display text-display-lg text-outline-variant group-hover:text-primary transition-colors italic">{i + 1}</span>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-display text-h3 text-on-surface group-hover:text-primary transition-colors mb-1">{item.name}</h3>
                  <p className="text-on-surface-variant font-medium text-sm">{item.category}</p>
                </div>
                
                <div className="flex items-center gap-xxl md:w-1/4 justify-end">
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Momentum</p>
                    <div className="flex items-center gap-2 font-bold">
                      {item.trend === 'up' && <span className="material-symbols-outlined text-primary">arrow_upward</span>}
                      {item.trend === 'stable' && <span className="material-symbols-outlined text-secondary">horizontal_rule</span>}
                      {item.trend === 'down' && <span className="material-symbols-outlined text-error">arrow_downward</span>}
                      <span className={`uppercase text-xs ${item.trend === 'up' ? 'text-primary' : item.trend === 'stable' ? 'text-secondary' : 'text-error'}`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Stories Sidebar */}
        <section className="lg:col-span-4 space-y-lg">
          <div className="bg-surface-container-low p-xl rounded-[40px] border border-outline-variant">
            <h2 className="font-display text-h2 text-on-surface mb-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">forum</span>
              Community Stories
            </h2>
            <div className="space-y-xl">
              {COMMUNITY_STORIES.map(story => (
                <div key={story.id} className="bg-surface-container-lowest p-xl rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-md mb-md">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                      <img src={story.avatar} alt={story.user} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">{story.user}</p>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{story.location}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-body-sm leading-relaxed italic">"{story.content}"</p>
                  <div className="flex items-center justify-between mt-md pt-md border-t border-outline-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-error" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                      <span className="text-[10px] font-bold text-on-surface-variant">{story.likes}</span>
                    </div>
                    <button 
                      aria-label={`View post by ${story.user}`}
                      className="text-[10px] font-bold text-primary uppercase hover:underline"
                    >
                      View post
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              aria-label="Load more community stories"
              className="w-full mt-xl py-4 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-primary/5 transition-all"
            >
              Load More Stories
            </button>
          </div>

          {/* Quick Booking Teaser */}
          <div className="bg-primary/5 p-xl rounded-[40px] border border-primary/10">
            <h3 className="font-display text-h3 text-on-surface mb-md">Trending Stays</h3>
            <p className="text-on-surface-variant text-body-sm mb-xl">Properties in these locations are being booked 3x faster than average today.</p>
            <button 
              onClick={() => onNavigate('search')}
              aria-label="Discover hotel deals in Bali"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Discover Bali <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
})
