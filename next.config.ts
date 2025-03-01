import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BASE_URL: 'http://localhost:5000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
