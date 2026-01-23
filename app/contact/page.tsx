'use client';

import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      {/* Hero Section */}
      <PageHero 
        chapter="Contact Us"
        title="We're Listening. <span class='text-secondary italic'>Reach Out.</span>"
        subtitle="Whether you have a question about our programs, want to partner, or just want to say hello, we're here."
        image="/assets/mascot/mascot2.png"
        accentColor="secondary"
      />



      <AnimatedSection className="bg-white py-24">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24 items-start">
           
           {/* Contact Form Section */}
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-primary">
                    Send a <span className="text-secondary italic">Message.</span>
                 </h2>
                 <p className="text-xl text-neutral-dark/60">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <div className="bg-neutral-light/20 p-8 md:p-12 lg:p-16 border border-black/5 rounded-[3rem] shadow-xl shadow-black/5 relative overflow-hidden">
                <form className="space-y-8 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Full Name</label>
                         <input className="w-full py-4 text-lg bg-white border border-black/5 rounded-xl px-6 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-bold tracking-tight text-primary" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Email Address</label>
                         <input className="w-full py-4 text-lg bg-white border border-black/5 rounded-xl px-6 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-bold tracking-tight text-primary" placeholder="name@example.com" />
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Subject</label>
                      <select className="w-full py-4 text-lg bg-white border border-black/5 rounded-xl px-6 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-bold tracking-tight text-primary appearance-none cursor-pointer">
                         <option>General Inquiry</option>
                         <option>Programs & Workshops</option>
                         <option>Partnerships</option>
                         <option>Support</option>
                      </select>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Message</label>
                      <textarea rows={5} className="w-full py-4 text-lg bg-white border border-black/5 rounded-xl px-6 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-bold tracking-tight text-primary resize-none subheading-relaxed" placeholder="How can we help you?" />
                   </div>

                   <Button variant="secondary" size="xl" className="w-full rounded-xl flex items-center justify-center gap-4 font-bold shadow-xl shadow-secondary/10 group">
                      Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </form>

                {/* Subtle Mascot Feedback (Visual Decoration for now) */}
                <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
                    <img src="/assets/mascot/mascot-head.png" alt="Feedback" className="w-24 h-24 rotate-12" />
                </div>
              </div>
           </div>

           {/* Sidebar: Map & Socials */}
           <div className="space-y-12">
              {/* Map Placeholder */}
              <div className="bg-neutral-100 rounded-[2.5rem] overflow-hidden min-h-[300px] relative border border-black/5">
                 <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-neutral-400" />
                    <span className="ml-2 text-neutral-500 font-bold uppercase tracking-widest text-xs">Map Loading...</span>
                 </div>
                 {/* Address Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-black/5">
                    <div className="flex gap-4 items-start">
                       <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40 mb-1">Headquarters</div>
                          <p className="font-bold text-primary leading-tight">123 Innovation Drive,<br />Douala, Cameroon</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 gap-4">
                 <div className="flex items-center gap-6 p-6 bg-white border border-black/5 rounded-2xl hover:border-secondary/30 transition-all group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                       <Mail className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Email Us</div>
                       <div className="font-bold text-lg text-primary">hello@nextgenkids.org</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-white border border-black/5 rounded-2xl hover:border-accent/30 transition-all group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                       <Phone className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Call Us</div>
                       <div className="font-bold text-lg text-primary">+237 000 000 000</div>
                    </div>
                 </div>
              </div>

              {/* Socials with Mascot Pointing */}
              <div className="relative pt-8">
                 <div className="absolute -top-6 right-0 w-24 pointer-events-none">
                    <img src="/assets/mascot/mascot5.png" alt="Social Mascot" className="w-full h-auto rotate-[-15deg]" />
                 </div>
                 <div className="p-8 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                    <h3 className="text-xl font-heading font-black uppercase tracking-tight mb-6 relative z-10">Connect Socially</h3>
                    <div className="flex gap-4 relative z-10">
                       {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all cursor-pointer">
                             <span className="text-[10px] font-bold">SM</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
