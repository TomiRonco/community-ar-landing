const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/community-ar-landing' : '';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}