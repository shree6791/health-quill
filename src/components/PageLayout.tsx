import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  description,
  variant = 'primary'
}) => {
  return (
    <SectionBackground variant={variant} className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>
        {children}
      </div>
    </SectionBackground>
  );
};

export default PageLayout;