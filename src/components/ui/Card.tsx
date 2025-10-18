import { cn } from '@/utils/css';
import { BaseComponentProps } from '@/types';

interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  icon?: string;
  gradient?: string;
  hoverable?: boolean;
}

export function Card({ 
  className, 
  title, 
  description, 
  icon, 
  gradient, 
  hoverable = false,
  children 
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white/60 backdrop-blur-sm rounded-xl border border-primary-light-pink/20 p-6',
        hoverable && 'hover:shadow-lg hover:scale-105 transition-all duration-300',
        gradient && `bg-gradient-to-br ${gradient}`,
        className
      )}
    >
      {icon && title && (
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-pink rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">{icon}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        </div>
      )}
      
      {title && !icon && (
        <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {children}
    </div>
  );
}