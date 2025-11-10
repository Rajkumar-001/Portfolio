import express, { Router } from 'express';
import {
  sendContactMessage,
  getAllContactMessages,
  markAsRead,
  deleteContactMessage,
} from '../controllers/contactController';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middleware/errorHandler';

const router: Router = express.Router();

// POST send contact message
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  handleValidationErrors,
  sendContactMessage
);

// GET all contact messages
router.get('/', getAllContactMessages);

// PUT mark message as read
router.put('/:id/read', markAsRead);

// DELETE contact message
router.delete('/:id', deleteContactMessage);

export default router;
