'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Config-based hero data structure
interface HeroConfig {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  profileImage?: string;
  primaryCTA: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
    icon?: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  skills: string[];
  badgeText: string;
  greeting: string;
}

interface HeroProps {
  config?: HeroConfig;
}

// Default config - easily customizable
const DEFAULT_HERO_CONFIG: HeroConfig = {
  name: 'Raj Kumar Pandey',
  title: 'Full Stack Developer',
  subtitle: 'Creative Problem Solver',
  description:
    'Building scalable web applications with modern technologies. Passionate about creating clean, maintainable code and solving complex problems.',
  profileImage: '/profile.jpg',
  primaryCTA: {
    text: 'View My Work',
    href: '/projects',
    icon: '→',
  },
  secondaryCTA: {
    text: 'Get In Touch',
    href: '#contact',
    icon: '💬',
  },
  stats: [
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '2+ yrs' },
    { label: 'Tech Stack', value: '20+' },
  ],
  skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
  badgeText: '✨ Welcome to my portfolio',
  greeting: 'Hello! I Build Digital Solutions',
};

export default function Hero({ config = DEFAULT_HERO_CONFIG }: HeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6 + i * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0'>
      {/* Premium gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 -z-10' />

      {/* Animated decorative background elements */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-10 left-5 md:left-20 w-40 h-40 md:w-64 md:h-64 bg-blue-600/15 rounded-full blur-3xl -z-10'
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className='absolute bottom-10 right-5 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-cyan-600/15 rounded-full blur-3xl -z-10'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20 md:py-0'>
        {/* Left Content Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='text-center lg:text-left space-y-8'
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className='flex justify-center lg:justify-start'>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 rounded-full backdrop-blur-sm group cursor-pointer'
            >
              <span className='text-lg'>{config.badgeText.split(' ')[0]}</span>
              <span className='text-slate-300 text-sm font-medium'>
                {config.badgeText.substring(2)}
              </span>
            </motion.div>
          </motion.div>

          {/* Main heading - large and impactful */}
          <motion.div variants={itemVariants}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight'>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='block'
              >
                {config.name}
              </motion.span>
            </h1>
          </motion.div>

          {/* Title with gradient */}
          <motion.div variants={itemVariants}>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
              <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient-shift'>
                {config.title}
              </span>
              <span className='text-slate-400 block text-lg md:text-xl mt-2 font-normal'>
                {config.subtitle}
              </span>
            </h2>
          </motion.div>

          {/* Description paragraph */}
          <motion.div variants={itemVariants}>
            <p className='text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl'>
              {config.description}
            </p>
          </motion.div>

          {/* CTA Buttons - sleek design */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={config.primaryCTA.href}
                className='inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group'
              >
                <span>{config.primaryCTA.text}</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className='text-lg'
                >
                  {config.primaryCTA.icon}
                </motion.span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={config.secondaryCTA.href}
                className='inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-blue-500/40 text-slate-100 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm group'
              >
                <span>{config.secondaryCTA.text}</span>
                <span className='text-lg'>{config.secondaryCTA.icon}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className='grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50'>
            {config.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className='text-center lg:text-left'
              >
                <div className='text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text'>
                  {stat.value}
                </div>
                <div className='text-xs md:text-sm text-slate-400 mt-1'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Skills - horizontal layout */}
          <motion.div variants={itemVariants} className='flex flex-wrap gap-2 justify-center lg:justify-start pt-4'>
            {config.skills.map((skill, idx) => (
              <motion.div
                key={skill}
                custom={idx}
                variants={skillVariants}
                initial='hidden'
                animate='visible'
                whileHover={{ y: -3, scale: 1.05 }}
                className='px-3 py-1.5 bg-slate-800/50 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-semibold rounded-full backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300'
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content Section - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative hidden lg:flex items-center justify-center'
        >
          {/* Rotating glow effect background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className='absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-15 -z-10'
          />

          {/* Main premium card */}
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.03, y: 20 }}
            className='relative w-full max-w-sm h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 backdrop-blur-sm group'
          >
            {/* Premium gradient background */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80' />

            {/* Animated highlight effect */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className='absolute inset-0 opacity-40'
              style={{
                background:
                  'linear-gradient(135deg, transparent 25%, rgba(59, 130, 246, 0.1) 50%, transparent 75%)',
                backgroundSize: '200% 200%',
              }}
            />

            {/* Content container */}
            <div className='relative w-full h-full flex flex-col items-center justify-center px-6'>
              {/* Animated avatar/icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className='mb-6'
              >
                <div className='w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl shadow-lg'>
                  👨‍💻
                </div>
              </motion.div>

              {/* Text content */}
              <h3 className='text-2xl font-bold text-white text-center mb-2'>
                {config.greeting}
              </h3>
              <p className='text-slate-300 text-center text-sm leading-relaxed'>
                Transform ideas into elegant, scalable solutions
              </p>

              {/* Bottom decorative elements */}
              <motion.div className='absolute bottom-8 flex gap-2'>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className='w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full'
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Floating skill cards around main card */}
          {config.skills.slice(0, 3).map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className='absolute px-4 py-2 bg-slate-800/80 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full backdrop-blur-sm cursor-pointer hover:bg-blue-500/15 transition-all'
              style={{
                top: `${idx === 0 ? '15%' : idx === 1 ? '50%' : '85%'}`,
                right: idx % 2 === 0 ? '-60px' : 'auto',
                left: idx % 2 === 0 ? 'auto' : '-60px',
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - bottom of hero */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group'
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.scrollBy({ top: 400, behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='text-center'
        >
          <div className='text-blue-400 text-2xl mb-2 group-hover:text-cyan-400 transition-colors'>
            ↓
          </div>
          <p className='text-slate-400 text-xs uppercase tracking-widest font-medium'>
            Scroll to explore
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
