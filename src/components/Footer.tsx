'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    'Community Management',
    'Diseño Gráfico',
    'Desarrollo Web',
    'Tiendas Online',
    'Marketing Digital',
    'Consultoría Digital'
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/assets/cmar.jpg"
                  alt="Community AR Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
                  Community AR
                </span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tu partner digital de confianza. Transformamos ideas en experiencias digitales exitosas 
              desde Alcorta, Santa Fe, para toda Argentina.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/communityar_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-primary-pink to-primary-yellow rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white text-lg">📸</span>
              </a>
              <a
                href="https://wa.me/5493465486960"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-pink rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white text-lg">💬</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
                Servicios
              </span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicios" 
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-pink rounded-full"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                Enlaces Rápidos
              </span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-pink transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-blue rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-yellow to-primary-light-pink bg-clip-text text-transparent">
                Contacto
              </span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-light-pink to-primary-blue rounded-lg flex items-center justify-center mt-1">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Alcorta, Santa Fe</p>
                  <p className="text-gray-400 text-sm">Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-pink rounded-lg flex items-center justify-center mt-1">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div>
                  <a 
                    href="https://wa.me/5493465486960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-pink transition-colors font-medium"
                  >
                    +54 9 3465 486960
                  </a>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-pink to-primary-yellow rounded-lg flex items-center justify-center mt-1">
                  <span className="text-white text-sm">📸</span>
                </div>
                <div>
                  <a 
                    href="https://instagram.com/communityar_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-pink hover:text-primary-blue transition-colors font-medium"
                  >
                    @communityar_
                  </a>
                  <p className="text-gray-400 text-sm">Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Community AR. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span className="text-primary-blue">💻</span>
                <span>Hecho con ❤️ en Argentina</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}