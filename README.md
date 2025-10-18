# 🚀 Community AR - Landing Page

**Landing Page profesional para servicios de Community Management y Marketing Digital desarrollada con Next.js 14, TypeScript y Tailwind CSS.**

![Community AR](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

## 📋 Descripción

Landing page moderna y responsive diseñada para **Community AR**, empresa especializada en Community Management, Desarrollo Web y Marketing Digital. El sitio está optimizado para conversión, rendimiento y experiencia de usuario en todos los dispositivos.

### 🎯 Objetivo del Proyecto

Crear una presencia digital profesional que convierta visitantes en clientes mediante:
- Diseño atractivo y profesional
- Experiencia de usuario optimizada
- Performance superior
- SEO optimizado
- Responsive design mobile-first

## ✨ Características Principales

### 🎨 **Diseño y UX**
- ✅ **Mobile-First**: Diseño optimizado para dispositivos móviles
- ✅ **Responsive Design**: Adaptación perfecta a todos los tamaños de pantalla
- ✅ **Touch Targets**: Botones y elementos táctiles de 44px+ para accesibilidad
- ✅ **Gradientes Personalizados**: Paleta de colores única de marca
- ✅ **Animaciones Fluidas**: Microinteracciones que mejoran la experiencia

### ⚡ **Rendimiento**
- ✅ **Core Web Vitals Optimizados**: LCP, FID y CLS optimizados
- ✅ **Lazy Loading**: Carga diferida de imágenes e Instagram embeds
- ✅ **Image Optimization**: Formato WebP/AVIF con Next.js Image
- ✅ **Speed Insights**: Monitoreo en tiempo real con Vercel Analytics
- ✅ **Código Limpio**: Bundle optimizado sin dependencias innecesarias

### 🎯 **Conversión**
- ✅ **CTAs Estratégicos**: Botones de acción ubicados estratégicamente
- ✅ **WhatsApp Integration**: Contacto directo con mensajes pre-configurados
- ✅ **Social Proof**: Más de 40 clientes, testimonios con Instagram embeds
- ✅ **Trust Signals**: Indicadores de confianza y garantías

### 🔧 **Funcionalidades**
- ✅ **Navegación Suave**: Scroll suave entre secciones con navbar fijo
- ✅ **Instagram Embeds**: Posts reales integrados sin scroll interno
- ✅ **Formularios de Contacto**: Enlaces directos a WhatsApp e Instagram
- ✅ **Scroll to Top**: Botón flotante para volver al inicio

## 🛠️ Tecnologías Utilizadas

### **Frontend Framework**
- **[Next.js 14.2.5](https://nextjs.org/)** - React framework con App Router
- **[React 18](https://reactjs.org/)** - Biblioteca de UI con componentes funcionales
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

### **Styling & UI**
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **Custom Color Palette** - Gradientes personalizados de marca
- **Responsive Breakpoints** - Mobile-first con breakpoints personalizados

### **Performance & Analytics**
- **[Vercel Speed Insights](https://vercel.com/docs/concepts/speed-insights)** - Monitoreo de rendimiento
- **Next.js Image Optimization** - Optimización automática de imágenes
- **Lazy Loading** - Carga diferida de componentes pesados

### **Deployment & Hosting**
- **[Vercel](https://vercel.com/)** - Hosting y deployment automático
- **GitHub Pages** - Respaldo con export estático
- **Custom Domain** - Configuración de dominio personalizado

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Linting y code quality
- **[PostCSS](https://postcss.org/)** - Procesamiento de CSS
- **Git Workflow** - Control de versiones con commits semánticos

## 🎨 Paleta de Colores

```css
/* Colores primarios de marca */
--primary-blue: #64b1ff     /* Azul principal */
--primary-pink: #eb5497     /* Rosa principal */
--primary-yellow: #f0f47e   /* Amarillo acento */
--primary-light-pink: #f6c4d6 /* Rosa claro */

/* Gradientes personalizados */
.gradient-primary {
  background: linear-gradient(135deg, #64b1ff 0%, #eb5497 100%);
}
```

## 📱 Secciones del Sitio

### 1. **Hero Section**
- Propuesta de valor principal
- Métricas de impacto (+300% clientes, 20hs ahorradas, 100% transformación)
- CTAs principales (WhatsApp, Instagram)
- Diseño centrado y optimizado para mobile

### 2. **Servicios**
- **Redes Sociales**: Community Management especializado
- **Web & E-commerce**: Desarrollo de sitios que convierten
- **Marketing Digital**: Estrategias de crecimiento medibles
- Cards con altura automática y hover effects

### 3. **Nosotros**
- Historia y propuesta única
- Instagram embeds reales (650px altura, sin scroll)
- Social proof con métricas concretas
- Diseño de confianza y credibilidad

### 4. **Planes**
- Estructura de precios clara y flexible
- Tabla responsive optimizada para mobile
- CTAs de conversión estratégicos
- Enfoque en beneficios vs características

### 5. **Contacto**
- Información de contacto optimizada
- Touch targets de 52-72px en mobile
- Layout reordenado (CTA primero en mobile)
- Trust indicators (respuesta 2h, consulta gratuita)

### 6. **Footer**
- Diseño minimalista y centrado
- Branding "Diseñado y creado por Community AR"
- Copyright y derechos reservados

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

### **Clonar el Repositorio**
```bash
git clone https://github.com/TomiRonco/community-ar-landing.git
cd community-ar-landing
```

### **Instalar Dependencias**
```bash
npm install
# o
yarn install
```

### **Desarrollo Local**
```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

### **Build para Producción**
```bash
npm run build
# o
yarn build
```

### **Export Estático (GitHub Pages)**
```bash
npm run export
# o
yarn export
```

## 📦 Scripts Disponibles

```json
{
  "dev": "next dev",              // Servidor de desarrollo
  "build": "next build",          // Build para producción
  "start": "next start",          // Servidor de producción
  "lint": "next lint",            // Linting del código
  "export": "next build && next export" // Export estático
}
```

## 🌐 Deployment

### **Vercel (Recomendado)**
1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno si es necesario
3. Deploy automático en cada push a `main`

### **GitHub Pages**
1. Ejecutar `npm run export`
2. Subir contenido de `/out` a GitHub Pages
3. Configurar dominio personalizado si es necesario

### **Otros Proveedores**
El sitio es compatible con cualquier hosting que soporte:
- Next.js applications
- Static site hosting
- Node.js environments

## 📊 Performance Metrics

### **Core Web Vitals Objetivo**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

### **Optimizaciones Implementadas**
- ✅ Image optimization con formatos modernos
- ✅ Lazy loading de Instagram embeds
- ✅ Code splitting automático de Next.js
- ✅ CSS optimizado sin clases no utilizadas
- ✅ Throttled scroll events para performance

## 🤝 Contribuciones

Este es un proyecto privado para Community AR. Para sugerencias o mejoras:

1. Fork el proyecto
2. Crear branch para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

© 2025 Community AR. Todos los derechos reservados.

Este proyecto está desarrollado exclusivamente para Community AR y contiene branding y contenido propietario.

## 👨‍💻 Desarrollado por

**Community AR Team**
- **Website**: [community-ar-landing.vercel.app](https://community-ar-landing.vercel.app)
- **Instagram**: [@communityar_](https://instagram.com/communityar_)
- **WhatsApp**: [+54 9 3465 486960](https://wa.me/5493465486960)
- **Ubicación**: Alcorta, Santa Fe, Argentina

---

### 🏷️ Tags
`next.js` `react` `typescript` `tailwind-css` `vercel` `community-management` `marketing-digital` `landing-page` `responsive-design` `performance-optimization`

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**