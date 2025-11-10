import express, { Router } from 'express';
import {
  getSocialLinks,
  createOrUpdateSocialLinks,
} from '../controllers/socialController';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middleware/errorHandler';

const router: Router = express.Router();

// GET social links
router.get('/', getSocialLinks);

// POST/PUT create or update social links
router.post(
  '/',
  [
    body('github').isURL().withMessage('Valid GitHub URL is required'),
    body('linkedin').isURL().withMessage('Valid LinkedIn URL is required'),
    body('leetcode').isURL().withMessage('Valid LeetCode URL is required'),
    body('resumeUrl').isURL().withMessage('Valid resume URL is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
  ],
  handleValidationErrors,
  createOrUpdateSocialLinks
);

export default router;
