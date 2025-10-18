'use client';

import Image from 'next/image';

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
    <section id="nosotros" className="py-12 bg-gradient-to-br from-primary-yellow/5 via-white to-primary-light-pink/5">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Profesionales Apasionados por </span>
            <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block">
              Tu Éxito Digital
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde Alcorta, Santa Fe, combinamos creatividad, estrategia y tecnología 
            para crear experiencias digitales que generan resultados reales.
          </p>
        </div>

        {/* Descripción de la empresa con stats */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-pink/10 to-primary-blue/10 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary-light-pink/20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Texto */}
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                    Community AR
                  </span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Ayudamos a marcas y emprendedores a destacar en el mundo digital con soluciones 
                  integrales que van desde la gestión de redes sociales hasta el desarrollo de 
                  plataformas web avanzadas.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nuestro enfoque se basa en entender profundamente tu negocio para crear 
                  estrategias digitales que conecten auténticamente con tu audiencia.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gradient-to-br from-primary-blue/10 to-transparent p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-primary-blue mb-2">+100</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-pink/10 to-transparent p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-primary-pink mb-2">3+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
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

        {/* Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-light-pink/20 hover:border-primary-pink/30 transform hover:-translate-y-2">
              
              {/* Header con info del miembro */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">{member.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-pink transition-colors">{member.name}</h3>
                    <p className="text-primary-pink font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Instagram Post Preview */}
              <div className="relative">
                <Image
                  src={member.instagramImage}
                  alt={`Post de Instagram de ${member.name}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-pink to-primary-blue rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">📸</span>
                  </div>
                </div>
              </div>

              {/* Instagram Caption */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {member.instagramCaption}
                </p>
                
                {/* Ver post completo */}
                <a
                  href={member.instagramPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white rounded-lg hover:from-primary-blue hover:to-primary-pink transition-all duration-300 text-sm font-medium w-full justify-center"
                >
                  <span>�</span>
                  <span>Ver post completo</span>
                </a>
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