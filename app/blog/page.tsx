'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Share2, Clock, User2, Newspaper, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    { 
      title: "Why Cybersecurity is the New Literacy for youth.", 
      id: "INS-001", 
      category: "Online Safety", 
      date: "DEC 12, 2025",
      author: "NextGen Research",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      highlight: true
    },
    { 
      title: "Inspiring STEM Curiosity in Early Childhood.", 
      id: "INS-002", 
      category: "STEM Education", 
      date: "DEC 08, 2025",
      author: "Academic Faculty",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    { 
      title: "Africa's Digital Renaissance: A Decade of Growth.", 
      id: "INS-003", 
      category: "Impact", 
      date: "NOV 24, 2025",
      author: "Director of Policy",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      {/* Minimal Hero with Speech Bubble Mascot */}
      <section className="pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="editorial-container relative z-10 text-center">
           <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter uppercase text-primary mb-8">
             Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">News</span>
           </h1>
        </div>
        
        {/* Mascot with Speech Bubble */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 hidden lg:flex flex-col items-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5 }}
             className="relative mb-4"
           >
             <div className="bg-white border-2 border-black/5 shadow-xl px-6 py-3 rounded-2xl rounded-bl-sm text-sm font-bold uppercase tracking-widest text-primary">
               What's New?
             </div>
           </motion.div>
           <motion.img 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             src="/assets/mascot/mascot1.png" 
             alt="News Mascot"
             className="w-[180px] h-auto drop-shadow-xl"
           />
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-12 md:py-24 bg-neutral-light/20 border-y border-black/5">
         <div className="editorial-container">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-black/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src="/assets/images/photo-1544716278-ca5e3f4abd8c.jpeg" 
                      alt="Featured Article" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
                 <div className="space-y-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                      Featured Story
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-[0.9] text-primary">
                      Why Cybersecurity is the <span className="text-secondary italic">New Literacy.</span>
                    </h2>
                    <p className="text-lg text-neutral-dark/60 leading-relaxed font-body">
                      In a world run by code, understanding digital security isn't just a technical skill—it's a fundamental life entitlement for the next generation.
                    </p>
                    <Button variant="primary" size="lg" className="bg-primary text-white hover:bg-secondary rounded-full px-8 shadow-lg shadow-primary/20">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Article Grid */}
      <AnimatedSection className="bg-white py-24">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[posts[1], posts[2], { // Manually adding a 3rd item to fill grid as first was moved to featured
               title: "The Future of EdTech in Lagos.", 
               id: "INS-004", 
               category: "Community", 
               date: "NOV 10, 2025",
               author: "Field Team",
               color: "text-accent",
               bgColor: "bg-accent/10"
            }].map((post, i) => (
             <Card key={i} className="group flex flex-col justify-between min-h-[450px] rounded-[2.5rem] p-10 bg-white border border-black/5 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                   <img src="/assets/mascot/mascot-head.png" alt="Category Icon" className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all" />
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em]">
                    <span className="text-neutral-dark/40">{post.id}</span>
                    <span className={cn(
                      "px-4 py-2 rounded-full border border-black/5 text-secondary bg-secondary/5",
                    )}>{post.category}</span>
                  </div>
                  <h3 className="text-3xl font-heading font-black tracking-tighter uppercase leading-[1.1] text-primary group-hover:text-secondary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-dark/60 leading-relaxed line-clamp-3 font-body">
                    Exploring the intersection of technology, education, and community impact in the modern age.
                  </p>
                </div>

                <div className="pt-8 border-t border-black/5 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">
                       <Clock className="w-3 h-3" />
                       <span>{post.date}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                       <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-32">
         <div className="editorial-container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24 items-center">
            <div className="space-y-12">
               <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">Weekly Briefing</div>
               <h2 className="text-5xl md:text-8xl font-heading font-black leading-[0.9] tracking-tighter uppercase text-primary">Intake <br /><span className="text-secondary italic opacity-80">intelligence.</span></h2>
               <p className="text-xl md:text-2xl text-neutral-dark/40 font-body leading-relaxed max-w-xl">
                 Subscribe to our research digest and receive monthly updates on digital literacy and scientific education trends.
               </p>
            </div>
            
            <form className="bg-primary p-12 md:p-16 space-y-12 text-white shadow-2xl shadow-primary/20 rounded-[3rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
               <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3 text-secondary">
                    <Sparkles className="w-4 h-4" />
                    <label className="text-[10px] font-bold uppercase tracking-[0.5em]">Protocol: Subscriber_Input</label>
                  </div>
                  <input placeholder="ENTER EMAIL ADDRESS" className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl md:text-2xl font-bold tracking-tighter uppercase outline-none focus:border-secondary transition-colors placeholder:text-white/5" />
               </div>
               <Button variant="secondary" size="xl" className="w-full font-bold shadow-xl shadow-secondary/10 rounded-full group">
                 Initialize Briefing <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Button>
            </form>
         </div>
      </AnimatedSection>
    </div>
  );
}
