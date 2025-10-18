# Estructura de URLs y SEO - Community AR

## 📁 Estructura Actual (Landing Page)

### URLs Principales
```
https://community-ar-landing.vercel.app/
├── #inicio        (Hero section)
├── #servicios     (Services section)  
├── #nosotros      (About section)
├── #precios       (Pricing section)
└── #contacto      (Contact section)
```

### Archivos SEO Implementados
- ✅ `/robots.txt` - Directivas para crawlers
- ✅ `/sitemap.xml` - Mapa del sitio
- ✅ `src/app/sitemap.ts` - Sitemap dinámico
- ✅ `src/app/robots.ts` - Robots dinámico
- ✅ Canonical tags en layout.tsx

## 🚀 Estructura Futura (Expansión)

### Páginas de Servicios
```
/servicios/
├── community-management/
│   ├── santa-fe/
│   ├── rosario/
│   └── alcorta/
├── desarrollo-web/
│   ├── diseño-responsive/
│   ├── tiendas-online/
│   └── landing-pages/
└── marketing-digital/
    ├── google-ads/
    ├── facebook-ads/
    └── seo-local/
```

### Páginas de Ubicaciones
```
/ubicaciones/
├── santa-fe/
│   ├── community-management-santa-fe
│   └── desarrollo-web-santa-fe
├── rosario/
│   ├── marketing-digital-rosario
│   └── agencia-digital-rosario
├── alcorta/
└── venado-tuerto/
```

### Blog y Contenido
```
/blog/
├── community-management/
├── desarrollo-web/
├── marketing-digital/
└── casos-de-exito/
```

## 🔧 Configuración SEO por Tipo de Página

### Landing Page Principal
```typescript
{
  priority: 1.0,
  changeFrequency: 'weekly',
  canonical: 'https://community-ar-landing.vercel.app/',
  robots: 'index, follow'
}
```

### Páginas de Servicios
```typescript
{
  priority: 0.8,
  changeFrequency: 'weekly',
  canonical: 'https://community-ar-landing.vercel.app/servicios/[service]',
  robots: 'index, follow'
}
```

### Páginas de Ubicaciones
```typescript
{
  priority: 0.7,
  changeFrequency: 'monthly',
  canonical: 'https://community-ar-landing.vercel.app/ubicaciones/[city]',
  robots: 'index, follow'
}
```

## 📊 Keywords por Página Futura

### /servicios/community-management
**Primary:** "community management Argentina"
**Secondary:** "gestión redes sociales", "community manager profesional"
**Long-tail:** "community management para empresas en Santa Fe"

### /servicios/desarrollo-web  
**Primary:** "desarrollo web Argentina"
**Secondary:** "diseño web responsive", "páginas web profesionales"
**Long-tail:** "desarrollo de sitios web en Santa Fe"

### /ubicaciones/santa-fe
**Primary:** "agencia marketing digital Santa Fe"
**Secondary:** "community management Santa Fe", "desarrollo web Santa Fe"  
**Long-tail:** "mejores agencias de marketing digital en Santa Fe"

### /ubicaciones/rosario
**Primary:** "marketing digital Rosario"
**Secondary:** "community management Rosario", "desarrollo web Rosario"
**Long-tail:** "agencia de marketing digital en Rosario Argentina"

## 🛠️ Implementación de Nuevas Páginas

### 1. Crear página
```bash
# Ejemplo: nueva página de servicio
mkdir -p src/app/servicios/community-management
touch src/app/servicios/community-management/page.tsx
```

### 2. Configurar metadata
```typescript
// src/app/servicios/community-management/page.tsx
import { generateBasicMeta } from '@/config/urls';

export const metadata = generateBasicMeta(
  "Community Management Profesional",
  "Gestión profesional de redes sociales para empresas en Santa Fe",
  "/servicios/community-management"
);
```

### 3. Actualizar sitemap
```typescript
// Agregar al src/app/sitemap.ts
{
  url: `${baseUrl}/servicios/community-management`,
  lastModified,
  changeFrequency: 'weekly',
  priority: 0.8,
}
```

### 4. Actualizar navegación
```typescript
// Agregar links internos en Navbar.tsx
<Link href="/servicios/community-management">
  Community Management
</Link>
```

## 🎯 Estrategia de Link Building Interno

### Estructura de Enlaces
- **Home** → Servicios específicos
- **Servicios** → Ubicaciones relevantes  
- **Ubicaciones** → Servicios locales
- **Blog** → Servicios y ubicaciones

### Anchor Text Strategy
- "community management en Santa Fe"
- "desarrollo web profesional"
- "agencia marketing digital Rosario"
- "diseño web responsive Argentina"

## ✅ Checklist para Nuevas Páginas

- [ ] Metadata única con title/description optimizados
- [ ] Canonical URL correcta
- [ ] H1 único con keyword principal
- [ ] Schema.org markup específico
- [ ] Links internos desde/hacia otras páginas
- [ ] Optimización para keywords locales
- [ ] Actualizar sitemap.xml
- [ ] Testing en Google Search Console

---

**Con esta estructura, Community AR podrá escalar de una landing page a un sitio web completo manteniendo SEO optimal en cada etapa.** 📈