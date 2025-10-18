/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo para GitHub Pages cuando se usa exportación estática
  ...(process.env.STATIC_EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: '/community-ar-landing',
    basePath: '/community-ar-landing'
  }),
  
  // Configuración por defecto para Vercel y desarrollo
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  }
};

export default nextConfig;