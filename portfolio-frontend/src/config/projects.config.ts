/**
 * Projects Configuration
 * 
 * Define all your projects here. This data is used to populate:
 * - Projects page
 * - Project cards
 * - Portfolio overview
 * 
 * Add/remove/update projects by modifying this file only.
 */

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  featured?: boolean;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  category?: string;
}

export const PROJECTS_CONFIG = {
  title: 'My Work',
  subtitle: 'Projects I\'ve Built & Contributed To',
  description: 'A collection of my recent projects showcasing my skills in full-stack development.',

  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory',
      longDescription:
        'Built a full-stack e-commerce platform with React frontend, Node.js backend, and MongoDB database. Features include real-time inventory management, payment processing, and admin dashboard.',
      image: '/projects/ecommerce.jpg',
      featured: true,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: 'https://ecommerce-demo.com',
        github: 'https://github.com/yourusername/ecommerce',
      },
      metrics: [
        { label: 'Performance', value: '95/100' },
        { label: 'Users', value: '1000+' },
        { label: 'Transactions', value: '5000+' },
      ],
      category: 'Full Stack',
    },

    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: '/projects/taskapp.jpg',
      featured: true,
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      links: {
        live: 'https://taskapp-demo.com',
        github: 'https://github.com/yourusername/taskapp',
      },
      category: 'Frontend',
    },

    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard for business metrics',
      image: '/projects/analytics.jpg',
      technologies: ['Next.js', 'Chart.js', 'PostgreSQL', 'Node.js'],
      links: {
        live: 'https://analytics-demo.com',
        github: 'https://github.com/yourusername/analytics',
      },
      category: 'Full Stack',
    },

    {
      id: 4,
      title: 'Social Media App',
      description: 'Real-time social networking platform',
      image: '/projects/social.jpg',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      links: {
        github: 'https://github.com/yourusername/social',
      },
      category: 'Full Stack',
    },

    {
      id: 5,
      title: 'AI Chat Interface',
      description: 'Chat application powered by AI language models',
      image: '/projects/chat.jpg',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      links: {
        live: 'https://ai-chat-demo.com',
        github: 'https://github.com/yourusername/ai-chat',
      },
      category: 'Frontend',
    },

    {
      id: 6,
      title: 'Mobile App',
      description: 'Cross-platform mobile application',
      image: '/projects/mobile.jpg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: {
        github: 'https://github.com/yourusername/mobile',
      },
      category: 'Mobile',
    },
  ] as Project[],

  // Filter options for projects page
  categories: ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'],

  // Call to action after projects
  cta: {
    title: 'Interested in a Project?',
    description: 'Let\'s discuss your ideas and bring them to life.',
    buttonText: 'Get In Touch',
    buttonHref: '#contact',
  },
} as const;

export type ProjectsConfig = typeof PROJECTS_CONFIG;

/**
 * To add a new project:
 * 
 * 1. Add object to projects array
 * 2. Fill in all required fields (id, title, description, image, technologies, links)
 * 3. Optional: add featured, longDescription, metrics, category
 * 4. Update image at /public/projects/[name].jpg
 * 
 * To remove a project:
 * 1. Delete the object from the projects array
 * 
 * To reorder projects:
 * 1. Reorder objects in the array (first = top)
 * 
 * The component will automatically handle:
 * - Rendering all projects
 * - Filtering by category
 * - Pagination
 * - Animations
 */
