'use client';

import { motion } from 'framer-motion';
import { AlertCircle, LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  icon?: LucideIcon;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      name,
      type = 'text',
      value,
      onChange,
      error,
      placeholder,
      icon: Icon,
      required = false,
      disabled = false,
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

        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
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

FormField.displayName = 'FormField';
