import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({ children, onClick, className = '', variant = 'primary', size = 'md' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-neon',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    accent: 'bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:shadow-neon',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;