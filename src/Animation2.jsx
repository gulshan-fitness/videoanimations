import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const PulseGlow = ({ cx, cy }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r="20"
    fill="rgba(255,0,0,0.4)"
    initial={{ scale: 1, opacity: 0.6 }}
    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 1.2, repeat: Infinity }}
    filter="url(#glow)"
  />
);

const Animation2 = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <svg
        width="400"
        height="800"
        viewBox="0 0 400 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Human body shape - simplified silhouette */}
        <path
          d="M200 50
             C170 150, 230 150, 200 250
             C180 320, 220 320, 200 390
             C180 470, 220 470, 200 550
             C180 650, 220 650, 200 750"
          stroke="white"
          strokeWidth="10"
          fill="none"
        />

        {/* Head */}
        <circle cx="200" cy="30" r="25" fill="white" />

        {/* Muscle Pulses */}
        <PulseGlow cx="160" cy="180" /> {/* Left Bicep */}
        <PulseGlow cx="240" cy="180" /> {/* Right Bicep */}
        <PulseGlow cx="175" cy="220" /> {/* Chest Left */}
        <PulseGlow cx="225" cy="220" /> {/* Chest Right */}
        <PulseGlow cx="175" cy="460" /> {/* Left Quad */}
        <PulseGlow cx="225" cy="460" /> {/* Right Quad */}
      </svg>
    </div>
  );
};

export default Animation2;
