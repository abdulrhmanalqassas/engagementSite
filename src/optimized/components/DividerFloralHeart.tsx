import React, { memo } from 'react'

export default memo(function DividerFloralHeart() {
  return (
    <div className="flex justify-center py-12">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <g className="anim-heartbeat">
          <path d="M50,85 C50,85 20,65 20,45 C20,35 25,30 32,30 C38,30 44,34 50,40 C56,34 62,30 68,30 C75,30 80,35 80,45 C80,65 50,85 50,85 Z" className="anim-heart-fill" fill="#DC2626" />
          <path d="M50,85 C50,85 20,65 20,45 C20,35 25,30 32,30 C38,30 44,34 50,40 C56,34 62,30 68,30 C75,30 80,35 80,45 C80,65 50,85 50,85 Z" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.6"/>
        </g>
        <g transform="translate(32, 42)">
          <g className="anim-bloom">
            <circle cx="0" cy="0" r="4" fill="#EC4899" opacity="0.9"/>
            <circle cx="0" cy="0" r="2" fill="#F9A8D4"/>
          </g>
        </g>
        <g transform="translate(50, 38)">
          <g className="anim-bloom">
            <circle cx="0" cy="0" r="4" fill="#FBBF24" opacity="0.9"/>
            <circle cx="0" cy="0" r="2" fill="#FEF3C7"/>
          </g>
        </g>
        <g transform="translate(68, 42)">
          <g className="anim-bloom">
            <circle cx="0" cy="0" r="4" fill="#DC2626" opacity="0.9"/>
            <circle cx="0" cy="0" r="2" fill="#FCA5A5"/>
          </g>
        </g>
        <g transform="translate(50, 60)">
          <g className="anim-bloom">
            <circle cx="0" cy="0" r="5" fill="#8B5CF6" opacity="0.9"/>
            <circle cx="0" cy="0" r="2.5" fill="#C4B5FD"/>
          </g>
        </g>
      </svg>
    </div>
  )
})
