/**
 * Navigation Configuration
 * 
 * Define all navigation items, links, and structure here.
 * The Navbar component uses this config to render navigation.
 */

export const NAVIGATION_CONFIG = {
  // Logo/branding
  logo: {
    text: 'RP',
    href: '/',
  },

  // Navigation menu items
  navItems: [
    {
      label: 'Home',
      href: '/',
      icon: '🏠',
    },
    {
      label: 'Projects',
      href: '/projects',
      icon: '💼',
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: '📝',
    },
    {
      label: 'About',
      href: '/about',
      icon: '👤',
    },
  ],

  // CTA button in navbar
  ctaButton: {
    text: 'Contact',
    href: '#contact',
  },

  // Social links (mobile menu footer)
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '🔗',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🔗',
    },
  ],
} as const;

export type NavigationConfig = typeof NAVIGATION_CONFIG;
