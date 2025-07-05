import {
  Github,
  Code,
  Palette,
  Rocket,
  Database,
  Layers,
  Zap,
  Globe,
  Smartphone,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Monitor,
  Package,
  Wrench,
  ExternalLink,
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

// More dynamic hover animations
export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  whileTap: { scale: 0.95 },
};

// Floating animation for decorative elements
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export // Tech stack with new emerald/teal color scheme
const techStack = {
  frontend: [
    { icon: Code, label: 'TypeScript', color: 'text-blue-400', delay: 0 },
    { icon: Palette, label: 'React', color: 'text-cyan-400', delay: 0.1 },
    { icon: Rocket, label: 'Next.js', color: 'text-slate-300', delay: 0.2 },
    { icon: Zap, label: 'Tailwind CSS', color: 'text-teal-400', delay: 0.3 },
    {
      icon: Layers,
      label: 'Framer Motion',
      color: 'text-emerald-400',
      delay: 0.4,
    },
    { icon: Globe, label: 'HTML/CSS', color: 'text-amber-400', delay: 0.5 },
  ],
  backend: [
    { icon: Server, label: 'Node.js', color: 'text-green-400', delay: 0 },
    { icon: Database, label: 'PostgreSQL', color: 'text-blue-500', delay: 0.1 },
    { icon: Cpu, label: 'GraphQL', color: 'text-pink-400', delay: 0.2 },
    { icon: Package, label: 'REST APIs', color: 'text-yellow-400', delay: 0.3 },
    { icon: Cloud, label: 'AWS', color: 'text-orange-500', delay: 0.4 },
    { icon: Wrench, label: 'Docker', color: 'text-indigo-400', delay: 0.5 },
  ],
  tools: [
    { icon: GitBranch, label: 'Git', color: 'text-red-400', delay: 0 },
    { icon: Github, label: 'GitHub', color: 'text-gray-400', delay: 0.1 },
    { icon: Terminal, label: 'VS Code', color: 'text-blue-400', delay: 0.2 },
    { icon: Monitor, label: 'Figma', color: 'text-violet-400', delay: 0.3 },
    {
      icon: Smartphone,
      label: 'Responsive Design',
      color: 'text-green-500',
      delay: 0.4,
    },
    {
      icon: ExternalLink,
      label: 'Vercel',
      color: 'text-slate-300',
      delay: 0.5,
    },
  ],
};
