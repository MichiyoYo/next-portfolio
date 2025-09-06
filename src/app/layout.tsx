import type { Metadata } from 'next';
import { Lekton } from 'next/font/google';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

const lekton = Lekton({
  weight: '400',
  variable: '--font-lekton',
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
    url: 'https://cristinalester.dev',
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
      <body className={`${lekton.className} antialiased overflow-x-hidden`}>

        <Navigation />
        <main className='relative z-10'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
