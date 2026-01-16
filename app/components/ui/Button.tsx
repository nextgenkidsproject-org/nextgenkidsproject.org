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
    primary: 'bg-secondary text-white hover:bg-secondary/90 transition-all duration-300',
    secondary: 'bg-accent text-white hover:bg-accent/90 transition-all duration-300',
    accent: 'bg-accent text-white hover:bg-accent/90',
    highlight: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5',
    ghost: 'bg-transparent text-white hover:bg-white/5',
    link: 'bg-transparent text-secondary underline underline-offset-4 hover:opacity-70 p-0 h-auto font-bold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg',
    md: 'px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-xl',
    lg: 'px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] rounded-2xl',
    xl: 'px-14 py-5 text-base font-bold uppercase tracking-[0.2em] rounded-[2rem]',
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
