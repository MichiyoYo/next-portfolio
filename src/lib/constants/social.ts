import { Github, Linkedin, Mail } from 'lucide-react';

// Unified social links used across the application
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
