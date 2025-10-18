'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  baseOpacity: number;
}

interface MovingParticlesProps {
  particleCount?: number;
  className?: string;
}

export default function MovingParticles({ 
  particleCount = 50, 
  className = '' 
}: MovingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  // Colores de la paleta
  const colors = React.useMemo(() => [
    '#64b1ff', // primary-blue
    '#eb5497', // primary-pink
    '#f0f47e', // primary-yellow
    '#f6c4d6', // primary-light-pink
  ], []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    // Inicializar partículas
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.6 + 0.3;
        particlesRef.current.push({
          x: Math.random() * containerWidth,
          y: Math.random() * containerHeight,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
        });
      }
    };

    // Función de animación
    const animate = () => {
      containerWidth = container.offsetWidth;
      containerHeight = container.offsetHeight;

      particlesRef.current.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebotar en los bordes
        if (particle.x <= 0 || particle.x >= containerWidth) {
          particle.vx = -particle.vx;
          particle.x = Math.max(0, Math.min(containerWidth, particle.x));
        }
        if (particle.y <= 0 || particle.y >= containerHeight) {
          particle.vy = -particle.vy;
          particle.y = Math.max(0, Math.min(containerHeight, particle.y));
        }

        // Efecto de pulsación en la opacidad
        particle.opacity = particle.baseOpacity + Math.sin(Date.now() * 0.003 + index) * 0.2;

        // Actualizar el elemento DOM
        const element = container.children[index] as HTMLElement;
        if (element) {
          element.style.left = `${particle.x}px`;
          element.style.top = `${particle.y}px`;
          element.style.opacity = particle.opacity.toString();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Inicializar y empezar animación
    initParticles();
    animate();

    // Manejar redimensionamiento
    const handleResize = () => {
      containerWidth = container.offsetWidth;
      containerHeight = container.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, colors]);

  // Generar elementos de partículas
  const particleElements = Array.from({ length: particleCount }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full pointer-events-none transition-opacity duration-300"
      style={{
        width: '6px',
        height: '6px',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        zIndex: 1,
        transform: 'translate(-50%, -50%)',
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {particleElements}
    </div>
  );
}