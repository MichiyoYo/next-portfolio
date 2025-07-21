import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturedBadge() {
  return (
    <motion.div
      className='absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-emerald-600 text-white rounded-full text-xs font-medium'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Star size={12} fill='currentColor' />
      Featured
    </motion.div>
  );
}
