'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog & News' },
  { href: '/partnerships', label: 'Partnerships' },
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
  
  // Transition logic: 
  // - On home hero: Transparent bg, white text
  // - Scrolled/Other pages: Glassmorphism (white/0.8), dark text
  const isActive = scrolled || !isHomePage || isOpen;

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
      isActive 
        ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm' 
        : 'bg-transparent py-8'
    )}>
      <div className="editorial-container flex items-center justify-between lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <span className={cn(
              "text-xl md:text-2xl font-heading font-black tracking-tighter uppercase transition-colors duration-500",
              isActive ? "text-primary" : "text-white",
              "group-hover:text-secondary"
            )}>
              NextGen<span className="text-secondary/80 group-hover:text-secondary transition-colors">Kids</span>
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
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500",
                pathname === link.href 
                  ? "text-secondary opacity-100" 
                  : cn(
                      "opacity-50 hover:opacity-100 hover:text-secondary",
                      isActive ? "text-primary" : "text-white"
                    )
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex justify-end items-center gap-10">
          <Button 
            variant={isActive ? "primary" : "outline"} 
            size="md" 
            className={cn(
              "px-8 rounded-full transition-all duration-500",
              !isActive && "border-white/20 text-white hover:bg-white hover:text-primary"
            )}
          >
            Discovery
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 transition-colors duration-500 hover:text-secondary",
            isActive ? "text-primary" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-6 py-16 flex flex-col gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-5xl font-heading font-black uppercase tracking-tighter transition-colors hover:text-secondary",
                    pathname === link.href ? "text-secondary" : "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-8 pt-12 border-t border-black/10">
                <Button variant="primary" size="lg" className="w-full rounded-full">Discovery Portal</Button>
                <div className="flex items-center justify-between text-black/40 font-bold text-[10px] uppercase tracking-[0.3em]">
                  <span className="flex items-center gap-3"><Globe className="w-4 h-4" /> English</span>
                  <Link href="/login" className="text-secondary">Login</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
