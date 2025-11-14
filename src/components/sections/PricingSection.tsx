'use client';

export default function PricingSection() {
  return (
    <section id="precios" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-primary-blue/5 via-white to-primary-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">Planes que se </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              Adaptan a tus Necesidades
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Cada negocio es único, por eso creamos planes totalmente personalizados que se ajustan a tus objetivos y presupuesto.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-primary-light-pink/20 shadow-xl">
            
            {/* Características principales */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100% Personalizado</h3>
                  <p className="text-gray-600">Diseñamos cada plan según tus objetivos específicos y el tamaño de tu negocio.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Presupuesto Flexible</h3>
                  <p className="text-gray-600">Ajustamos los servicios para que obtengas el máximo valor dentro de tu presupuesto.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Escalable</h3>
                  <p className="text-gray-600">Empezá con lo básico y escalá a medida que tu negocio crece.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sin Compromisos Largos</h3>
                  <p className="text-gray-600">Trabajamos mes a mes para que tengas la flexibilidad que necesitás.</p>
                </div>
              </div>
            </div>

            {/* Mensaje y CTA */}
            <div className="text-center bg-gradient-to-br from-primary-light-pink/20 to-primary-yellow/20 rounded-2xl p-6 sm:p-8">
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold">¿Listo para transformar tu presencia digital?</span><br className="hidden sm:block" />
                Contanos sobre tu negocio y armamos una propuesta a tu medida.
              </p>
              
              <a
                href="https://wa.me/5493465486960?text=Hola! Me interesa conocer más sobre los planes y crear una propuesta personalizada para mi negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-blue to-primary-pink text-white font-semibold text-base sm:text-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[44px]"
              >
                <span className="mr-2">💬</span>
                Solicitar Propuesta Personalizada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}