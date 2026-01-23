'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Heart, Handshake, Globe, Trophy, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function PartnershipsPage() {
  const levels = [
    {
      title: "Community Ally",
      price: "$1,000 /yr",
      icon: <Handshake className="w-8 h-8" />,
      mascot: "/assets/mascot/mascot5.png",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      benefits: ["Logo on website", "Social media shoutout", "Quarterly impact report", "Community badge"]
    },
    {
      title: "Innovation Partner",
      price: "$5,000 /yr",
      icon: <Globe className="w-8 h-8" />,
      mascot: "/assets/mascot/mascot2.png",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      benefits: ["All Ally benefits", "Event sponsorship", "Featured blog story", "School kit branding"],
      highlight: true
    },
    {
      title: "Visionary Sponsor",
      price: "$10,000+ /yr",
      icon: <Trophy className="w-8 h-8" />,
      mascot: "/assets/mascot/mascot1.png",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      benefits: ["All Partner benefits", "Board advisory seat", "Custom impact project", "VIP event access"]
    }
  ];

  return (

    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <PageHero 
        chapter="Join the Mission"
        title="Fuel the <span class='text-secondary italic'>Future.</span>"
        subtitle="Your support builds laboratories, trains educators, and ignites the spark of curiosity in thousands of children."
        image="/assets/images/photo-1531482615713-2afd69097998.jpeg"
        accentColor="secondary"
        ctaLabel="Donate Now"
        ctaHref="#donation-form"
      />

      <AnimatedSection className="py-24 bg-white">
        <div className="editorial-container">
           <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Collaborate</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-primary">Partnership Levels</h2>
              <p className="text-xl text-neutral-dark/60">Choose how you want to make an impact. Every tier drives real change.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {levels.map((level, i) => (
                <div key={i} className="relative group">
                   <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 z-20 pointer-events-none">
                      <motion.img 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        src={level.mascot} 
                        alt="Level Mascot" 
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                   </div>

                   <Card className={cn(
                     "relative pt-16 pb-8 px-8 text-center rounded-[2.5rem] transition-all duration-300 border-2",
                     level.highlight ? "shadow-2xl shadow-secondary/20 scale-105 z-10 bg-white border-secondary" : "shadow-xl bg-neutral-50 border-transparent hover:border-black/5"
                   )}>
                      <div className={cn("inline-flex p-4 rounded-2xl mb-6", level.bgColor, level.color)}>
                        {level.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-black uppercase text-primary mb-2">{level.title}</h3>
                      <div className={cn("text-3xl font-bold mb-8", level.color)}>{level.price}</div>
                      
                      <ul className="space-y-4 mb-8 text-left">
                        {level.benefits.map((benefit, j) => (
                           <li key={j} className="flex items-center gap-3 text-sm font-bold text-neutral-dark/60">
                              <CheckCircle2 className={cn("w-4 h-4 shrink-0", level.color)} />
                              <span>{benefit}</span>
                           </li>
                        ))}
                      </ul>

                      <Button 
                        variant={level.highlight ? "primary" : "outline"}
                        className={cn(
                          "w-full rounded-xl font-bold uppercase tracking-widest",
                          level.highlight ? "bg-secondary hover:bg-primary text-white shadow-lg shadow-secondary/20" : "border-black/10 text-neutral-dark hover:border-secondary hover:text-secondary"
                        )}
                      >
                        Partner
                      </Button>
                   </Card>
                </div>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* Donation Form Section */}
      <AnimatedSection id="donation-form" className="py-24 bg-neutral-light/20 border-y border-black/5">
         <div className="editorial-container">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
               <div className="p-12 md:p-16 space-y-8 bg-primary text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent blur-[150px] opacity-30 rounded-full" />
                  
                  <div className="relative z-10 space-y-6">
                     <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">
                       Make a Direct <span className="text-secondary">Impact.</span>
                     </h2>
                     <p className="text-lg text-white/60 leading-relaxed font-body">
                       Your donation goes directly to purchasing hardware, printing learning materials, and organizing workshops in underserved communities.
                     </p>
                     
                     <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 flex items-start gap-4">
                        <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
                        <div className="space-y-1">
                           <div className="text-sm font-bold uppercase tracking-wider text-white">Secure & Transparent</div>
                           <p className="text-xs text-white/50 leading-relaxed">
                             We are a registered non-profit. diverse audits ensure 100% transparency in fund allocation.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Mascot Reassurance */}
                  <div className="absolute bottom-0 right-0 w-48 translate-y-10 translate-x-10 pointer-events-none">
                     <img src="/assets/mascot/mascot5.png" alt="Secure Mascot" className="w-full h-auto opacity-20 rotate-12" />
                  </div>
               </div>

               <div className="p-12 md:p-16 space-y-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Select Amount</label>
                     <div className="grid grid-cols-3 gap-4">
                        {['$25', '$50', '$100'].map(amt => (
                           <button key={amt} className="py-4 border-2 border-black/5 rounded-xl font-heading font-black text-xl text-primary hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all">
                             {amt}
                           </button>
                        ))}
                     </div>
                     <input placeholder="Custom Amount ($)" className="w-full py-4 px-6 border-2 border-black/5 rounded-xl font-bold outline-none focus:border-secondary transition-colors text-primary" />
                  </div>

                  <div className="space-y-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Frequency</label>
                     <div className="flex bg-neutral-light/50 p-1 rounded-xl">
                        <button className="flex-1 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-white shadow-sm text-primary">One-Time</button>
                        <button className="flex-1 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-dark/40 hover:text-primary">Monthly</button>
                     </div>
                  </div>

                  <Button size="xl" className="w-full bg-accent hover:bg-primary text-white font-bold uppercase tracking-widest shadow-xl shadow-accent/20 h-16 rounded-xl group relative overflow-hidden">
                     <span className="relative z-10 flex items-center justify-center gap-2">
                       Donate Securely <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                     </span>
                  </Button>
                  
                  <div className="text-center flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">
                     <img src="/assets/mascot/mascot-head.png" className="w-6 h-6 grayscale opacity-50" alt="Secure" />
                     <span>Secure Payment Processing</span>
                  </div>
               </div>
            </div>
         </div>
      </AnimatedSection>

    </div>
  );
}
