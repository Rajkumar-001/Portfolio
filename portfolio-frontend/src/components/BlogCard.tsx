'use client';

import { motion } from 'framer-motion';
import { Blog } from '../types/index';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.article
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='card group'
    >
      {/* Thumbnail */}
      {blog.thumbnail && (
        <div className='mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden'>
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
        </div>
      )}

      {/* Date and Read Time */}
      <div className='flex items-center gap-2 text-slate-400 text-sm mb-3'>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        <span>•</span>
        <span>{blog.readTime} min read</span>
      </div>

      {/* Title */}
      <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-smooth'>
        {blog.title}
      </h3>

      {/* Excerpt */}
      <p className='text-slate-300 text-sm mb-4 line-clamp-2'>
        {blog.excerpt}
      </p>

      {/* Tags */}
      <div className='mb-4 flex flex-wrap gap-2'>
        {blog.tags.slice(0, 2).map((tag, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full'
          >
            #{tag}
          </span>
        ))}
        {blog.tags.length > 2 && (
          <span className='px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full'>
            +{blog.tags.length - 2}
          </span>
        )}
      </div>

      {/* Read More */}
      <div className='pt-4 border-t border-slate-700'>
        <Link
          href={`/blogs/${blog._id}`}
          className='text-blue-400 hover:text-blue-300 text-sm font-semibold transition-smooth'
        >
          Read Article →
        </Link>
      </div>
    </motion.article>
  );
}
