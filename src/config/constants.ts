// Configuración central de la aplicación
export const APP_CONFIG = {
  // Información de la empresa
  company: {
    name: "Community AR",
    description: "Especialistas en Community Management y Marketing Digital",
    location: "Alcorta, Santa Fe, Argentina",
    email: "contacto@communityar.com",
    phone: "+54 9 3465 486960",
    whatsapp: "https://wa.me/5493465486960",
    instagram: "@communityar_",
    instagramUrl: "https://instagram.com/communityar_",
    address: {
      street: "Alcorta",
      city: "Alcorta",
      state: "Santa Fe",
      zipCode: "2467",
      country: "Argentina",
      full: "Alcorta, Santa Fe 2467, Argentina"
    },
    coordinates: {
      lat: -33.0561,
      lng: -61.1137
    },
    serviceArea: [
      "Alcorta",
      "Santa Fe", 
      "Rosario",
      "Villa Constitución",
      "Casilda",
      "Venado Tuerto",
      "Argentina"
    ]
  },
  
  // SEO y palabras clave
  seo: {
    keywords: {
      primary: [
        "community management Santa Fe",
        "desarrollo web Santa Fe", 
        "marketing digital Argentina",
        "gestión redes sociales Alcorta"
      ],
      secondary: [
        "community manager profesional Santa Fe",
        "diseño web Santa Fe Argentina",
        "publicidad digital Santa Fe",
        "redes sociales empresas Argentina",
        "marketing digital Rosario",
        "community management Venado Tuerto"
      ],
      longTail: [
        "community manager para empresas en Santa Fe",
        "agencia marketing digital Santa Fe Argentina",
        "diseño de páginas web en Santa Fe",
        "gestión de redes sociales para negocios Santa Fe"
      ]
    },
    locations: [
      "Santa Fe",
      "Alcorta", 
      "Rosario",
      "Villa Constitución",
      "Casilda",
      "Venado Tuerto",
      "Argentina"
    ]
  },
  
  // URLs y enlaces
  urls: {
    website: "https://community-ar-landing.vercel.app",
    whatsappContact: "https://wa.me/5493465486960?text=Hola%2C%20quiero%20transformar%20mi%20negocio%20con%20Community%20AR",
    whatsappExamples: "https://wa.me/5493465486960?text=Hola! Me gustaria ver ejemplos de trabajos realizados",
    instagram: "https://instagram.com/communityar_",
    github: "https://github.com/TomiRonco/community-ar-landing"
  },
  
  // Métricas y estadísticas
  metrics: {
    clientsCount: "40+",
    timeSaved: "20hs",
    transformation: "100%",
    experience: "3+",
    availability: "24h"
  },
  
  // Mensajes y textos reutilizables
  messages: {
    hero: {
      badge: "🚀 Más de 40 Empresas Confían en Nosotros",
      title: "Transformamos Tu Presencia Digital",
      subtitle: "para que atraigas más clientes",
      description: "Somos especialistas en Community Management, Desarrollo Web y Marketing Digital. Te ayudamos a conseguir más clientes, ahorrar tiempo y hacer crecer tu negocio con estrategias que realmente funcionan."
    },
    trustedBy: "Más de 40 Empresas Confían en Nosotros",
    heroTitle: {
      main: "Agencia de Community Management y",
      highlight: "Marketing Digital en Argentina",
      subtitle: "Desarrollo web que atrae más clientes a tu negocio"
    },
    heroDescription: "Conseguí más clientes, ahorrá tiempo y transformá tu marca con estrategias que realmente funcionan y generan resultados que podés ver.",
    cta: {
      primary: "🚀 Transformá tu negocio hoy",
      secondary: "📞 Charlemos por WhatsApp",
      examples: "🎨 ¿Querés que te muestre ejemplos?",
      instagram: "📸 Seguinos en Instagram"
    },
    trust: {
      response: "Respuesta en 2h",
      consultation: "Consulta gratuita", 
      commitment: "Sin compromiso"
    }
  }
} as const;

// Tipos derivados para TypeScript
export type AppConfig = typeof APP_CONFIG;
export type CompanyInfo = typeof APP_CONFIG.company;
export type AppUrls = typeof APP_CONFIG.urls;
export type AppMetrics = typeof APP_CONFIG.metrics;
export type AppMessages = typeof APP_CONFIG.messages;