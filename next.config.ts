/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.callofduty.com',
      },
      {
        protocol: 'https',
        hostname: 'www.crashbandicoot.com',
      },
    ],
  },
};

module.exports = nextConfig;
