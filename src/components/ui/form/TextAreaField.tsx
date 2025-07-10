'use client';

import { motion } from 'framer-motion';
import { AlertCircle, LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  icon?: LucideIcon;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(
  (
    {
      label,
      name,
      value,
      onChange,
      error,
      placeholder,
      icon: Icon,
      required = false,
      disabled = false,
      rows = 4,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-300 mb-2'
        >
          {Icon && <Icon size={16} className='inline mr-2' />}
          {label}
          {required && <span className='text-red-400 ml-1'>*</span>}
        </label>

        <textarea
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
            error
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-slate-600 focus:border-emerald-500 focus:ring-emerald-500/50'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          placeholder={placeholder}
          {...props}
        />

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-red-400 text-sm mt-1 flex items-center gap-1'
          >
            <AlertCircle size={14} />
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';
