'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Color-shifting gradient background */}
      <motion.div
        className='absolute inset-0 opacity-25'
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgb(20, 184, 166) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgb(34, 197, 94) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgb(79, 70, 229) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgb(20, 184, 166) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgb(34, 197, 94) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgb(79, 70, 229) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgb(20, 184, 166) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgb(34, 197, 94) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary slower gradient */}
      <motion.div
        className='absolute inset-0 opacity-12'
        animate={{
          background: [
            'linear-gradient(45deg, rgb(79, 70, 229) 0%, transparent 30%, rgb(20, 184, 166) 70%, transparent 100%)',
            'linear-gradient(135deg, rgb(34, 197, 94) 0%, transparent 30%, rgb(79, 70, 229) 70%, transparent 100%)',
            'linear-gradient(225deg, rgb(20, 184, 166) 0%, transparent 30%, rgb(34, 197, 94) 70%, transparent 100%)',
            'linear-gradient(315deg, rgb(79, 70, 229) 0%, transparent 30%, rgb(20, 184, 166) 70%, transparent 100%)',
            'linear-gradient(45deg, rgb(79, 70, 229) 0%, transparent 30%, rgb(20, 184, 166) 70%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
