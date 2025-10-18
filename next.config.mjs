/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/community-ar-landing' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/community-ar-landing' : ''
};

export default nextConfig;