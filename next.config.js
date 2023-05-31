/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["is3-ssl.mzstatic.com", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
