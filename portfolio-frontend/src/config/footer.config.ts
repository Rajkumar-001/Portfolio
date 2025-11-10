/**
 * Footer & Contact Configuration
 * 
 * Configure footer content, social links, quick links, and contact information.
 */

export const FOOTER_CONFIG = {
  // Footer description/tagline
  description: 'Building modern web applications with a focus on user experience and performance.',

  // Quick links section
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Social links
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗',
      color: 'hover:text-slate-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '🔗',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🔗',
      color: 'hover:text-cyan-400',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '✉️',
      color: 'hover:text-red-400',
    },
  ],

  // Contact information
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country',
  },

  // Legal links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],

  // Copyright text
  copyright: {
    year: new Date().getFullYear(),
    name: 'Raj Kumar Pandey',
  },

  // Back to top button
  backToTop: {
    enabled: true,
    text: '↑ Back to top',
  },

  // Newsletter signup (optional)
  newsletter: {
    enabled: false,
    title: 'Subscribe to my newsletter',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
} as const;

export type FooterConfig = typeof FOOTER_CONFIG;

/**
 * Update social links:
 * 1. Change the 'url' property to your actual profile
 * 2. Keep the 'icon' as emoji or change it
 * 3. Update 'color' for hover effect
 * 
 * Update contact info:
 * 1. Change email, phone, location
 * 2. These will display in footer
 * 
 * Add more social platforms:
 * 1. Add new object to socialLinks array
 * 2. Provide name, url, icon, color
 */
