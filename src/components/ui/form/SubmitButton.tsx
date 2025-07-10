'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  icon?: LucideIcon;
  loadingIcon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function SubmitButton({
  children,
  isLoading = false,
  disabled = false,
  loadingText = 'Loading...',
  icon: Icon,
  loadingIcon: LoadingIcon,
  variant = 'primary',
  className = '',
  onClick,
}: SubmitButtonProps) {
  const baseClasses =
    'w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
    secondary:
      'border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 hover:text-emerald-300',
  };

  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type='submit'
      disabled={isDisabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${
        isDisabled ? 'opacity-70 cursor-not-allowed' : ''
      } ${className}`}
      whileHover={!isDisabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
    >
      {isLoading ? (
        <>
          {LoadingIcon ? (
            <LoadingIcon size={18} />
          ) : (
            <motion.div
              className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
          {loadingText}
        </>
      ) : (
        <>
          {children}
          {Icon && <Icon size={18} />}
        </>
      )}
    </motion.button>
  );
}
