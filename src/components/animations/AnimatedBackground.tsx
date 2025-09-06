'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden min-h-screen w-full bg-slate-900'>
      {/* Base solid background for mobile fallback */}
      <div className='absolute inset-0 w-full h-full bg-slate-900' />
      
      {/* Gradient overlay */}
      <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950/15 to-slate-900' />
      
      {/* Subtle moving orbs - reduced complexity for mobile */}
      <motion.div
        className='absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl'
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl'
        animate={{
          scale: [1.1, 1, 1.1],
          x: [20, -20, 20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
