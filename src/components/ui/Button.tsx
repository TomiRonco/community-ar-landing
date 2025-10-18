import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn, buttonVariants } from '@/utils/css';
import { ButtonVariant } from '@/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    href, 
    external = false,
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const buttonClasses = cn(
      buttonVariants[variant],
      sizeClasses[size],
      'inline-flex items-center justify-center whitespace-nowrap',
      'disabled:pointer-events-none disabled:opacity-50',
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={buttonClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };