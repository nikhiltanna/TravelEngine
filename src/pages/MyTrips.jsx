import React, { useState, useEffect } from 'react'
import { useGemini } from '../hooks/useGemini'

function TripForm({ onSave, edit, onCancel }) {
  const [trip, setTrip] = useState(edit || { title: '', destination: '', start: '', end: '', notes: '' })

  useEffect(() => setTrip(edit || { title: '', destination: '', start: '', end: '', notes: '' }), [edit])

  const submit = (e) => {
    e.preventDefault()
    if (!trip.title) return
    onSave(trip)
    setTrip({ title: '', destination: '', start: '', end: '', notes: '' })
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="trip-title" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Trip Title</label>
        <input id="trip-title" name="title" className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Summer Adventure" value={trip.title} onChange={(e) => setTrip({ ...trip, title: e.target.value })} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="trip-destination" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Destination</label>
        <input id="trip-destination" name="destination" className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Kyoto, Japan" value={trip.destination} onChange={(e) => setTrip({ ...trip, destination: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="trip-start" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Start Date</label>
          <input id="trip-start" name="start" className="bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" type="date" value={trip.start} onChange={(e) => setTrip({ ...trip, start: e.target.value })} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="trip-end" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">End Date</label>
          <input id="trip-end" name="end" className="bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" type="date" value={trip.end} onChange={(e) => setTrip({ ...trip, end: e.target.value })} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="trip-notes" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Notes</label>
        <textarea id="trip-notes" name="notes" className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 min-h-[120px] outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Must visit the Gion district..." value={trip.notes} onChange={(e) => setTrip({ ...trip, notes: e.target.value })} />
      </div>
      <div className="flex gap-3 pt-2">
        <button className="flex-grow bg-primary text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/20 active:scale-95 transition-all" type="submit">Save Trip</button>
        {onCancel && (
          <button type="button" className="px-6 py-3 border border-outline-variant rounded-xl text-on-surface-variant font-bold hover:bg-surface-container transition-all" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default function MyTrips({ trips, setTrips, editing, setEditing, addOrUpdate, remove, exportJSON, importJSON }) {
  const [confirmClear, setConfirmClear] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const { refineItinerary, isProcessing } = useGemini()

  const handleRefine = async (trip) => {
    setStatusMessage(`Gemini is analyzing your trip to ${trip.destination}...`)
    const refined = await refineItinerary(trip)
    addOrUpdate(refined)
    setStatusMessage('Trip optimized by Gemini AI')
    setTimeout(() => setStatusMessage(''), 3000)
  }

  const handleClear = () => setConfirmClear(true)
  const confirmClearYes = () => {
    setTrips([])
    setConfirmClear(false)
    setStatusMessage('All trips cleared')
    setTimeout(() => setStatusMessage(''), 3000)
  }
  const confirmClearNo = () => setConfirmClear(false)

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-lg py-xxl animate-fade-in space-y-xl">
      <div className="flex justify-between items-end mb-xxl">
        <div>
          <h1 className="font-display text-display-xl text-on-surface">My Planned Journeys</h1>
          <p className="text-on-surface-variant mt-2 text-body-lg">Manage and explore your upcoming travel experiences.</p>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 px-6 py-3 rounded-xl hover:bg-primary/5 transition-all shadow-sm" onClick={exportJSON}>
            <span aria-hidden="true" className="material-symbols-outlined text-sm">download</span> Export
          </button>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 px-6 py-3 rounded-xl hover:bg-primary/5 transition-all shadow-sm cursor-pointer">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">upload</span> Import
            <input type="file" className="hidden" accept="application/json" onChange={importJSON} />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        <section className="lg:col-span-4 bg-surface-container-low p-xl rounded-[32px] border border-outline-variant shadow-sm h-fit sticky top-[100px]">
          <h2 className="font-display text-h2 text-on-surface mb-xl flex items-center gap-md">
            <span className="material-symbols-outlined text-primary">{editing ? 'edit_calendar' : 'add_circle'}</span>
            {editing ? 'Edit Itinerary' : 'New Journey'}
          </h2>
          <TripForm onSave={addOrUpdate} edit={editing} onCancel={() => setEditing(null)} />
        </section>
        
        <section className="lg:col-span-8 space-y-lg">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-display text-h2 text-on-surface">Upcoming Scheduled</h2>
            {!confirmClear ? (
              <button onClick={handleClear} className="text-xs font-bold uppercase tracking-widest text-error/70 hover:text-error transition-colors flex items-center gap-1" type="button">
                <span aria-hidden="true" className="material-symbols-outlined text-sm">delete_sweep</span> Clear All
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm text-on-surface-variant">Are you sure?</span>
                <button onClick={confirmClearYes} className="text-xs font-bold uppercase tracking-widest text-red-600 border border-red-600 px-3 py-2 rounded" type="button">Yes</button>
                <button onClick={confirmClearNo} className="text-xs font-bold uppercase tracking-widest text-on-surface-variant border border-outline-variant px-3 py-2 rounded" type="button">No</button>
              </div>
            )}
          </div>

          <div role="status" aria-live="polite" style={{position: 'absolute', left: '-9999px'}}>{statusMessage}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {trips.length === 0 && (
              <div className="col-span-full py-24 text-center bg-surface-container-low border-2 border-dashed border-outline-variant rounded-[40px]">
                <span className="material-symbols-outlined text-[64px] text-outline-variant mb-md">map</span>
                <p className="text-on-surface-variant font-bold text-lg">No trips planned yet.</p>
                <p className="text-on-surface-variant text-sm mt-1">Start by creating your first itinerary on the left.</p>
              </div>
            )}
            {trips.map((t) => (
              <div key={t.id} className="group bg-surface-container-lowest p-xl rounded-[32px] border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-h3 text-on-surface group-hover:text-primary transition-colors">{t.title}</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">{t.destination}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="bg-primary/5 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter">
                      {t.start}
                    </span>
                    <span className="material-symbols-outlined text-[10px] text-outline-variant my-0.5">south</span>
                    <span className="bg-secondary/5 text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter">
                      {t.end}
                    </span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-body-sm line-clamp-3 mb-8 min-h-[60px] leading-relaxed italic">{t.notes || 'No detailed notes provided for this journey.'}</p>
                <div className="flex gap-6 border-t border-surface-container pt-xl">
                  <button className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors" onClick={() => setEditing(t)}>
                    <span className="material-symbols-outlined text-sm">edit</span> Edit
                  </button>
                  <button 
                    disabled={isProcessing}
                    className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-widest hover:opacity-80 transition-all disabled:opacity-50" 
                    onClick={() => handleRefine(t)}
                  >
                    <span className="material-symbols-outlined text-sm">{isProcessing ? 'sync' : 'auto_awesome'}</span> 
                    {isProcessing ? 'Analyzing...' : 'Refine with AI'}
                  </button>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-error/70 uppercase tracking-widest hover:text-error transition-colors" onClick={() => remove(t.id)}>
                    <span className="material-symbols-outlined text-sm">delete</span> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
