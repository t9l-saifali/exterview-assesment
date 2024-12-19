/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { appDir: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
