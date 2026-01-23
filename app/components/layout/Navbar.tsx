'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  
  // Scrolled/Other pages: Dark Galactic Glassmorphism
  const isActive = scrolled || !isHomePage || isOpen;

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
      isActive 
        ? 'bg-primary/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl shadow-primary/20' 
        : 'bg-transparent py-8'
    )}>
      <div className="editorial-container flex items-center justify-between lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <span className={cn(
              "text-xl md:text-2xl font-heading font-black tracking-tighter uppercase transition-all duration-500",
              "text-white group-hover:text-secondary"
            )}>
              NextGen<span className="text-secondary/80 group-hover:text-secondary transition-colors italic">Kids</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500",
                pathname === link.href 
                  ? "text-secondary opacity-100" 
                  : "text-white opacity-50 hover:opacity-100 hover:text-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex justify-end items-center gap-10">
          <Button 
            variant={isActive ? "secondary" : "outline"} 
            size="md" 
            className={cn(
              "px-8 rounded-full transition-all duration-500 font-bold",
              !isActive && "border-white/20 text-white hover:bg-white hover:text-primary",
              isActive && "bg-secondary hover:bg-white hover:text-primary shadow-xl shadow-secondary/20"
            )}
          >
            Launch Hub <Zap className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 transition-colors duration-500 text-white hover:text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute inset-x-0 top-0 h-screen bg-primary z-[-1] overflow-hidden"
          >
            {/* Ambient background for mobile menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <div className="absolute top-[20%] right-[-10%] w-[80%] h-[50%] bg-secondary blur-[150px] rounded-full" />
              <div className="absolute bottom-[20%] left-[-10%] w-[80%] h-[50%] bg-accent blur-[150px] rounded-full opacity-50" />
            </div>

            <div className="px-8 py-32 flex flex-col gap-8 h-full relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter transition-all hover:text-secondary block",
                      pathname === link.href ? "text-secondary" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto space-y-12">
                <Button variant="primary" size="xl" className="w-full rounded-full bg-secondary">Discovery Experience</Button>
                <div className="flex items-center justify-between text-white/40 font-bold text-[11px] uppercase tracking-[0.4em]">
                  <span className="flex items-center gap-3"><Globe className="w-5 h-5 text-secondary" /> Global / EN</span>
                  <Link href="/login" className="text-secondary border-b border-secondary">Member Access</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
