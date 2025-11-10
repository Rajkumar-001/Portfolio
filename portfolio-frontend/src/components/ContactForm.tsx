'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactAPI } from '../services/api';
import { ContactMessage } from '../types/index';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await contactAPI.send(formData);

      if (response.success) {
        setStatus('success');
        setMessage("Message sent successfully! I'll get back to you soon. 🎉");
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(
        error.response?.data?.message ||
          'Failed to send message. Please try again.'
      );

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const inputClasses =
    'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700/80 transition-all duration-300 backdrop-blur-sm';

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='card max-w-2xl relative overflow-hidden'
    >
      {/* Animated background gradient */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0'
        animate={{ opacity: focusedField ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className='relative z-10'>
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2'
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className='text-slate-400 text-sm mb-8'
        >
          Let&apos;s discuss your next project or opportunity
        </motion.p>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Name */}
          <motion.div variants={itemVariants}>
            <motion.label
              htmlFor='name'
              className='block text-sm font-semibold text-slate-300 mb-2'
              animate={{
                color:
                  focusedField === 'name' ? '#60a5fa' : '#cbd5e1',
              }}
            >
              Name
            </motion.label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className='relative'
            >
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
                placeholder='Your name'
              />
              <motion.div
                className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500'
                animate={{
                  width:
                    focusedField === 'name' ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <motion.label
              htmlFor='email'
              className='block text-sm font-semibold text-slate-300 mb-2'
              animate={{
                color:
                  focusedField === 'email' ? '#60a5fa' : '#cbd5e1',
              }}
            >
              Email
            </motion.label>
            <motion.div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
                placeholder='your.email@example.com'
              />
              <motion.div
                className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500'
                animate={{
                  width:
                    focusedField === 'email' ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Subject */}
          <motion.div variants={itemVariants}>
            <motion.label
              htmlFor='subject'
              className='block text-sm font-semibold text-slate-300 mb-2'
              animate={{
                color:
                  focusedField === 'subject'
                    ? '#60a5fa'
                    : '#cbd5e1',
              }}
            >
              Subject
            </motion.label>
            <motion.div className='relative'>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
                placeholder='What is this about?'
              />
              <motion.div
                className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500'
                animate={{
                  width:
                    focusedField === 'subject' ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <motion.label
              htmlFor='message'
              className='block text-sm font-semibold text-slate-300 mb-2'
              animate={{
                color:
                  focusedField === 'message'
                    ? '#60a5fa'
                    : '#cbd5e1',
              }}
            >
              Message
            </motion.label>
            <motion.div className='relative'>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder='Tell me about your project...'
              />
              <motion.div
                className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500'
                animate={{
                  width:
                    focusedField === 'message' ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Character count */}
          <motion.p
            variants={itemVariants}
            className='text-xs text-slate-500 text-right'
          >
            {formData.message.length} characters
          </motion.p>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='submit'
              disabled={status === 'loading'}
              className='btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg'
            >
              <AnimatePresence mode='wait'>
                {status === 'loading' ? (
                  <motion.div
                    key='loading'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex items-center gap-2'
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                    />
                    Sending...
                  </motion.div>
                ) : (
                  <motion.div
                    key='send'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Send Message ✨
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </form>

        {/* Status Message */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`mt-6 p-4 rounded-lg text-sm font-medium flex items-center gap-3 ${
                status === 'success'
                  ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/40 text-green-200 border border-green-500/30'
                  : 'bg-gradient-to-r from-red-900/40 to-rose-900/40 text-red-200 border border-red-500/30'
              } backdrop-blur-sm`}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {status === 'success' ? '✅' : '❌'}
              </motion.span>
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
