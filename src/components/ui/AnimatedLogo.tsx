'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Sparkle positions around the logo
  const sparklePositions = [
    { x: -10, y: -8, delay: 0 },
    { x: 35, y: -5, delay: 0.2 },
    { x: -5, y: 20, delay: 0.4 },
    { x: 30, y: 25, delay: 0.6 },
    { x: 12, y: -12, delay: 0.8 },
  ];

  return (
    <Link href='/' className='relative group'>
      <motion.div
        className='relative flex items-center gap-3'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main logo container with glow effect */}
        <motion.div
          className='relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg'
          animate={{
            boxShadow: isHovered
              ? '0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)'
              : '0 0 15px rgba(16, 185, 129, 0.3)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background glow */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur-sm opacity-50'
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Logo content */}
          <motion.div
            className='relative z-10 flex items-center justify-center'
            animate={{ rotateY: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <span className='font-extrabold'>CL</span>
          </motion.div>

          {/* Inner sparkle effect */}
          {/* <motion.div
            className='absolute inset-0 flex items-center justify-center'
            animate={{
              rotate: isHovered ? 180 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles
              size={12}
              className='text-white/60'
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
              }}
            />
          </motion.div> */}
        </motion.div>

        {/* Floating sparkles around the logo */}
        {sparklePositions.map((pos, index) => (
          <motion.div
            key={index}
            className='absolute pointer-events-none'
            style={{ left: pos.x, top: pos.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? [0, 1, 0] : 0,
              scale: isHovered ? [0, 1, 0] : 0,
              rotate: isHovered ? [0, 180, 360] : 0,
              y: isHovered ? [0, -10, 0] : 0,
            }}
            transition={{
              duration: 1.2,
              delay: pos.delay,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <Sparkles size={8} className='text-emerald-400' />
          </motion.div>
        ))}

        {/* Orbital sparkles that rotate around the logo */}
        <motion.div
          className='absolute inset-0 pointer-events-none'
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: isHovered ? Infinity : 0,
          }}
        >
          {[0, 120, 240].map((angle, index) => (
            <motion.div
              key={angle}
              className='absolute'
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: angle,
                x: isHovered ? 25 : 20,
                y: -2,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  opacity: isHovered ? [0.3, 1, 0.3] : 0,
                  scale: isHovered ? [0.5, 1, 0.5] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  delay: index * 0.2,
                }}
              >
                <div className='w-1 h-1 bg-emerald-400 rounded-full shadow-lg' />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pulse effect on hover */}
        <motion.div
          className='absolute inset-0 rounded-xl pointer-events-none'
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0, 0.3, 0] : 0,
          }}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut',
          }}
        >
          <div className='w-full h-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl' />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;
