import { useMemo } from 'react';
import { motion } from 'framer-motion';

export const Fireflies = ({ delay = 0, index = 0 }) => {
  const positions = useMemo(() => {
    const pos1 = {
      x: ((index * 17 + 23) % 90) + 5,
      y: ((index * 23 + 37) % 90) + 5,
    };
    const pos2 = {
      x: ((index * 31 + 47) % 90) + 5,
      y: ((index * 41 + 13) % 90) + 5,
    };
    const pos3 = {
      x: ((index * 43 + 67) % 90) + 5,
      y: ((index * 29 + 71) % 90) + 5,
    };
    return [pos1, pos2, pos3];
  }, [index]);

  return (
    <motion.div
      className='absolute pointer-events-none'
      initial={{
        left: `${positions[0].x}%`,
        top: `${positions[0].y}%`,
        opacity: 0,
      }}
      animate={{
        left: [
          `${positions[0].x}%`,
          `${positions[1].x}%`,
          `${positions[2].x}%`,
          `${positions[0].x}%`,
        ],
        top: [
          `${positions[0].y}%`,
          `${positions[1].y}%`,
          `${positions[2].y}%`,
          `${positions[0].y}%`,
        ],
        opacity: [0, 0.8, 0.3, 0.9, 0.1, 0.7, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
        times: [0, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
      }}
    >
      <div className='absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full bg-gradient-to-r from-amber-300/60 via-yellow-400/40 to-orange-300/30 rounded-full blur-lg' />
      </div>

      <div className='absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full bg-gradient-to-r from-yellow-200/80 to-amber-200/70 rounded-full blur-sm' />
      </div>

      <div className='absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full shadow-lg shadow-amber-400/60'>
        <div className='absolute inset-0.5 bg-white/90 rounded-full' />
      </div>
    </motion.div>
  );
};
