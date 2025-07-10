'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

interface StatusMessageProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  className?: string;
}

const statusConfig = {
  success: {
    icon: CheckCircle,
    classes: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
  },
  error: {
    icon: XCircle,
    classes: 'bg-red-500/20 border-red-500/30 text-red-400',
  },
  warning: {
    icon: AlertCircle,
    classes: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
  },
  info: {
    icon: Info,
    classes: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  },
};

export function StatusMessage({
  type,
  message,
  className = '',
}: StatusMessageProps) {
  const config = statusConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`p-4 rounded-lg border flex items-center gap-3 ${config.classes} ${className}`}
    >
      <Icon size={20} />
      <p className='text-sm'>{message}</p>
    </motion.div>
  );
}
