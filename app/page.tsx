'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight, Shield, BookOpen, Users, Rocket, Star, Globe, Zap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mascotIndex, setMascotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMascotIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex items-center overflow-hidden bg-primary px-6 md:px-12 py-24 md:py-32">
        {/* Subtle Background Parallax Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full"
          />
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-60 -left-40 w-[800px] h-[800px] bg-accent/5 blur-[200px] rounded-full"
          />
        </div>

        <div className="editorial-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.4em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Direct Link: Mission Control</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-black leading-[0.9] tracking-tighter text-white">
              Become <br/>
              <span className="text-secondary">Cyber-Hero</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-light/40 font-body max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join the Galactic Academy. Master digital safety, explore science, and protect the virtual universe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button size="xl" variant="primary" className="rounded-full px-16">
                Start Mission
              </Button>
              <Button size="xl" variant="outline" className="rounded-full px-16">
                Our Story
              </Button>
            </div>
          </motion.div>
          
          <div className="relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square flex items-center justify-center p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-accent/40 blur-[150px] animate-pulse rounded-full opacity-20" />
              
              <motion.div 
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full z-10 flex items-center justify-center p-12"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={mascotIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    src={`/assets/mascot/mascot${mascotIndex + 1}.png`}
                    alt="Cyber Hero Mascot" 
                    className="w-[180%] h-[180%] max-w-none object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  />
                </AnimatePresence>
              </motion.div>
              {/* Ground Shadow */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/40 blur-2xl rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION - OUR PERSPECTIVE */}
      <AnimatedSection className="bg-white text-primary py-24">
         <div className="editorial-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8 lg:pr-12">
                  <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Our Perspective</div>
                  <h2 className="text-5xl md:text-6xl font-heading font-black text-primary leading-[1.1] tracking-tighter">
                    Empowering Africa's <br/> <span className="text-secondary opacity-80 italic">Digital Frontier.</span>
                  </h2>
                  <p className="text-xl text-neutral-dark/40 leading-relaxed max-w-xl font-body">
                    We bridge the gap between curiosity and capability, bringing high-tech STEM education and cybersecurity kits to the next generation of innovators.
                  </p>
                  <Button variant="link" className="text-secondary group p-0 text-[10px] font-black uppercase tracking-[0.3em]">
                    Discover our full mission <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Impacted Kids", value: "12k+", icon: Users, color: "text-secondary", bg: "bg-secondary/10" },
                    { label: "Active Countries", value: "08+", icon: Globe, color: "text-accent", bg: "bg-accent/10" },
                    { label: "Partner Schools", value: "150+", icon: BookOpen, color: "text-primary", bg: "bg-primary/10" },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={cn(
                        "group relative p-10 rounded-[3rem] bg-white border border-black/5 flex flex-col items-center text-center space-y-6 transition-all duration-500 hover:shadow-xl hover:border-transparent",
                        i === 2 && "sm:col-span-2 sm:max-w-[50%] sm:mx-auto w-full"
                      )}
                    >
                       <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110", stat.bg, stat.color)}>
                          <stat.icon className="w-8 h-8" />
                       </div>
                       <div className="space-y-1">
                          <div className="text-4xl md:text-5xl font-heading font-black text-primary tracking-tighter transition-colors group-hover:text-secondary">{stat.value}</div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-dark/40 group-hover:text-neutral-dark/60">{stat.label}</div>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </AnimatedSection>

      {/* 3. PORTALS SECTION */}
      <AnimatedSection className="bg-neutral-light/20 py-24">
         <div className="editorial-container space-y-20">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-dark/30">Select Your Path</div>
              <h2 className="text-5xl md:text-6xl font-heading font-black text-primary tracking-tighter leading-tight">Access Your <span className="text-secondary italic opacity-80">Gateway</span></h2>
              <p className="text-xl text-neutral-dark/40 font-body">Choose your entry point into the Galactic Academy ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Children's Portal */}
               <Card className="hover:border-secondary/30 transition-all duration-700">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <Rocket className="w-10 h-10" />
                  </div>
                  <div className="space-y-6 mb-12">
                    <h3 className="text-3xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Kids Area</h3>
                    <p className="text-lg text-neutral-dark/40 leading-relaxed font-body">Games, interactive missions, and cosmic adventures to master digital safety.</p>
                  </div>
                  <Button variant="primary" className="mt-auto w-full lg:w-fit px-12">Start Now</Button>
               </Card>

               {/* Educators Portal */}
               <Card className="hover:border-accent/30 transition-all duration-700">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-accent/10 flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <div className="space-y-6 mb-12">
                    <h3 className="text-3xl font-heading font-black text-primary group-hover:text-accent transition-colors tracking-tighter">Educators</h3>
                    <p className="text-lg text-neutral-dark/40 leading-relaxed font-body">Professional curriculum kits, classroom assets, and progress metrics.</p>
                  </div>
                  <Button variant="secondary" className="mt-auto w-full lg:w-fit px-12">Get Tools</Button>
               </Card>

               {/* Partners Portal */}
               <Card className="hover:border-primary/30 transition-all duration-700">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Shield className="w-10 h-10" />
                  </div>
                  <div className="space-y-6 mb-12">
                    <h3 className="text-3xl font-heading font-black text-primary group-hover:text-primary transition-colors tracking-tighter">Partners</h3>
                    <p className="text-lg text-neutral-dark/40 leading-relaxed font-body">Sponsor schools, fund new kits, and join our global mission for literacy.</p>
                  </div>
                  <Button variant="primary" className="mt-auto w-full lg:w-fit px-12 bg-primary">Join Us</Button>
               </Card>
            </div>
         </div>
      </AnimatedSection>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="relative bg-primary pt-32 pb-24 overflow-visible mt-40">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        
        <div className="editorial-container relative">
          {/* Overflowing Mascot */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-60 right-0 lg:right-50 w-64 md:w-80 lg:w-[450px] z-20 pointer-events-none select-none"
          >
            <img 
              src="/assets/mascot/mascot5.png" 
              alt="Community Mascot" 
              className="w-[200%] h-[200%] max-w-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 relative z-10">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-secondary">Join The Alliance</div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter">
                  Ready to Shape <br/>
                  <span className="text-secondary italic">The Future?</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/40 font-body max-w-xl leading-relaxed">
                  Whether you're a parent, educator, or partner, there's a place for you in our galactic mission to empower Africa's children.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Button size="xl" variant="primary" className="rounded-full px-16 group">
                  Join Community <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button size="xl" variant="outline" className="rounded-full px-16 border-white/20 text-white hover:bg-white hover:text-primary">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle ground shadow for overflowing mascot */}
        <div className="absolute top-0 right-32 w-64 h-8 bg-black/20 blur-3xl rounded-full" />
      </section>

      {/* 4. DYNAMIC TESTIMONIALS SECTION */}
      <AnimatedSection className="bg-white py-24 overflow-hidden">
         <div className="editorial-container space-y-20">
            <div className="text-center space-y-8 max-w-3xl mx-auto mb-16">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Voices from the Field</div>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-[1.05] tracking-tighter">
                Stories of <br/> <span className="text-secondary italic">Exploration.</span>
              </h2>
              <p className="text-xl text-neutral-dark/40 font-body">Hear from the educators and leaders shaping the digital future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { 
                  name: "Sarah M.", 
                  role: "Principal, Rwanda", 
                  text: "This program completely changed how our students view the internet. They are now safer and smarter online."
                },
                { 
                  name: "David K.", 
                  role: "Tech Lead, Kenya", 
                  text: "The kits provided and the ease of use is beyond expectation. Our children are now asking to code every single day."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-12 bg-neutral-light/20 rounded-[3rem] border border-black/5 space-y-10 group"
                >
                    <div className="flex gap-1 text-accent">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent" />)}
                    </div>
                    <p className="text-2xl font-body italic text-neutral-dark/80 leading-relaxed">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-6 pt-6">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/10 flex items-center justify-center text-secondary">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                          <div className="font-heading font-black text-primary tracking-tight">{item.name}</div>
                          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-dark/30">{item.role}</div>
                      </div>
                    </div>
                </motion.div>
              ))}
            </div>
                        
         </div>
      </AnimatedSection>

    </div>
  );
}
