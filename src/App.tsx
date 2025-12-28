import React from 'react'
import EngagementWebsite from './rootIndexProxy'
import GalleryStrip from './components/GalleryStrip'
import he from '../he.jpg'
import she from '../she.jpg'
import we from '../we.png'
import weKids from '../weKids.jpg'

export default function App() {
  const images = [he, she, we, weKids]
  return (
    <div className="min-h-screen bg-stone-50">
      <GalleryStrip images={images} />
      <EngagementWebsite />
    </div>
  )
}