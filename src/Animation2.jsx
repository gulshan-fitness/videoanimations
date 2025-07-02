import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';







const Animation2 = () => {
const [reps, setReps] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setReps((prev) => (prev >= 20 ? 0 : prev + 1));
    }, 150); // Smooth up motion
    return () => clearInterval(interval);
  }, []);

  


  const getColor = () => {
    if (reps <= 5) return '#00BFFF';      // Blue
    if (reps <= 12) return '#FFA500';     // Orange
    return '#FF4500';                     // Red
  };

  const getZone = () => {
    if (reps <= 5) return '🏋️ Strength';
    if (reps <= 12) return '💪 Hypertrophy';
    return '💨 Endurance';
  };




  return (
    <div className=' py-9 bg-black '>
       <div className="flex flex-col items-center justify-center  text-white">
     

      <div className="relative w-24 h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-inner">
        {/* Colored Zones */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="h-[25%] bg-blue-600 flex items-center justify-center text-md font-bold">
            1–5 🏋️
          </div>
          <div className="h-[35%] bg-orange-500 flex items-center justify-center text-md font-bold">
            6–12 💪
          </div>
          <div className="h-[40%] bg-red-600 flex items-center justify-center text-md font-bold">
            13–20 💨
          </div>
        </div>

        {/* Animated Volume Meter Bar */}
        <motion.div
          className="absolute bottom-0 left-0 w-full rounded-t-md"
          style={{ backgroundColor: getColor() }}
          animate={{ height: `${(reps / 20) * 100}%` }}
          transition={{ type: 'tween', duration: 0.4 }}
        >
          {/* Glow effect */}
          <div className="w-full h-full animate-pulse bg-opacity-30 backdrop-blur-sm" />
        </motion.div>

        {/* Rep Count Label */}
        <div className="absolute top-0 text-center left-1/2 w-full transform -translate-x-1/2 bg-black/60 px-2 py-1 rounded text-white text-sm font-bold">
          {reps} Reps
        </div>
      </div>

      {/* Zone Label */}
      <p className="mt-2 text-xl font-bold" style={{ color: getColor() }}>
        {getZone()}
      </p>



    </div>

   

   

    </div>


   
  );
};

export default Animation2;
