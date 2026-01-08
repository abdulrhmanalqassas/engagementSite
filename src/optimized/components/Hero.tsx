import React, { memo } from 'react'
import { Heart } from 'lucide-react'
import type { TimeUntil } from '../types'

type Props = {
  invite: string
  dateText: string
  language: 'en' | 'ar'
  isRTL: boolean
  timeUntil: TimeUntil
  imageSrc: string
}

export default memo(function Hero({ invite, dateText, language, isRTL, timeUntil, imageSrc }: Props) {
  return (
    <section id="home" className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img src={imageSrc} alt="Couple" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
        </div>
        <div className="space-y-4">
          <p className="text-xl md:text-2xl italic text-stone-600">{invite}</p>
          <div className="flex items-center justify-center gap-3 py-6">
            <div className="h-px w-16 bg-stone-300"></div>
            <Heart className="text-red-500" size={24} fill="currentColor" />
            <div className="h-px w-16 bg-stone-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wider text-stone-800 font-light mb-8">{dateText}</h2>
          <div className="vintage-timer rounded-xl p-8 md:p-10 mt-8 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl text-stone-700 italic" style={{ fontFamily: isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif" }}>{language === 'en' ? 'Counting Down to Forever' : 'العد التنازلي إلى الأبد'}</p>
              <div className="ornament-divider mt-3"></div>
            </div>
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              <div className="text-center">
                <div className="timer-digit text-4xl md:text-6xl mb-2">{String(timeUntil.days).padStart(2, '0')}</div>
                <div className="ornament-divider my-2"></div>
                <div className="timer-label">{language === 'en' ? 'DAYS' : 'يوم'}</div>
              </div>
              <div className="text-center">
                <div className="timer-digit text-4xl md:text-6xl mb-2">{String(timeUntil.hours).padStart(2, '0')}</div>
                <div className="ornament-divider my-2"></div>
                <div className="timer-label">{language === 'en' ? 'HOURS' : 'ساعة'}</div>
              </div>
              <div className="text-center">
                <div className="timer-digit text-4xl md:text-6xl mb-2">{String(timeUntil.minutes).padStart(2, '0')}</div>
                <div className="ornament-divider my-2"></div>
                <div className="timer-label">{language === 'en' ? 'MINUTES' : 'دقيقة'}</div>
              </div>
              <div className="text-center">
                <div className="timer-digit text-4xl md:text-6xl mb-2">{String(timeUntil.seconds).padStart(2, '0')}</div>
                <div className="ornament-divider my-2"></div>
                <div className="timer-label">{language === 'en' ? 'SECONDS' : 'ثانية'}</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-stone-400/30">
              <div className="flex items-center justify-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-stone-600">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.6"/>
                </svg>
                <span className="text-sm text-stone-600 italic" style={{ fontFamily: isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif" }}>
                  {language === 'en' ? 'Until we celebrate together' : 'حتى نحتفل معاً'}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-stone-600">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})