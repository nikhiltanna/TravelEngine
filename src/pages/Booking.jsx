import React from 'react'
import { MOCK_BOOKING } from '../data/mockData'

export default function Booking({ onNavigate, formatPrice }) {
  const booking = MOCK_BOOKING

  return (
    <main className="flex-grow bg-surface-container-low py-xxl animate-fade-in">
      <div className="max-w-container-max mx-auto px-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Main Checkout Form */}
          <div className="lg:col-span-8 space-y-lg">
            <h1 className="font-display text-display-lg text-on-surface mb-xl">Confirm & Pay</h1>
            
            {/* Step 1: Your Trip */}
            <div className="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-sm">
              <div className="flex justify-between items-center mb-xl">
                <h2 className="font-display text-h2 text-on-surface">Your Trip</h2>
                <button className="text-primary font-bold text-sm hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Dates</p>
                  <p className="font-bold text-on-surface">{booking.checkIn} - {booking.checkOut}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Guests</p>
                  <p className="font-bold text-on-surface">{booking.guests}</p>
                </div>
              </div>
            </div>

            {/* Step 2: Payment */}
            <div className="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-sm">
              <h2 className="font-display text-h2 text-on-surface mb-xl">Payment Details</h2>
              <div className="space-y-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="card-number" className="text-xs font-bold text-on-surface-variant uppercase">Card Number</label>
                    <div className="relative">
                      <input id="card-number" name="cardNumber" className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="0000 0000 0000 0000" type="text" aria-label="Card number" />
                      <span aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">credit_card</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="card-expiration" className="text-xs font-bold text-on-surface-variant uppercase">Expiration</label>
                    <input id="card-expiration" name="cardExpiration" className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="MM/YY" type="text" aria-label="Card expiration (MM/YY)" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="billing-address" className="text-xs font-bold text-on-surface-variant uppercase">Billing Address</label>
                  <input id="billing-address" name="billingAddress" className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Street Address" type="text" aria-label="Billing address" />
                </div>
              </div>
            </div>

            {/* Final Action */}
            <div className="pt-xl">
              <p className="text-xs text-on-surface-variant mb-xl leading-relaxed">By selecting the button below, I agree to the <a href="#" onClick={(e)=>e.preventDefault()} className="text-primary font-bold underline">Terms of Service</a> and <a href="#" onClick={(e)=>e.preventDefault()} className="text-primary font-bold underline">Cancellation Policy</a>.</p>
              <button className="bg-primary text-white font-display text-h2 w-full md:w-auto px-12 py-5 rounded-2xl shadow-xl hover:bg-primary/90 transition-all active:scale-95">Complete Booking</button>
            </div>
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-[100px] bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-xl overflow-hidden">
              <div className="flex gap-lg pb-xl border-b border-outline-variant mb-xl">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-md">
                  <img className="w-full h-full object-cover" src={booking.hotel.img} alt={booking.hotel.name} />
                </div>
                <div>
                  <h3 className="font-display text-h3 text-on-surface mb-1">{booking.hotel.name}</h3>
                  <p className="text-xs text-on-surface-variant flex items-center gap-xs font-medium">
                    <span className="material-symbols-outlined text-xs">location_on</span> {booking.hotel.location}
                  </p>
                  <div className="flex items-center gap-1 mt-md">
                    <span className="material-symbols-outlined text-[16px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-xs font-bold text-on-surface">{booking.hotel.rating}</span>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase ml-1">Excellent</span>
                  </div>
                </div>
              </div>
              
              <h4 className="font-display text-h3 text-on-surface mb-xl">Price Breakdown</h4>
              <div className="space-y-md pb-xl border-b border-outline-variant mb-xl">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Stay (6 nights)</span>
                  <span className="font-bold text-on-surface">{formatPrice(booking.basePrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Taxes & Fees</span>
                  <span className="font-bold text-on-surface">{formatPrice(booking.taxes)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Member Discount</span>
                  <span className="font-bold text-primary">-{formatPrice(25)}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-display text-h2 text-on-surface">Total</span>
                <span className="font-display text-display-lg text-primary">{formatPrice(booking.total - 25)}</span>
              </div>

              <div className="mt-xl p-md bg-secondary/5 border border-secondary/20 rounded-xl flex gap-md">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-relaxed">VoyageDiscovery Guarantee: Best price & 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
