// Configuración de URLs y estructura del sitio
export const SITE_CONFIG = {
  baseUrl: 'https://community-ar-landing.vercel.app',
  
  // URLs actuales (landing page)
  currentUrls: {
    home: '/',
    inicio: '/#inicio',
    servicios: '/#servicios', 
    nosotros: '/#nosotros',
    precios: '/#precios',
    contacto: '/#contacto'
  },
  
  // URLs futuras planificadas (para expansión)
  futureUrls: {
    // Páginas de servicios específicos
    communityManagement: '/servicios/community-management',
    desarrolloWeb: '/servicios/desarrollo-web',
    marketingDigital: '/servicios/marketing-digital',
    
    // Páginas de ubicaciones
    santaFe: '/ubicaciones/santa-fe',
    rosario: '/ubicaciones/rosario',
    alcorta: '/ubicaciones/alcorta',
    
    // Blog/Contenido
    blog: '/blog',
    casos: '/casos-de-exito',
    
    // Páginas legales
    privacidad: '/privacidad',
    terminos: '/terminos',
    
    // Otras
    sobre: '/sobre-nosotros',
    contacto: '/contacto',
    presupuesto: '/presupuesto'
  },
  
  // Prioridades SEO para sitemap
  priorities: {
    home: 1.0,
    mainSections: 0.9,
    services: 0.8,
    locations: 0.7,
    blog: 0.6,
    legal: 0.3
  },
  
  // Frecuencias de cambio
  changeFreq: {
    home: 'weekly',
    services: 'weekly', 
    about: 'monthly',
    contact: 'weekly',
    blog: 'daily',
    legal: 'yearly'
  }
};

// Función para generar canonical URLs
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.baseUrl}${cleanPath}`;
}

// Función para generar meta tags básicos
export function generateBasicMeta(
  title: string,
  description: string,
  path: string = ''
) {
  return {
    title: `${title} | Community AR`,
    description,
    canonical: getCanonicalUrl(path),
    openGraph: {
      title: `${title} | Community AR`,
      description,
      url: getCanonicalUrl(path),
      type: 'website' as const,
      locale: 'es_AR' as const,
    }
  };
}