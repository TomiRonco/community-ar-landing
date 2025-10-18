'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [expandedPlans, setExpandedPlans] = useState<{[key: number]: boolean}>({});

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const plans = [
    {
      name: "Plan Básico",
      description: "Perfecto para emprendedores y pequeños negocios",
      emoji: "🌱",
      basicFeatures: [
        "Gestión de 2 redes sociales",
        "8 publicaciones por mes",
        "Diseños básicos incluidos"
      ],
      extendedFeatures: [
        "Respuesta a comentarios",
        "Reporte mensual básico",
        "Horarios de publicación optimizados"
      ]
    },
    {
      name: "Plan Profesional",
      description: "Ideal para empresas en crecimiento",
      emoji: "🚀",
      basicFeatures: [
        "Gestión de 4 redes sociales",
        "15 publicaciones por mes",
        "Diseños premium personalizados"
      ],
      extendedFeatures: [
        "Gestión completa de comunidad",
        "Estrategia de contenido",
        "Análisis detallado mensual",
        "Stories y reels incluidos"
      ],
      popular: true
    },
    {
      name: "Plan Enterprise",
      description: "Para empresas que buscan máximo impacto",
      emoji: "👑",
      basicFeatures: [
        "Gestión ilimitada de redes",
        "Contenido diario personalizado",
        "Campañas publicitarias"
      ],
      extendedFeatures: [
        "Community manager dedicado",
        "Reportes semanales avanzados",
        "Consultoría estratégica mensual",
        "Atención prioritaria 24/7"
      ]
    }
  ];

  return (
    <section id="precios" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-blue/5 via-white to-primary-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">Planes Flexibles </span>
            <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
              Adaptados a Vos
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Cada negocio es único. Por eso ofrecemos soluciones flexibles que se adaptan 
            perfectamente a tus objetivos y presupuesto.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-primary-pink border-primary-pink/30 bg-gradient-to-br from-primary-light-pink/20 to-white/80 scale-105' 
                  : 'border-primary-light-pink/20 hover:border-primary-blue/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-pink to-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">{plan.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">{plan.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                
                {/* Features */}
                <ul className="text-left space-y-3 mb-6">
                  {/* Características básicas - siempre visibles */}
                  {plan.basicFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  
                  {/* Características extendidas - expandibles */}
                  <div className={`transition-all duration-300 overflow-hidden ${expandedPlans[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {plan.extendedFeatures.map((feature, featureIndex) => (
                      <li key={`extended-${featureIndex}`} className="flex items-start mt-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </div>
                </ul>
                
                {/* Botón Ver más/Ver menos */}
                <button
                  onClick={() => togglePlan(index)}
                  className="text-primary-blue hover:text-primary-pink transition-colors duration-300 font-medium text-sm mb-6 flex items-center justify-center w-full"
                >
                  {expandedPlans[index] ? (
                    <>
                      Ver menos <span className="ml-1">↑</span>
                    </>
                  ) : (
                    <>
                      Ver más características <span className="ml-1">↓</span>
                    </>
                  )}
                </button>
                
                {/* CTA */}
                <a
                  href="https://wa.me/5493465486960?text=Hola! Me interesa conocer más sobre el plan y precios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-pink to-primary-blue text-white hover:from-primary-blue hover:to-primary-pink'
                      : 'bg-gradient-to-r from-primary-light-pink to-primary-yellow text-gray-900 hover:from-primary-yellow hover:to-primary-light-pink'
                  }`}
                >
                  💬 Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}