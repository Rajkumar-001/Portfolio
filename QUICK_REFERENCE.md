# ⚡ Quick Reference - Config-First Architecture

## 🎯 At a Glance

```
┌─────────────────────────────────────────┐
│  CONFIG FILES (What to show)            │
│  ├── hero.config.ts                     │
│  ├── projects.config.ts                 │
│  ├── navigation.config.ts               │
│  ├── theme.config.ts                    │
│  └── footer.config.ts                   │
├─────────────────────────────────────────┤
│  COMPONENTS (How to show it)            │
│  ├── Hero.tsx                           │
│  ├── Projects.tsx                       │
│  ├── Navbar.tsx                         │
│  └── Footer.tsx                         │
├─────────────────────────────────────────┤
│  STYLES (How it looks)                  │
│  └── src/styles/globals.css             │
└─────────────────────────────────────────┘
```

---

## 📋 Most Common Changes

### 1. Change Your Name
**File:** `src/config/hero.config.ts`
```typescript
name: 'Your Name Here',
```

### 2. Add a Project
**File:** `src/config/projects.config.ts`
```typescript
{
  id: 999,
  title: 'Project Name',
  description: 'What it does',
  image: '/projects/image.jpg',
  technologies: ['Tech1', 'Tech2'],
  links: {
    live: 'https://url.com',
    github: 'https://github.com/user/repo',
  },
}
```

### 3. Update Social Links
**File:** `src/config/footer.config.ts`
```typescript
{
  name: 'GitHub',
  url: 'https://github.com/YOUR_USERNAME',
  icon: '🔗',
  color: 'hover:text-slate-400',
}
```

### 4. Change Primary Color
**File:** `src/config/theme.config.ts`
```typescript
primary: {
  500: '#YOUR_COLOR_HEX',
  600: '#DARKER_VERSION',
}
```

### 5. Update Skills
**File:** `src/config/hero.config.ts`
```typescript
skills: ['React', 'Node.js', 'Your Skill'],
```

---

## 🗂️ Config File Locations

```
src/config/
├── hero.config.ts          → Name, title, bio, skills
├── projects.config.ts      → All projects & descriptions
├── navigation.config.ts    → Menu items & links
├── theme.config.ts         → Colors, fonts, spacing
└── footer.config.ts        → Social, contact, links
```

---

## 💻 Component Usage Pattern

```typescript
// Import config
import { HERO_CONFIG } from '@/config/hero.config';
import Hero from '@/components/Hero';

// Use component with config
<Hero config={HERO_CONFIG} />

// Override specific values
<Hero config={{ ...HERO_CONFIG, name: 'Different Name' }} />
```

---

## ✨ Animation Classes (CSS)

```typescript
// Use in className
<div className='animate-gradient-shift'>
<div className='animate-slide-up'>
<div className='animate-scale-in'>
<div className='float'>
<div className='glow'>
```

**Available:** `slide-up`, `slide-down`, `scale-in`, `rotate`, `float`, `glow`, `pulse-soft`, `bounce-subtle`

---

## 🎨 Color Reference

### Primary Colors (Blue)
```
primary.50  → #eff6ff (lightest)
primary.500 → #3b82f6 (main)
primary.900 → #1e3a8a (darkest)
```

### Accent Colors (Cyan)
```
accent.500  → #06b6d4 (main)
accent.600  → #0891b2
```

### Neutral Colors (Slate)
```
neutral.50   → #f8fafc (lightest)
neutral.900  → #0f172a (darkest)
```

Use in config:
```typescript
import { THEME_CONFIG } from '@/config/theme.config';
const color = THEME_CONFIG.colors.primary[500];
```

---

## 📦 Available Components

| Component | Config | Purpose |
|-----------|--------|---------|
| `Hero` | `hero.config.ts` | Hero section |
| `Navbar` | `navigation.config.ts` | Navigation |
| `ProjectCard` | `projects.config.ts` | Project cards |
| `Footer` | `footer.config.ts` | Footer |
| `ContactForm` | - | Contact form |

---

## 🚀 Workflow

```
1. Edit config file
   ↓
2. Component uses updated config
   ↓
3. Website updates automatically
   ↓
4. No code changes needed!
```

---

## ✅ DO's

✅ Update config files
✅ Keep components simple
✅ Use CSS for animations
✅ Follow naming conventions
✅ Document with comments
✅ Use TypeScript types

---

## ❌ DON'Ts

❌ Hardcode values in components
❌ Put animation logic in JSX
❌ Modify component files
❌ Create duplicate configs
❌ Skip TypeScript types
❌ Ignore naming conventions

---

## 🔍 File Preview

### hero.config.ts
```typescript
export const HERO_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your bio',
  stats: [{ label: 'Projects', value: '15+' }],
  skills: ['React', 'Node.js'],
  primaryCTA: { text: 'View Work', href: '/projects' },
  secondaryCTA: { text: 'Contact', href: '#contact' },
};
```

### projects.config.ts
```typescript
export const PROJECTS_CONFIG = {
  title: 'My Work',
  projects: [
    {
      id: 1,
      title: 'Project Name',
      description: 'What it does',
      image: '/projects/image.jpg',
      technologies: ['React', 'Node.js'],
      links: {
        live: 'https://url.com',
        github: 'https://github.com/user/repo',
      },
    },
  ],
};
```

### footer.config.ts
```typescript
export const FOOTER_CONFIG = {
  description: 'Building web apps...',
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City',
  },
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🔗',
    },
  ],
};
```

---

## 📞 Quick Help

### "I want to change..."

| What | Where | Property |
|------|-------|----------|
| My name | `hero.config.ts` | `name` |
| My title | `hero.config.ts` | `title` |
| My bio | `hero.config.ts` | `description` |
| My skills | `hero.config.ts` | `skills[]` |
| A project | `projects.config.ts` | `projects[]` |
| Social link | `footer.config.ts` | `socialLinks[]` |
| Color | `theme.config.ts` | `colors.*` |
| Font | `theme.config.ts` | `typography.*` |

---

## 🎓 Example: Add a New Project

```typescript
// src/config/projects.config.ts

projects: [
  // ... existing projects
  {
    id: 7,
    title: 'My New Project',
    description: 'A cool project I built',
    image: '/projects/new-project.jpg',
    technologies: ['React', 'TypeScript'],
    links: {
      live: 'https://myproject.com',
      github: 'https://github.com/username/myproject',
    },
  },
]
```

That's it! Project appears on your portfolio automatically! 🚀

---

## 🔗 Related Docs

- **`DESIGN_SYSTEM_GUIDE.md`** - Full architecture explanation
- **`CONFIGURATION_GUIDE.md`** - Detailed config guide
- **Component code** - See actual implementations
- **`globals.css`** - All animations defined here

---

## 💡 Pro Tips

1. **Duplicate a project to create similar ones:**
```typescript
const projectTemplate = { ... };
const project1 = { ...projectTemplate, id: 1, title: 'Project 1' };
const project2 = { ...projectTemplate, id: 2, title: 'Project 2' };
```

2. **Use environment variables for sensitive data:**
```typescript
email: process.env.NEXT_PUBLIC_EMAIL || 'default@example.com'
```

3. **Create themes by duplicating configs:**
```typescript
export const HERO_THEME_DARK = { ... };
export const HERO_THEME_LIGHT = { ... };
```

---

## ✨ Remember

> **No hardcoding. Config everything. Keep components simple.**

**Files to edit:** Only `src/config/*` files!

**Files to NOT edit:** Components, styles (unless adding new animations)

Happy customizing! 🎉
