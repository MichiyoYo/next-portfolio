'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fadeInUp, staggerChildren } from '@/lib/constants';
import { getCaseStudyBySlug } from '@/lib/utils';

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function ProjectLayout({ children, params }: ProjectLayoutProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20'>
      {/* Header */}
      <section className='py-12 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial='initial'
            animate='animate'
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className='mb-8'>
              <Link 
                href='/projects'
                className='inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-6'
              >
                <ArrowLeft size={20} />
                Back to Projects
              </Link>
              
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                {caseStudy.title}
              </h1>
              
              <p className='text-xl text-gray-300 mb-6'>
                {caseStudy.description}
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                {caseStudy.githubUrl && (
                  <a
                    href={caseStudy.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors'
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors'
                  >
                    <ExternalLink size={18} />
                    Live Site
                  </a>
                )}
              </div>

              <div className='flex items-center gap-4 text-sm text-gray-400'>
                <div className='flex items-center gap-1'>
                  <Calendar size={16} />
                  <span>{new Date(caseStudy.completedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {caseStudy.technologies.map((tech) => (
                    <span key={tech} className='px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded text-xs'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className='pb-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          {children}
        </div>
      </section>
    </main>
  );
}