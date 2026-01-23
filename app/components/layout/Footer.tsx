'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, ArrowRight, Sparkles } from 'lucide-react';

const FooterLinkGroup = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="space-y-8">
    <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">{title}</h5>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link 
            href={link.href} 
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-secondary hover:translate-x-2 transition-all inline-block"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="py-32 bg-primary text-white overflow-hidden relative border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-20 mb-32">
          <div className="space-y-12">
            <Link href="/" className="inline-block group">
              <h4 className="text-3xl font-heading font-black tracking-tighter uppercase text-white group-hover:text-secondary transition-colors">
                NextGen<span className="text-secondary/80 italic group-hover:text-secondary">Kids</span>
              </h4>
            </Link>
            <p className="text-xl font-body font-light leading-relaxed text-white/40 max-w-sm">
              Inspiring and educating the next generation to master the digital and scientific world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          <FooterLinkGroup 
            title="Hub" 
            links={[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Blog & News', href: '/blog' },
            ]} 
          />

          <FooterLinkGroup 
            title="Community" 
            links={[
              { label: 'Contact', href: '/contact' },
              { label: 'Partnerships', href: '/partnerships' },
              { label: 'Resources', href: '/resources' },
            ]} 
          />

          <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-secondary/20 transition-colors" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 text-secondary">
                <Sparkles className="w-4 h-4" />
                <h5 className="text-[10px] font-bold uppercase tracking-[0.5em]">Join the Mission</h5>
              </div>
              <p className="text-sm text-white/40 leading-relaxed font-body">
                Stay updated with the latest cosmic modules and safety protocols.
              </p>
            </div>
            <div className="relative z-10">
              <input 
                type="email" 
                placeholder="STAR-MAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-xs font-bold tracking-widest text-white placeholder:text-white/10 focus:outline-none focus:border-secondary transition-colors uppercase"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl shadow-secondary/20"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
             <p>© 2026 NEXT GEN 4 KIDS. EXPLORING SINCE 2020.</p>
           </div>
           <div className="flex gap-10 text-white/10 font-black">
             {['Privacy', 'Terms', 'Security'].map((item) => (
               <Link key={item} href="#" className="hover:text-secondary transition-colors">{item}</Link>
             ))}
           </div>
        </div>
      </div>
    </footer>
  );
};
