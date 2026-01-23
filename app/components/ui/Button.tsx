'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'link' | 'highlight';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-black transition-all duration-300 shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20',
    accent: 'bg-accent text-white hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20',
    highlight: 'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20',
    outline: 'bg-transparent border border-black/10 text-primary hover:border-primary hover:bg-primary/5',
    ghost: 'bg-transparent text-primary hover:bg-primary/5',
    link: 'bg-transparent text-secondary underline underline-offset-4 hover:opacity-70 p-0 h-auto font-bold',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.3em] rounded-full',
    md: 'px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full',
    lg: 'px-12 py-4.5 text-[11px] font-bold uppercase tracking-[0.3em] rounded-full',
    xl: 'px-16 py-5.5 text-[12px] font-bold uppercase tracking-[0.3em] rounded-full',
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 2, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex items-center justify-center transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none tactile-pop',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
