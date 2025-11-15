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
    title: "Gestión de Redes Sociales",
    subtitle: "",
    description: "Construimos presencia digital con coherencia y propósito.",
    features: [
      "Estrategia",
      "Contenido",
      "Planificación"
    ],
    gradient: "from-primary-blue to-primary-pink"
  },
  {
    icon: "🎨",
    title: "Branding y Estilo Visual",
    subtitle: "",
    description: "Creamos identidades que comunican. Tu marca, con una imagen sólida y profesional en cada detalle.",
    features: [],
    gradient: "from-primary-pink to-primary-yellow"
  },
  {
    icon: "📸",
    title: "Fotografía y Contenido Visual",
    subtitle: "",
    description: "Mostrá lo que hacés con imágenes que venden. Fotografía profesional para destacar tu producto.",
    features: [],
    gradient: "from-primary-yellow to-primary-light-pink"
  },
  {
    icon: "🌐",
    title: "Páginas Web y Tienda Online",
    subtitle: "",
    description: "Llevamos tu marca al siguiente nivel digital. Sitios modernos, funcionales y optimizados para convertir.",
    features: [],
    gradient: "from-primary-light-pink to-primary-blue"
  },
  {
    icon: "💻",
    title: "Programación y Desarrollo a Medida",
    subtitle: "",
    description: "Soluciones digitales que se adaptan a tu negocio. Desde automatizaciones hasta sistemas personalizados.",
    features: [],
    gradient: "from-primary-blue to-primary-pink"
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