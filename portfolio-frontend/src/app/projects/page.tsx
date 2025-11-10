'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsAPI } from '@/services/api';
import { Project } from '@/types/index';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await projectsAPI.getAll(1, 100, featured);
        if (response.success && response.data) {
          setProjects(response.data.projects);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [featured]);

  return (
    <div className='min-h-screen bg-slate-900 pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='section-heading'>My Projects</h1>
          <p className='text-slate-300 max-w-2xl mx-auto mb-8'>
            A showcase of my recent work, from full-stack applications to innovative solutions.
          </p>

          {/* Filter Buttons */}
          <div className='flex justify-center gap-4'>
            <button
              onClick={() => setFeatured(false)}
              className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
                !featured
                  ? 'bg-blue-500 text-white'
                  : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFeatured(true)}
              className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
                featured
                  ? 'bg-blue-500 text-white'
                  : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className='text-center py-12'>
            <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
            <p className='text-slate-400 mt-4'>Loading projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='bg-red-900 text-red-200 p-4 rounded-lg text-center mb-8'>
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* No Projects */}
        {!loading && projects.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-slate-400 text-lg'>
              {featured ? 'No featured projects yet.' : 'No projects found.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
