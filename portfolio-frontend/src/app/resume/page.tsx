'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinksAPI } from '@/services/api';
import { SocialLinks } from '@/types/index';

export default function ResumePage() {
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await socialLinksAPI.get();
        if (response.success && response.data) {
          setSocialLinks(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch social links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <div className='min-h-screen bg-slate-900 pt-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='section-heading'>My Resume</h1>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='card space-y-8'
        >
          {/* Contact Info */}
          <div className='border-b border-slate-700 pb-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Raj Kumar Pandey</h2>
            <div className='space-y-2 text-slate-300 text-sm'>
              <p>📧 rpandeya12345@gmail.com | 📱 +91 7979878509</p>
              <div className='flex gap-4 flex-wrap'>
                {socialLinks?.github && (
                  <a
                    href={socialLinks.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300'
                  >
                    GitHub
                  </a>
                )}
                {socialLinks?.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300'
                  >
                    LinkedIn
                  </a>
                )}
                {socialLinks?.resumeUrl && (
                  <a
                    href={socialLinks.resumeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300'
                  >
                    Download Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-blue-400'>Technical Experience</h3>
            <div className='space-y-3 text-slate-300 text-sm'>
              <div>
                <p className='font-semibold text-white'>Software Engineer Intern (Backend) — GoComet</p>
                <p className='text-slate-400'>Mar 2025 – Present</p>
                <ul className='list-disc list-inside mt-2 space-y-1 ml-2'>
                  <li>Designed and deployed scalable AWS S3-based document storage system</li>
                  <li>Engineered production-grade webhook framework handling 1K+ daily events</li>
                  <li>Built real-time observability pipelines using NewRelic</li>
                  <li>Developed centralized logging solution for microservices</li>
                  <li>Automated observability and deployment workflows in CI/CD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-blue-400'>Notable Projects</h3>
            <div className='space-y-3 text-slate-300 text-sm'>
              <div>
                <p className='font-semibold text-white'>Flex-Pay</p>
                <p className='text-slate-400'>Sep 2024 – Nov 2024</p>
                <p className='text-slate-400 text-xs mt-1'>
                  TypeScript, React, Node.js, PostgreSQL, Prisma, Redux Toolkit, JWT, Docker
                </p>
                <p className='mt-2'>Secure fintech SaaS platform with real-time transaction processing and audit logging.</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Speak2Schedule</p>
                <p className='text-slate-400'>Jul 2024 – Sep 2024</p>
                <p className='text-slate-400 text-xs mt-1'>
                  Kotlin, Google Speech Recognition API, Android Calendar API, Jetpack Compose
                </p>
                <p className='mt-2'>AI-powered Android assistant converting voice commands into calendar events.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-blue-400'>Technical Skills</h3>
            <div className='space-y-2 text-slate-300 text-sm'>
              <p><span className='font-semibold'>Languages:</span> C, C++, Java, JavaScript, TypeScript, Ruby, Python</p>
              <p><span className='font-semibold'>Backend:</span> Express.js, Node.js, Prisma, Mongoose</p>
              <p><span className='font-semibold'>Frontend:</span> React.js, Next.js, Tailwind CSS</p>
              <p><span className='font-semibold'>Databases:</span> PostgreSQL, MongoDB, Redis</p>
              <p><span className='font-semibold'>Cloud & DevOps:</span> AWS (S3, EC2), Docker, Kubernetes, Jenkins, CI/CD</p>
              <p><span className='font-semibold'>Monitoring:</span> Prometheus, Grafana, New Relic</p>
              <p><span className='font-semibold'>Tools:</span> Linux, Git, VS Code, Postman, Kafka</p>
            </div>
          </div>

          {/* Achievements */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-blue-400'>Achievements</h3>
            <div className='space-y-2 text-slate-300 text-sm'>
              <p>🏆 1st place at GoComet India Hackathon with SaaS automation platform</p>
              <p>⭐ 3-star rating on CodeChef (rating: 1460, top 13K nationwide)</p>
              <p>📊 LeetCode contest rating: 1460 (top 14% globally among 800K+ participants)</p>
            </div>
          </div>

          {/* Education */}
          <div className='border-t border-slate-700 pt-6'>
            <h3 className='text-xl font-bold text-blue-400 mb-3'>Education</h3>
            <div className='text-slate-300 text-sm'>
              <p className='font-semibold'>B.Tech in Computer Science and Engineering</p>
              <p className='text-slate-400'>Lovely Professional University — CGPA: 8.1</p>
            </div>
          </div>
        </motion.div>

        {/* Download Button */}
        {socialLinks?.resumeUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-center mt-8'
          >
            <a
              href={socialLinks.resumeUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary inline-block'
            >
              Download Full Resume
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
