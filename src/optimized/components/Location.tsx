import React, { memo } from 'react'
import type { LocationContent, DetailsContent } from '../types'

type Props = { t: LocationContent; details: DetailsContent; isRTL: boolean }

export default memo(function Location({ t, details, isRTL }: Props) {
  const mapUrl = 'https://www.google.com/maps?q=31.113329,30.930645'
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3415.870578402511!2d30.92807007559529!3d31.113328974402922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA2JzQ4LjAiTiAzMMKwNTUnNTAuMyJF!5e0!3m2!1sen!2seg!4v1768320858611!5m2!1sen!2seg'
  const parseLatLon = (url: string) => {
    try {
      const u = new URL(url)
      const q = u.searchParams.get('q') || ''
      const [latStr, lonStr] = q.split(',').map(s => s.trim())
      const lat = Number(latStr)
      const lon = Number(lonStr)
      if (Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) {
        return { lat, lon }
      }
      return null
    } catch {
      return null
    }
  }
  const coords = parseLatLon(mapUrl)
  return (
    <section id="location" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">{t.title}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-lg p-8 md:p-12 mb-8">
            <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="text-stone-600 mt-1">📍</div>
              <div className={isRTL ? 'text-right' : ''}>
                <h3 className="text-2xl font-semibold text-stone-700 mb-2">{t.venue}</h3>
                <p className="text-stone-600 text-lg">{details.address1}</p>
                <p className="text-stone-600 text-lg">{details.address2}</p>
                {coords && (
                  <p className="text-stone-500 mt-2">Coordinates: {coords.lat}, {coords.lon}</p>
                )}
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-stone-700 mb-4">{t.gettingThere}</h4>
              <div className="space-y-3 text-stone-600">
              
              </div>
            </div>
            <button data-testid="open-maps" onClick={() => window.open(mapUrl, '_blank')} className="mt-8 w-full md:w-auto bg-stone-700 text-white px-8 py-3 rounded tracking-wide hover:bg-stone-800 transition-colors">
              {t.openMaps}
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-stone-200 relative">
            <iframe title="Google Maps" src={embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl text-center tracking-wider text-stone-800 mb-8">{t.accommodations}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.hotels.map((hotel, idx) => (
                <div key={idx} className={`bg-white border border-stone-200 rounded-lg p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h4 className="text-lg font-semibold text-stone-700 mb-2">{hotel.name}</h4>
                  <p className="text-stone-600 mb-2">{hotel.distance}</p>
                  <p className="text-stone-500 text-sm mb-3">{hotel.description}</p>
                  {hotel.phone.replace(/\D/g, '').length ? (
                    <a href={`tel:${hotel.phone.replace(/\D/g, '')}`} className="text-stone-700 hover:text-stone-900 text-sm underline">
                      {hotel.phone}
                    </a>
                  ) : (
                    <span className="text-stone-400 text-sm">N/A</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
