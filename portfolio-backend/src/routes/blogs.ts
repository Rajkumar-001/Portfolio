import express, { Router } from 'express';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';

const router: Router = express.Router();

// GET all blogs with pagination and filters
router.get('/', getAllBlogs);

// GET blog by ID
router.get('/:id', getBlogById);

// POST create new blog
router.post('/', createBlog);

// PUT update blog
router.put('/:id', updateBlog);

// DELETE blog
router.delete('/:id', deleteBlog);

export default router;
