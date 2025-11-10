# Portfolio Backend API

A production-grade REST API built with Node.js, Express, and MongoDB for managing portfolio content.

## Features

✅ **Projects Management** - CRUD operations for projects with filtering and pagination
✅ **Blogs Management** - Publish and manage blog posts with tags
✅ **Contact Form** - Receive messages with email notifications
✅ **Social Links** - Centralized social media and resume links management
✅ **Email Service** - Automated email notifications using Nodemailer
✅ **Type Safe** - Full TypeScript support
✅ **Error Handling** - Comprehensive error handling and validation
✅ **CORS Enabled** - Ready for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Email**: Nodemailer
- **Validation**: Express Validator
- **Security**: Helmet, CORS

## Installation

### Prerequisites
- Node.js 16+
- MongoDB instance (local or cloud)
- Gmail account with app password (for email service)

### Steps

1. **Clone and navigate to backend directory**
```bash
cd portfolio-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

Update `.env` with your credentials:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:3000
CONTACT_EMAIL=rpandeya12345@gmail.com
```

4. **Start the development server**
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects (paginated, filterable)
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Blogs
- `GET /api/blogs` - Get all blogs (paginated, filterable by tag)
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)
- `PUT /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete message

### Social Links
- `GET /api/social-links` - Get social links and resume URL
- `POST /api/social-links` - Create or update social links

## Response Format

All responses follow a consistent format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

## Error Handling

The API includes comprehensive error handling with proper HTTP status codes and error messages.

## Production Deployment

To build and run in production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── models/          # MongoDB schemas
├── controllers/     # Request handlers
├── routes/          # API routes
├── services/        # Business logic (email, etc.)
├── middleware/      # Express middleware
├── config/          # Configuration (database)
├── types/           # TypeScript types
└── server.ts        # Main entry point
```

## Contributing

Guidelines for extending this API:

1. Keep models and controllers separated
2. Use TypeScript for type safety
3. Add validation to all inputs
4. Follow error handling patterns
5. Document new endpoints

## License

MIT
