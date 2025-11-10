/**
 * Hero Section Configuration
 * 
 * This configuration file defines all hero section content.
 * No hardcoding in components - all data comes from here!
 * 
 * To customize:
 * 1. Update values in the HERO_CONFIG object
 * 2. The Hero component will automatically reflect changes
 * 3. You can also override via props if needed
 */

export const HERO_CONFIG = {
  // Main profile information
  name: 'Raj Kumar Pandey',
  title: 'Full Stack Developer',
  subtitle: 'Creative Problem Solver',
  
  // Hero description
  description:
    'Building scalable web applications with modern technologies. Passionate about creating clean, maintainable code and solving complex problems.',
  
  // Profile image (if using image instead of emoji)
  profileImage: '/images/profile.jpg',
  
  // Primary call-to-action button
  primaryCTA: {
    text: 'View My Work',
    href: '/projects',
    icon: '→',
  },
  
  // Secondary call-to-action button
  secondaryCTA: {
    text: 'Get In Touch',
    href: '#contact',
    icon: '💬',
  },
  
  // Statistics displayed in hero
  stats: [
    {
      label: 'Projects',
      value: '15+',
    },
    {
      label: 'Experience',
      value: '2+ yrs',
    },
    {
      label: 'Tech Stack',
      value: '20+',
    },
  ],
  
  // Skills/technologies to display
  skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
  
  // Badge text in hero header
  badgeText: '✨ Welcome to my portfolio',
  
  // Greeting message in the hero visual card
  greeting: 'Hello! I Build Digital Solutions',
} as const;

// Export type for component props
export type HeroConfig = typeof HERO_CONFIG;
