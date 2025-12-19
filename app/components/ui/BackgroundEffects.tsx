'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  const shapes = [
    { color: 'bg-highlight/5', size: 'w-96 h-96', top: '10%', left: '5%', delay: 0 },
    { color: 'bg-sky/5', size: 'w-[30rem] h-[30rem]', top: '40%', right: '5%', delay: 2 },
    { color: 'bg-leaf/5', size: 'w-80 h-80', bottom: '15%', left: '15%', delay: 4 },
    { color: 'bg-sun/5', size: 'w-[25rem] h-[25rem]', bottom: '5%', right: '20%', delay: 6 },
  ];

  const floatingElements = [
    { type: 'zig-zag', top: '25%', left: '15%', rotate: 15, color: '#FF4D1A' },
    { type: 'plus', top: '65%', right: '12%', rotate: -10, color: '#00C2FF' },
    { type: 'circle', top: '15%', right: '25%', rotate: 0, color: '#FFD600' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Soft Glow Shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ 
            duration: 15 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute rounded-full floating-shape ${shape.color} ${shape.size}`}
          style={{ 
            top: shape.top, 
            left: shape.left, 
            right: shape.right, 
            bottom: shape.bottom 
          }}
        />
      ))}

      {/* Playful Doodles - Inline SVGs */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={`doodle-${i}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.15,
            scale: 1,
            rotate: [el.rotate, el.rotate + 5, el.rotate - 5, el.rotate],
            y: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 8 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute hidden lg:block"
          style={{ top: el.top, left: el.left, right: el.right }}
        >
          {el.type === 'zig-zag' && (
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M1 19L11 1L21 19L31 1L41 19L51 1L59 19" stroke={el.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {el.type === 'plus' && (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 1V39M1 20H39" stroke={el.color} strokeWidth="6" strokeLinecap="round"/>
            </svg>
          )}
          {el.type === 'circle' && (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="17" stroke={el.color} strokeWidth="6" strokeDasharray="8 8"/>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
