'use client';

export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      idealFor: "Emprendedore            👉 Quiero Transformar Mi Negocio que están iniciando",
      includes: "1-2 redes, contenido mensual, diseños básicos",
      emoji: "🌱",
      gradient: "from-primary-blue to-primary-pink"
    },
    {
      name: "Intermedio",
      idealFor: "Negocios que quieren dar el salto",
      includes: "+ redes, estrategia, comunidad, reportes",
      emoji: "🚀",
      gradient: "from-primary-pink to-primary-yellow",
      popular: true
    },
    {
      name: "Premium",
      idealFor: "Empresas que quieren crecer con fuerza",
      includes: "Gestión completa, campañas publicitarias, consultoría",
      emoji: "👑",
      gradient: "from-primary-yellow to-primary-blue"
    }
  ];

  return (
    <section id="precios" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-blue/5 via-white to-primary-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">✨ Planes Flexibles </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              para tu Negocio
            </span>
          </h2>
          
          <div className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 space-y-4">
            <p>
              Cada proyecto es distinto. Por eso ofrecemos planes modulables que podés adaptar según tus necesidades.
            </p>
            <p className="font-medium text-gray-700">
              Elegí la base que mejor te represente y ajustamos juntos los detalles:
            </p>
          </div>
        </div>

        {/* Tabla de planes */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          {/* Header de la tabla - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Plan</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Ideal para</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Incluye (ejemplos)</h3>
            </div>
          </div>
          
          {/* Filas de planes */}
          <div className="space-y-4 md:space-y-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  plan.popular 
                    ? 'ring-2 ring-primary-pink border-primary-pink/30 bg-gradient-to-br from-primary-light-pink/20 to-white/90' 
                    : 'border-primary-light-pink/20 hover:border-primary-blue/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-primary-pink to-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                  {/* Plan */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mr-3`}>
                        <span className="text-white text-xl">{plan.emoji}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    </div>
                    <div className="md:hidden">
                      <span className="text-sm font-semibold text-primary-blue">Plan</span>
                    </div>
                  </div>
                  
                  {/* Ideal para */}
                  <div className="text-center md:text-left">
                    <div className="md:hidden mb-1">
                      <span className="text-sm font-semibold text-primary-blue">Ideal para:</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{plan.idealFor}</p>
                  </div>
                  
                  {/* Incluye */}
                  <div className="text-center md:text-left">
                    <div className="md:hidden mb-1">
                      <span className="text-sm font-semibold text-primary-blue">Incluye:</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{plan.includes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje final y CTA */}
        <div className="text-center bg-gradient-to-br from-primary-light-pink/20 to-primary-yellow/20 rounded-3xl p-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold">Imaginá tener la tranquilidad de saber que tu negocio crece mientras vos te enfocás en lo que mejor sabés hacer.</span> <br />
            Charlemos por WhatsApp y diseñemos el plan perfecto para que <strong>conseguís más clientes</strong> y <strong>transformés tu marca</strong>.
          </p>
          
          <a
            href="https://wa.me/5493465486960?text=Hola! Me interesa conocer más sobre los planes y crear una propuesta personalizada para mi negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-pink text-white font-semibold text-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            � Solicitar Propuesta Personalizada
          </a>
        </div>
      </div>
    </section>
  );
}