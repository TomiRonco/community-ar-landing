/**
 * Utilidades para manejo de clases CSS con Tailwind
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind CSS de manera inteligente
 * Evita duplicados y conflictos entre clases
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generadores de gradientes predefinidos
 */
export const gradientPresets = {
  bluePink: 'bg-gradient-to-br from-primary-blue to-primary-pink',
  pinkYellow: 'bg-gradient-to-br from-primary-pink to-primary-yellow',
  yellowBlue: 'bg-gradient-to-br from-primary-yellow to-primary-blue',
  lightBackground: 'bg-gradient-to-br from-white via-primary-light-pink/5 to-primary-blue/5'
};

/**
 * Utilidades para responsive design
 */
export const responsiveHelpers = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-6 sm:py-8 lg:py-12',
  grid: {
    twoColumns: 'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center',
    threeColumns: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
  }
};

/**
 * Clases comunes para botones
 */
export const buttonVariants = {
  primary: 'bg-gradient-to-r from-primary-blue to-primary-pink text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300',
  secondary: 'bg-white text-primary-blue border-2 border-primary-blue font-semibold py-3 px-6 rounded-lg hover:bg-primary-blue hover:text-white transition-all duration-300',
  ghost: 'text-primary-blue hover:text-primary-pink font-semibold py-3 px-6 rounded-lg hover:bg-primary-blue/5 transition-all duration-300'
};

/**
 * Genera clases de gradiente basadas en el variant
 */
export function getGradientClasses(variant: string): string {
  const gradients = {
    'primary': 'bg-gradient-to-r from-primary-blue to-primary-pink',
    'secondary': 'bg-gradient-to-r from-primary-pink to-primary-yellow',
    'blue-pink': 'bg-gradient-to-r from-primary-blue to-primary-pink',
    'pink-yellow': 'bg-gradient-to-r from-primary-pink to-primary-yellow',
    'yellow-blue': 'bg-gradient-to-r from-primary-yellow to-primary-blue',
    'blue-light-pink': 'bg-gradient-to-br from-primary-light-pink to-primary-blue'
  };
  
  return gradients[variant as keyof typeof gradients] || gradients.primary;
}

/**
 * Genera clases responsive para breakpoints
 */
export function getResponsiveClasses(
  base: string,
  responsive: Record<string, string>
): string {
  const classes = [base];
  
  Object.entries(responsive).forEach(([breakpoint, value]) => {
    classes.push(`${breakpoint}:${value}`);
  });
  
  return classes.join(' ');
}

/**
 * Genera clases de spacing consistentes
 */
export function getSpacingClasses(
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  type: 'padding' | 'margin' | 'gap' = 'padding'
): string {
  const spacingMap = {
    xs: { padding: 'p-2', margin: 'm-2', gap: 'gap-2' },
    sm: { padding: 'p-4', margin: 'm-4', gap: 'gap-4' },
    md: { padding: 'p-6', margin: 'm-6', gap: 'gap-6' },
    lg: { padding: 'p-8', margin: 'm-8', gap: 'gap-8' },
    xl: { padding: 'p-12', margin: 'm-12', gap: 'gap-12' }
  };
  
  return spacingMap[size][type];
}