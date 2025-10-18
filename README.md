# Community AR - Landing Page

Una landing page profesional para servicios de community management desarrollada con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación Suave**: Scroll suave entre secciones con indicadores visuales
- **Paleta de Colores Personalizada**: Diseño con colores de marca únicos
- **Integración de Instagram**: Muestra publicaciones reales de Instagram
- **Animaciones Modernas**: Transiciones suaves y efectos visuales
- **SEO Optimizado**: Estructura semántica y meta tags

## 🎨 Paleta de Colores

La página utiliza una paleta de colores vibrante y profesional:

- **Azul Primario**: `#64b1ff` - Para elementos principales y CTAs
- **Rosa Vibrante**: `#eb5497` - Para acentos y elementos destacados  
- **Amarillo Brillante**: `#f0f47e` - Para botones y llamadas a la acción
- **Rosa Suave**: `#f6c4d6` - Para fondos suaves y elementos secundarios

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React para aplicaciones web
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **React 18** - Biblioteca de JavaScript para interfaces de usuario

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🛠️ Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

Para construir la aplicación para producción:

```bash
npm run build
```

## 🚀 Deploy

Para iniciar la aplicación en modo producción:

```bash
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css     # Estilos globales con Tailwind
│   ├── layout.tsx      # Layout principal de la aplicación
│   └── page.tsx        # Página principal con el contenido de la landing
├── components/         # Componentes reutilizables (futuro)
└── lib/               # Utilidades y helpers (futuro)
```

## 🎯 Características

### Hero Section
- Título llamativo con gradiente de colores
- Descripción clara de los servicios
- Botones de llamada a la acción

### Sección de Servicios
- Tres servicios principales destacados
- Iconos representativos para cada servicio
- Diseño responsivo con grid

### Call-to-Action
- Sección final para conversión
- Fondo degradado atractivo
- Botón de contacto prominente

### Footer
- Información de contacto
- Lista de servicios
- Diseño limpio y profesional

## 📱 Responsividad

La landing page está completamente optimizada para:
- Dispositivos móviles (sm)
- Tablets (md)
- Computadoras de escritorio (lg)

## 🎨 Personalización

Los colores están configurados en `tailwind.config.js` bajo la sección `colors.primary`:

```javascript
colors: {
  primary: {
    blue: '#64b1ff',
    pink: '#eb5497', 
    yellow: '#f0f47e',
    'light-pink': '#f6c4d6',
  }
}
```

## 📄 Licencia

Este proyecto está creado para uso comercial del cliente community manager.