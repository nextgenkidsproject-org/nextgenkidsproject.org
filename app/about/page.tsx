'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Shield, Microscope, Compass, Quote, Users, Globe, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { label: "Schools Reached", value: "150+", id: "STA-01", color: "text-secondary", icon: BookOpen },
    { label: "Youth Impacted", value: "12k+", id: "STA-02", color: "text-accent", icon: Users },
    { label: "Active Countries", value: "08+", id: "STA-03", color: "text-white", icon: Globe, highlight: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      {/* Hero: The Story Chapter */}
      <PageHero 
        chapter="Chapter One: Our Roots"
        title="Born in Africa, Made for <span class='text-secondary italic'>Global Impact.</span>"
        subtitle="What started as a response to the digital divide in African communities has evolved into a global movement to prepare the youth for a scientific world."
        image="/assets/mascot/mascot3.png"
        accentColor="secondary"
        ctaLabel="Discover Our Mission"
        ctaHref="#mission-section"
      />



      <AnimatedSection id="mission-section" className="bg-white text-primary py-24">
        <div className="editorial-container">
           <div className="max-w-4xl space-y-12">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Our DNA</div>
              <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tighter">
                We bridge the gap between <span className="text-secondary italic opacity-80">playful engagement</span> and academic rigor.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-primary">Mission</h3>
                  <p className="text-[18px] text-neutral-dark/40 leading-relaxed font-body">
                    To ensure every <span className="text-secondary font-bold">digital interaction</span> is a step toward scientific mastery. We ignite curiosity as the fuel for innovation.
                  </p>
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl font-bold uppercase tracking-tight text-primary">Vision</h3>
                   <p className="text-[18px] text-neutral-dark/40 leading-relaxed font-body">
                    A future where <span className="text-secondary font-bold">digital literacy</span> empowers youth to be not just consumers, but creators and protectors of the digital world.
                   </p>
                </div>
              </div>
           </div>
        </div>
      </AnimatedSection>

      {/* 1. Integrated Impact Section */}
      <AnimatedSection className="bg-neutral-light/20 py-24">
        <div className="editorial-container space-y-24">
           <div className="max-w-3xl space-y-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-dark/30">The Benchmark</div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-tight text-primary">
                Documenting the <br /><span className="text-secondary italic opacity-80">Evolving Legacy.</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-dark/40 font-body leading-relaxed">
                Our success is measured by the growing confidence and technical mastery of the youth we serve across multiple continents.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((s, i) => (
               <Card key={i} className={cn(
                  "p-12 space-y-12 transition-all duration-700 group flex flex-col justify-between h-full min-h-[350px] rounded-[3rem]",
                  s.highlight 
                    ? "bg-secondary text-white hover:bg-black border-none shadow-2xl shadow-secondary/20" 
                    : "bg-white hover:border-secondary/30 border border-black/5"
                )}>
                  <div className="flex justify-between items-start">
                    <div className={cn(
                      "text-[10px] font-bold uppercase tracking-widest transition-colors duration-500", 
                      s.highlight ? "text-white/40" : "text-neutral-dark/40"
                    )}>{s.id}</div>
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                      s.highlight ? "bg-white/10 text-white" : "bg-neutral-light/50 text-secondary group-hover:bg-secondary group-hover:text-white"
                    )}>
                      <s.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className={cn(
                      "text-6xl md:text-7xl font-heading font-black tracking-tighter transition-colors duration-500", 
                      s.highlight ? "text-white" : "text-primary group-hover:text-secondary"
                    )}>{s.value}</div>
                    <div className={cn(
                      "text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-500", 
                      s.highlight ? "text-white/60" : "text-neutral-dark/40 group-hover:text-neutral-dark/60"
                    )}>{s.label}</div>
                  </div>
                </Card>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* 2. Key Strengths Section */}
      <AnimatedSection className="bg-white py-24 relative overflow-hidden">
        <div className="editorial-container space-y-32">
            <div className="max-w-4xl space-y-12">
               <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">The Ecosystem</div>
               <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none text-primary uppercase">
                 Engineered for <br /><span className="text-accent italic opacity-80">Limitless</span> Growth.
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                 <p className="text-[18px] text-neutral-dark/40 leading-relaxed font-body">
                   We believe that technology is not a toy, but a <span className="text-primary font-bold">tool for discovery</span>. Our pillars are built to withstand the evolving digital landscape.
                 </p>
                 <p className="text-[18px] text-neutral-dark/40 leading-relaxed font-body">
                   At NextGen Kids, we balance high-level <span className="text-secondary font-bold">cybersecurity</span> with intuitive pedagogy, ensuring every child feels empowered.
                 </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { 
                   title: "Digital Safety", 
                   desc: "Advanced cybersecurity protocols adapted for young explorers to navigate safely.", 
                   label: "Pillar I",
                   icon: <Shield className="w-10 h-10" />,
                   bgColor: "bg-accent/10",
                   activeColor: "text-accent"
                 },
                 { 
                   title: "Scientific Rigor", 
                   desc: "Curriculum grounded in proven pedagogical research and modern tech standards.", 
                   label: "Pillar II",
                   icon: <Microscope className="w-10 h-10" />,
                   bgColor: "bg-accent/10",
                   activeColor: "text-accent",
                   mascotPeek: true
                 },
                 { 
                   title: "Global Impact", 
                   desc: "Scalable models designed to transcend borders and empower communities.", 
                   label: "Pillar III",
                   icon: <Globe className="w-10 h-10" />,
                   bgColor: "bg-accent/10",
                   activeColor: "text-accent"
                 }
               ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                >
                  <Card className="group transition-all duration-700 h-full min-h-[450px] flex flex-col justify-between hover:border-secondary/30 hover:shadow-[0_20px_40px_-10px_rgba(122,73,255,0.2)] rounded-[3rem] border-black/5 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent/10 transition-colors" />
                    
                    {/* {val.mascotPeek && (
                       <img 
                         src="/assets/mascot/mascot3.png" 
                         alt="Peeking Mascot"
                         className="absolute -right-12 -bottom-12 w-48 h-auto opacity-0 group-hover:opacity-100 group-hover:-right-4 group-hover:-bottom-4 transition-all duration-500 z-0"
                       />
                    )} */}

                    <div className="flex justify-between items-start relative z-10">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">{val.label}</div>
                      <div className={cn("w-20 h-20 rounded-[1.75rem] flex items-center justify-center transition-all duration-500", val.bgColor, val.activeColor, "group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-6")}>
                        {val.icon}
                      </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <h3 className="text-3xl font-heading font-black text-primary tracking-tighter group-hover:text-secondary transition-colors uppercase">{val.title}</h3>
                      <p className="text-[18px] text-neutral-dark/40 leading-relaxed font-body group-hover:text-neutral-dark/60 transition-colors">
                          {val.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
               ))}
            </div>
         </div>
      </AnimatedSection>
      
      <AnimatedSection className="bg-primary text-white py-32 relative overflow-hidden">
        {/* Decorative background pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="editorial-container relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center border-l-8 border-accent pl-12 md:pl-20"
        >
           <Quote className="w-20 h-20 text-secondary opacity-40 shrink-0" />
           <div className="space-y-10">
              <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight tracking-tighter max-w-5xl text-balance">
                &quot;The transition from a passive user to an <span className="text-secondary italic">active, scientific mind</span> is the greatest gift we can give a child.&quot;
              </p>
              <div className="space-y-3">
                 <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-secondary">Lead Researcher</div>
                 <div className="font-heading font-black text-2xl tracking-tight">Dr. Sarah Mensah</div>
              </div>
           </div>
        </motion.div>
      </AnimatedSection>

      {/* 3. Team Section */}
      <AnimatedSection className="bg-neutral-light/10 py-32 overflow-hidden relative">
        <div className="absolute top-[10%] right-[-10%] w-[350px] md:w-[500px] z-0 pointer-events-none select-none">
          <motion.div 
            animate={{ 
              y: [0, -25, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative opacity-20 lg:opacity-30"
          >
            <img 
              src="/assets/mascot/mascot5.png"
              className="h-[200%] w-[200%] grayscale"
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-10 bg-black/10 blur-3xl rounded-full" />
          </motion.div>
        </div>

        <div className="editorial-container space-y-24 relative z-10">
          {/* Team Intro with Mascot Guide */}
          {/* <div className="flex items-end gap-6 mb-[-4rem]">
             <img src="/assets/mascot/mascot5.png" alt="Guide Mascot" className="w-16 h-16 object-contain hidden md:block" />
             <div className="bg-white/50 backdrop-blur-sm px-6 py-4 rounded-t-2xl rounded-br-2xl text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20 shadow-sm">
               Meet the Architects of the Future
             </div>
          </div> */}
          <div className="max-w-3xl space-y-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">The Collective</div>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-tight text-primary uppercase">
               Engineers of <br /><span className="text-secondary italic opacity-80">Curiosity.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { name: "Isaac T.", role: "Founder & CEO", color: "bg-secondary" },
              { name: "Dr. Sarah M.", role: "Research Lead", color: "bg-accent" },
              { name: "Kojo A.", role: "Platform Architect", color: "bg-primary" },
              { name: "Amara O.", role: "Youth Pedagogy", color: "bg-secondary" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col items-center text-center space-y-6"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                   <div className={cn("absolute inset-0 rounded-full opacity-10 group-hover:opacity-20 transition-opacity", member.color)} />
                   <div className="absolute inset-4 rounded-full border-2 border-dashed border-black/10 animate-[spin_20s_linear_infinite]" />
                   <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <div className={cn("w-full h-full flex items-center justify-center text-white text-5xl font-black", member.color)}>
                         {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                      </div>
                   </div>
                   {/* Decorative Hexagon Frame logic simulated via clip-path if needed, but Circle is requested or Hexagonal. Circle is safer and cleaner for now. */}
                </div>
                <div className="space-y-2">
                   <h4 className="text-2xl font-heading font-black text-primary tracking-tight transition-colors group-hover:text-secondary">{member.name}</h4>
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-dark/40">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-32 relative overflow-hidden">
        <div className="absolute -bottom-20 left-[-10%] w-[400px] md:w-[550px] z-0 pointer-events-none select-none">
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative opacity-40 lg:opacity-60"
          >
            <img 
              src="/assets/mascot/mascot2.png"
              className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-10 bg-black/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
           <div className="space-y-16">
              <div className="space-y-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Strategic Roadmap</div>
                <h2 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-primary">Preparing for a <br /><span className="text-accent italic opacity-80">Scientific Future.</span></h2>
                <p className="text-xl text-neutral-dark/40 font-body leading-relaxed max-w-xl">
                   Our long-term commitment is to establish NextGen Kids as a global benchmark for digital safety and scientific literacy. 
                </p>
              </div>
              <div className="space-y-2">
                 {[
                   { label: "Community Schools", value: "Level 1", color: "text-secondary" },
                   { label: "Institutional Partners", value: "Level 2", color: "text-accent" },
                   { label: "Ministry Collaborations", value: "Level 3", color: "text-primary" }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center py-8 border-b border-black/5 group cursor-default">
                      <span className="font-bold text-lg md:text-xl uppercase tracking-tighter text-neutral-dark/30 group-hover:text-primary transition-colors">{item.label}</span>
                      <span className={cn("font-heading font-black text-lg md:text-xl", item.color)}>{item.value}</span>
                   </div>
                 ))}
              </div>
              <Button variant="primary" size="xl" className="w-full md:w-auto mt-8 rounded-full px-16 group">
                Invest in the Future <Compass className="ml-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
              </Button>
           </div>
           
           <div className="relative aspect-square rounded-[4rem] bg-neutral-light/30 border border-black/5 flex items-center justify-center overflow-hidden">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                style={{ backgroundImage: `url('/assets/images/photo-1560253023-3ec5d502959f.jpeg')` }}
              />
              <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-neutral-dark/20 absolute top-12 left-12 z-20">Institutional Goal</div>
              <div className="text-[30vw] font-heading font-black opacity-10 leading-none select-none text-secondary z-10">2030</div>
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
