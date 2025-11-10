# Portfolio Frontend

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

✅ **Landing Page** - Stunning hero section with animations
✅ **About Section** - Professional introduction with skills showcase
✅ **Projects Page** - Dynamic project gallery with filtering
✅ **Blogs Page** - Blog listing with tag-based filtering
✅ **Resume Page** - Professional resume display with download
✅ **Contact Form** - Email contact form with validation
✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Animations** - Framer Motion animations
✅ **Type Safe** - Full TypeScript support

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **HTTP Client**: Axios
- **Language**: TypeScript
- **Package Manager**: npm

## Installation

### Prerequisites
- Node.js 18+
- Backend API running on `http://localhost:5000`

### Steps

1. **Navigate to frontend directory**
```bash
cd portfolio-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Update `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── projects/        # Projects page
│   ├── blogs/           # Blogs page
│   └── resume/          # Resume page
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   └── ContactForm.tsx
├── services/            # API integration
│   └── api.ts           # Axios instance and endpoints
├── types/               # TypeScript types
└── styles/              # Global CSS
```

## Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:
- Name and title
- About section content
- Skills and experience

### Update Social Links

Update social links in `src/app/page.tsx` or via backend API at `/api/social-links`

### Styling

- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Modify in `src/styles/globals.css`
- **Animations**: Check `tailwind.config.js` for keyframe animations

## Adding New Features

### Example: Adding a New Section

1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to navigation in `src/components/Navbar.tsx`
4. Style with Tailwind classes

### Example: Adding a New Page

1. Create folder under `src/app/new-page/`
2. Create `page.tsx` inside
3. Add route to navbar
4. Create API integration if needed

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `out` folder or use platform-specific instructions

## Performance Optimization

- Automatic code splitting with Next.js
- Image optimization with Next.js Image component
- CSS minification with Tailwind CSS
- Server-side rendering where beneficial

## Contributing

Guidelines for development:

1. Use TypeScript for type safety
2. Create reusable components
3. Follow Tailwind CSS conventions
4. Keep components focused and small
5. Use proper error handling

## License

MIT
