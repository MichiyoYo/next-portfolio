import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

// Background styles
export const RICEPAPER_BG =
  "bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'7\\' cy=\\'7\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3Ccircle cx=\\'19\\' cy=\\'19\\' r=\\'1\\'/%3E%3Ccircle cx=\\'25\\' cy=\\'25\\' r=\\'1\\'/%3E%3Ccircle cx=\\'31\\' cy=\\'31\\' r=\\'1\\'/%3E%3Ccircle cx=\\'37\\' cy=\\'37\\' r=\\'1\\'/%3E%3Ccircle cx=\\'43\\' cy=\\'43\\' r=\\'1\\'/%3E%3Ccircle cx=\\'49\\' cy=\\'49\\' r=\\'1\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]";

// Social links
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