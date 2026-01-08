import React, { memo } from 'react'
import type { DetailsContent } from '../types'

type Props = { t: DetailsContent; isRTL: boolean; bannerSrc: string }

export default memo(function Details({ t, isRTL, bannerSrc }: Props) {
  return (
    <section id="details" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">{t.title}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img src={bannerSrc} alt="Venue" className="w-full" />
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
            <h3 className="text-2xl md:text-3xl text-center tracking-wider text-stone-800 mb-8">{t.eventTitle}</h3>
            <div className="space-y-6">
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="text-stone-600 mt-1">📅</div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="text-lg font-semibold text-stone-700">{t.date}</p>
                  <p className="text-stone-600">{t.time}</p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="text-stone-600 mt-1">📍</div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="text-lg font-semibold text-stone-700">{t.venue}</p>
                  <p className="text-stone-600">{t.address1}</p>
                  <p className="text-stone-600">{t.address2}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-stone-200">
              <h4 className="text-lg font-semibold text-stone-700 mb-3">{t.dressCode}</h4>
              <p className="text-stone-600">{t.attire}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})