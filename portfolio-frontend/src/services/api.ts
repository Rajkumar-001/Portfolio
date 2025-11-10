import axios, { AxiosInstance } from 'axios';
import { ApiResponse, Project, Blog, ContactMessage, SocialLinks } from '../types/index';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const projectsAPI = {
  getAll: async (page = 1, limit = 10, featured = false) => {
    const response = await api.get<ApiResponse<{ projects: Project[] }>>(
      '/projects',
      { params: { page, limit, featured } }
    );
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data;
  },

  create: async (data: Partial<Project>) => {
    const response = await api.post<ApiResponse<Project>>('/projects', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Project>) => {
    const response = await api.put<ApiResponse<Project>>(`/projects/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete<ApiResponse<null>>(`/projects/${id}`);
    return response.data;
  },
};

// Blogs API
export const blogsAPI = {
  getAll: async (page = 1, limit = 10, tag?: string) => {
    const response = await api.get<ApiResponse<{ blogs: Blog[] }>>(
      '/blogs',
      { params: { page, limit, tag } }
    );
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<ApiResponse<Blog>>(`/blogs/${id}`);
    return response.data;
  },

  create: async (data: Partial<Blog>) => {
    const response = await api.post<ApiResponse<Blog>>('/blogs', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Blog>) => {
    const response = await api.put<ApiResponse<Blog>>(`/blogs/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete<ApiResponse<null>>(`/blogs/${id}`);
    return response.data;
  },
};

// Contact API
export const contactAPI = {
  send: async (data: ContactMessage) => {
    const response = await api.post<ApiResponse<ContactMessage>>(
      '/contact',
      data
    );
    return response.data;
  },
};

// Social Links API
export const socialLinksAPI = {
  get: async () => {
    const response = await api.get<ApiResponse<SocialLinks>>('/social-links');
    return response.data;
  },

  createOrUpdate: async (data: Partial<SocialLinks>) => {
    const response = await api.post<ApiResponse<SocialLinks>>(
      '/social-links',
      data
    );
    return response.data;
  },
};

export default api;
