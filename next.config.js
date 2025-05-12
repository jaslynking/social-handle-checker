/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily disable TypeScript errors in production build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
