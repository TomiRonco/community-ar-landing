export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://community-ar-landing.vercel.app/#organization",
  "name": "Community AR",
  "alternateName": "Community AR - Community Management",
  "description": "Especialistas en Community Management, Desarrollo Web y Marketing Digital en Santa Fe, Argentina",
  "url": "https://community-ar-landing.vercel.app",
  "telephone": "+54 9 3465 486960",
  "email": "info@communityar.com",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alcorta",
    "addressLocality": "Alcorta",
    "addressRegion": "Santa Fe",
    "postalCode": "2467",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0561,
    "longitude": -61.1137
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Alcorta",
      "containedInPlace": {
        "@type": "State",
        "name": "Santa Fe"
      }
    },
    {
      "@type": "City",
      "name": "Rosario",
      "containedInPlace": {
        "@type": "State", 
        "name": "Santa Fe"
      }
    },
    {
      "@type": "City",
      "name": "Villa Constitución",
      "containedInPlace": {
        "@type": "State",
        "name": "Santa Fe"
      }
    },
    {
      "@type": "City",
      "name": "Casilda", 
      "containedInPlace": {
        "@type": "State",
        "name": "Santa Fe"
      }
    },
    {
      "@type": "City",
      "name": "Venado Tuerto",
      "containedInPlace": {
        "@type": "State",
        "name": "Santa Fe"
      }
    },
    {
      "@type": "State", 
      "name": "Santa Fe"
    },
    {
      "@type": "Country",
      "name": "Argentina"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -33.0561,
      "longitude": -61.1137
    },
    "geoRadius": "100000"
  },
  "priceRange": "$$",
  "currenciesAccepted": "ARS",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "openingHours": "Mo-Fr 09:00-18:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "40",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.instagram.com/communityar_",
    "https://www.facebook.com/communityar",
    "https://wa.me/5493465486960"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Marketing Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Management",
          "description": "Gestión profesional de redes sociales para empresas"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo Web",
          "description": "Sitios web y tiendas online que convierten visitantes en clientes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Marketing Digital",
          "description": "Estrategias publicitarias para multiplicar ventas"
        }
      }
    ]
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://community-ar-landing.vercel.app/#organization",
  "name": "Community AR",
  "url": "https://community-ar-landing.vercel.app",
  "logo": "https://community-ar-landing.vercel.app/assets/cmar.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+54 9 3465 486960",
    "contactType": "customer service",
    "areaServed": "AR",
    "availableLanguage": "Spanish"
  },
  "founder": {
    "@type": "Person",
    "name": "Community AR Team"
  },
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcorta",
      "addressRegion": "Santa Fe", 
      "addressCountry": "AR"
    }
  }
};