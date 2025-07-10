import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Cristina Lester - a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Discover my journey, skills, and what drives my passion for creating exceptional digital experiences.',
  keywords: [
    'about cristina lester',
    'full stack developer',
    'react developer',
    'web developer story',
    'developer skills',
  ],
  openGraph: {
    title: 'About Cristina Lester - Full Stack Developer',
    description:
      'Passionate developer, problem solver. Learn about my journey in web development and what drives my passion for creating exceptional digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cristina Lester - Full Stack Developer',
    description:
      'Passionate developer, problem solver. Learn about my journey in web development.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
