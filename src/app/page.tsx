'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Rocket,
  Database,
  Globe,
  Server,
  Cloud,
  Wrench,
  Sparkles,
  ExternalLink,
  MessageCircleHeart,
} from 'lucide-react';
import Link from 'next/link';
import {
  fadeInUp,
  staggerChildren,
  scaleOnHover,
  techStack,
} from '@/lib/constants';

// Enhanced Firefly component with proper fade transitions and glow effect
const Firefly = ({ delay = 0, index = 0 }) => {
  // Generate stable positions based on index to avoid re-renders
  const positions = useMemo(() => {
    const pos1 = {
      x: ((index * 17 + 23) % 90) + 5,
      y: ((index * 23 + 37) % 90) + 5,
    };
    const pos2 = {
      x: ((index * 31 + 47) % 90) + 5,
      y: ((index * 41 + 13) % 90) + 5,
    };
    const pos3 = {
      x: ((index * 43 + 67) % 90) + 5,
      y: ((index * 29 + 71) % 90) + 5,
    };
    return [pos1, pos2, pos3];
  }, [index]);

  return (
    <motion.div
      className='absolute pointer-events-none'
      initial={{
        left: `${positions[0].x}%`,
        top: `${positions[0].y}%`,
        opacity: 0,
      }}
      animate={{
        left: [
          `${positions[0].x}%`,
          `${positions[1].x}%`,
          `${positions[2].x}%`,
          `${positions[0].x}%`,
        ],
        top: [
          `${positions[0].y}%`,
          `${positions[1].y}%`,
          `${positions[2].y}%`,
          `${positions[0].y}%`,
        ],
        opacity: [0, 0.8, 0.3, 0.9, 0.1, 0.7, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
        times: [0, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
      }}
    >
      {/* Outer glow */}
      <div className='absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full bg-gradient-to-r from-amber-300/60 via-yellow-400/40 to-orange-300/30 rounded-full blur-lg' />
      </div>

      {/* Middle glow */}
      <div className='absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full bg-gradient-to-r from-yellow-200/80 to-amber-200/70 rounded-full blur-sm' />
      </div>

      {/* Inner light core */}
      <div className='absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full shadow-lg shadow-amber-400/60'>
        {/* Bright center */}
        <div className='absolute inset-0.5 bg-white/90 rounded-full' />
      </div>
    </motion.div>
  );
};
export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Cycling words for dynamic text effect
  const cyclicWords = [
    'fabulous',
    'reactive',
    'functional',
    'accessible',
    'user-centered',
    'cool',
    'compelling',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cyclicWords.length]);

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Firefly particles */}
        {[...Array(6)].map((_, i) => (
          <Firefly key={i} delay={i * 2} index={i} />
        ))}

        {/* Large gradient orbs */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Hero Section with Enhanced Animations */}
      <motion.section
        ref={heroRef}
        className='min-h-screen flex items-center justify-center px-4 relative'
        style={{ y, opacity }}
      >
        <motion.div
          className='text-center max-w-5xl relative z-10'
          initial='initial'
          animate='animate'
          variants={staggerChildren}
        >
          {/* Decorative elements */}
          <motion.div
            className='absolute -top-20 -left-20 text-emerald-400/20'
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
            }}
          >
            <Sparkles size={60} />
          </motion.div>
          <motion.div
            className='absolute -top-16 -right-16 text-teal-400/20'
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: 3,
            }}
          >
            <Code size={50} />
          </motion.div>

          {/* Interactive greeting */}
          <motion.div variants={fadeInUp} className='mb-6'>
            <motion.span
              className='text-emerald-400 text-lg font-medium tracking-wide'
              whileHover={{ scale: 1.1, color: '#10b981' }}
            >
              Hello, I&apos;m
            </motion.span>
          </motion.div>

          {/* Animated name with gradient and glow effect */}
          <motion.h1
            variants={fadeInUp}
            className='text-6xl md:text-8xl font-bold mb-8 relative'
          >
            <motion.span
              className='bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent relative'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Cristina Lester
              {/* Subtle glow effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-2xl -z-10'
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>

          {/* Dynamic subtitle with word cycling */}
          <motion.div
            variants={fadeInUp}
            className='text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed'
          >
            <span>Full Stack Developer crafting </span>
            <motion.span
              key={currentWordIndex}
              className='text-emerald-400 font-semibold relative inline-block'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {cyclicWords[currentWordIndex]}
              {/* Glowing effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 blur-md rounded-lg -z-10'
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.span>
            <span> digital experiences</span>
          </motion.div>

          {/* Enhanced skill badges with staggered animation */}
          <motion.div
            variants={fadeInUp}
            className='flex flex-wrap justify-center gap-4 mb-16'
          >
            {[
              {
                icon: Code,
                label: 'TypeScript',
                color: 'from-blue-400 to-blue-600',
              },
              {
                icon: Palette,
                label: 'React',
                color: 'from-cyan-400 to-cyan-600',
              },
              {
                icon: Rocket,
                label: 'Next.js',
                color: 'from-gray-400 to-gray-600',
              },
              {
                icon: Server,
                label: 'Node.js',
                color: 'from-green-400 to-green-600',
              },
              {
                icon: Database,
                label: 'PostgreSQL',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                icon: Cloud,
                label: 'AWS',
                color: 'from-orange-400 to-orange-600',
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: 'backOut',
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full shadow-lg backdrop-blur-sm border border-white/20`}
              >
                <skill.icon size={18} />
                <span className='text-sm font-medium'>{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className='flex flex-col sm:flex-row gap-6 justify-center mb-20'
          >
            <motion.div {...scaleOnHover} whileHover={{ y: -3 }}>
              <Link
                href='/projects'
                className='group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 shadow-lg shadow-emerald-500/25'
              >
                <span>View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className='rotate-[-90deg]' size={18} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div {...scaleOnHover} whileHover={{ y: -3 }}>
              <Link
                href='/contact'
                className='px-10 py-4 border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-sm'
              >
                <span>Get In Touch</span>
                <Mail size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced social links with floating animation */}
          <motion.div
            variants={fadeInUp}
            className='flex justify-center gap-8 mb-20'
          >
            {[
              {
                href: 'https://github.com/cristinalester',
                icon: Github,
                label: 'GitHub',
                color: 'hover:text-gray-300',
              },
              {
                href: 'https://linkedin.com/in/cristinalester',
                icon: Linkedin,
                label: 'LinkedIn',
                color: 'hover:text-blue-400',
              },
              {
                href: 'https://dribbble.com/cristinalester',
                icon: ExternalLink,
                label: 'Dribbble',
                color: 'hover:text-pink-400',
              },
              {
                href: 'mailto:cristina.lester@example.com',
                icon: Mail,
                label: 'Email',
                color: 'hover:text-emerald-400',
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 text-gray-400 ${social.color} transition-all duration-300 shadow-lg`}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            variants={fadeInUp}
            className='absolute -bottom-30 left-1/2 transform mt-40 -translate-x-1/2'
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='flex flex-col items-center gap-2'
            >
              <span className='text-gray-400 text-sm font-medium'>
                Scroll to explore
              </span>
              <div className='w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center'>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='w-1 h-3 bg-emerald-400 rounded-full mt-2'
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Tech Stack Section with More Dynamic Animations */}
      <section className='py-24 px-4 bg-slate-800/30 backdrop-blur-sm relative'>
        {/* Section background decoration */}
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5' />

        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <motion.div
              className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6'
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className='text-emerald-400' size={16} />
              <span className='text-emerald-400 text-sm font-medium'>
                Tech Stack
              </span>
            </motion.div>

            <h2 className='text-4xl md:text-6xl font-bold text-white mb-8'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Tools & Technologies
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              I work with cutting-edge technologies to build scalable,
              performant applications that deliver exceptional user experiences
              across all platforms.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Frontend Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <div className='text-center mb-8'>
                <motion.div
                  className='inline-flex items-center gap-3 mb-4'
                  whileHover={{ scale: 1.05 }}
                >
                  <div className='p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl'>
                    <Globe className='text-white' size={24} />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Frontend</h3>
                </motion.div>
                <p className='text-gray-400 text-sm'>
                  User interface & experience
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                {techStack.frontend.map((tech) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: tech.delay,
                      ease: 'backOut',
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className='group p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer'
                  >
                    <tech.icon
                      className={`${tech.color} mb-3 group-hover:scale-110 transition-transform duration-200`}
                      size={32}
                    />
                    <span className='text-gray-300 text-sm font-medium block group-hover:text-white transition-colors duration-200'>
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <div className='text-center mb-8'>
                <motion.div
                  className='inline-flex items-center gap-3 mb-4'
                  whileHover={{ scale: 1.05 }}
                >
                  <div className='p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl'>
                    <Server className='text-white' size={24} />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Backend</h3>
                </motion.div>
                <p className='text-gray-400 text-sm'>Server & database logic</p>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                {techStack.backend.map((tech) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: tech.delay,
                      ease: 'backOut',
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className='group p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer'
                  >
                    <tech.icon
                      className={`${tech.color} mb-3 group-hover:scale-110 transition-transform duration-200`}
                      size={32}
                    />
                    <span className='text-gray-300 text-sm font-medium block group-hover:text-white transition-colors duration-200'>
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <div className='text-center mb-8'>
                <motion.div
                  className='inline-flex items-center gap-3 mb-4'
                  whileHover={{ scale: 1.05 }}
                >
                  <div className='p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl'>
                    <Wrench className='text-white' size={24} />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Tools</h3>
                </motion.div>
                <p className='text-gray-400 text-sm'>
                  Development & design tools
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                {techStack.tools.map((tech) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: tech.delay,
                      ease: 'backOut',
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className='group p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 cursor-pointer'
                  >
                    <tech.icon
                      className={`${tech.color} mb-3 group-hover:scale-110 transition-transform duration-200`}
                      size={32}
                    />
                    <span className='text-gray-300 text-sm font-medium block group-hover:text-white transition-colors duration-200'>
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced closing section */}
      <section className='py-24 px-4 relative'>
        <div className='max-w-5xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            {/* Decorative background */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl'
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className='relative z-10 p-12'>
              <motion.h2
                className='text-4xl md:text-5xl font-bold text-white mb-8'
                whileHover={{ scale: 1.02 }}
              >
                <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                  Ready to Build Something Amazing?
                </span>
              </motion.h2>
              <motion.p
                className='text-xl text-gray-300 leading-relaxed mb-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                I specialize in creating modern web applications that combine
                cutting-edge technology with intuitive user experiences. From
                concept to deployment, I bring ideas to life through clean code,
                thoughtful design, and a passion for excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25'
                >
                  <span>Let&apos;s Talk</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className='rotate-[-90deg]' size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
