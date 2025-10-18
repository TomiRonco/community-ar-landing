import { Card } from '@/components/ui';

const casosExito = [
  {
    empresa: "Panadería Local Santa Fe",
    problema: "Sin presencia digital, ventas estancadas",
    solucion: "Community Management + Delivery online",
    resultado: "+150% ventas en 3 meses",
    icono: "🥖",
    detalles: "Implementamos estrategia de contenido gastronómico, creamos sistema de delivery por WhatsApp y optimizamos horarios de publicación para máximo alcance local."
  },
  {
    empresa: "Consultorio Médico Rosario", 
    problema: "Dependía solo de derivaciones",
    solucion: "Sitio web + SEO local + Redes sociales",
    resultado: "+200% consultas nuevas",
    icono: "⚕️",
    detalles: "Desarrollamos sitio web optimizado para búsquedas locales, gestión de Google Business y contenido educativo que genera confianza en pacientes."
  },
  {
    empresa: "Tienda de Ropa Alcorta",
    problema: "Competencia con grandes marcas",
    solucion: "E-commerce + Marketing digital integral", 
    resultado: "+300% ventas online",
    icono: "👗",
    detalles: "Creamos tienda online, campañas de Facebook Ads segmentadas localmente y estrategia de influencers regionales que conectó con la audiencia."
  },
  {
    empresa: "Estudio Contable Venado Tuerto",
    problema: "Clientes no sabían todos los servicios",
    solucion: "Content marketing + LinkedIn + Web",
    resultado: "+180% servicios adicionales",
    icono: "📊",
    detalles: "Desarrollamos contenido educativo sobre nuevas regulaciones, optimizamos LinkedIn para captar empresas y creamos calculadoras online."
  }
];

export default function CasosExitoSection() {
  return (
    <section id="casos-exito" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-white via-primary-light-pink/5 to-primary-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Casos de <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">Éxito</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Así es cómo ayudamos a <strong>empresas de Santa Fe y Argentina</strong> a <strong>conseguir más clientes</strong> con <strong>marketing digital estratégico</strong>.
          </p>
        </div>

        {/* Casos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {casosExito.map((caso, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                {/* Header del caso */}
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{caso.icono}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{caso.empresa}</h3>
                    <p className="text-sm text-gray-500">{caso.problema}</p>
                  </div>
                </div>

                {/* Solución */}
                <div className="bg-gradient-to-r from-primary-blue/10 to-primary-pink/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-blue mb-2">💡 Solución</h4>
                  <p className="text-sm text-gray-700">{caso.solucion}</p>
                </div>

                {/* Resultado */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">🎯 Resultado</h4>
                  <p className="text-lg font-bold text-green-800">{caso.resultado}</p>
                </div>

                {/* Detalles */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {caso.detalles}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Estadísticas generales */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-primary-light-pink/20 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            📈 Resultados Promedio de Nuestros Clientes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
                +250%
              </div>
              <p className="text-gray-600">Aumento en ventas</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-pink to-primary-yellow bg-clip-text text-transparent">
                3 meses
              </div>
              <p className="text-gray-600">Tiempo promedio de resultados</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-yellow to-primary-blue bg-clip-text text-transparent">
                40+
              </div>
              <p className="text-gray-600">Empresas transformadas</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            ¿Querés ser el próximo <strong>caso de éxito</strong>?
          </p>
          <a
            href="https://wa.me/5493465486960?text=Hola! Quiero conocer más sobre sus casos de éxito y cómo pueden ayudar a mi negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-pink text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            🚀 Quiero mi Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}