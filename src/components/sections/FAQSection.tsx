import { APP_CONFIG } from '@/config/constants';

const faqs = [
  {
    question: "¿Qué incluye el servicio de Community Management?",
    answer: "Nuestro servicio incluye gestión completa de redes sociales, creación de contenido estratégico, respuesta a comentarios y mensajes, análisis de métricas y reportes mensuales. Nos enfocamos en conseguir más clientes para tu negocio a través de engagement auténtico."
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados en redes sociales?",
    answer: "Generalmente empezás a ver mejoras en engagement y alcance en las primeras 2-4 semanas. Los resultados en ventas y leads suelen notarse entre el segundo y tercer mes, dependiendo de tu industria y objetivos específicos."
  },
  {
    question: "¿Trabajan con empresas de toda Argentina?",
    answer: "Sí, trabajamos con empresas de todo el país, pero nos especializamos en Santa Fe y alrededores (Alcorta, Rosario, Villa Constitución, Casilda, Venado Tuerto). Esto nos permite ofrecer un servicio más personalizado y entender mejor el mercado local."
  },
  {
    question: "¿Qué diferencia a Community AR de otras agencias?",
    answer: "Somos especialistas en marketing digital local con foco en resultados medibles. No solo gestionamos redes sociales, también creamos sitios web que convierten y estrategias integrales. Además, al estar en Santa Fe, entendemos perfectamente el mercado argentino y las necesidades de las PyMEs locales."
  },
  {
    question: "¿Cuánto cuesta el desarrollo de una página web?",
    answer: "El costo depende de la complejidad y funcionalidades requeridas. Ofrecemos desde landing pages (ideales para captar leads) hasta tiendas online completas. Todas nuestras páginas están optimizadas para móviles y motores de búsqueda. ¡Contactanos para un presupuesto personalizado!"
  },
  {
    question: "¿Ofrecen capacitación para manejar las redes sociales internamente?",
    answer: "Sí, ofrecemos programas de capacitación para equipos que quieren aprender a gestionar sus redes sociales. Incluye estrategia de contenido, herramientas de programación, análisis de métricas y mejores prácticas para cada plataforma."
  }
];

export default function FAQSection() {
  return (
    <section id="preguntas-frecuentes" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-b from-primary-yellow/10 via-gray-50 to-primary-light-pink/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de <strong>community management</strong>, <strong>desarrollo web</strong> y <strong>marketing digital</strong> en Argentina.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary-light-pink/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="bg-gradient-to-r from-primary-blue to-primary-pink text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                  ?
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed ml-9">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-600 mb-4">
            ¿Tenés otra pregunta sobre <strong>gestión de redes sociales</strong> o <strong>diseño web</strong>?
          </p>
          <a
            href={APP_CONFIG.urls.whatsappContact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-pink text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            💬 Consultanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}