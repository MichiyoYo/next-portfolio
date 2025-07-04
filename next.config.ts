/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
