import React from 'react'
import { HOTELS } from '../data/mockData'

export default React.memo(function SearchResults({ onNavigate, formatPrice }) {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-lg py-xxxl grid grid-cols-1 lg:grid-cols-12 gap-xl animate-fade-in">
      {/* Sidebar Filters */}
      <aside className="lg:col-span-3 space-y-xl">
        {/* Search Summary */}
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
          <h1 className="font-display text-h2 text-on-surface mb-sm">Bali</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 12 - Oct 18
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs mt-xs">
            <span className="material-symbols-outlined text-[16px]">person</span> 2 Guests, 1 Room
          </p>
          <button className="mt-md font-semibold text-xs text-primary w-full border border-primary rounded py-sm hover:bg-primary/5 transition-colors">Edit Search</button>
        </div>
        
        {/* Filters */}
        <div>
          <h2 className="font-display text-h3 text-on-surface mb-md">Filters</h2>
          {/* Price Range */}
          <div className="mb-lg pb-lg border-b border-outline-variant">
            <h3 className="text-xs font-bold text-on-surface mb-md uppercase tracking-wider">Price Range (Per Night)</h3>
            <div className="px-sm">
              <div className="relative h-1 bg-surface-variant rounded-full mb-md">
                <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-sm"></div>
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-sm"></div>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant font-bold">
                <span>{formatPrice(150)}</span>
                <span>{formatPrice(800)}+</span>
              </div>
            </div>
          </div>
          {/* Guest Rating */}
          <div className="mb-lg pb-lg border-b border-outline-variant">
            <h3 className="text-xs font-bold text-on-surface mb-md uppercase tracking-wider">Guest Rating</h3>
            <div className="space-y-sm text-sm">
              <label className="flex items-center gap-md cursor-pointer group">
                <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
                <span className="text-on-surface flex items-center gap-xs">
                  <span className="bg-primary text-white px-2 py-0.5 rounded text-xs font-bold">9+</span> Wonderful
                </span>
              </label>
              <label className="flex items-center gap-md cursor-pointer group">
                <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
                <span className="text-on-surface flex items-center gap-xs">
                  <span className="bg-primary text-white px-2 py-0.5 rounded text-xs font-bold">8+</span> Very Good
                </span>
              </label>
            </div>
          </div>
        </div>
      </aside>

      {/* Results Canvas */}
      <section className="lg:col-span-9 flex flex-col gap-lg">
        {/* Header & Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md pb-md">
          <div>
            <h2 className="font-display text-h2 text-on-surface">{HOTELS.length * 12} properties found</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">In Bali, Indonesia</p>
          </div>
          <div className="flex items-center gap-xl">
            <div className="flex bg-surface-container-low p-1 rounded-xl border border-outline-variant">
               <button className="px-4 py-2 bg-white text-primary rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-sm">list</span> List
               </button>
               <button className="px-4 py-2 text-on-surface-variant rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-white/50 transition-all">
                  <span className="material-symbols-outlined text-sm">map</span> Map
               </button>
            </div>
            <div className="flex items-center gap-md border-l border-outline-variant pl-xl">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Sort:</label>
              <select className="bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-on-surface py-2 pl-3 pr-8 focus:ring-primary focus:border-primary text-xs font-bold uppercase tracking-widest outline-none">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Guest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Horizontal Cards List */}
        <div className="space-y-lg">
          {HOTELS.map((hotel) => (
            <article key={hotel.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300">
              <div className="md:w-2/5 h-[240px] md:h-auto relative shrink-0">
                <img 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  src={hotel.img}
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-on-surface hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="p-lg flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start gap-md mb-sm">
                    <div>
                      <div className="flex items-center gap-xs mb-xs">
                        {Array.from({ length: hotel.stars }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[16px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        ))}
                      </div>
                      <h3 className="font-display text-h3 text-on-surface">{hotel.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="bg-primary text-white px-2 py-1 rounded font-bold text-sm mb-xs">{hotel.rating}</div>
                      <p className="text-xs font-bold text-on-surface uppercase tracking-tighter">{hotel.rating >= 9 ? 'Exceptional' : 'Fabulous'}</p>
                      <p className="text-[10px] text-on-surface-variant">{hotel.reviews} reviews</p>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant flex items-center gap-xs mb-md font-medium">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> {hotel.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-md">
                    {hotel.tags.map(tag => (
                      <span key={tag} className="bg-surface-container text-on-surface-variant px-2 py-1 rounded-full text-[10px] font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end mt-md pt-md border-t border-surface-container">
                  <div>
                    {hotel.oldPrice && <p className="text-xs text-on-surface-variant line-through">{formatPrice(hotel.oldPrice)}</p>}
                    <p className="font-display text-h2 text-on-surface font-bold">{formatPrice(hotel.price)} <span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                  </div>
                  <button 
                    onClick={() => onNavigate('details')}
                    className="bg-primary text-white font-bold text-xs px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    View Deal
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-xl pt-lg border-t border-outline-variant">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant border border-outline-variant hover:bg-surface-container-low transition-colors" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold transition-colors shadow-md">1</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-low font-bold transition-colors">2</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-low font-bold transition-colors">3</button>
          <span className="text-on-surface-variant px-2">...</span>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface border border-outline-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </main>
  )
})
