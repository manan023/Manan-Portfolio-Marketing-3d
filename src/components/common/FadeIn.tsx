import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  children,
  className = '',
  style,
  ...rest
}) => {
  // Use motion.create if available, otherwise motion[as] or fallback motion.div
  const MotionComponent = (motion as any).create
    ? (motion as any).create(as)
    : (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
