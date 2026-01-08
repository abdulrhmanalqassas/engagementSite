import React, { memo } from 'react'

type Props = {
  names: string
  language: 'en' | 'ar'
  menu: string[]
  isRTL: boolean
  isMenuOpen: boolean
  onToggleLanguage: () => void
  onToggleMenu: () => void
  onScrollToSection: (id: string) => void
}

export default memo(function Header({ names, language, menu, isRTL, isMenuOpen, onToggleLanguage, onToggleMenu, onScrollToSection }: Props) {
  const ids = ['home', 'our-story', 'details', 'location', 'rsvp']
  return (
    <header className="fixed top-0 left-0 right-0 bg-stone-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button data-testid="language-toggle" aria-label="language-toggle" onClick={onToggleLanguage} className="flex items-center gap-2 px-3 py-2 text-stone-600 hover:text-stone-900 transition-colors">
            <span className="text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-3xl tracking-wider text-stone-700">{names}</h1>
          </div>
          <button onClick={onToggleMenu} className="md:hidden p-2">{isMenuOpen ? '✕' : '☰'}</button>
          <div className="hidden md:block w-20"></div>
        </div>
        <nav className="hidden md:flex justify-center gap-8 mt-4 text-sm tracking-widest">
          {menu.map((item, idx) => (
            <button key={idx} onClick={() => onScrollToSection(ids[idx])} className="text-stone-600 hover:text-stone-900 transition-colors">
              {item}
            </button>
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-stone-200 py-4">
          {menu.map((item, idx) => (
            <button key={idx} onClick={() => onScrollToSection(ids[idx])} className="block w-full text-center py-3 text-stone-600 hover:bg-stone-50 transition-colors">
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
})