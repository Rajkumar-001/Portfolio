'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { socialLinksAPI } from '@/services/api';
import { SocialLinks } from '@/types/index';

export default function Home() {
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await socialLinksAPI.get();
        if (response.success && response.data) {
          setSocialLinks(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        name='Raj Kumar Pandey'
        title='Full-Stack Developer'
        description='Crafting scalable, maintainable solutions with modern technologies. Backend engineer at GoComet. Passionate about clean code and system design.'
      />

      {/* About Section */}
      <section
        id='about'
        className='py-20 bg-slate-800 border-t border-slate-700'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-12'
          >
            <h2 className='section-heading'>About Me</h2>
            <div className='max-w-3xl mx-auto text-slate-300 space-y-4'>
              <p>
                I'm a Backend Software Engineer Intern at GoComet with a passion for building
                production-grade systems. With expertise in AWS, Docker, Kubernetes, and
                modern web technologies, I focus on creating scalable and maintainable solutions.
              </p>
              <p>
                My journey includes developing fintech platforms, AI-powered mobile applications,
                and contributing to open-source projects. I'm a top-tier competitive programmer
                with a 3-star rating on CodeChef and top 14% rank on LeetCode.
              </p>
              <p>
                When I'm not coding, I enjoy teaching, mentoring, and exploring new technologies.
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                title: 'Languages',
                skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'Ruby', 'Python'],
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma'],
              },
              {
                title: 'Frontend',
                skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                title: 'DevOps & Cloud',
                skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
              },
              {
                title: 'Monitoring',
                skills: ['New Relic', 'Prometheus', 'Grafana', 'CloudWatch'],
              },
              {
                title: 'Tools',
                skills: ['Git', 'VS Code', 'Postman', 'Linux', 'Kafka'],
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='card'
              >
                <h3 className='text-lg font-bold text-blue-400 mb-4'>
                  {skillGroup.title}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-slate-900 border-t border-slate-700'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col lg:flex-row gap-12 items-start'
          >
            {/* Contact Info */}
            <div className='lg:w-1/3'>
              <h2 className='text-4xl font-bold text-white mb-8'>Let's Connect</h2>
              <div className='space-y-6'>
                <div>
                  <p className='text-slate-400 text-sm mb-2'>Email</p>
                  <a
                    href={`mailto:${socialLinks?.email || 'rpandeya12345@gmail.com'}`}
                    className='text-blue-400 hover:text-blue-300 break-all'
                  >
                    {socialLinks?.email || 'rpandeya12345@gmail.com'}
                  </a>
                </div>
                <div>
                  <p className='text-slate-400 text-sm mb-2'>Phone</p>
                  <a
                    href={`tel:${socialLinks?.phone || '+91 7979878509'}`}
                    className='text-blue-400 hover:text-blue-300'
                  >
                    {socialLinks?.phone || '+91 7979878509'}
                  </a>
                </div>
                <div>
                  <p className='text-slate-400 text-sm mb-4'>Social Links</p>
                  <div className='space-y-2'>
                    {socialLinks?.github && (
                      <a
                        href={socialLinks.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block text-blue-400 hover:text-blue-300'
                      >
                        GitHub →
                      </a>
                    )}
                    {socialLinks?.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block text-blue-400 hover:text-blue-300'
                      >
                        LinkedIn →
                      </a>
                    )}
                    {socialLinks?.leetcode && (
                      <a
                        href={socialLinks.leetcode}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block text-blue-400 hover:text-blue-300'
                      >
                        LeetCode →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:w-2/3'>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
