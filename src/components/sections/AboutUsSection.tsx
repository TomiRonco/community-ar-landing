'use client';

export default function AboutUsSection() {
  const teamMembers = [
    {
      name: "María",
      role: "Especialista en Estrategia de Contenido",
      avatar: "👩‍💼",
      instagramPost: "https://www.instagram.com/p/DL_RICMMKvu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedCode: "DL_RICMMKvu"
    },
    {
      name: "Rodrigo", 
      role: "Experto en Diseño Gráfico",
      avatar: "👨‍🎨",
      instagramPost: "https://www.instagram.com/p/DL0588IMQka/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedCode: "DL0588IMQka"
    },
    {
      name: "Ana",
      role: "Community Manager Senior",
      avatar: "👩‍💻",
      instagramPost: "https://www.instagram.com/p/DL8JEoHutzZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedCode: "DL8JEoHutzZ"
    }
  ];

  return (
    <section id="nosotros" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-yellow/5 via-white to-primary-light-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">El Equipo que va a </span>
            <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block">
              Transformar Tu Negocio
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Desde Alcorta, Santa Fe, nos especializamos en hacer que negocios como el tuyo 
            consigan más clientes, ahorren tiempo y multipliquen sus ventas.
          </p>
        </div>

        {/* Descripción de la empresa con stats */}
        <div className="relative mb-8 sm:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-pink/10 to-primary-blue/10 rounded-2xl lg:rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary-light-pink/20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              
              {/* Texto */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                    Community AR
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Imaginá tener un equipo que entiende tu negocio y trabaja para que <strong>conseguís más clientes</strong>, 
                  <strong> ahorrés tiempo</strong> y <strong>transformés tu marca</strong> en referente de tu industria.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Cada estrategia que creamos está pensada para que veas resultados reales: más ventas, 
                  mejor reconocimiento de marca y menos tiempo perdido en tareas que no generan retorno.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center bg-gradient-to-br from-primary-blue/10 to-transparent p-4 sm:p-6 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue mb-1 sm:mb-2">Más de 40</div>
                  <div className="text-sm sm:text-base text-gray-600">Negocios Transformados</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-pink/10 to-transparent p-4 sm:p-6 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-pink mb-1 sm:mb-2">3+</div>
                  <div className="text-sm sm:text-base text-gray-600">Años Generando Resultados</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-yellow/10 to-transparent p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-primary-blue mb-2">24h</div>
                  <div className="text-gray-600">Tiempo de Respuesta</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-light-pink/10 to-transparent p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-primary-pink mb-2">100%</div>
                  <div className="text-gray-600">Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo con Instagram Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-pink/30 transform hover:-translate-y-2">
              
              {/* Instagram Embed */}
              <div className="relative bg-white min-h-[500px]">
                <iframe 
                  src={`https://www.instagram.com/p/${member.embedCode}/embed/`}
                  width="100%" 
                  height="500"
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  className="border-0"
                  title={`Instagram post de ${member.name}`}
                />
              </div>
              
              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-pink to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}