import { Code, Globe, Smartphone, Package } from 'lucide-react';

export const PROJECTS = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description:
      'A modern, animated portfolio built with Next.js 15 and Framer Motion featuring smooth animations and responsive design.',
    longDescription:
      'This portfolio website showcases modern web development practices using Next.js 15, TypeScript, and Framer Motion. Features include server-side rendering, optimized animations, and a fully responsive design that works seamlessly across all devices.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/cristinalester/my-portfolio',
    liveUrl: 'https://cristinalester.rocks',
    completedDate: '2024-12-01',
  },
  {
    id: 'data-transform-kit',
    title: 'Data Transform Kit',
    description:
      'A comprehensive TypeScript library for transforming data between APIs and frontend applications with 49 transformation functions.',
    longDescription:
      'Data Transform Kit is a production-ready TypeScript library built with functional programming principles. It provides 49 transformation functions across 5 categories (String, Number, Date, Object, Array), featuring bidirectional adapters, timezone handling, and intelligent type inference. The library is tree-shakeable and offers zero configuration setup.',
    image: '/api/placeholder/600/400',
    technologies: ['TypeScript', 'Lodash', 'date-fns', 'NPM'],
    category: 'library',
    featured: true,
    githubUrl: 'https://github.com/MichiyoYo/data-transformer',
    liveUrl: null,
    completedDate: '2024-08-01',
  },
  {
    id: 'retro-board-api',
    title: 'Retro Board API',
    description:
      'A RESTful API for managing collaborative retrospective boards with real-time updates and team collaboration features.',
    longDescription:
      'Retro Board API is a full-featured backend service for retrospective board management. Built with Node.js and Express, it provides JWT authentication, MongoDB data persistence, and real-time collaboration via WebSockets. Features include user management, board CRUD operations, and real-time card updates for agile teams.',
    image: '/api/placeholder/600/400',
    technologies: ['Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/MichiyoYo/retro-board-api',
    liveUrl: null,
    completedDate: '2024-07-01',
  },
  {
    id: 'experimentation-platform',
    title: 'A/B Testing Experimentation Platform',
    description:
      'Enterprise-scale platform for centralizing A/B test documentation, communications, launch capabilities, and results across multiple games.',
    longDescription:
      'Led a multidisciplinary team of 7 members over 3 years to develop a comprehensive A/B testing platform. Built with React and Node.js, the platform replaced legacy systems and integrated with complex API services. Managed feature development from concept to delivery, supporting multiple test environments and significantly increasing test volume across game portfolios.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Java', 'API Integration', 'Figma'],
    category: 'web',
    featured: true,
    githubUrl: null,
    liveUrl: null,
    completedDate: '2023-12-01',
  },
  {
    id: 'huefocus',
    title: 'HueFocus',
    description:
      'A productivity timer app built with React and TypeScript, featuring customizable color themes and Notion template integration.',
    longDescription:
      'HueFocus is a modern productivity timer application that combines the Pomodoro technique with beautiful color-based themes. Built with React, Vite, and TypeScript, it features customizable timer settings, productivity tracking, and integrates with Notion templates for enhanced workflow management.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Vite', 'TypeScript', 'styled-components'],
    category: 'web',
    featured: true,
    githubUrl: null,
    liveUrl: 'https://huefocus.app/',
    completedDate: '2024-06-01',
  },
  {
    id: 'cod-modernwarfare2',
    title: 'Call of Duty: Modern Warfare II',
    description:
      'Marketing website development for the blockbuster Call of Duty: Modern Warfare II game launch.',
    longDescription:
      'Contributed to the marketing sites team for Call of Duty: Modern Warfare II, one of the biggest gaming releases. Worked with HTML, CSS, JavaScript, jQuery, and custom CMS to create engaging promotional content and interactive features for the game launch.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Custom CMS'],
    category: 'web',
    featured: true,
    githubUrl: null,
    liveUrl: 'https://www.callofduty.com/modernwarfare2',
    completedDate: '2022-10-01',
  },
  {
    id: 'crash-team-rumble',
    title: 'Crash Team Rumble',
    description:
      'Lead developer for the official Crash Team Rumble game website, featuring interactive content and game information.',
    longDescription:
      'Served as lead developer for the Crash Team Rumble website, creating an engaging digital experience for fans of the beloved Crash Bandicoot franchise. Built with modern web technologies and integrated with custom CMS for dynamic content management.',
    image:
      'https://www.crashbandicoot.com/content/dam/atvi/Crash/crash-touchui/lava/home/game-overview/CrashTeamRumble_KEYART_REVEAL_CROP_16x9_new.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Custom CMS'],
    category: 'web',
    featured: true,
    githubUrl: null,
    liveUrl: 'https://www.crashbandicoot.com/crashteamrumble',
    completedDate: '2023-06-01',
  },
];

export const CATEGORIES = [
  { value: 'all', label: 'All Projects', icon: Package },
  { value: 'web', label: 'Web Apps', icon: Globe },
  { value: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { value: 'library', label: 'Libraries', icon: Code },
];
