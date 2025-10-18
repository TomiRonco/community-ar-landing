'use client';

export default function ServicesSection() {
  const serviceCategories = [
    {
      icon: "📱",
      title: "Redes Sociales",
      subtitle: "Community Management",
      description: "Construimos y gestionamos tu presencia en redes sociales para conectar auténticamente con tu audiencia.",
      features: [
        "Gestión completa de perfiles",
        "Creación de contenido visual y copywriting",
        "Estrategias de engagement y crecimiento",
        "Análisis de métricas y reportes"
      ],
      gradient: "from-primary-blue to-primary-pink"
    },
    {
      icon: "🌐",
      title: "Web & E-commerce",
      subtitle: "Desarrollo Digital",
      description: "Desarrollamos sitios web y tiendas online que convierten visitantes en clientes fieles.",
      features: [
        "Landing pages optimizadas para conversión",
        "Tiendas online con pasarelas de pago",
        "Aplicaciones web y sistemas SaaS",
        "Optimización SEO y performance"
      ],
      gradient: "from-primary-pink to-primary-yellow"
    },
    {
      icon: "📈",
      title: "Marketing Digital",
      subtitle: "Estrategia & Crecimiento",
      description: "Implementamos estrategias de marketing digital data-driven que generan ROI medible.",
      features: [
        "Campañas publicitarias en Google y Meta",
        "Email marketing y automatización",
        "SEO y posicionamiento orgánico", 
        "Consultoría y auditorías digitales"
      ],
      gradient: "from-primary-yellow to-primary-blue"
    }
  ];

  return (
    <section id="servicios" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-blue/5 via-white to-primary-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">Soluciones Completas para </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              Tu Éxito Digital
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Desde estrategias de redes sociales hasta desarrollo web avanzado, 
            ofrecemos todo lo que necesitas para destacar en el mundo digital.
          </p>
        </div>

        {/* Grid de categorías de servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-blue/30 transform hover:-translate-y-3"
            >
              {/* Header del bloque */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-blue transition-colors">
                  {category.title}
                </h3>
                <div className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                  {category.subtitle}
                </div>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 text-center leading-relaxed mb-8 text-lg">
                {category.description}
              </p>
              
              {/* Lista de características */}
              <div className="space-y-4 mb-8">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Acción específica por categoría */}
              <div className="text-center">
                <button className={`px-6 py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  {category.title === "Redes Sociales" && "Ver Portfolio"}
                  {category.title === "Web & E-commerce" && "Ver Proyectos"}
                  {category.title === "Marketing Digital" && "Solicitar Auditoría"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}