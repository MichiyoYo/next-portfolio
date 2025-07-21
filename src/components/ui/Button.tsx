import { scaleOnHover } from '@/lib/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  href: string;
  Icon?: React.ComponentType<{ size?: number }>;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  animate?: boolean;
}

const primaryStyles =
  'group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 ';
const secondaryStyles =
  'border-1 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 backdrop-blur-sm ';

export function Button({
  label,
  href,
  Icon = undefined,
  variant = 'primary',
  disabled = false,
  animate = false,
}: ButtonProps) {
  return (
    <motion.div {...scaleOnHover} whileHover={{ y: -3 }}>
      <Link
        href={href}
        className={`${
          variant === 'primary' ? primaryStyles : secondaryStyles
        } px-10 py-4 text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 ${
          disabled ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <span>{label}</span>
        {Icon && (
          <motion.div
            {...(animate && {
              animate: { x: [0, 5, 0] },
              transition: { duration: 2, repeat: Infinity },
            })}
          >
            <Icon size={18} />
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
}
