import express, { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';

const router: Router = express.Router();

// GET all projects with pagination and filters
router.get('/', getAllProjects);

// GET project by ID
router.get('/:id', getProjectById);

// POST create new project
router.post('/', createProject);

// PUT update project
router.put('/:id', updateProject);

// DELETE project
router.delete('/:id', deleteProject);

export default router;
