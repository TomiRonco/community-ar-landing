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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src={getAssetPath("/assets/cmar.jpg")}
                alt="Community AR Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Community AR</span>
          </div>

          {/* Enlaces desktop */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`transition-colors font-medium ${
                      isActive 
                        ? 'text-primary-blue' 
                        : 'text-gray-700 hover:text-primary-blue'
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