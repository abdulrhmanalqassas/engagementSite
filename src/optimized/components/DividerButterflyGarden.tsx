import React, { memo } from 'react'

export default memo(function DividerButterflyGarden() {
  return (
    <div className="flex justify-center items-center py-12 gap-6">
      <svg width="70" height="70" viewBox="0 0 100 100" className="animate-pulse">
        <ellipse cx="30" cy="35" rx="18" ry="22" fill="#F97316" opacity="0.75" transform="rotate(-25 30 35)"/>
        <ellipse cx="30" cy="35" rx="13" ry="17" fill="#FB923C" opacity="0.85" transform="rotate(-25 30 35)"/>
        <circle cx="28" cy="30" r="3" fill="white" opacity="0.9"/>
        <ellipse cx="70" cy="35" rx="18" ry="22" fill="#F97316" opacity="0.75" transform="rotate(25 70 35)"/>
        <ellipse cx="70" cy="35" rx="13" ry="17" fill="#FB923C" opacity="0.85" transform="rotate(25 70 35)"/>
        <circle cx="72" cy="30" r="3" fill="white" opacity="0.9"/>
        <ellipse cx="35" cy="55" rx="13" ry="18" fill="#FBBF24" opacity="0.75" transform="rotate(-18 35 55)"/>
        <ellipse cx="65" cy="55" rx="13" ry="18" fill="#FBBF24" opacity="0.75" transform="rotate(18 65 55)"/>
        <ellipse cx="50" cy="45" rx="3.5" ry="18" fill="#78350f" opacity="0.95"/>
        <circle cx="50" cy="32" r="4.5" fill="#78350f" opacity="0.95"/>
        <line x1="48" y1="29" x2="45" y2="22" stroke="#78350f" strokeWidth="1.5"/>
        <line x1="52" y1="29" x2="55" y2="22" stroke="#78350f" strokeWidth="1.5"/>
        <circle cx="45" cy="22" r="1.5" fill="#78350f"/>
        <circle cx="55" cy="22" r="1.5" fill="#78350f"/>
      </svg>
      <div className="flex flex-col gap-3">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <g transform="translate(25, 25)">
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(72)"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(144)"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(216)"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#EC4899" opacity="0.8" transform="rotate(288)"/>
            <circle cx="0" cy="0" r="4" fill="#FBBF24"/>
          </g>
        </svg>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <g transform="translate(25, 25)">
            <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(72)"/>
            <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(144)"/>
            <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(216)"/>
            <ellipse cx="0" cy="0" rx="9" ry="7" fill="#8B5CF6" opacity="0.8" transform="rotate(288)"/>
            <circle cx="0" cy="0" r="3.5" fill="#FDE047"/>
          </g>
        </svg>
      </div>
      <svg width="70" height="70" viewBox="0 0 100 100" className="animate-pulse" style={{animationDelay: '1s'}}>
        <ellipse cx="30" cy="35" rx="18" ry="22" fill="#10B981" opacity="0.75" transform="rotate(-25 30 35)"/>
        <ellipse cx="30" cy="35" rx="13" ry="17" fill="#34D399" opacity="0.85" transform="rotate(-25 30 35)"/>
        <circle cx="28" cy="30" r="3" fill="white" opacity="0.9"/>
        <circle cx="32" cy="37" r="2" fill="white" opacity="0.8"/>
        <ellipse cx="70" cy="35" rx="18" ry="22" fill="#10B981" opacity="0.75" transform="rotate(25 70 35)"/>
        <ellipse cx="70" cy="35" rx="13" ry="17" fill="#34D399" opacity="0.85" transform="rotate(25 70 35)"/>
        <circle cx="72" cy="30" r="3" fill="white" opacity="0.9"/>
        <circle cx="68" cy="37" r="2" fill="white" opacity="0.8"/>
        <ellipse cx="35" cy="55" rx="13" ry="18" fill="#14B8A6" opacity="0.75" transform="rotate(-18 35 55)"/>
        <ellipse cx="65" cy="55" rx="13" ry="18" fill="#14B8A6" opacity="0.75" transform="rotate(18 65 55)"/>
        <ellipse cx="50" cy="45" rx="3.5" ry="18" fill="#064e3b" opacity="0.95"/>
        <circle cx="50" cy="32" r="4.5" fill="#064e3b" opacity="0.95"/>
        <line x1="48" y1="29" x2="45" y2="22" stroke="#064e3b" strokeWidth="1.5"/>
        <line x1="52" y1="29" x2="55" y2="22" stroke="#064e3b" strokeWidth="1.5"/>
        <circle cx="45" cy="22" r="1.5" fill="#064e3b"/>
        <circle cx="55" cy="22" r="1.5" fill="#064e3b"/>
      </svg>
    </div>
  )
})