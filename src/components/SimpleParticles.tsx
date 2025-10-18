'use client';

import React from 'react';

interface SimpleParticlesProps {
  particleCount?: number;
  className?: string;
}

export default function SimpleParticles({ 
  particleCount = 50, 
  className = '' 
}: SimpleParticlesProps) {
  // Colores de la paleta
  const colors = [
    '#64b1ff', // primary-blue
    '#eb5497', // primary-pink
    '#f0f47e', // primary-yellow
    '#f6c4d6', // primary-light-pink
  ];

  // Generar partículas estáticas con mejor distribución
  const particles = Array.from({ length: particleCount }, (_, i) => {
    // Crear distribución más uniforme
    const gridSize = Math.ceil(Math.sqrt(particleCount));
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    
    // Posición base en cuadrícula con variación aleatoria
    const baseX = (col / gridSize) * 100 + (Math.random() - 0.5) * (100 / gridSize);
    const baseY = (row / gridSize) * 100 + (Math.random() - 0.5) * (100 / gridSize);
    
    return {
      id: i,
      x: Math.max(5, Math.min(95, baseX)), // Mantener dentro de los límites
      y: Math.max(5, Math.min(95, baseY)),
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.3,
      animationDelay: Math.random() * 20,
      animationDuration: 15 + Math.random() * 10,
    };
  });

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Agregar algunas partículas flotantes con CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(-50%, -50%) translateX(0px); }
          50% { transform: translate(-50%, -50%) translateX(10px); }
        }
        
        @keyframes gentle-bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .float-animation {
          animation: float 8s ease-in-out infinite;
        }
        
        .drift-animation {
          animation: drift 12s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: gentle-bounce 6s ease-in-out infinite;
        }
      `}</style>
      
      {/* Partículas flotantes */}
      {particles.slice(0, Math.floor(particleCount / 3)).map((particle) => (
        <div
          key={`float-${particle.id}`}
          className="absolute rounded-full float-animation"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity * 0.8,
            animationDelay: `${particle.animationDelay}s`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Partículas que se desplazan */}
      {particles.slice(Math.floor(particleCount / 3), Math.floor(particleCount * 2 / 3)).map((particle) => (
        <div
          key={`drift-${particle.id}`}
          className="absolute rounded-full drift-animation"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity * 0.6,
            animationDelay: `${particle.animationDelay + 3}s`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Partículas que pulsan */}
      {particles.slice(Math.floor(particleCount * 2 / 3)).map((particle) => (
        <div
          key={`bounce-${particle.id}`}
          className="absolute rounded-full bounce-animation"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity * 0.7,
            animationDelay: `${particle.animationDelay + 1}s`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
}