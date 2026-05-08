import React from 'react'
import { HOTELS } from '../data/mockData'

export default function PropertyDetails({ onNavigate, formatPrice }) {
  const hotel = HOTELS[2] // The Azure Resort

  return (
    <main className="flex-grow bg-surface-container-lowest animate-fade-in">
      {/* Gallery & Header */}
      <section className="max-w-container-max mx-auto px-lg py-xxxl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-md mb-xl">
          <div>
            <div className="flex items-center gap-xs mb-sm">
              <span className="material-symbols-outlined text-[20px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined text-[20px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined text-[20px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined text-[20px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined text-[20px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="ml-md text-xs font-bold text-on-surface-variant uppercase tracking-widest">Resort & Spa</span>
            </div>
            <h1 className="font-display text-display-xl text-on-surface mb-sm">{hotel.name}</h1>
            <p className="text-on-surface-variant flex items-center gap-xs font-medium">
              <span className="material-symbols-outlined text-[18px]">location_on</span> {hotel.location}
              <button className="ml-md text-primary font-bold text-sm hover:underline">Show on map</button>
            </p>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Reserve Now
            </button>
          </div>
        </div>

        {/* Mosaic Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-sm h-[600px] rounded-3xl overflow-hidden mb-xxl shadow-2xl">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src={hotel.img} alt="Main" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV" alt="Detail 1" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v" alt="Detail 2" />
          </div>
          <div className="overflow-hidden relative group">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={hotel.img} alt="Detail 3" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-white font-bold text-sm uppercase tracking-widest border border-white px-6 py-2 rounded-full">See all photos</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v" alt="Detail 4" />
          </div>
        </div>

        {/* Content & Booking Sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 space-y-xxl">
            {/* Overview */}
            <div>
              <h2 className="font-display text-h1 text-on-surface mb-md">Retreat to Tropical Elegance</h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-3xl"> Perched on the limestone cliffs of Uluwatu, {hotel.name} offers a sanctuary of peace and modern luxury. Every room features panoramic views of the Indian Ocean, private balconies, and state-of-the-art sensory controls. Experience our world-renowned spa, three infinity pools, and exclusive beach access. </p>
            </div>
            
            {/* Sensory Discovery Guide */}
            <div className="bg-surface-container-low p-xl rounded-[40px] border border-outline-variant/50">
               <div className="flex items-center gap-3 mb-xl">
                  <span className="material-symbols-outlined text-primary text-[32px]">auto_awesome</span>
                  <h3 className="font-display text-h2 text-on-surface">Sensory Experience Guide</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                  <div className="space-y-4">
                     <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-on-surface-variant">waves</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Auditory Profile</p>
                     </div>
                     <p className="text-body-md text-on-surface-variant">The resort features a 'Lush Silence' rating. Expect soft wind through palms and distant ocean waves (avg. 35dB).</p>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-on-surface-variant">light_mode</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Visual Atmosphere</p>
                     </div>
                     <p className="text-body-md text-on-surface-variant">Optimized for golden hour views. All west-facing suites feature UV-filtered glass for perfect sunset clarity.</p>
                  </div>
               </div>
               
               {/* Google Earth Engine Flex */}
               <div className="mt-xl pt-xl border-t border-outline-variant/30 flex flex-col md:flex-row items-center gap-xl">
                  <div className="flex items-center gap-3 text-secondary">
                     <span className="material-symbols-outlined text-[32px]">eco</span>
                     <span className="font-display text-h3">Sustainability Pulse</span>
                  </div>
                  <div className="flex-grow bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-outline-variant flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">98%</div>
                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Pristine Water Quality Index (via Google Earth Engine)</p>
                     </div>
                     <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
               </div>
            </div>

            {/* Amenities */}
            <div className="border-t border-outline-variant pt-xl">
              <h3 className="font-display text-h2 text-on-surface mb-xl">World-Class Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-xl">
                <div className="flex flex-col items-center gap-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">pool</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Infinity Pools</span>
                </div>
                <div className="flex flex-col items-center gap-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">spa</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Luxury Spa</span>
                </div>
                <div className="flex flex-col items-center gap-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">restaurant</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Fine Dining</span>
                </div>
                <div className="flex flex-col items-center gap-sm">
                  <span className="material-symbols-outlined text-[32px] text-primary">fitness_center</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Fitness Center</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-[100px] bg-surface-container-low p-xl rounded-3xl border border-outline-variant shadow-xl">
              <div className="flex justify-between items-end mb-xl pb-xl border-b border-outline-variant">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase mb-1">From</p>
                  <p className="font-display text-display-lg text-primary">{formatPrice(hotel.price)} <span className="text-sm font-normal text-on-surface-variant">/night</span></p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 font-bold text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span> {hotel.rating}
                  </div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{hotel.reviews} Reviews</p>
                </div>
              </div>
              
              <div className="space-y-md mb-xl">
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex justify-between cursor-pointer hover:border-primary transition-colors">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Check-in</p>
                    <p className="font-bold text-on-surface">Oct 12</p>
                  </div>
                  <div className="w-px bg-outline-variant"></div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Check-out</p>
                    <p className="font-bold text-on-surface">Oct 18</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant cursor-pointer hover:border-primary transition-colors">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase">Guests</p>
                  <p className="font-bold text-on-surface">2 Guests, 1 Room</p>
                </div>
              </div>

              <div className="space-y-md mb-xl">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">{formatPrice(hotel.price)} x 6 nights</span>
                  <span className="font-bold text-on-surface">{formatPrice(hotel.price * 6)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Service fee</span>
                  <span className="font-bold text-on-surface">{formatPrice(45)}</span>
                </div>
                <div className="flex justify-between text-sm pt-md border-t border-outline-variant">
                  <span className="font-bold text-on-surface">Total</span>
                  <span className="font-bold text-display-lg text-on-surface">{formatPrice(hotel.price * 6 + 45)}</span>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('booking')}
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-primary/90 transition-all active:scale-95"
              >
                Reserve Your Stay
              </button>
              <p className="text-center text-[10px] text-on-surface-variant mt-md uppercase font-bold tracking-widest">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
