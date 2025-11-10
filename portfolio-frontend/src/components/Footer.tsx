'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
  color: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      icon: '🐙',
      url: 'https://github.com',
      label: 'GitHub',
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: '💼',
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: '💻',
      url: 'https://leetcode.com',
      label: 'LeetCode',
      color: 'from-yellow-400 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const quickLinks = [
    { href: '/#about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/blogs', label: 'Blogs', icon: '📝' },
    { href: '/resume', label: 'Resume', icon: '📄' },
  ];

  return (
    <footer className='relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50 py-16'>
      {/* Decorative background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4'
            >
              Raj Kumar
            </motion.h3>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Full-stack developer passionate about building scalable and
              maintainable solutions. Currently at GoComet, crafting the future
              of logistics.
            </p>
            <motion.div
              className='mt-4 flex gap-2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className='w-2 h-2 bg-green-500 rounded-full'
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className='text-xs text-green-400 font-semibold'>
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold text-white mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className='text-slate-400 hover:text-blue-400 text-sm font-medium transition-smooth flex items-center gap-2 group'
                  >
                    <motion.span
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 20 }}
                      className='inline-block'
                    >
                      {link.icon}
                    </motion.span>
                    <span className='relative'>
                      {link.label}
                      <motion.span
                        className='absolute bottom-0 left-0 h-0.5 bg-blue-400'
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold text-white mb-6'>Connect</h3>
            <div className='flex gap-4'>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  onHoverStart={() => setHoveredSocial(link.label)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className='relative w-12 h-12 flex items-center justify-center text-2xl rounded-lg transition-all duration-300'
                  title={link.label}
                >
                  {/* Background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-lg opacity-0`}
                    animate={{
                      opacity:
                        hoveredSocial === link.label ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <span className='relative z-10'>{link.icon}</span>

                  {/* Border glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-br ${link.color} bg-clip-padding opacity-0`}
                    animate={{
                      opacity:
                        hoveredSocial === link.label ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            <p className='text-xs text-slate-500 mt-4'>
              Let&apos;s connect and create something amazing together!
            </p>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <motion.div
          className='mb-8'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ originX: 0 }}
        >
          <div className='h-px bg-gradient-to-r from-slate-700 via-blue-500/50 to-slate-700' />
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className='text-slate-400 text-sm mb-4'>
            © {currentYear}{' '}
            <span className='font-bold text-white'>Raj Kumar Pandey</span>. All
            rights reserved.
          </p>
          <motion.div
            className='flex items-center justify-center gap-2 text-xs text-slate-500'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Built with</span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
              className='inline-block'
            >
              ❤️
            </motion.span>
            <span>
              using{' '}
              <motion.span
                className='font-semibold text-blue-400'
                whileHover={{ scale: 1.1 }}
              >
                Next.js
              </motion.span>
              {' & '}
              <motion.span
                className='font-semibold text-cyan-400'
                whileHover={{ scale: 1.1 }}
              >
                Tailwind CSS
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className='text-white text-xl'>↑</span>
        </motion.button>
      </div>
    </footer>
  );
}
