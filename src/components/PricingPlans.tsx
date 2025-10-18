import AnimatedParticles from './AnimatedParticles';

export default function PricingPlans() {
  const plans = [
    {
      name: "Plan Básico",
      price: "$299",
      period: "/ mes",
      description: "Perfecto para emprendedores y pequeños negocios",
      features: [
        "Gestión de 2 redes sociales",
        "8 publicaciones por mes",
        "Diseños básicos incluidos",
        "Respuesta a comentarios",
        "Reporte mensual básico"
      ],
      popular: false,
      color: "from-primary-light-pink to-primary-pink"
    },
    {
      name: "Plan Profesional",
      price: "$599",
      period: "/ mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Gestión de 4 redes sociales",
        "20 publicaciones por mes",
        "Diseños profesionales + Stories",
        "Community management completo",
        "Reporte detallado mensual",
        "1 campaña publicitaria",
        "Análisis de competencia"
      ],
      popular: true,
      color: "from-primary-blue to-primary-pink"
    },
    {
      name: "Plan Premium",
      price: "$999",
      period: "/ mes",
      description: "Solución completa para grandes empresas",
      features: [
        "Gestión ilimitada de redes",
        "40 publicaciones por mes",
        "Diseños premium + Videos",
        "Community management 24/7",
        "Reportes semanales detallados",
        "3 campañas publicitarias",
        "Estrategia de influencers",
        "Consultoría personalizada"
      ],
      popular: false,
      color: "from-primary-yellow to-primary-blue"
    }
  ];

  return (
    <section id="planes" className="py-20 bg-white relative overflow-hidden">
      <AnimatedParticles particleCount={70} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes diseñados para tu éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-primary-blue/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-primary-blue to-primary-pink text-white text-center py-2 text-sm font-semibold">
                    ⭐ Más Popular
                  </div>
                </div>
              )}

              <div className={`h-32 bg-gradient-to-r ${plan.color} ${plan.popular ? 'mt-8' : ''}`}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5493465486960?text=Hola! Me interesa el ${plan.name} de ${plan.price}${plan.period}. ¿Podrías darme más información?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-blue to-primary-pink text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Elegir Plan</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Necesitas algo personalizado? 
          </p>
          <a
            href="https://wa.me/5493465486960?text=Hola! Necesito un proyecto personalizado. ¿Podrías ayudarme?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue font-semibold hover:text-primary-pink transition-colors inline-flex items-center space-x-1"
          >
            <span>Hablemos de tu proyecto específico</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}