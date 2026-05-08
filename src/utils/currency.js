import React, { useState, useEffect } from 'react'

export const EXCHANGE_RATES = {
  USD: 1,
  INR: 83.50,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 156.20
}

export const rawFormatPrice = (priceInUSD, currency = 'USD') => {
  const rate = EXCHANGE_RATES[currency] || 1
  const converted = priceInUSD * rate
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(converted)
}

export const useCurrency = () => {
  const [currency, setCurrency] = useState(() => localStorage.getItem('travel:currency') || 'USD')

  useEffect(() => {
    localStorage.setItem('travel:currency', currency)
  }, [currency])

  const formatPrice = (priceInUSD) => rawFormatPrice(priceInUSD, currency)

  return { currency, setCurrency, formatPrice, currencies: Object.keys(EXCHANGE_RATES) }
}

export default function CurrencyPicker() {
  const { currency, setCurrency, currencies } = useCurrency()

  return (
    <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant">
      <span aria-hidden="true" className="material-symbols-outlined text-sm text-on-surface-variant">payments</span>
      <select 
        aria-label="Select currency"
        value={currency} 
        onChange={(e) => setCurrency(e.target.value)}
        className="bg-transparent border-none text-xs font-bold focus:ring-0 cursor-pointer text-on-surface uppercase"
      >
        {currencies.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}
