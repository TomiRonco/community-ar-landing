import { ReactNode } from 'react';

// Tipos para componentes base
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Tipos para botones
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Tipos para datos de negocio
export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  url?: string;
  gradient: string;
}

export interface Metric {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface NavItem {
  name: string;
  href: string;
}

// Props para componentes específicos
export interface HeroSectionProps extends BaseComponentProps {}
export interface ServicesProps extends BaseComponentProps {}
export interface AboutUsProps extends BaseComponentProps {}
export interface ContactProps extends BaseComponentProps {}
export interface FooterProps extends BaseComponentProps {}