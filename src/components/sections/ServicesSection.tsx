'use client';

import { services } from '@/data';

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-primary-blue/15 via-primary-blue/8 to-primary-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
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

        {/* Grid de categorías de servicios - 3 arriba */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch mb-6 sm:mb-8 lg:mb-12">
          {services.slice(0, 3).map((category, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-blue/30 transform hover:-translate-y-3 flex flex-col h-full"
            >
              {/* Header del bloque */}
              <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 h-16 sm:h-20 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-blue transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <div className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent uppercase tracking-wide min-h-[2rem] flex items-center justify-center`}>
                    {category.subtitle}
                  </div>
                )}
                {category.features && category.features.length > 0 && (
                  <ul className="mt-4 space-y-2 text-center mx-auto max-w-[200px] min-h-[5rem]">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3 flex-shrink-0`}></span>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {!category.features || category.features.length === 0 && (
                  <div className="h-4"></div>
                )}
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 text-center leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg flex-grow">
                {category.description}
              </p>
              
              {/* Línea decorativa al final */}
              <div className="flex justify-center flex-shrink-0">
                <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid de 2 servicios abajo centrados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {services.slice(3, 5).map((category, index) => (
            <div
              key={index + 3}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-blue/30 transform hover:-translate-y-3 flex flex-col h-full"
            >
              {/* Header del bloque */}
              <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 h-16 sm:h-20 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-blue transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <div className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent uppercase tracking-wide min-h-[2rem] flex items-center justify-center`}>
                    {category.subtitle}
                  </div>
                )}
                {category.features && category.features.length > 0 && (
                  <ul className="mt-4 space-y-2 text-center mx-auto max-w-[200px] min-h-[5rem]">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3 flex-shrink-0`}></span>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {!category.features || category.features.length === 0 && (
                  <div className="h-4"></div>
                )}
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 text-center leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg flex-grow">
                {category.description}
              </p>
              
              {/* Línea decorativa al final */}
              <div className="flex justify-center flex-shrink-0">
                <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}