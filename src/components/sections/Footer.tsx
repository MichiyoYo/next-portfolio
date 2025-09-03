'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Code } from 'lucide-react';
import { SOCIAL_LINKS, footerLinks } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 border-t border-emerald-500/20'>
      <div className='absolute inset-0 opacity-10'>
        <motion.div
          className='w-full h-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10'
          animate={{
            background: [
              'linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
              'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              'linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='md:col-span-2 text-center md:text-left'
          >
            <Link href='/' className='inline-block mb-4'>
              <motion.h3
                className='text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent'
                whileHover={{ scale: 1.05 }}
              >
                Cristina Lester
              </motion.h3>
            </Link>

            {/* Quick Links */}
            <div className='flex flex-wrap gap-4 mb-6 justify-center md:justify-start'>
              {footerLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm'
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-end'
          >
            <h4 className='text-white font-semibold mb-4 flex items-center gap-2'>
              <Code size={16} className='text-emerald-400' />
              Let&apos;s Connect
            </h4>
            <div className='flex gap-4'>
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-400 ${social.color} transition-all duration-200`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'
        >
          <div className='flex flex-wrap items-center justify-center md:justify-start gap-1 text-gray-400 text-sm'>
            <span>© {currentYear} Cristina Lester. Built with</span>
            <Heart size={14} className='text-red-400 animate-pulse inline-block mx-1' />
            <span>and lots of coffee.</span>
          </div>

          <div className='text-gray-500 text-xs'>
            <span>Designed & Developed by Cristina Lester</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
