import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  hover?: boolean;
}

export default function Card({ children, className = '', title, subtitle, action, hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      className={`bg-github-canvas-subtle border border-github-border rounded-lg p-6 ${className}`}
    >
      {(title || subtitle || action) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-github-text">{title}</h3>}
            {subtitle && <p className="text-sm text-github-text-secondary mt-1">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </motion.div>
  );
}
