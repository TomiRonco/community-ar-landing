import AnimatedParticles from './AnimatedParticles';

export default function AboutUs() {
  const teamPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DL_RICMMKvu/?utm_source=ig_web_copy_link",
      embedUrl: "https://www.instagram.com/p/DL_RICMMKvu/embed",
      username: "communityar_",
      memberName: "María",
      role: "Especialista en Estrategia de Contenido",
      description: "Con 5 años de experiencia ayudando a marcas a conectar con su audiencia"
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DL8JEoHutzZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/p/DL8JEoHutzZ/embed",
      username: "communityar_",
      memberName: "Rodrigo",
      role: "Experto en Diseño Gráfico",
      description: "Cada post que ves tiene su toque creativo y profesional"
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DL0588IMQka/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/p/DL0588IMQka/embed",
      username: "communityar_",
      memberName: "Ana",
      role: "Analista de Datos y Métricas",
      description: "Se encarga de que cada estrategia tenga resultados medibles"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      <AnimatedParticles particleCount={50} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado de profesionales del marketing digital, ubicados en Rosario, 
            Santa Fe. Nos especializamos en ayudar a marcas y emprendedores a construir una presencia 
            digital sólida y conectar genuinamente con su audiencia.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nuestra Misión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Transformar la presencia digital de nuestros clientes a través de estrategias 
              personalizadas, contenido auténtico y un enfoque centrado en resultados medibles 
              que impulsen el crecimiento real de sus negocios.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-blue rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nuestra Visión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Ser el equipo de community management de referencia en Argentina, reconocidos 
              por nuestra creatividad, profesionalismo y capacidad de generar comunidades 
              genuinas que trascienden las redes sociales.
            </p>
          </div>
        </div>

        {/* Team Section with Instagram Posts */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Conoce a Nuestro Equipo
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Síguenos en Instagram para conocer más sobre las personas detrás de tu éxito digital
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Instagram Embed */}
              <div className="relative">
                <iframe
                  src={post.embedUrl}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                  className="w-full"
                  loading="lazy"
                />
                
                {/* Clickable overlay */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-black/5 transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary-pink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">@{post.username}</span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-blue hover:text-primary-pink transition-colors font-medium"
                  >
                    Ver post →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/communityar_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}