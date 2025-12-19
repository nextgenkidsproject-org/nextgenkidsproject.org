'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost' | 'accent' | 'link' | 'highlight' | 'sky' | 'leaf' | 'sun';
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
    primary: 'bg-black text-white hover:bg-neutral-800',
    accent: 'bg-blue-600 text-white hover:bg-blue-700',
    highlight: 'bg-highlight text-white hover:shadow-[0_8px_20px_-4px_rgba(230,96,0,0.4)]',
    sky: 'bg-sky text-white hover:shadow-[0_8px_20px_-4px_rgba(0,127,255,0.4)]',
    leaf: 'bg-leaf text-white hover:shadow-[0_8px_20px_-4px_rgba(0,204,119,0.4)]',
    sun: 'bg-sun text-black hover:shadow-[0_8px_20px_-4px_rgba(255,210,0,0.4)]',
    outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black hover:bg-neutral-100',
    link: 'bg-transparent text-black underline underline-offset-8 hover:opacity-70 p-0 h-auto font-medium',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg',
    md: 'px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-xl',
    lg: 'px-12 py-5 text-base font-semibold uppercase tracking-widest rounded-2xl md:rounded-[1.5rem]',
    xl: 'px-16 py-6 text-xl font-semibold uppercase tracking-widest rounded-3xl md:rounded-[2.5rem]',
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
