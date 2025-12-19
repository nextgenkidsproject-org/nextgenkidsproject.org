'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  chapter?: string;
  className?: string;
  accentColor?: 'highlight' | 'sky' | 'leaf' | 'sun';
}

export const PageHero = ({ title, subtitle, image, chapter, className, accentColor }: PageHeroProps) => {
  const bgColors = {
    highlight: 'bg-highlight-soft',
    sky: 'bg-sky-soft',
    leaf: 'bg-leaf-soft',
    sun: 'bg-sun-soft',
  };

  const accentTextColors = {
    highlight: 'text-highlight',
    sky: 'text-sky',
    leaf: 'text-leaf',
    sun: 'text-sun',
  };

  return (
    <section className={cn(
      "relative pt-48 pb-24 border-b border-black/5 transition-colors duration-700 overflow-hidden",
      accentColor ? bgColors[accentColor] : "bg-white",
      className
    )}>
      {/* Playful Floating Background Element for Hero */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={cn(
          "absolute -top-24 -right-24 w-96 h-96 blur-[120px] rounded-full opacity-20",
          accentColor ? `bg-${accentColor}` : "bg-highlight"
        )}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-end">
          <div className="space-y-8 md:space-y-12">
            {chapter && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.4em]",
                  accentColor ? accentTextColors[accentColor] : "text-black/40"
                )}
              >
                {chapter}
              </motion.div>
            )}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.34, 1.56, 0.64, 1] // Bouncy spring
              }}
              className="text-5xl md:text-8xl font-semibold leading-[0.95] tracking-tighter uppercase break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Media Section with Photographic assets */}
      <div className="mt-16 md:mt-24 h-[35vh] md:h-[50vh] w-full bg-white/40 backdrop-blur-xl border-y border-black/5 overflow-hidden flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10 pointer-events-none z-20" />
        
        {image ? (
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </motion.div>
        ) : (
          <div className="px-6 text-center text-[10px] font-semibold uppercase tracking-[0.5em] text-black/20 relative z-10">
            Editorial Hero Media: DEFAULT_PAGE_IMAGE
          </div>
        )}
      </div>
    </section>
  );
};
