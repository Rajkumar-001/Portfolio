'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogsAPI } from '@/services/api';
import { Blog } from '@/types/index';
import BlogCard from '@/components/BlogCard';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogsAPI.getAll(1, 100, selectedTag || undefined);
        if (response.success && response.data) {
          setBlogs(response.data.blogs);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedTag]);

  // Get unique tags from all blogs
  const allTags = Array.from(
    new Set(blogs.flatMap((blog) => blog.tags))
  );

  return (
    <div className='min-h-screen bg-slate-900 pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='section-heading'>Blog Posts</h1>
          <p className='text-slate-300 max-w-2xl mx-auto mb-8'>
            Articles about web development, system design, and tech insights.
          </p>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full transition-smooth ${
                  selectedTag === null
                    ? 'bg-blue-500 text-white'
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}
              >
                All Posts
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full transition-smooth ${
                    selectedTag === tag
                      ? 'bg-blue-500 text-white'
                      : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className='text-center py-12'>
            <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
            <p className='text-slate-400 mt-4'>Loading blog posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='bg-red-900 text-red-200 p-4 rounded-lg text-center mb-8'>
            {error}
          </div>
        )}

        {/* Blogs Grid */}
        {!loading && blogs.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {blogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        )}

        {/* No Blogs */}
        {!loading && blogs.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-slate-400 text-lg'>
              {selectedTag
                ? `No blog posts with tag "${selectedTag}".`
                : 'No blog posts yet.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
