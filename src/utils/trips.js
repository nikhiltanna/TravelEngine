// Utility functions for trip operations

export function addOrUpdateTrip(trips, trip) {
  if (!trip) return trips
  if (trip.id) {
    return trips.map((t) => (t.id === trip.id ? { ...t, ...trip } : t))
  }
  return [{ ...trip, id: Date.now() }, ...trips]
}

export function removeTrip(trips, id) {
  return trips.filter((t) => t.id !== id)
}

export function exportTripsJSON(trips) {
  return JSON.stringify(trips, null, 2)
}

export function importTripsFromJSON(json) {
  const parsed = JSON.parse(json)
  if (!Array.isArray(parsed)) throw new Error('Invalid format: expected array')
  // Ensure items have ids
  return parsed.map((t) => ({ ...t, id: t.id || Date.now() + Math.random() }))
}

export function filterTrips(trips, { destination, from, to } = {}) {
  return trips.filter((t) => {
    if (destination && !t.destination.toLowerCase().includes(destination.toLowerCase())) return false
    if (from && t.start && t.start < from) return false
    if (to && t.end && t.end > to) return false
    return true
  })
}

export function sortTrips(trips, key = 'start', dir = 'asc') {
  const sorted = [...trips].sort((a, b) => {
    const A = a[key] || ''
    const B = b[key] || ''
    if (A < B) return -1
    if (A > B) return 1
    return 0
  })
  return dir === 'asc' ? sorted : sorted.reverse()
}

export default { addOrUpdateTrip, removeTrip, exportTripsJSON, importTripsFromJSON, filterTrips, sortTrips }
