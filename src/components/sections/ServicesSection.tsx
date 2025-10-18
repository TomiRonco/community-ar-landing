'use client';

export default function ServicesSection() {
  const serviceCategories = [
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

  return (
    <section id="servicios" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-blue/5 via-white to-primary-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900">Transformá Tu Negocio y </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              Conseguí Más Clientes
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Imaginá tener más clientes, ahorrar tiempo y ver crecer tu negocio mientras nosotros 
            nos encargamos de toda tu presencia digital.
          </p>
        </div>

        {/* Grid de categorías de servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-blue/30 transform hover:-translate-y-3 flex flex-col h-full"
            >
              {/* Header del bloque */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-blue transition-colors leading-tight">
                  {category.title}
                </h3>
                <div className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                  {category.subtitle}
                </div>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 text-center leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                {category.description}
              </p>
              
              {/* Lista de características */}
              <div className="space-y-3 sm:space-y-4 flex-grow">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Línea decorativa al final */}
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}