import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BASE_URL: 'https://restaurant-kvn3.onrender.com',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'restaurant-kvn3.onrender.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
