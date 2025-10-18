'use client';

import React from 'react';
import MovingParticles from '../MovingParticles';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  particleCount?: number;
  showParticles?: boolean;
}

export default function SectionWrapper({
  id,
  className = '',
  children,
  particleCount = 50,
  showParticles = false
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-20 bg-white relative ${showParticles ? 'overflow-hidden' : ''} ${className}`}
    >
      {showParticles && <MovingParticles particleCount={particleCount} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}