'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#precios', label: 'Precios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden">
              <Image
                src={getAssetPath("/assets/cmar.jpg")}
                alt="Community AR Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
                quality={80}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">Community AR</span>
          </div>

          {/* Enlaces desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-medium relative ${
                    isActive 
                      ? 'text-primary-blue' 
                      : 'text-gray-700 hover:text-primary-blue'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-blue rounded-full"></span>
                  )}
                </a>
              );
            })}
            
            {/* Botón sticky principal de WhatsApp */}
            <a
              href="https://wa.me/5493465486960?text=Hola! Quiero una consulta gratuita para mi negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-blue to-primary-pink text-white px-4 lg:px-6 py-3 rounded-full hover:from-primary-pink hover:to-primary-blue transition-all duration-300 font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 min-h-[44px]"
            >
              <span>💬</span>
              <span className="hidden lg:inline">Consulta Gratuita</span>
              <span className="lg:hidden">Consulta</span>
            </a>
          </div>

          {/* Botón mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Menú mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`transition-colors font-medium py-2 px-2 rounded-lg ${
                      isActive 
                        ? 'text-primary-blue bg-primary-blue/10' 
                        : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}