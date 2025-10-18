// Solo usar basePath si estamos en exportación estática (GitHub Pages)
const isStaticExport = process.env.STATIC_EXPORT === 'true';
const basePath = isStaticExport ? '/community-ar-landing' : '';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}