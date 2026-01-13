import React, { memo } from 'react'

export default memo(function DividerRoseBouquet() {
  return (
    <div className="flex justify-center py-12">
      <svg width="120" height="100" viewBox="0 0 120 100">
        <g transform="translate(60, 35)">
          <g className="anim-bloom">
            <ellipse cx="0" cy="0" rx="14" ry="11" fill="#DC2626" opacity="0.85" transform="rotate(45)"/>
            <ellipse cx="0" cy="0" rx="14" ry="11" fill="#DC2626" opacity="0.85" transform="rotate(-45)"/>
            <ellipse cx="0" cy="0" rx="14" ry="11" fill="#EF4444" opacity="0.9"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#F87171" opacity="0.9"/>
            <circle cx="0" cy="0" r="5" fill="#B91C1C"/>
            <line x1="0" y1="11" x2="0" y2="45" stroke="#15803D" strokeWidth="2.5"/>
            <ellipse cx="-6" cy="25" rx="5" ry="8" fill="#22C55E" opacity="0.8" transform="rotate(-25 -6 25)"/>
            <ellipse cx="6" cy="32" rx="5" ry="8" fill="#16A34A" opacity="0.8" transform="rotate(25 6 32)"/>
          </g>
        </g>
        <g transform="translate(35, 45)">
          <g className="anim-bloom">
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#EC4899" opacity="0.85" transform="rotate(40)"/>
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#EC4899" opacity="0.85" transform="rotate(-40)"/>
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#F472B6" opacity="0.9"/>
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F9A8D4" opacity="0.9"/>
            <circle cx="0" cy="0" r="4" fill="#DB2777"/>
            <line x1="0" y1="9" x2="5" y2="38" stroke="#15803D" strokeWidth="2"/>
            <ellipse cx="-4" cy="22" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(-20 -4 22)"/>
          </g>
        </g>
        <g transform="translate(85, 45)">
          <g className="anim-bloom">
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FBBF24" opacity="0.85" transform="rotate(35)"/>
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FBBF24" opacity="0.85" transform="rotate(-35)"/>
            <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FDE047" opacity="0.9"/>
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#FEF3C7" opacity="0.9"/>
            <circle cx="0" cy="0" r="4" fill="#F59E0B"/>
            <line x1="0" y1="9" x2="-5" y2="38" stroke="#15803D" strokeWidth="2"/>
            <ellipse cx="4" cy="22" rx="4" ry="7" fill="#22C55E" opacity="0.8" transform="rotate(20 4 22)"/>
          </g>
        </g>
        <path className="anim-sway" d="M 40 65 Q 60 60 80 65" stroke="#DC2626" strokeWidth="3" fill="none" opacity="0.7"/>
        <path className="anim-sway" d="M 35 68 L 30 80 L 40 70 Z" fill="#DC2626" opacity="0.7"/>
        <path className="anim-sway" d="M 85 68 L 90 80 L 80 70 Z" fill="#DC2626" opacity="0.7"/>
      </svg>
    </div>
  )
})
