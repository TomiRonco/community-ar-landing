'use client';

import { useState, useEffect, useRef } from 'react';

interface LazyInstagramEmbedProps {
  className?: string;
}

export default function LazyInstagramEmbed({ className }: LazyInstagramEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300); // Pequeño delay para evitar carga innecesaria
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded]);

  return (
    <div ref={containerRef} className={className}>
      {!isLoaded ? (
        // Placeholder mientras carga
        <div className="bg-gradient-to-br from-primary-light-pink/20 to-primary-blue/20 rounded-xl p-8 text-center animate-pulse">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">📸</span>
          </div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
      ) : (
        // Instagram embed real
        <div className="bg-gradient-to-br from-primary-light-pink/20 to-primary-blue/20 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-pink rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">📸</span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Síguenos en Instagram</h4>
          <p className="text-gray-600 text-sm mb-4">
            Descubrí nuestros últimos proyectos y contenido exclusivo
          </p>
          <a
            href="https://instagram.com/communityar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-pink to-primary-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver en Instagram →
          </a>
        </div>
      )}
    </div>
  );
}