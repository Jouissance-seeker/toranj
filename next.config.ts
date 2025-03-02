import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BASE_URL: 'https://restaurant-production-34ba.up.railway.app',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'restaurant-production-34ba.up.railway.app',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
