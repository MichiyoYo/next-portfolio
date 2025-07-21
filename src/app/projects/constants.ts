import { Code, Globe, Smartphone, Package } from 'lucide-react';

export const PROJECTS = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description:
      'A modern, animated portfolio built with Next.js 14 and Framer Motion featuring smooth animations and responsive design.',
    longDescription:
      'This portfolio website showcases modern web development practices using Next.js 14, TypeScript, and Framer Motion. Features include server-side rendering, optimized animations, and a fully responsive design that works seamlessly across all devices.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/cristinalester/portfolio',
    liveUrl: 'https://cristinalester.dev',
    completedDate: '2024-01-15',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    longDescription:
      'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and integrated payment processing. Includes an admin dashboard for inventory management and order tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/cristinalester/ecommerce',
    liveUrl: 'https://shop-demo.cristinalester.dev',
    completedDate: '2023-11-20',
  },
  {
    id: 'task-management-app',
    title: 'Task Management Dashboard',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription:
      'Developed a comprehensive task management system with drag-and-drop functionality, real-time collaboration, and advanced filtering. Features include project timelines, team assignments, and detailed analytics.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/cristinalester/task-manager',
    liveUrl: 'https://tasks.cristinalester.dev',
    completedDate: '2023-09-15',
  },
  {
    id: 'mobile-weather-app',
    title: 'Weather Forecast App',
    description:
      'React Native weather application with location-based forecasts and beautiful animations.',
    longDescription:
      'Created a mobile weather application using React Native with features including GPS location detection, 7-day forecasts, weather alerts, and smooth animations. Integrated with multiple weather APIs for accurate data.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Weather API'],
    category: 'mobile',
    featured: false,
    githubUrl: 'https://github.com/cristinalester/weather-app',
    liveUrl: null,
    completedDate: '2023-07-10',
  },
  {
    id: 'component-library',
    title: 'UI Component Library',
    description:
      'A comprehensive React component library with TypeScript support and Storybook documentation.',
    longDescription:
      'Built a reusable component library with over 50 components, complete TypeScript support, comprehensive testing, and detailed Storybook documentation. Published as an NPM package with automated CI/CD.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
    category: 'library',
    featured: true,
    githubUrl: 'https://github.com/cristinalester/ui-components',
    liveUrl: 'https://storybook.cristinalester.dev',
    completedDate: '2023-05-20',
  },
  {
    id: 'data-visualization',
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard with real-time charts and customizable widgets.',
    longDescription:
      'Developed an analytics dashboard featuring interactive charts, real-time data updates, and customizable widgets. Includes advanced filtering, data export capabilities, and responsive design optimized for both desktop and mobile viewing.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/cristinalester/analytics-dashboard',
    liveUrl: 'https://analytics.cristinalester.dev',
    completedDate: '2023-03-12',
  },
];

export const CATEGORIES = [
  { value: 'all', label: 'All Projects', icon: Package },
  { value: 'web', label: 'Web Apps', icon: Globe },
  { value: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { value: 'library', label: 'Libraries', icon: Code },
];
