import {
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
  Figma,
  BrushCleaning,
  Atom,
  Worm,
  Computer,
  Hammer,
  TestTube,
  Origami,
  Github,
} from 'lucide-react';

// Skills and tech stack for home page
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