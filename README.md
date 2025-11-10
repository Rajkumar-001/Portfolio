# Professional Portfolio - Full Setup Guide

A complete, production-ready portfolio website with Next.js frontend and Node.js backend.

## Project Overview

This is a **fully scalable and extensible** portfolio system designed with best practices:

- ✅ **Clean Architecture** - Separation of concerns (MVC pattern)
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **SOLID Principles** - Easy to extend and maintain
- ✅ **Professional Design** - Modern, responsive UI
- ✅ **Production Ready** - Error handling, validation, security
- ✅ **Scalable** - Can easily add new features without breaking existing code

## Directory Structure

```
PORTFOLIO/
├── portfolio-backend/      # Node.js Express API
│   ├── src/
│   │   ├── models/         # MongoDB schemas
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Business logic
│   │   ├── middleware/     # Express middleware
│   │   ├── config/         # Configuration
│   │   ├── types/          # TypeScript types
│   │   └── server.ts       # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
│
└── portfolio-frontend/     # Next.js React App
    ├── src/
    │   ├── app/            # Next.js app directory
    │   ├── components/     # React components
    │   ├── services/       # API integration
    │   ├── types/          # TypeScript types
    │   └── styles/         # Global CSS
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── next.config.js
    ├── .env.example
    └── README.md
```

## Quick Start

### 1. Backend Setup

```bash
cd portfolio-backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your credentials:
# - MongoDB URI
# - Email credentials
# - Frontend URL
# - Contact email

# Start development server
npm run dev
```

**Backend runs on**: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd portfolio-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# .env.local should have:
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

**Frontend runs on**: `http://localhost:3000`

## Setting Up Services

### MongoDB

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env` as `MONGODB_URI`

### Email Service (Gmail)

1. Enable 2-factor authentication on Gmail
2. Generate App Password at [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Add to `.env`:
   - `EMAIL_USER=your-email@gmail.com`
   - `EMAIL_PASSWORD=your-app-password`

## Your Personal Information

### Backend - Social Links

Make a POST request to `http://localhost:5000/api/social-links`:

```bash
curl -X POST http://localhost:5000/api/social-links \
  -H "Content-Type: application/json" \
  -d '{
    "github": "https://github.com/rpandeya1",
    "linkedin": "https://linkedin.com/in/raj-kumar-pandey",
    "leetcode": "https://leetcode.com/Rajkumar_001",
    "resumeUrl": "https://your-resume-url.pdf",
    "email": "rpandeya12345@gmail.com",
    "phone": "+91 7979878509"
  }'
```

### Frontend - Content

Edit `src/app/page.tsx` to update your name, title, and about information.

## Adding Content

### Add a Project

Make a POST request:

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Project Name",
    "description": "Short description",
    "longDescription": "Detailed description",
    "techStack": ["Tech1", "Tech2", "Tech3"],
    "github": "https://github.com/...",
    "liveLink": "https://demo.com",
    "image": "https://image-url.com",
    "startDate": "2024-09-01",
    "endDate": "2024-11-30",
    "featured": true
  }'
```

### Add a Blog Post

Make a POST request:

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Blog Title",
    "content": "Your blog content here",
    "excerpt": "Short excerpt",
    "tags": ["tag1", "tag2"],
    "thumbnail": "https://image-url.com",
    "readTime": 5,
    "published": true
  }'
```

## Extensibility

This architecture makes adding new features **simple and non-breaking**.

### Example: Adding a New Content Type (Skills)

**Backend:**

1. Create model: `src/models/Skill.ts`
2. Create controller: `src/controllers/skillController.ts`
3. Create route: `src/routes/skills.ts`
4. Import route in `src/server.ts`

**Frontend:**

1. Add type to `src/types/index.ts`
2. Add API integration to `src/services/api.ts`
3. Create component: `src/components/SkillsSection.tsx`
4. Use in page

**No breaking changes to existing code!**

## Deployment

### Backend

**Option 1: Heroku**
```bash
heroku create your-app-name
git push heroku main
```

**Option 2: Railway, Render, or AWS**
- Follow platform-specific guides
- Ensure `npm run build` and `npm start` work

### Frontend

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
```bash
npm run build
# Deploy build/ folder
```

## Environment Variables Checklist

### Backend (.env)
- [ ] `MONGODB_URI` - MongoDB connection string
- [ ] `EMAIL_USER` - Gmail address
- [ ] `EMAIL_PASSWORD` - Gmail app password
- [ ] `CONTACT_EMAIL` - Email to receive messages
- [ ] `FRONTEND_URL` - Frontend URL for CORS
- [ ] `PORT` - API port (default 5000)

### Frontend (.env.local)
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL

## Maintenance & Updates

### Regular Tasks

1. **Update Dependencies**
```bash
npm update
npm audit fix
```

2. **Monitor API Logs**
- Check MongoDB logs
- Monitor email delivery
- Track API errors

3. **Backup Data**
- Export MongoDB collections regularly
- Store in secure location

## Support & Troubleshooting

### Common Issues

**MongoDB Connection Failed**
- Check URI format
- Verify network access in MongoDB Atlas
- Ensure credentials are correct

**Emails Not Sending**
- Verify Gmail app password
- Check CONTACT_EMAIL is valid
- Review email service logs

**Frontend Can't Connect to API**
- Verify backend is running
- Check NEXT_PUBLIC_API_URL is correct
- Check CORS settings in backend

## Code Principles

This codebase follows:

- **DRY** - Don't Repeat Yourself
- **SOLID** - Single responsibility, Open/closed, Liskov, Interface, Dependency
- **Type Safety** - Strict TypeScript
- **Error Handling** - Comprehensive validation
- **Documentation** - Clear, self-documenting code

## Next Steps

1. ✅ Complete backend and frontend setup
2. ✅ Configure MongoDB and email service
3. ✅ Update personal information
4. ✅ Add your projects
5. ✅ Add your blog posts
6. ✅ Deploy to production
7. ✅ Monitor and maintain

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## License

MIT

---

**Build Something Amazing! 🚀**

Questions? Refer to individual README files in `portfolio-backend/` and `portfolio-frontend/`
