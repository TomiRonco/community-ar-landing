'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: "📱",
      title: "Gestión de Redes Sociales",
      description: "Administración completa de tus perfiles, creación de contenido y engagement con tu audiencia."
    },
    {
      icon: "🎨",
      title: "Diseño Gráfico",
      description: "Creamos diseños únicos y atractivos que reflejan la personalidad de tu marca en cada publicación."
    },
    {
      icon: "🌐",
      title: "Desarrollo Web - Landing Pages",
      description: "Creamos landing pages optimizadas para conversión que capturan leads y generan resultados."
    },
    {
      icon: "🛒",
      title: "Tiendas Online",
      description: "E-commerce completo con pasarelas de pago, gestión de inventario y experiencia de usuario optimizada."
    },
    {
      icon: "⚡",
      title: "Aplicaciones SaaS",
      description: "Desarrollo de software como servicio escalable y seguro para automatizar procesos de negocio."
    },
    {
      icon: "🔍",
      title: "SEO y Marketing Digital",
      description: "Optimización para buscadores y estrategias de marketing digital para aumentar tu visibilidad online."
    },
    {
      icon: "📊",
      title: "Análisis y Reportes",
      description: "Métricas detalladas y análisis de rendimiento para optimizar tus estrategias digitales."
    },
    {
      icon: "💬",
      title: "Consultoría Digital",
      description: "Asesoramiento estratégico personalizado para impulsar el crecimiento de tu presencia digital."
    }
  ];

  return (
    <section id="servicios" className="py-12 bg-gradient-to-br from-primary-blue/5 via-white to-primary-pink/5">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Soluciones Completas para </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              Tu Éxito Digital
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde estrategias de redes sociales hasta desarrollo web avanzado, 
            ofrecemos todo lo que necesitas para destacar en el mundo digital.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-blue/30 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover effect */}
              <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-blue to-primary-pink mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}