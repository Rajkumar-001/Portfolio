# Architecture & Design Principles

## Overview

This portfolio is built with **scalability, maintainability, and extensibility** at its core.

## Architecture Patterns

### 1. **MVC Pattern** (Backend)

**Model** → Database layer (Mongoose schemas)
**View** → JSON responses
**Controller** → Business logic and request handling

```
Request → Router → Controller → Service → Model → Database
                                   ↓
                              Response
```

### 2. **Component-Based** (Frontend)

Reusable, composable React components with clear responsibilities.

```
Page
├── Hero (independent)
├── Projects (fetches data, maps to cards)
├── Contact (form with validation)
└── Footer (static)
```

### 3. **Services Pattern**

Separation of concerns:
- **Controllers** - Handle HTTP requests/responses
- **Services** - Business logic (emails, utilities)
- **Models** - Data structure
- **Routes** - URL mapping

## SOLID Principles Implementation

### Single Responsibility Principle
Each file/function does ONE thing:
- `projectController.ts` - Only project requests
- `emailService.ts` - Only email logic
- `ProjectCard.tsx` - Only displays one project

### Open/Closed Principle
Easy to extend, hard to break:
```typescript
// Adding new content type (Skills)?
// Just create new Model, Controller, Routes
// Existing code unchanged ✅
```

### Liskov Substitution Principle
Interfaces work correctly:
```typescript
// All API responses follow IApiResponse<T>
// All data types follow their interfaces
// Consistent contract across app
```

### Interface Segregation Principle
Small, focused interfaces:
```typescript
// Not: IBigInterface with everything
// But: IProject, IBlog, IContactMessage (separate)
```

### Dependency Inversion Principle
Depends on abstractions:
```typescript
// Backend: Uses Mongoose (abstraction) not raw MongoDB
// Frontend: Uses API service (abstraction) not direct axios
```

## Code Extensibility Examples

### Adding a New Feature Without Breaking Anything

**Scenario: Add "Skills" section**

#### Backend Steps:
1. Create `src/models/Skill.ts`
```typescript
const skillSchema = new Schema({
  category: String,
  items: [String],
});
```

2. Create `src/controllers/skillController.ts`
```typescript
export const getSkills = async (req, res) => {
  // Get all skills
};
```

3. Create `src/routes/skills.ts`
```typescript
router.get('/', getSkills);
router.post('/', createSkill);
```

4. Add to `src/server.ts`
```typescript
import skillRoutes from './routes/skills';
app.use('/api/skills', skillRoutes);
```

**Result**: New API endpoint, zero changes to existing code ✅

#### Frontend Steps:
1. Add type to `src/types/index.ts`
```typescript
export interface ISkill {
  category: string;
  items: string[];
}
```

2. Add API to `src/services/api.ts`
```typescript
export const skillsAPI = {
  getAll: async () => {
    const response = await api.get('/skills');
    return response.data;
  },
};
```

3. Create component `src/components/SkillsGrid.tsx`
4. Use in page

**Result**: New section, zero changes to existing components ✅

### Another Example: Multiple Email Providers

Currently uses Gmail via Nodemailer.

**To add SendGrid support:**

1. Create `src/services/sendgridService.ts`
2. Implement same interface as `emailService.ts`
3. In `contactController.ts`, switch provider:
```typescript
// const emailService = require('./emailService');
const emailService = require('./sendgridService'); // Just change this
```

**All controllers work with both!** That's abstraction.

## Database Design

### MongoDB Collections

**Projects**
```json
{
  "title": "string",
  "description": "string",
  "techStack": ["string"],
  "github": "string (URL)",
  "liveLink": "string (URL)",
  "startDate": "Date",
  "featured": "boolean"
}
```

**Blogs**
```json
{
  "title": "string",
  "content": "string (markdown/HTML)",
  "tags": ["string"],
  "published": "boolean",
  "readTime": "number"
}
```

**ContactMessages**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "read": "boolean"
}
```

**SocialLinks** (Singleton)
```json
{
  "github": "string (URL)",
  "linkedin": "string (URL)",
  "leetcode": "string (URL)",
  "resumeUrl": "string (URL)",
  "email": "string",
  "phone": "string"
}
```

### Relationships

```
User (not required yet)
├── Projects (1:N) - Created by user
├── Blogs (1:N) - Written by user
└── ContactMessages (1:N) - Received by user

SocialLinks (1:1) - User's social profiles
```

When user authentication is added, integrate User model.

## API Design

### Response Format (Consistent)

**Success**:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "_id": "...",
    "title": "...",
    "..."
  }
}
```

**Error**:
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "Name is required"
}
```

### Status Codes

- `200` - OK (GET, PUT successful)
- `201` - Created (POST successful)
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Server Error

## Frontend Architecture

### Component Hierarchy

```
Layout (root wrapper)
├── Navbar (global)
├── Page Content
│   ├── Hero
│   ├── About
│   ├── Projects/Blogs/Resume
│   └── Contact
└── Footer (global)
```

### State Management

**Currently**: React hooks (useState, useEffect)

**Future**: Context API or Redux if needed

```typescript
// Pattern:
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

useEffect(() => {
  fetchData(); // via API service
}, []);
```

### Data Flow

```
Component mounts
    ↓
useEffect triggered
    ↓
API call via service
    ↓
setState with data
    ↓
Component re-renders with data
```

## Type Safety

Every piece of data has a type:

```typescript
// Frontend types in src/types/index.ts
export interface Project {
  _id: string;
  title: string;
  // ...
}

// Backend types in src/types/index.ts  
export interface IProject {
  title: string;
  // ...
}

// API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

## Error Handling

### Backend
```typescript
try {
  // Operation
} catch (error) {
  return res.status(500).json({
    success: false,
    message: error.message
  });
}
```

### Frontend
```typescript
try {
  const response = await api.get('/projects');
  setData(response.data);
} catch (error) {
  setError(error.message);
}
```

## Validation

### Backend
```typescript
// Express Validator
router.post('/', [
  body('name').notEmpty(),
  body('email').isEmail(),
  // ...
], handleValidationErrors, controller);
```

### Frontend
```typescript
// HTML5 validation + custom
<input
  type="email"
  required
  onChange={handleChange}
/>
```

## Scaling Strategy

### When to add:

1. **User Authentication**
   - Add `src/models/User.ts`
   - Add auth middleware
   - Create login/signup routes

2. **Comments/Reactions**
   - Add `src/models/Comment.ts`
   - Link to Blog via `blogId`

3. **Analytics**
   - Add `src/models/PageView.ts`
   - Track visits to projects/blogs

4. **Search**
   - Add MongoDB text indexes
   - Create `/api/search` endpoint

5. **Admin Dashboard**
   - Create new Next.js page
   - Add authentication
   - Manage content

## Performance Optimization

### Backend
- Database indexing on frequently queried fields
- Pagination for large datasets
- Caching with Redis (future)
- Compression with gzip

### Frontend
- Code splitting with Next.js
- Image optimization
- Lazy loading
- CSS minification

## Security Measures

- **CORS** configured
- **Helmet** for security headers
- **Input validation** on all endpoints
- **Email verification** for contact form
- **Environment variables** for secrets
- **MongoDB** parameterized queries (Mongoose)

## Deployment Architecture

```
GitHub Repository
    ↓
    ├─→ Backend → Railway/Render → Production API
    └─→ Frontend → Vercel → Production Site
```

Both auto-deploy on push to main.

## Future Enhancements

- ✨ User authentication
- ✨ Admin dashboard
- ✨ Blog comments
- ✨ Newsletter subscription
- ✨ Analytics tracking
- ✨ Dark/light mode toggle
- ✨ Multi-language support
- ✨ SEO optimization

---

## Summary

This architecture ensures:

✅ **Maintainability** - Easy to read and modify
✅ **Extensibility** - Easy to add features
✅ **Type Safety** - Catch errors early
✅ **Scalability** - Grows with your needs
✅ **Testability** - Easy to write tests
✅ **Reliability** - Proper error handling

The code follows industry best practices used in production applications at major tech companies.
