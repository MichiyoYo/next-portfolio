import type { Metadata } from 'next';
import { Lekton } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

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
      <body className={`${lekton.className} antialiased overflow-x-hidden`}>
        {/* Background texture overlay - creates that rice paper effect you mentioned */}
        <div className='fixed inset-0 opacity-30 pointer-events-none'>
          {/*
            Move the SVG data URL to a variable to avoid JSX parsing issues with quotes.
          */}
          {(() => {
            const ricePaperBg =
              "bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'7\\' cy=\\'7\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3Ccircle cx=\\'19\\' cy=\\'19\\' r=\\'1\\'/%3E%3Ccircle cx=\\'25\\' cy=\\'25\\' r=\\'1\\'/%3E%3Ccircle cx=\\'31\\' cy=\\'31\\' r=\\'1\\'/%3E%3Ccircle cx=\\'37\\' cy=\\'37\\' r=\\'1\\'/%3E%3Ccircle cx=\\'43\\' cy=\\'43\\' r=\\'1\\'/%3E%3Ccircle cx=\\'49\\' cy=\\'49\\' r=\\'1\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]";
            return (
              <div
                className={`absolute inset-0 ${ricePaperBg} animate-pulse`}
              ></div>
            );
          })()}
        </div>

        <Navigation />
        <main className='relative z-10'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
