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
      "relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary text-white overflow-hidden",
      className
    )}>
      
      {/* Background Ambient Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={cn(
            "absolute -top-[10%] -right-[10%] w-[50%] h-[50%] blur-[120px] rounded-full",
            accentColor === 'accent' ? "bg-accent" : "bg-secondary"
          )}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-primary-light blur-[150px] rounded-full opacity-20"
        />
      </div>

      <div className="editorial-container relative z-10">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
          imagePosition === 'left' && "lg:direction-rtl" // This is a bit hacky, better order classes
        )}>
          {/* Text Content */}
          <div className={cn(
            "space-y-8 md:space-y-12",
            imagePosition === 'left' ? "lg:order-2" : "lg:order-1"
          )}>
            <div className="space-y-6">
              {chapter && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.5em]",
                    accentColor === 'accent' ? "text-accent" : "text-secondary"
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
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter uppercase"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>

            <div className="space-y-10">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl font-body font-light leading-relaxed text-white/60 text-balance"
              >
                {subtitle}
              </motion.p>
              
              {ctaLabel && ctaHref && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Button 
                    variant={accentColor === 'accent' ? "primary" : "outline"}
                    size="xl" 
                    className={cn(
                      "rounded-full px-12 group",
                      accentColor === 'accent' ? "bg-accent text-white" : "border-white/20 text-white hover:bg-white hover:text-primary"
                    )}
                    onClick={() => {
                      const el = document.querySelector(ctaHref);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {ctaLabel} <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-2 transition-transform" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Image/Mascot Content */}
          <div className={cn(
            "relative flex items-center justify-center",
            imagePosition === 'left' ? "lg:order-1" : "lg:order-2"
          )}>
            {image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl"
              >
                <motion.img 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src={image}
                  alt="Page Hero Mascot"
                  className={cn(
                    "w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative z-10",
                    imageClassName
                  )}
                />
                {/* Subtle Ground Shadow for Mascot */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/30 blur-3xl rounded-full" />
              </motion.div>
            ) : (
              <div className="hidden lg:block w-32 h-32 border-4 border-dashed border-white/5 rounded-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

//     </section>
//   );
// };
