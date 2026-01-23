'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Background Ambient Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary blur-[120px] rounded-full"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-accent blur-[150px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Icon Container */}
            <div className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl relative z-10"
              >
                <motion.div
                  animate={{ 
                    y: [-4, 4, -4],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="w-10 h-10 text-secondary" />
                </motion.div>
              </motion.div>
              
              {/* Pulsing rings */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl border border-secondary"
              />
              <motion.div 
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-3xl border border-secondary"
              />
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40"
                >
                  Initializing Protocol
                </motion.div>
              </div>
              
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter"
                >
                  NEXTGEN <span className="text-secondary italic">KIDS</span>
                </motion.h1>
              </div>

              {/* Progress Line */}
              <div className="w-48 h-[2px] bg-white/5 mx-auto relative overflow-hidden rounded-full mt-6">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20"
          >
            Digital Sanctuary Layer v1.2
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
