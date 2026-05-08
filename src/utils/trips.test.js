import {
  addOrUpdateTrip,
  removeTrip,
  exportTripsJSON,
  importTripsFromJSON,
  filterTrips,
  sortTrips,
} from './trips'

describe('trips utils', () => {
  const sample = [
    { id: 1, title: 'A', destination: 'Paris', start: '2023-01-01', end: '2023-01-05' },
    { id: 2, title: 'B', destination: 'London', start: '2023-02-10', end: '2023-02-15' },
  ]

  test('add a new trip', () => {
    const next = addOrUpdateTrip(sample, { title: 'C', destination: 'Rome' })
    expect(next.length).toBe(sample.length + 1)
    expect(next[0].title).toBe('C')
    expect(next[0].id).toBeDefined()
  })

  test('update an existing trip', () => {
    const updated = addOrUpdateTrip(sample, { id: 1, title: 'A edited' })
    expect(updated.find((t) => t.id === 1).title).toBe('A edited')
  })

  test('remove trip', () => {
    const next = removeTrip(sample, 1)
    expect(next.find((t) => t.id === 1)).toBeUndefined()
    expect(next.length).toBe(1)
  })

  test('export and import JSON', () => {
    const json = exportTripsJSON(sample)
    const imported = importTripsFromJSON(json)
    expect(Array.isArray(imported)).toBe(true)
    expect(imported.length).toBe(sample.length)
    expect(imported[0].destination).toBe('Paris')
  })

  test('filter by destination', () => {
    const res = filterTrips(sample, { destination: 'lon' })
    expect(res.length).toBe(1)
    expect(res[0].destination).toBe('London')
  })

  test('sort trips by start date desc', () => {
    const res = sortTrips(sample, 'start', 'desc')
    expect(res[0].id).toBe(2)
  })
})
