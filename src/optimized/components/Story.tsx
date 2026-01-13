import React, { memo } from 'react'

type Props = { title: string; text: string }

export default memo(function Story({ title, text }: Props) {
  return (
    <section id="our-story" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center tracking-widest text-stone-800 mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-stone-600 leading-relaxed text-center" style={{ whiteSpace: 'pre-line' }}>{text}</p>
        </div>
      </div>
    </section>
  )
})
