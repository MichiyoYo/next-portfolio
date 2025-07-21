import {
  Github,
  Code,
  Rocket,
  Database,
  Layers,
  Zap,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Package,
  Wrench,
  ExternalLink,
  Linkedin,
  Mail,
  Figma,
  BrushCleaning,
  Atom,
  Worm,
  Computer,
  Hammer,
  TestTube,
  Origami,
} from 'lucide-react';

// animations
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  whileTap: { scale: 0.95 },
};

export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// background styles
export const RICEPAPER_BG =
  "bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'7\\' cy=\\'7\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3Ccircle cx=\\'19\\' cy=\\'19\\' r=\\'1\\'/%3E%3Ccircle cx=\\'25\\' cy=\\'25\\' r=\\'1\\'/%3E%3Ccircle cx=\\'31\\' cy=\\'31\\' r=\\'1\\'/%3E%3Ccircle cx=\\'37\\' cy=\\'37\\' r=\\'1\\'/%3E%3Ccircle cx=\\'43\\' cy=\\'43\\' r=\\'1\\'/%3E%3Ccircle cx=\\'49\\' cy=\\'49\\' r=\\'1\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]";

// skills and tech stack
export const SKILLS = {
  frontend: [
    { icon: Code, label: 'TypeScript', color: 'text-blue-400', delay: 0 },
    { icon: Code, label: 'JavaScript', color: 'text-yellow-400', delay: 0 },
    { icon: Atom, label: 'React', color: 'text-cyan-400', delay: 0.1 },
    { icon: Rocket, label: 'Next.js', color: 'text-slate-300', delay: 0.2 },
    { icon: Zap, label: 'Tailwind CSS', color: 'text-teal-400', delay: 0.3 },
    {
      icon: Layers,
      label: 'MUI',
      color: 'text-emerald-400',
      delay: 0.4,
    },
    {
      icon: BrushCleaning,
      label: 'StyledComponent',
      color: 'text-pink-400',
      delay: 0.5,
    },
    { icon: Globe, label: 'HTML/CSS', color: 'text-amber-400', delay: 0.5 },
  ],
  backend: [
    {
      icon: Server,
      label: 'Node.js + Express',
      color: 'text-green-400',
      delay: 0,
    },
    { icon: Worm, label: 'Python + Django', color: 'text-teal-400', delay: 0 },
    {
      icon: Database,
      label: 'SQL/NoSQL Databases',
      color: 'text-blue-500',
      delay: 0.1,
    },
    { icon: Package, label: 'REST APIs', color: 'text-yellow-400', delay: 0.3 },
    {
      icon: Cloud,
      label: 'Cloud Computing',
      color: 'text-orange-500',
      delay: 0.4,
    },
    { icon: Wrench, label: 'Docker', color: 'text-indigo-400', delay: 0.5 },
    { icon: Origami, label: 'ORMs', color: 'text-purple-400', delay: 0.5 },
    { icon: Computer, label: 'GraphQL', color: 'text-gray-400', delay: 0.6 },
  ],
  tools: [
    { icon: GitBranch, label: 'Git', color: 'text-red-400', delay: 0 },
    { icon: Github, label: 'GitHub', color: 'text-gray-400', delay: 0.1 },
    { icon: Cpu, label: 'AI Agents', color: 'text-pink-400', delay: 0.2 },
    { icon: Terminal, label: 'VS Code', color: 'text-blue-400', delay: 0.2 },
    { icon: Figma, label: 'Figma', color: 'text-violet-400', delay: 0.3 },
    {
      icon: Hammer,
      label: 'CI/CD',
      color: 'text-slate-300',
      delay: 0.5,
    },
    { icon: TestTube, label: 'Testing', color: 'text-emerald-400', delay: 0.4 },
    {
      icon: ExternalLink,
      label: 'API Integration',
      color: 'text-gray-500',
      delay: 0.5,
    },
  ],
};

export const TECH_STACK = [
  {
    icon: Code,
    label: 'TypeScript',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Atom,
    label: 'React',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Rocket,
    label: 'Next.js',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Server,
    label: 'Node.js',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Database,
    label: 'SQL/NoSQL',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Figma,
    label: 'UX/UI',
    color: 'from-orange-400 to-orange-600',
  },
];

export const SOCIAL_LINKS = [
  {
    href: 'https://github.com/MichiyoYo',
    icon: Github,
    label: 'GitHub',
    color: 'hover:text-gray-300',
  },
  {
    href: 'https://linkedin.com/in/cristinalesterrocks',
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    href: 'mailto:contact@cristinalester.dev',
    icon: Mail,
    label: 'Email',
    color: 'hover:text-emerald-400',
  },
];

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
