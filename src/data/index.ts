import { Service, PricingPlan, ContactInfo, Metric, NavItem } from '@/types';

// Datos de navegación
export const navigationItems: NavItem[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Casos de Éxito', href: '#casos-exito' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Planes', href: '#precios' },
  { name: 'FAQ', href: '#preguntas-frecuentes' },
  { name: 'Contacto', href: '#contacto' }
];

// Datos de servicios
export const services: Service[] = [
  {
    icon: "📱",
    title: "Redes Sociales",
    subtitle: "Community Management",
    description: "Conseguí más clientes y transformá tu marca en una comunidad fiel que te recomienda todos los días.",
    features: [
      "Ahorrá 20 horas semanales gestionando tus redes",
      "Atraé clientes ideales con contenido que convierte",
      "Generá engagement auténtico que se traduce en ventas",
      "Conocé exactamente qué funciona con reportes claros"
    ],
    gradient: "from-primary-blue to-primary-pink"
  },
  {
    icon: "🌐",
    title: "Web & E-commerce",
    subtitle: "Desarrollo Digital",
    description: "Vendé más y automatizá tu negocio con sitios que convierten visitantes en clientes felices las 24 horas.",
    features: [
      "Conseguí más leads con páginas que convencen y venden",
      "Vendé mientras dormís con tu tienda online optimizada",
      "Ahorrá tiempo con sistemas que automatizan tu negocio",
      "Aparecé primero en Google y superá a tu competencia"
    ],
    gradient: "from-primary-pink to-primary-yellow"
  },
  {
    icon: "📈",
    title: "Marketing Digital",
    subtitle: "Estrategia & Crecimiento",
    description: "Multiplicá tus ventas con estrategias que te traen clientes de calidad y resultados que podés medir.",
    features: [
      "Conseguí clientes de calidad con campañas que funcionan",
      "Ahorrá dinero invirtiendo solo en lo que trae resultados",
      "Transformá tu marca en referente de tu industria",
      "Tomá decisiones inteligentes con datos reales de tu negocio"
    ],
    gradient: "from-primary-yellow to-primary-blue"
  }
];

// Datos de precios
export const pricingPlans: PricingPlan[] = [
  {
    name: "Básico",
    description: "Perfecto para emprendedores que arrancan",
    features: [
      "1-2 redes sociales",
      "8 posts mensuales",
      "Diseño de contenido",
      "Respuesta a comentarios",
      "Reporte mensual básico"
    ]
  },
  {
    name: "Profesional",
    description: "Ideal para empresas en crecimiento",
    features: [
      "3-4 redes sociales",
      "20 posts mensuales",
      "Stories y reels",
      "Gestión de comunidad 24/7",
      "Reportes detallados",
      "1 campaña publicitaria"
    ],
    highlighted: true
  },
  {
    name: "Empresarial",
    description: "Solución completa para grandes empresas",
    features: [
      "Todas las redes sociales",
      "Posts ilimitados",
      "Estrategia personalizada",
      "Account manager dedicado",
      "Análisis competitivo",
      "Campañas publicitarias ilimitadas"
    ]
  }
];

// Información de contacto
export const contactInfo: ContactInfo[] = [
  {
    icon: "📍",
    title: "Ubicación",
    value: "Alcorta, Santa Fe, Argentina",
    gradient: "from-primary-light-pink to-primary-blue"
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+54 9 3465 486960",
    url: "https://wa.me/5493465486960",
    gradient: "from-primary-blue to-primary-pink"
  },
  {
    icon: "📸",
    title: "Instagram",
    value: "@communityar_",
    url: "https://instagram.com/communityar_",
    gradient: "from-primary-pink to-primary-yellow"
  }
];

// Métricas principales
export const heroMetrics: Metric[] = [
  {
    icon: "📈",
    value: "+300%",
    label: "Más clientes conseguidos",
    description: "Incremento promedio en la generación de leads"
  },
  {
    icon: "⚡",
    value: "20hs",
    label: "Tiempo ahorrado semanal",
    description: "Automatización de procesos digitales"
  },
  {
    icon: "🎯",
    value: "100%",
    label: "Marcas transformadas",
    description: "Éxito garantizado en transformación digital"
  }
];