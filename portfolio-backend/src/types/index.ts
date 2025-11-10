// Project Types
export interface IProject {
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  github?: string;
  liveLink?: string;
  image?: string;
  startDate: Date;
  endDate?: Date;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Blog Types
export interface IBlog {
  _id?: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
  readTime: number;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Contact Message Types
export interface IContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt?: Date;
}

// Social Links Types
export interface ISocialLinks {
  _id?: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
  email: string;
  phone: string;
  updatedAt?: Date;
}

// API Response Types
export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Pagination Types
export interface IPaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
