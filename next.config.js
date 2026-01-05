@'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ✅ SEGURIDAD: TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ✅ SEGURIDAD: ESLint strict mode
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // ✅ SEGURIDAD: Remover header X-Powered-By
  poweredByHeader: false,
  
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
    formats: ['image/avif', 'image/webp'],
  },

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

  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // ✅ Logging por entorno
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
}

module.exports = nextConfig
'@ | Out-File -FilePath "next.config.js" -Encoding UTF8 -Force