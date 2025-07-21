'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Filter, Code } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerChildren } from '@/lib/constants';
import { PROJECTS, CATEGORIES } from './constants';
import { FeaturedBadge } from '@/components/ui';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Filter projects based on active category and featured toggle
  const filteredProjects = PROJECTS.filter((project) => {
    const categoryMatch =
      activeCategory === 'all' || project.category === activeCategory;
    const featuredMatch = !showFeaturedOnly || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20'>
      {/* Hero Section */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial='initial'
            animate='animate'
            variants={staggerChildren}
            className='text-center mb-16'
          >
            <motion.div
              variants={fadeInUp}
              className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6'
            >
              <Code className='text-emerald-400' size={16} />
              <span className='text-emerald-400 text-sm font-medium'>
                My Work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className='text-4xl md:text-6xl font-bold text-white mb-6'
            >
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Featured Projects
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              A collection of projects that showcase my skills in modern web
              development, from interactive frontends to full-stack
              applications.
            </motion.p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50'
          >
            {/* Category Filters */}
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2 text-gray-400'>
                <Filter size={20} />
                <span className='font-medium'>Filter:</span>
              </div>

              <div className='flex flex-wrap gap-2'>
                {CATEGORIES.map((category) => (
                  <motion.button
                    key={category.value}
                    onClick={() => setActiveCategory(category.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category.value
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon size={16} />
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Featured Toggle */}
            <motion.label
              className='flex items-center gap-3 text-gray-300 cursor-pointer'
              whileHover={{ scale: 1.02 }}
            >
              <span className='font-medium'>Featured only</span>
              <div className='relative'>
                <input
                  type='checkbox'
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className='sr-only'
                />
                <motion.div
                  className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                    showFeaturedOnly ? 'bg-emerald-600' : 'bg-slate-600'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className='w-5 h-5 bg-white rounded-full shadow-lg'
                    animate={{
                      x: showFeaturedOnly ? 26 : 2,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ y: 2 }}
                  />
                </motion.div>
              </div>
            </motion.label>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='pb-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            <AnimatePresence mode='wait'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className='group bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden'
                >
                  {/* Project Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <div className='w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center'>
                      {/* Placeholder for project image */}
                      <div className='text-emerald-400/60 text-4xl font-bold'>
                        {project.category === 'web' && '🌐'}
                        {project.category === 'mobile' && '📱'}
                        {project.category === 'library' && '📦'}
                      </div>
                    </div>

                    {project.featured && <FeaturedBadge />}

                    {/* Hover overlay */}
                    <motion.div className='absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-xl font-bold text-white group-hover:text-emerald-400 transition-colors'>
                        {project.title}
                      </h3>
                      <span className='text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded capitalize'>
                        {project.category}
                      </span>
                    </div>

                    <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className='text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='text-xs text-gray-400 px-2 py-1'>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className='flex items-center justify-between text-xs text-gray-400'>
                      <div className='flex items-center gap-1'>
                        <Calendar size={14} />
                        <span>
                          {new Date(project.completedDate).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </span>
                      </div>

                      <div className='flex gap-3'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-white transition-colors'
                          >
                            <Github size={14} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-white transition-colors'
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-16'
            >
              <p className='text-gray-400 text-lg mb-4'>
                No projects found matching your criteria.
              </p>
              <motion.button
                onClick={() => {
                  setActiveCategory('all');
                  setShowFeaturedOnly(false);
                }}
                className='px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className='pb-20 px-4'>
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
                  Have a Project in Mind?
                </span>
              </h2>

              <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
                I&apos;m always excited to take on new challenges and bring
                innovative ideas to life. Let&apos;s discuss how we can work
                together to create something amazing.
              </p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25'
                >
                  Start a Project
                </Link>
                <Link
                  href='/about'
                  className='px-8 py-4 border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-white rounded-xl font-semibold transition-all duration-300'
                >
                  Learn More About Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
