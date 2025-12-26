/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

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
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Optimización
  },

  // Optimización de fuentes
  optimizeFonts: true,

  // Comprimir assets
  compress: true,

  // Generar sitemap automático
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig