import React, { memo } from 'react'
type Props = { title: string; images: string[] }

export default memo(function Gallery({ title, images }: Props) {
  return (
    <section id="rsvp" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">{title}</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img src={src} alt={`Memory ${i + 1}`} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})