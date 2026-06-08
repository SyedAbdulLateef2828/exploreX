import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, onClick }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`glass-card p-6 ${hover ? 'cursor-pointer hover:shadow-soft' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;