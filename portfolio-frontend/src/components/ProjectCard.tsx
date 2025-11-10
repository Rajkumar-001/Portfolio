'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Project } from '../types/index';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotate: 2 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true }}
      className='card relative overflow-hidden h-full'
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 pointer-events-none'
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Project Image */}
      {project.image ? (
        <motion.div
          className='mb-4 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden relative group'
          variants={imageVariants}
          initial='initial'
          whileHover='hover'
        >
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover'
          />
          {/* Image overlay badge */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <span className='text-blue-300 font-semibold text-sm'>
              View Details
            </span>
          </motion.div>
        </motion.div>
      ) : (
        <div className='mb-4 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center'>
          <span className='text-4xl'>📦</span>
        </div>
      )}

      <div className='relative z-10'>
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className='inline-block mb-3 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-xs font-bold rounded-full'
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Project Title */}
        <motion.h3
          className='text-xl font-bold text-white mb-2'
          animate={{ color: isHovered ? '#60a5fa' : '#ffffff' }}
        >
          {project.title}
        </motion.h3>

        {/* Project Description */}
        <motion.p
          className='text-slate-300 text-sm mb-4 line-clamp-2'
          animate={{ color: isHovered ? '#cbd5e1' : '#94a3b8' }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack with animations */}
        <div className='mb-4 flex flex-wrap gap-2'>
          {project.techStack.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
              transition={{ delay: techIndex * 0.05 }}
              viewport={{ once: true }}
              className='px-3 py-1 bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-slate-200 text-xs font-semibold rounded-full border border-slate-600/40 backdrop-blur-sm'
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 3 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className='px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-400/40'
            >
              +{project.techStack.length - 3} more
            </motion.span>
          )}
        </div>

        {/* Links */}
        <motion.div
          className='flex gap-3 pt-4 border-t border-slate-700/50'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 1 }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05, x: 5 }}
              className='text-blue-400 hover:text-blue-300 text-sm font-bold transition-smooth group flex items-center gap-1'
            >
              <span>🔗 GitHub</span>
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05, x: 5 }}
              className='text-cyan-400 hover:text-cyan-300 text-sm font-bold transition-smooth group flex items-center gap-1'
            >
              <span>🌐 Live</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
