/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'moviliax.lat',
      },
      {
        protocol: 'https',
        hostname: 'moviliax.online',
      },
      {
        // Sanity CDN
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
