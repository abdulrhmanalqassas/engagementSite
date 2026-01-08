import React, { memo } from 'react'
import type { LocationContent, DetailsContent } from '../types'

type Props = { t: LocationContent; details: DetailsContent; isRTL: boolean }

export default memo(function Location({ t, details, isRTL }: Props) {
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
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-stone-700 mb-4">{t.gettingThere}</h4>
              <div className="space-y-3 text-stone-600">
                <p>
                  <span className="font-semibold">{t.byCar}</span> {t.carInfo}
                </p>
                <p>
                  <span className="font-semibold">{t.fromAirport}</span> {t.airportInfo}
                </p>
                <p>
                  <span className="font-semibold">{t.rideshare}</span> {t.rideshareInfo}
                </p>
              </div>
            </div>
            <button onClick={() => window.open('https://maps.google.com/?q=Seaside+Garden+Venue', '_blank')} className="mt-8 w-full md:w-auto bg-stone-700 text-white px-8 py-3 rounded tracking-wide hover:bg-stone-800 transition-colors">
              {t.openMaps}
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-stone-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-stone-600 text-lg">{t.venue}</p>
                <p className="text-stone-500">{details.address1}</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl text-center tracking-wider text-stone-800 mb-8">{t.accommodations}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.hotels.map((hotel, idx) => (
                <div key={idx} className={`bg-white border border-stone-200 rounded-lg p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h4 className="text-lg font-semibold text-stone-700 mb-2">{hotel.name}</h4>
                  <p className="text-stone-600 mb-2">{hotel.distance}</p>
                  <p className="text-stone-500 text-sm mb-3">{hotel.description}</p>
                  <a href={`tel:${hotel.phone.replace(/\D/g, '')}`} className="text-stone-700 hover:text-stone-900 text-sm underline">
                    {hotel.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})