'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -5 }}
      className={cn(
        'p-10 md:p-14 overflow-hidden relative flex flex-col h-full rounded-[2.5rem] group',
        'transition-all duration-700 ease-in-out',
        'border border-black/5 bg-white',
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};