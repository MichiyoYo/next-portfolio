'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Send,
  User,
  MapPin,
  Clock,
  Coffee,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerChildren } from '@/lib/constants';
import { useContactForm } from '@/hooks/useContactForm';
import {
  FormField,
  TextAreaField,
  SubmitButton,
  StatusMessage,
} from '@/components/ui/form';

export default function ContactPage() {
  const { formData, errors, status, handleChange, handleSubmit } =
    useContactForm();

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'contact@cristinalester.dev',
      href: 'mailto:contact@cristinalester.dev',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Los Angeles, CA',
      value: 'Open to remote work',
      href: null,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond within',
      value: '24 hours',
      href: null,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const socialLinks = [
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
  ];

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
              <MessageSquare className='text-emerald-400' size={16} />
              <span className='text-emerald-400 text-sm font-medium'>
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className='text-4xl md:text-6xl font-bold text-white mb-6'
            >
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Let&apos;s Work Together
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Have a project in mind? I&apos;d love to hear about it. Whether
              you&apos;re looking for a technical co-founder, need help with a
              complex web application, or want to discuss UX improvements,
              let&apos;s start a conversation.
            </motion.p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 ${
                  method.href ? 'cursor-pointer' : ''
                }`}
                onClick={() => method.href && window.open(method.href, '_self')}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon size={24} />
                </motion.div>

                <h3 className='text-lg font-bold text-white mb-2'>
                  {method.title}
                </h3>
                <p className='text-gray-400 text-sm mb-2'>
                  {method.description}
                </p>
                <p className='text-emerald-400 font-medium'>{method.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-20 px-4 bg-slate-800/20 backdrop-blur-sm'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Send Me a Message
              </span>
            </h2>
            <p className='text-lg text-gray-300'>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8'
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <FormField
                    label='Your Name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder='Enter your full name'
                    icon={User}
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FormField
                    label='Email Address'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder='your.email@example.com'
                    icon={Mail}
                    required
                  />
                </motion.div>
              </div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FormField
                  label='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder='What would you like to discuss?'
                  icon={Sparkles}
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <TextAreaField
                  label='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  rows={6}
                  placeholder='Tell me about your project, goals, or any questions you have. The more details you provide, the better I can help you.'
                  icon={MessageSquare}
                  required
                />
              </motion.div>

              {/* Status Message */}
              {status.type !== 'idle' && status.message && (
                <StatusMessage
                  type={status.type === 'success' ? 'success' : 'error'}
                  message={status.message}
                />
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <SubmitButton
                  isLoading={status.type === 'loading'}
                  loadingText='Sending Message...'
                  icon={Send}
                >
                  Send Message
                </SubmitButton>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact & Social */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
                Connect With Me
              </span>
            </h2>
            <p className='text-lg text-gray-300 mb-8'>
              Prefer a different way to connect? Find me on these platforms
            </p>

            <div className='flex justify-center gap-6'>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Link
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`group flex items-center gap-3 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon size={20} />
                    <span className='text-gray-300 font-medium'>
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coffee Chat CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-8'
          >
            <div className='flex items-center justify-center gap-3 mb-4'>
              <Coffee className='text-emerald-400' size={24} />
              <h3 className='text-xl font-bold text-white'>
                Let&apos;s Grab Coffee
              </h3>
            </div>
            <p className='text-gray-300 text-center mb-6'>
              Sometimes the best conversations happen over coffee. If
              you&apos;re in the LA area, I&apos;d love to meet up and chat
              about your project in person.
            </p>
            <div className='text-center'>
              <Link
                href='mailto:cristina.lester@example.com?subject=Coffee%20Chat%20Request'
                className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200'
              >
                <Coffee size={18} />
                Schedule a Coffee Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
