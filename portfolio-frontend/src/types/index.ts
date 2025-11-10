// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Project Type
export interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  github?: string;
  liveLink?: string;
  image?: string;
  startDate: string;
  endDate?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Blog Type
export interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
  readTime: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Contact Message Type
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social Links Type
export interface SocialLinks {
  _id: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
  email: string;
  phone: string;
}

// Pagination Type
export interface PaginationData<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
