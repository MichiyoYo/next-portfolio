# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern personal portfolio website built with Next.js 15, React 19, and TypeScript. The site features a dark theme with emerald/teal accents, animated UI elements using Framer Motion, and includes sections for projects, blog, about, and contact functionality.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

### Development Notes
- The project uses Turbopack for faster development builds
- Hot reloading is enabled for all file changes
- TypeScript strict mode is enabled

## Architecture & Code Structure

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Content**: Markdown blog posts with gray-matter frontmatter parsing
- **Icons**: Lucide React
- **Font**: Lekton from Google Fonts

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navigation/Footer
│   ├── page.tsx           # Home page with hero section
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact form page
│   └── projects/          # Projects showcase
├── components/
│   ├── animations/        # Reusable animation components
│   ├── sections/          # Page sections (Navigation, Footer)
│   └── ui/               # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and constants
└── types/                 # TypeScript type definitions
```

### Key Components & Patterns

#### Layout System
- Root layout (`src/app/layout.tsx`) includes global navigation, footer, and background effects
- Uses fixed navigation with backdrop blur
- Responsive design with mobile hamburger menu

#### Animation System
- Framer Motion animations defined in `src/lib/constants.ts`
- Common animation patterns: `fadeInUp`, `staggerChildren`, `scaleOnHover`
- Scroll-triggered animations using `useScroll` and `useTransform`

#### Blog System
- Markdown files stored in `content/blog/`
- Blog utilities in `src/lib/blog.ts` handle frontmatter parsing and content processing
- Uses remark for markdown processing with GitHub Flavored Markdown support
- Automatic reading time calculation
- Support for tags, publishing status, and featured posts

#### Contact Form
- Custom hook `useContactForm` handles form state and validation
- Form validation using custom validator in `src/lib/validators.ts`
- Includes loading states and error handling
- Currently uses mock submission (see hook for API integration pattern)

### Styling Conventions
- Uses Tailwind CSS utility classes
- Dark theme with emerald/teal accent colors
- Gradient effects and backdrop blur for modern aesthetics
- Responsive design with mobile-first approach

### TypeScript Configuration
- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled
- Includes Next.js plugin for enhanced type checking

## Content Management

### Blog Posts
- Create markdown files in `content/blog/`
- Required frontmatter fields: `title`, `date`, `excerpt`, `tags`
- Optional fields: `published` (defaults to true), `featured`
- Automatic slug generation from filename
- Content processed with remark for HTML output

### Adding New Pages
- Create page components in `src/app/[page-name]/page.tsx`
- Update navigation in `src/components/sections/Navigation.tsx`
- Follow existing animation patterns for consistency

## Performance Optimizations

### Next.js Configuration
- Package import optimization for framer-motion and lucide-react
- Modern image formats (WebP, AVIF) enabled
- Turbopack for faster development builds

### Code Organization
- Utility functions centralized in `src/lib/`
- Reusable components in `src/components/ui/`
- Custom hooks for complex state management

## Development Workflow

### Adding New Features
1. Create components in appropriate directories
2. Use existing animation patterns from constants
3. Follow TypeScript strict typing
4. Test responsive behavior across devices
5. Run linting before commits

### Styling Guidelines
- Use Tailwind utility classes
- Maintain emerald/teal color scheme
- Include hover states and animations
- Ensure accessibility with proper ARIA labels
- Test dark theme appearance

### Content Updates
- Blog posts: Add markdown files to `content/blog/`
- Projects: Update projects page component
- Contact info: Update footer and contact components
- Meta tags: Update in layout.tsx for SEO