import React from 'react';
import { cn } from '../lib/utils';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  children, 
  className,
  variant = 'primary' 
}) => {
  const variants = {
    primary: 'from-white via-gray-50 to-white',
    secondary: 'from-gray-50 via-white to-gray-50',
    tertiary: 'from-white via-primary-50/30 to-white'
  };

  return (
    <section className={cn(
      'relative overflow-hidden',
      `bg-gradient-to-b ${variants[variant]}`,
      className
    )}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 neural-network" />
      </div>
      {children}
    </section>
  );
};

export default SectionBackground;