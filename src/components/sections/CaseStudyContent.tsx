'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Settings, Zap } from 'lucide-react';
import type { CaseStudy, CaseStudySection } from '@/lib/constants/case-studies';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const sectionIcons = {
  idea: Lightbulb,
  techStack: Code2,
  implementation: Settings,
  results: Zap,
};

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className='space-y-16'>
      {Object.entries(caseStudy.sections).map(([key, section]: [string, CaseStudySection], index) => {
        const IconComponent = sectionIcons[key as keyof typeof sectionIcons];
        
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50'
          >
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-2 bg-emerald-600/20 rounded-lg'>
                <IconComponent className='text-emerald-400' size={24} />
              </div>
              <h2 className='text-2xl font-bold text-white'>{section.title}</h2>
            </div>
            
            <div className='space-y-4 text-gray-300'>
              {section.content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              
              {section.subsections && (
                <div className='space-y-6 mt-6'>
                  {section.subsections.map((subsection: { title: string; content: string }, sIndex: number) => (
                    <div key={sIndex}>
                      <h3 className='text-lg font-semibold text-white mb-2'>{subsection.title}</h3>
                      <p>{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}