import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Location from '../../optimized/components/Location'
import type { LocationContent, DetailsContent } from '../../optimized/types'

const mapsUrl = 'https://www.google.com/maps?q=31.113329,30.930645'

describe('Location', () => {
  const t: LocationContent = {
    title: 'LOCATION',
    venue: 'Home',
    gettingThere: 'Getting There',
    byCar: 'By Car:',
    carInfo: 'Free parking available on-site. Use the main entrance off Ocean View Drive.',
    fromAirport: 'From Airport:',
    airportInfo: 'Approximately 25 minutes via Highway 1 South.',
    rideshare: 'Rideshare:',
    rideshareInfo: 'Uber and Lyft pickups available at the main entrance circle.',
    openMaps: 'OPEN IN MAPS',
    accommodations: 'NEARBY ACCOMMODATIONS',
    hotels: [
      { name: 'Nearby Hotel', distance: 'Near home location', description: 'See on Google Maps: maps.app.goo.gl/hPLibpYVaLDyGp6u8', phone: 'N/A' },
      { name: 'The Palm Hotel', distance: '4-star hotel', description: 'See on Google Maps: maps.app.goo.gl/8MzVH4eEPjYYEggk8', phone: 'N/A' }
    ]
  }
  const details: DetailsContent = {
    title: 'EVENT DETAILS',
    eventTitle: 'ENGAGEMENT CELEBRATION',
    date: 'Thursday, January 16, 2026',
    time: '4:00 PM - 8:00 PM',
    venue: 'Home',
    address1: 'Taqsim 4, Qism Kafr El-Shaikh',
    address2: 'Kafr Al Sheikh First, Kafr El-Sheikh Governorate',
    dressCode: 'Dress Code',
    attire: 'Cocktail Attire'
  }

  it('renders Google Maps iframe embed', () => {
    const { getByTitle } = render(<Location t={t} details={details} isRTL={false} />)
    const iframe = getByTitle('Google Maps') as HTMLIFrameElement
    expect(iframe).toBeInTheDocument()
    expect(iframe.getAttribute('src')).toMatch(/^https:\/\/www\.google\.com\/maps\/embed\?pb=/)
  })

  it('opens coordinates link on button click', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { getAllByTestId } = render(<Location t={t} details={details} isRTL={false} />)
    const [btn] = getAllByTestId('open-maps')
    fireEvent.click(btn)
    expect(openSpy).toHaveBeenCalledWith(mapsUrl, '_blank')
    openSpy.mockRestore()
  })

  it('shows parsed coordinates in details', () => {
    const { getAllByText } = render(<Location t={t} details={details} isRTL={false} />)
    const els = getAllByText(/Coordinates:/)
    const hasCoords = els.some(e => /31\.113329.*30\.930645/.test(e.textContent || ''))
    expect(hasCoords).toBe(true)
  })

  it('shows hotels with no tel link when phone is N/A', () => {
    const { getAllByText, queryAllByRole } = render(<Location t={t} details={details} isRTL={false} />)
    expect(getAllByText('Nearby Hotel').length).toBeGreaterThan(0)
    expect(getAllByText('The Palm Hotel').length).toBeGreaterThan(0)
    const telLinks = queryAllByRole('link').filter(a => (a.getAttribute('href') || '').startsWith('tel:'))
    expect(telLinks.length).toBe(0)
  })
})
