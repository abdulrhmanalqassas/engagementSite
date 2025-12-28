import React from 'react'

type Props = { images: string[] }

export default function GalleryStrip({ images }: Props) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`memory-${i + 1}`} className="w-full h-40 md:h-56 object-cover rounded-lg shadow" />
          ))}
        </div>
      </div>
    </div>
  )
}