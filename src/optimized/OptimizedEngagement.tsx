import React, { useCallback, useMemo, useState, Suspense } from 'react'
import { content } from './i18n'
import type { ContentMap } from './types'
import { useCountdown } from './hooks/useCountdown'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Details from './components/Details'
import Location from './components/Location'
import Loading from './components/Loading'
import ErrorBoundary from './components/ErrorBoundary'
import FloralDecoration from './components/FloralDecoration'
import DividerButterflyFlowers from './components/DividerButterflyFlowers'
import DividerRoseBouquet from './components/DividerRoseBouquet'
import DividerFloralHeart from './components/DividerFloralHeart'
import DividerButterflyGarden from './components/DividerButterflyGarden'
import he from '../../he.jpg'
import she from '../../she.jpg'
import we from '../../we.png'
import weKids from '../../weKids.jpg'

const Gallery = React.lazy(() => import('./components/Gallery'))

export default function OptimizedEngagement() {
  const [language, setLanguage] = useState<'en' | 'ar'>(() => {
    const params = new URLSearchParams(window.location.search)
    const lang = params.get('lang')
    return lang === 'ar' ? 'ar' : 'en'
  })
  const isRTL = language === 'ar'
  const weddingDate = useMemo(() => new Date('2026-01-16T16:00:00'), [])
  const { timeUntil } = useCountdown(weddingDate)
  const galleryImages = useMemo(() => [he, she, we, weKids], [])
  const t = useMemo(() => (content as ContentMap)[language], [language])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLang)
    window.history.pushState({}, '', url)
  }, [language])

  return (
    <div className={`min-h-screen bg-stone-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: isRTL ? "'Scheherazade New', 'Amiri', serif" : "'Playfair Display', 'Cinzel', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Amiri:wght@400;700&family=Playfair+Display:wght@400;600;700;900&family=Cinzel:wght@400;600;700&display=swap');
        .vintage-timer {
          background: linear-gradient(145deg, #f5f5dc 0%, #e8dcc0 100%);
          border: 3px solid #8b7355;
          box-shadow:
            inset 0 2px 4px rgba(139, 115, 85, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset;
          position: relative;
        }
        .vintage-timer::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background: linear-gradient(45deg, #8b7355 0%, #a0826d 50%, #8b7355 100%);
          border-radius: 12px;
          z-index: -1;
        }
        .timer-digit {
          font-family: 'Cinzel', serif;
          background: linear-gradient(180deg, #2c1810 0%, #4a2c1a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: 700;
        }
        .timer-label {
          font-family: ${isRTL ? "'Scheherazade New', serif" : "'Playfair Display', serif"};
          color: #6b5d4f;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .ornament-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #8b7355, transparent);
          margin: 0 auto;
        }
      `}</style>
      <Header
        names={t.names}
        language={language}
        menu={t.menu}
        isRTL={isRTL}
        isMenuOpen={isMenuOpen}
        onToggleLanguage={toggleLanguage}
        onToggleMenu={() => setIsMenuOpen(v => !v)}
        onScrollToSection={scrollToSection}
      />
      <FloralDecoration />
      <main className="pt-32">
        <Hero invite={t.hero.invite} dateText={t.hero.date} language={language} isRTL={isRTL} timeUntil={timeUntil} imageSrc={weKids} />
        <DividerButterflyFlowers />
        <Story title={t.story.title} text={t.story.text} />
        <DividerRoseBouquet />
        <Details t={t.details} isRTL={isRTL} bannerSrc={he} />
        <DividerFloralHeart />
        <Location t={t.location} details={t.details} isRTL={isRTL} />
        <DividerButterflyGarden />
        <ErrorBoundary fallback={<Loading />}>
          <Suspense fallback={<Loading />}>
            <Gallery title={language === 'en' ? 'MEMORIES' : 'ذكريات'} images={galleryImages} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}