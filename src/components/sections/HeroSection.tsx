'use client';

import Image from 'next/image';
import { APP_CONFIG } from '@/config/constants';
import { heroMetrics } from '@/data';
import { cn, gradientPresets } from '@/utils/css';

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-primary-pink/50 via-primary-pink/35 to-primary-blue/25 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)]">
          
          {/* Contenido Principal */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Badge de credibilidad */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-blue/30 shadow-sm">
              <span className="text-sm sm:text-base text-primary-blue font-semibold">
                {APP_CONFIG.messages.trustedBy}
              </span>
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 leading-tight drop-shadow-sm">
              {APP_CONFIG.messages.heroTitle.main} 
              <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent block">
                {APP_CONFIG.messages.heroTitle.highlight}
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 block mt-2">
                {APP_CONFIG.messages.heroTitle.subtitle}
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              {APP_CONFIG.messages.heroDescription}
            </p>
            
            {/* Beneficios Clave */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
              {heroMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-4 border border-white/40 shadow-md min-h-[80px]">
                  <div className={cn(
                    "w-10 h-10 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    index === 0 ? gradientPresets.bluePink :
                    index === 1 ? gradientPresets.pinkYellow : 
                    gradientPresets.yellowBlue
                  )}>
                    <span className="text-white text-lg sm:text-lg">{metric.icon}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-gray-950 text-lg sm:text-base">{metric.value}</div>
                    <div className="text-sm sm:text-sm text-gray-700 leading-tight">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={APP_CONFIG.urls.whatsappContact}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-primary-blue to-primary-pink text-white rounded-xl hover:from-primary-pink hover:to-primary-blue transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center min-h-[48px] flex items-center justify-center"
              >
                🚀 Consulta Gratuita
              </a>
              
              <a
                href="#servicios"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-primary-blue text-primary-blue rounded-xl hover:bg-primary-blue hover:text-white transition-all duration-300 font-semibold text-base sm:text-lg text-center min-h-[48px] flex items-center justify-center shadow-md"
              >
                Ver Nuestros Servicios
              </a>
            </div>
            
            {/* Testimonial / Proof */}
            <div className="flex items-center space-x-4 pt-4 bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-primary-pink to-primary-yellow rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-primary-yellow to-primary-light-pink rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="text-sm text-gray-800">
                  <span className="font-bold text-primary-blue">Más de 40 clientes satisfechos</span> en Alcorta y toda Argentina
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen/Visual */}
          <div className="relative mt-8 lg:mt-0">
            {/* Elemento decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-pink/20 rounded-2xl lg:rounded-3xl transform rotate-3 lg:rotate-6"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-primary-light-pink/20 shadow-2xl">
              
              {/* Logo */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/cmar.jpg"
                    alt="Community AR - Agencia de Marketing Digital y Community Management en Santa Fe, Argentina"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority
                    quality={85}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
                    {APP_CONFIG.company.name}
                  </span>
                </h3>
                <p className="text-gray-600">Tu Partner Digital de Confianza</p>
              </div>
              
              {/* Servicios destacados */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-blue/10 to-transparent rounded-lg">
                  <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <span className="font-medium text-gray-900">Community Management Profesional</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-pink/10 to-transparent rounded-lg">
                  <div className="w-8 h-8 bg-primary-pink rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <span className="font-medium text-gray-900">Desarrollo Web Moderno</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-yellow/10 to-transparent rounded-lg">
                  <div className="w-8 h-8 bg-primary-yellow rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 text-sm">🎯</span>
                  </div>
                  <span className="font-medium text-gray-900">Marketing Digital Estratégico</span>
                </div>
              </div>
              
              {/* CTA secundario */}
              <div className="mt-8 text-center">
                <a
                  href={APP_CONFIG.urls.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-pink hover:text-primary-blue transition-colors"
                >
                  <span>Síguenos en Instagram</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}