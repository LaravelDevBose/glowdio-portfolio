# Glowdio Portfolio

A modern, premium, responsive software company portfolio website built with TypeScript, React, and TanStack Start.

## Overview

Glowdio Portfolio is a professional single-page portfolio website designed to showcase a software company's vision, mission, services, projects, team, and achievements. The website features a clean, modern design with smooth animations and full responsiveness across all devices.

## Features

- **Modern Design System** - Professional color palette with premium typography
- **Responsive Layout** - Works seamlessly on mobile (320px), tablet (768px), and desktop (1440px+)
- **Smooth Animations** - Fade-up reveals, count-up statistics, and smooth scrolling
- **Project Showcase** - Highlight completed projects with images and detailed descriptions
- **Team Section** - Professional team member profiles with photos and roles
- **Testimonials** - Client feedback with auto-playing slider
- **Contact Integration** - Easy contact section with company details
- **Accessibility** - Semantic HTML5, proper heading hierarchy, and keyboard navigation
- **SEO Optimized** - Meta tags, Open Graph support, and structured markup

## Tech Stack

- **Frontend Framework**: React 19
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (20+ components)
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Installation

Prerequisites: Node.js (via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)) and npm

```sh
git clone https://github.com/LaravelDevBose/glowdio-portfolio.git
cd glowdio-portfolio
npm install
```

## Development

Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── routes/           # TanStack Router file-based routing
├── components/       # React components
├── styles/          # Global styles and Tailwind config
└── utils/           # Utility functions
```

## File-Based Routing

This project uses TanStack Start's file-based routing system:

- `index.tsx` → `/`
- `about.tsx` → `/about`
- `users/$id.tsx` → `/users/:id`
- `__root.tsx` → App shell (global layout)

For detailed routing documentation, see `src/routes/README.md`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All Rights Reserved © 2024. This project is private and proprietary.

## Contributing

This is a private portfolio project. For contributions or inquiries, please contact the owner.
