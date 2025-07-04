import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Cristina Lester - Full Stack Engineer + UX Designer',
    default: 'Cristina Lester - Full Stack Developer',
  },
  description:
    'Full Stack Engineer + UX Designer specialized in React, TypeScipt, JavaScript and new, exciting web technologise with a sprinkle of AI',
  keywords: [
    'developer',
    'react',
    'typescript',
    'ux',
    'portfolio',
    'fullstack',
    'frontend',
    'optimization',
  ],
  authors: [{ name: 'Cristina Lester' }],
  creator: 'Cristina Lester',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cristinalester.rocks',
    title: 'Cristina Lester | Full Stack Engineer + UX Designer',
    description:
      'Full Stack Engineer + UX Designer specialized in React, TypeScipt, JavaScript and new, exciting web technologise with a sprinkle of AI',
    siteName: 'Cristina Lester Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
