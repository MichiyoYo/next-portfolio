'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Lightbulb,
  Target,
  Users,
  Coffee,
  BookOpen,
  Zap,
  Heart,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerChildren } from '@/lib/constants';
import { Button } from '@/components/ui';
import Image from 'next/image';
// TODO: move constants to a separate file
const skills = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker'],
  },
  { category: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'AWS', 'Vercel'] },
  {
    category: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Team Leadership',
      'Communication',
      'Mentoring',
    ],
  },
];

const journey = [
  {
    year: '2020',
    title: 'Started Coding Journey',
    description:
      'Discovered my passion for web development through online courses and tutorials.',
    icon: BookOpen,
  },
  {
    year: '2021',
    title: 'First Developer Role',
    description:
      'Joined a startup as a junior developer, learning React and modern web technologies.',
    icon: Rocket,
  },
  {
    year: '2022',
    title: 'Full Stack Development',
    description:
      'Expanded skills to backend development, working with Node.js and databases.',
    icon: Code2,
  },
  {
    year: '2023',
    title: 'Team Leadership',
    description:
      'Led development teams and mentored junior developers in best practices.',
    icon: Users,
  },
  {
    year: '2024',
    title: 'Freelance & Innovation',
    description:
      'Started freelancing while exploring cutting-edge technologies and AI integration.',
    icon: Lightbulb,
  },
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description:
      'I believe in writing clean, maintainable code that stands the test of time.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'The best solutions come from diverse perspectives and open communication.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description:
      'Technology evolves rapidly, and I embrace learning new tools and techniques.',
  },
  {
    icon: Heart,
    title: 'User-Centered',
    description:
      'Every line of code should ultimately serve to create better user experiences.',
  },
];

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20'>
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial='initial'
            animate='animate'
            variants={staggerChildren}
            className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
          >
            <motion.div variants={fadeInUp} className='space-y-8'>
              <div>
                <motion.div
                  className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6'
                  whileHover={{ scale: 1.02 }}
                >
                  <Heart className='text-emerald-400' size={16} />
                  <span className='text-emerald-400 text-sm font-medium'>
                    About Me
                  </span>
                </motion.div>
                {/* TODO: rewrite */}
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                    Passionate Developer,
                  </span>
                  <br />
                  <span className='text-emerald-400'>Problem Solver</span>
                </h1>

                <div className='space-y-6 text-lg text-gray-300 leading-relaxed'>
                  <p>
                    Hi there! I&apos;m Cristina, a full-stack developer who
                    believes that great software is born from the perfect blend
                    of technical excellence and creative thinking. My journey in
                    tech started with curiosity and has evolved into a passion
                    for building applications that make a real difference.
                  </p>

                  <p>
                    I specialize in modern web technologies, with a particular
                    love for React, Next.js, and TypeScript. But beyond the
                    code, I&apos;m fascinated by the human side of
                    technology—how we can create interfaces that feel intuitive,
                    experiences that delight, and solutions that truly solve
                    problems.
                  </p>

                  <p>
                    When I&apos;m not coding, you&apos;ll find me crafting,
                    painting, creating digital illustrations, playing video
                    games, or exploring the great outdoors. I also enjoy
                    mentoring aspiring developers, contributing to open source
                    projects, or exploring the latest in web development trends.
                    I believe the best way to grow is to lift others up too.
                  </p>
                </div>
              </div>

              <motion.div className='flex flex-wrap gap-4' variants={fadeInUp}>
                <Button
                  variant='primary'
                  href='/projects'
                  Icon={Rocket}
                  label='View My Projects'
                />
                <Button
                  variant='secondary'
                  href='/contact'
                  Icon={Coffee}
                  label="Let's Chat"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className='relative'>
              <motion.div
                className='relative w-80 h-80 mx-auto lg:w-96 lg:h-96'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative background */}
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl' />

                <div className='relative w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-6xl font-bold border-4 border-white/10'>
                  <Image
                    src='/images/cre.png'
                    alt='Profile Image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                  />
                </div>

                {/* Floating decorations */}
                <motion.div
                  className='absolute -top-4 -right-4 p-3 bg-emerald-500 rounded-full text-white'
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Code2 size={24} />
                </motion.div>

                <motion.div
                  className='absolute -bottom-4 -left-4 p-3 bg-teal-500 rounded-full text-white'
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <Zap size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 bg-slate-800/20 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Skills & Expertise
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300'
              >
                <h3 className='text-xl font-bold text-white mb-4'>
                  {skillGroup.category}
                </h3>
                <div className='space-y-2'>
                  {skillGroup.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className='text-gray-300 text-sm py-1 px-3 bg-slate-700/50 rounded-lg'
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                My Journey
              </span>
            </h2>
            <p className='text-lg text-gray-300'>
              The path that led me to where I am today.
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500' />

            <div className='space-y-12'>
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='relative flex items-start gap-8'
                >
                  {/* Timeline dot */}
                  <motion.div
                    className='flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white border-4 border-slate-900'
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon size={24} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className='flex-1 p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50'
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <div className='flex items-center gap-4 mb-3'>
                      <span className='text-emerald-400 font-bold text-lg'>
                        {item.year}
                      </span>
                      <h3 className='text-xl font-bold text-white'>
                        {item.title}
                      </h3>
                    </div>
                    <p className='text-gray-300'>{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 px-4 bg-slate-800/20 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                What Drives Me
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
              The principles that guide my work and shape how I approach every
              project.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className='p-8 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300'
              >
                <motion.div
                  className='w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white mb-6'
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon size={28} />
                </motion.div>

                <h3 className='text-xl font-bold text-white mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl' />

            <div className='relative z-10 p-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                  Let&apos;s Build Something Great Together
                </span>
              </h2>

              <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
                I&apos;m always excited to take on new challenges and
                collaborate with fellow innovators. Whether you have a project
                in mind or just want to chat about technology, I&apos;d love to
                hear from you.
              </p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25'
                >
                  Start a Conversation
                </Link>
                <Link
                  href='/projects'
                  className='px-8 py-4 border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-white rounded-xl font-semibold transition-all duration-300'
                >
                  See My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
