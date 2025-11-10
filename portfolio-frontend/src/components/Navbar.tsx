'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/blogs', label: 'Blogs', icon: '📝' },
    { href: '/resume', label: 'Resume', icon: '📄' },
    { href: '#contact', label: 'Contact', icon: '💬' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.1,
      color: '#60a5fa',
    },
  };

  return (
    <nav className='fixed w-full top-0 z-50 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900/0 backdrop-blur-xl border-b border-slate-700/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href='/' className='text-3xl font-black text-gradient'>
              RK
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                variants={navVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
              >
                <Link
                  href={item.href}
                  className='relative px-4 py-2 text-slate-300 font-medium text-sm group'
                >
                  <span className='flex items-center gap-1'>
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      {item.icon}
                    </span>
                    {item.label}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400'
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-white focus:outline-none relative w-10 h-10 flex items-center justify-center'
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden overflow-hidden'
            >
              <div className='pb-4 space-y-1'>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className='block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium'
                    onClick={() => setIsOpen(false)}
                    whileHover={{ paddingLeft: '1.5rem' }}
                  >
                    <span className='mr-2'>{item.icon}</span>
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
