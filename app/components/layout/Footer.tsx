'use client';

import Link from 'next/link';
import { Globe, Accessibility, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
  return (
    <footer className="py-24 bg-primary text-neutral-light overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-20 mb-20">
          <div className="space-y-10">
            <Link href="/" className="inline-block">
              <h4 className="text-3xl font-heading font-black tracking-tighter uppercase text-white">
                NextGen<span className="text-secondary/80">Kids</span>
              </h4>
            </Link>
            <p className="text-lg font-body leading-relaxed text-neutral-light/40 max-w-sm">
              Inspiring, educating, and preparing the next generation to confidently explore the digital and scientific world.
            </p>
            <div className="flex gap-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neutral-light/30 hover:text-secondary hover:bg-white/10 transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Hub</h5>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-light/50">
              {['Home', 'About Us', 'Our Projects', 'Resources'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary hover:translate-x-2 transition-all inline-block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Community</h5>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-light/50">
              {['Blog & News', 'Partnerships', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().split(' ')[0]}`} className="hover:text-secondary hover:translate-x-2 transition-all inline-block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Join the Mission</h5>
            <p className="text-sm text-neutral-light/40 leading-relaxed font-body">
              Stay updated with the latest cosmic modules and safety alerts.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Star-mail address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-light/10">
           <p>© 2026 Next Gen 4 Kids. Designed for the explorers of tomorrow.</p>
           <div className="flex gap-12 font-black">
             {['Privacy', 'Terms', 'Data Protection'].map((item) => (
               <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
             ))}
           </div>
        </div>
      </div>
    </footer>
  );
};
