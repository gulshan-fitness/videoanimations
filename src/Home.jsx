import React, { useEffect, useState } from 'react';
import './App.css';

const RepMeter = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const target = 60; // Hypertrophy zone (middle)
    const duration = 2000;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentPos = progress * target;
      setPosition(currentPos);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="rep-meter">
      <div className="bar">
        <div className="zone strength">1–5 <span className="text-2xl md:text-3xl">🏋️</span></div>
        <div className="zone hypertrophy">6–12 <span className="text-2xl md:text-3xl">💪</span></div>
        <div className="zone endurance">15+ <span className="text-2xl md:text-3xl">💨</span></div>

        <div
          className={`pointer ${position >= 55 && position <= 65 ? 'glow' : ''}`}
          style={{ left: `${position}%` }}
        />
      </div>
    </div>
  );
};

export default RepMeter;
