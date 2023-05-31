/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['is3-ssl.mzstatic.com'],
    },
  };
  
  module.exports = nextConfig;
