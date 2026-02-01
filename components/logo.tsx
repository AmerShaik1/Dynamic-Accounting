'use client';

import React from 'react';

export default function Logo({ size = 'md', className = "" }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative flex-shrink-0 group flex items-center justify-center`}>
      {/* --- FLASHY ELEMENTS --- */}
      {/* 1. The Aura Glow (Visible on hover or always) */}
      <div className="absolute inset-0 bg-[#a3e635] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      
      {/* 2. The Rotation Ring (Subtle movement) */}
      <div className="absolute inset-[-4px] border border-[#a3e635]/30 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-[#a3e635]/60 transition-colors" />

      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-[0_0_15px_rgba(163,230,53,0.4)]"
      >
        {/* Deep Slate/Black Foundation Seal */}
        <circle cx="100" cy="100" r="98" fill="#0f172a" />
        
        {/* Vibrant Neon Lime Border */}
        <circle cx="100" cy="100" r="94" stroke="#a3e635" strokeWidth="5" />

        {/* Decorative Stars (Lime Green) */}
        {[
          { x: 35, y: 70 }, { x: 42, y: 55 }, { x: 55, y: 42 }, 
          { x: 145, y: 42 }, { x: 158, y: 55 }, { x: 165, y: 70 } 
        ].map((star, i) => (
          <path 
            key={i}
            d="M0 2.5L0.58 0.73L2.37 0.73L0.93 -0.36L1.48 -2.13L0 -1.04L-1.48 -2.13L-0.93 -0.36L-2.37 0.73L-0.58 0.73L0 2.5Z"
            fill="#a3e635"
            transform={`translate(${star.x}, ${star.y}) scale(2.8)`}
          />
        ))}

        {/* --- CENTRAL SPIRAL DESIGN --- */}
        <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
          {[0, 60, 120, 180, 240, 300].map((rotation) => (
            <ellipse 
              key={rotation}
              cx="100" cy="100" rx="14" ry="46" 
              stroke="#a3e635" 
              strokeWidth="1.2" 
              transform={`rotate(${rotation} 100 100)`}
              opacity="0.8"
            />
          ))}
          {/* Brilliant White Center Core (The "Flash") */}
          {[0, 120, 240].map((rotation) => (
            <ellipse 
              key={`core-${rotation}`}
              cx="100" cy="100" rx="7" ry="28" 
              stroke="white" 
              strokeWidth="2" 
              transform={`rotate(${rotation} 100 100)`}
            />
          ))}
        </g>

        {/* --- TEXT PATHS --- */}
        <defs>
          <path id="topTextPath" d="M 45,85 A 55,55 0 0,1 155,85" />
          <path id="bottomTextPath" d="M 30,120 A 75,75 0 0,0 170,120" />
        </defs>
        
        <text fill="white" className="font-black italic uppercase tracking-[0.2em] text-[18px]">
          <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
            DYNAMIC
          </textPath>
        </text>

        <text fill="#a3e635" className="font-bold uppercase tracking-[0.18em] text-[11px]">
          <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
            ACCOUNTING SERVICES
          </textPath>
        </text>
      </svg>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}