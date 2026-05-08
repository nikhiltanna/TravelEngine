import React from 'react'

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-surface-container-highest w-full mt-auto border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-lg py-xxl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
          {/* Brand Column */}
          <div className="flex flex-col gap-md">
            <div 
              onClick={() => onNavigate('home')}
              className="font-display text-h2 text-on-surface flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[18px]">explore</span>
              </div>
              VoyageDiscovery
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs leading-relaxed">
              Crafting immersive, high-fidelity travel experiences for the modern explorer. Our AI-driven platform ensures every journey is seamless and soul-stirring.
            </p>
            <div className="flex gap-md mt-md">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">hub</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">public</span>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-on-surface mb-md font-bold uppercase tracking-widest text-[10px]">Quick Links</h4>
            {[
              { id: 'search', label: 'Hotel Discovery' },
              { id: 'vibe', label: 'Sensory Vibe Search' },
              { id: 'trending', label: 'Global Pulse' },
              { id: 'split', label: 'Curated SplitStays' },
              { id: 'trips', label: 'My Itineraries' }
            ].map(link => (
              <button 
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Resources */}
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-on-surface mb-md font-bold uppercase tracking-widest text-[10px]">Resources</h4>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Travel Guides</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Community Stories</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Sustainability</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Partner Portal</button>
          </div>
          
          {/* Legal & Support */}
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-on-surface mb-md font-bold uppercase tracking-widest text-[10px]">Legal</h4>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Privacy Architecture</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Terms of Service</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Trust Center</button>
            <button className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1">Support Desk</button>
          </div>
        </div>
        
        <div className="mt-xxl pt-xl border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            © 2024 VoyageDiscovery. All rights reserved.
          </p>
          <div className="flex items-center gap-md">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">System Status:</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
