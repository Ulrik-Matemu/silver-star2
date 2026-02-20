import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mapei.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
