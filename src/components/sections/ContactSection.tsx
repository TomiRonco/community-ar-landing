'use client';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-primary-yellow/5 via-white to-primary-light-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900">¿Listo para Transformar </span>
            <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block">
              Tu Presencia Digital?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Estamos ubicados en Alcorta, Santa Fe, pero trabajamos con clientes de toda Argentina. 
            <strong className="text-primary-blue"> ¡Empezá tu transformación digital hoy!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Información de contacto */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="group flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-light-pink/20 hover:shadow-xl transition-all duration-300 hover:border-primary-blue/30 min-h-[72px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-light-pink to-primary-blue rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-base sm:text-lg md:text-xl text-white">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 group-hover:text-primary-blue transition-colors">Ubicación</h4>
                  <p className="text-gray-600 text-sm sm:text-lg">Alcorta, Santa Fe, Argentina</p>
                </div>
              </div>
              
              <div className="group flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-light-pink/20 hover:shadow-xl transition-all duration-300 hover:border-primary-pink/30 min-h-[72px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-blue to-primary-pink rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-base sm:text-lg md:text-xl text-white">💬</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 group-hover:text-primary-pink transition-colors">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5493465486960" 
                    className="text-primary-blue hover:text-primary-pink transition-colors font-semibold text-sm sm:text-lg break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +54 9 3465 486960
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-light-pink/20 hover:shadow-xl transition-all duration-300 hover:border-primary-pink/30 min-h-[72px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-pink to-primary-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-base sm:text-lg md:text-xl text-white">📸</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 group-hover:text-primary-pink transition-colors">Instagram</h4>
                  <a 
                    href="https://instagram.com/communityar_" 
                    className="text-primary-pink hover:text-primary-blue transition-colors font-semibold text-sm sm:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @communityar_
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-primary-blue/10 rounded-2xl sm:rounded-3xl transform rotate-1 sm:rotate-3"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary-light-pink/20 shadow-2xl">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                    ¡Empezá Hoy Mismo!
                  </span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Contanos sobre tu proyecto y recibí una <strong className="text-primary-blue">consulta gratuita personalizada</strong>. 
                  Te ayudamos a diseñar la estrategia perfecta para tu negocio.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <a
                    href="https://wa.me/5493465486960?text=Hola! Me gustaria ver ejemplos de trabajos realizados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-primary-blue to-primary-pink text-white font-semibold py-4 sm:py-4 px-4 sm:px-6 rounded-xl text-center transition-all duration-300 hover:from-primary-pink hover:to-primary-blue shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base md:text-lg min-h-[52px] flex items-center justify-center"
                  >
                    🎨 ¿Querés que te muestre ejemplos?
                  </a>
                  
                  <a
                    href="https://instagram.com/communityar_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-primary-pink to-primary-yellow text-white font-semibold py-4 sm:py-4 px-4 sm:px-6 rounded-xl text-center transition-all duration-300 hover:from-primary-yellow hover:to-primary-pink shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base md:text-lg min-h-[52px] flex items-center justify-center"
                  >
                    📸 Seguinos en Instagram
                  </a>
                </div>
                
                {/* Trust indicators */}
                <div className="pt-4 sm:pt-6 border-t border-primary-light-pink/30">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center justify-center space-x-2 text-gray-500 py-2">
                      <span className="text-primary-blue text-sm sm:text-lg flex-shrink-0">⚡</span>
                      <span>Respuesta en 2h</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-500 py-2">
                      <span className="text-primary-pink text-sm sm:text-lg flex-shrink-0">🎯</span>
                      <span>Consulta gratuita</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-500 py-2">
                      <span className="text-primary-blue text-sm sm:text-lg flex-shrink-0">🤝</span>
                      <span>Sin compromiso</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}