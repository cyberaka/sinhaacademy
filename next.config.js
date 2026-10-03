/** @type {import('next').NextConfig} */

const rewrites = () => {
  // BACKEND comes from a local .env. The production build has none (and no backend exists),
  // so skip the proxies rather than bake in an `undefined/...` destination.
  if (!process.env.BACKEND) return [];
  return [
    {
      source: '/api/:path*',
      destination: `${process.env.BACKEND}/v1/admin/api/:path*`,
    },
    {
      source: '/spimages/:path*',
      destination: `${process.env.BACKEND}/:path*`,
    },
  ];
};

const nextConfig = {
  rewrites,
  images: {
    remotePatterns: process.env.HOSTNAME
      ? [
          {
            protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
            hostname: process.env.HOSTNAME,
            port: process.env.NODE_ENV === 'production' ? '' : '5000',
            pathname: '/public/**',
          },
        ]
      : [],
  },
};

module.exports = nextConfig;
