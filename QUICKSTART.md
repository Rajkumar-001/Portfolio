# 🚀 Quick Start Guide

## Installation & Setup (5 Minutes)

### Step 1: Backend Setup

```bash
cd portfolio-backend
npm install
cp .env.example .env
npm run dev
```

**Backend ready on**: `http://localhost:5000`

### Step 2: Frontend Setup

```bash
cd portfolio-frontend
npm install
cp .env.example .env.local
npm run dev
```

**Frontend ready on**: `http://localhost:3000`

---

## Configuration (2 Minutes)

### MongoDB Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account & cluster
3. Get connection string
4. Add to `portfolio-backend/.env`:
```env
MONGODB_URI=your_connection_string
```

### Email Setup (Gmail)
1. Enable 2FA on your Gmail
2. Get [App Password](https://myaccount.google.com/apppasswords)
3. Add to `portfolio-backend/.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=rpandeya12345@gmail.com
```

---

## Add Your Information (5 Minutes)

### Update Social Links

Open your browser and run:

```bash
# Terminal
curl -X POST http://localhost:5000/api/social-links \
  -H "Content-Type: application/json" \
  -d '{
    "github": "https://github.com/rpandeya1",
    "linkedin": "https://linkedin.com/in/rajkumarpandey",
    "leetcode": "https://leetcode.com/Rajkumar_001",
    "resumeUrl": "https://your-resume-url.pdf",
    "email": "rpandeya12345@gmail.com",
    "phone": "+91 7979878509"
  }'
```

### Update About Section

Edit `portfolio-frontend/src/app/page.tsx` (lines 40-55) with your information.

---

## Add Projects & Blogs

### Add a Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Flex-Pay",
    "description": "Secure fintech SaaS platform",
    "techStack": ["TypeScript", "React", "Node.js", "PostgreSQL"],
    "github": "https://github.com/...",
    "liveLink": "https://flex-pay.com",
    "startDate": "2024-09-01",
    "endDate": "2024-11-30",
    "featured": true
  }'
```

### Add a Blog Post

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Building Scalable APIs",
    "content": "Your blog content...",
    "excerpt": "Learn how to build...",
    "tags": ["nodejs", "backend"],
    "readTime": 5,
    "published": true
  }'
```

---

## Features Ready to Use

✅ **Landing Page** - Hero section with CTA buttons
✅ **About Section** - Skills showcase in grid
✅ **Projects Page** - Dynamic grid with filters
✅ **Blogs Page** - Posts with tag filtering
✅ **Resume Page** - Professional resume display
✅ **Contact Form** - With email notifications
✅ **Responsive Design** - Mobile friendly
✅ **Smooth Animations** - Framer Motion

---

## Extend & Customize

### Add New Section (Non-Breaking)

1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. No changes needed to existing code!

### Add New Page

1. Create `src/app/new-page/page.tsx`
2. Add to navbar in `src/components/Navbar.tsx`
3. Done!

### Add API Endpoint

1. Create model: `src/models/NewModel.ts`
2. Create controller: `src/controllers/newController.ts`
3. Create route: `src/routes/new.ts`
4. Import in `src/server.ts`
5. Backend integrated!

---

## Deploy to Production

### Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

### Backend (Railway/Render)
- Push to GitHub
- Connect to Railway/Render
- Set environment variables
- Deploy!

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB not connecting | Check URI in `.env` |
| Emails not sending | Verify Gmail app password |
| API not responding | Check backend is running on 5000 |
| Styles not loading | Restart Next.js dev server |

---

## Next Steps

1. ✅ Backend running
2. ✅ Frontend running
3. ✅ Database connected
4. ✅ Email configured
5. Add your projects
6. Add your blog posts
7. Deploy to production
8. Share with the world!

---

## File Structure

```
portfolio-backend/src/
├── models/      → Database schemas
├── controllers/ → Request handlers
├── routes/      → API endpoints
├── services/    → Email, utilities
└── server.ts    → Start here!

portfolio-frontend/src/
├── app/         → Pages
├── components/  → React components
├── services/    → API calls
└── types/       → TypeScript definitions
```

---

## API Reference

```
GET    /api/projects           # List projects
POST   /api/projects           # Create project
GET    /api/projects/:id       # Get one project
PUT    /api/projects/:id       # Update project
DELETE /api/projects/:id       # Delete project

GET    /api/blogs              # List blogs
POST   /api/blogs              # Create blog
GET    /api/blogs/:id          # Get one blog
PUT    /api/blogs/:id          # Update blog
DELETE /api/blogs/:id          # Delete blog

POST   /api/contact            # Send message
GET    /api/contact            # Get messages (admin)

GET    /api/social-links       # Get social links
POST   /api/social-links       # Update social links
```

---

## Key Features

🎨 **Modern Design** - Beautiful dark theme with blue accents
📱 **Responsive** - Works on all devices
⚡ **Fast** - Optimized with Next.js
🔒 **Secure** - Type-safe TypeScript
📧 **Email** - Automated notifications
🔄 **Scalable** - Easy to extend

---

## Support

- 📖 Read `README.md` in each folder
- 📝 Check comments in code
- 🆘 Common issues in Troubleshooting section

---

**Your professional portfolio is ready! 🎉**
