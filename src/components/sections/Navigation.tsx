'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className='fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='/'
              className='text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent'
            >
              Cristina<span className='text-amber-400'>Lester</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  className='relative'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-emerald-400'
                        : 'text-gray-300 hover:text-emerald-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      className='absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300'
                      layoutId='activeTab'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className='md:hidden text-white p-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className='md:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-lg'
        variants={menuVariants}
        initial='closed'
        animate={isMenuOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                variants={linkVariants}
                initial='closed'
                animate={isMenuOpen ? 'open' : 'closed'}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-gray-300 hover:text-emerald-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
