'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  chapter?: string;
  className?: string;
  accentColor?: 'secondary' | 'accent' | 'primary';
  ctaLabel?: string;
  ctaHref?: string;
  imageClassName?: string;
}

export const PageHero = ({ 
  title, 
  subtitle, 
  image, 
  imagePosition = 'right',
  chapter, 
  className, 
  accentColor = 'secondary',
  ctaLabel,
  ctaHref,
  imageClassName
}: PageHeroProps) => {
  return (
    <section className={cn(
      "relative min-h-[85vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary text-white overflow-hidden",
      className
    )}>
      
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-primary to-primary" />

      <div className="editorial-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className={cn(
            "lg:col-span-7 flex flex-col justify-center",
            imagePosition === 'left' ? "lg:order-2 lg:col-start-6" : "lg:order-1"
          )}>
            <div className="space-y-6 md:space-y-8 max-w-3xl">
              {chapter && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]",
                    accentColor === 'accent' ? "text-accent" : "text-secondary"
                  )}
                >
                  <span className={cn("w-8 h-[2px]", accentColor === 'accent' ? "bg-accent" : "bg-secondary")} />
                  {chapter}
                </motion.div>
              )}
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter uppercase"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl font-body font-light leading-relaxed text-white/70 text-balance max-w-2xl"
              >
                {subtitle}
              </motion.p>
              
              {ctaLabel && ctaHref && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="pt-4"
                >
                  <Button 
                    variant={accentColor === 'accent' ? "primary" : "outline"}
                    size="xl" 
                    className={cn(
                      "rounded-2xl px-10 h-16 text-lg font-bold tracking-wide group",
                      accentColor === 'accent' 
                        ? "bg-accent text-white hover:bg-accent/90" 
                        : "border-2 border-white/20 text-white hover:bg-white hover:text-primary hover:border-white"
                    )}
                    onClick={() => {
                      const el = document.querySelector(ctaHref);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    <span>{ctaLabel}</span>
                    <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mascot / Image Content */}
          <div className={cn(
            "lg:col-span-5 relative flex items-center justify-center lg:justify-end",
            imagePosition === 'left' ? "lg:order-1 lg:justify-start" : "lg:order-2"
          )}>
            {image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[90vw] lg:max-w-7xl aspect-square lg:aspect-auto flex items-center justify-center p-8 lg:p-0"
              >

                <div className={cn(
                  "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-[80px] opacity-60",
                  imagePosition === 'left' ? "-left-10" : "-right-10"
                )} />
                
                <motion.img 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src={image}
                  alt="Hero Mascot"
                  className={cn(
                    "relative z-10 w-full h-auto max-h-[800px] lg:max-h-[95vh] object-contain drop-shadow-2xl scale-150 transform-gpu",
                    imageClassName
                  )}
                />
                
              </motion.div>
            ) : (
              <div className="hidden lg:block w-full h-80 border-4 border-dashed border-white/10 rounded-3xl" />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
