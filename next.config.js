/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nusantarainfrastructure.com',
        port: '',
        pathname: '/assets/images/web/logo/**',
      },
    ],
  },
};

module.exports = nextConfig;
