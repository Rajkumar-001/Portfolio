import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/database';
import emailService from './services/emailService';

// Import routes
import projectRoutes from './routes/projects';
import blogRoutes from './routes/blogs';
import contactRoutes from './routes/contact';
import socialLinksRoutes from './routes/social-links';

// Import middleware
import {
  errorHandler,
  notFoundHandler,
} from './middleware/errorHandler';

const app: Application = express();

// ========== CORS Configuration ==========
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// ========== Middleware ==========
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========== Health Check ==========
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// ========== API Routes ==========
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/social-links', socialLinksRoutes);

// ========== Error Handling ==========
app.use(notFoundHandler);
app.use(errorHandler);

// ========== Server Startup ==========
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Verify email service
    await emailService.verifyConnection();

    // Start listening
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
      console.log(`📧 Contact email: ${process.env.CONTACT_EMAIL}`);
      console.log(`🌐 CORS origin: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
    });
  } catch (error) {
    console.error('❌ Server startup failed:', error);
    process.exit(1);
  }
};

startServer();

export default app;
