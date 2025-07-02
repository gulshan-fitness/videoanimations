import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PremiumVolumeMeter = () => {
  const [rep, setRep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRep((prev) => (prev >= 29 ? 0 : prev + 1));
    }, 100); // Speed of animation
    return () => clearInterval(timer);
  }, []);

  const getZone = () => {
    if (rep <= 5) return '🏋️ Strength';
    if (rep <= 12) return '💪 Hypertrophy';
    return '💨 Endurance';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-semibold tracking-wide">
      {/* Title */}
      <h1 className="text-3xl mb-8 text-white/90">Repetition Power Meter</h1>

      <div className="flex gap-20 items-end">
        {/* Volume Increase (Up Meter) */}
        <div className="relative w-20 h-[400px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 shadow-[inset_0_0_10px_#ffffff22] border border-white">
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-[0_0_20px_5px_#ffffff33]"
            animate={{ height: `${(rep / 20) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-white">
            UP
          </div>
        </div>

       
  
      </div>

      {/* Rep Info */}
      <div className="mt-3 text-center">
        <p className="text-4xl font-bold text-white drop-shadow-sm">{rep} Reps</p>
        
      </div>
    </div>
  );
};

export default PremiumVolumeMeter;
