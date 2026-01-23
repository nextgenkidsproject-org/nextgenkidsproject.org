'use client';

import { useState } from 'react';
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Books', 'Workshops', 'Schools', 'Missions'];

  const projects = [
    {
      title: "Digital Sanctuary",
      category: "Books",
      desc: "An illustrated guide for young explorers to navigate the internet safely, featuring our hero 'Cyber'.",
      image: "/assets/images/photo-1544716278-ca5e3f4abd8c.jpeg",
      tags: ["Stories", "Safety", "Ages 7-10"],
      highlight: false
    },
    {
      title: "The Innovator's Lab",
      category: "Workshops",
      desc: "Hands-on STEM modules that transform passive consumers into active digital creators using real-world tools.",
      image: "/assets/images/photo-1531482615713-2afd69097998.jpeg",
      tags: ["STEM", "Creation", "Ages 11-14"],
      highlight: true
    },
    {
      title: "NextGen Academy",
      category: "Schools",
      desc: "Professional-grade cybersecurity training and ethical leadership frameworks for high school students.",
      image: "/assets/images/photo-1571260899304-425eee4c7efc.jpeg",
      tags: ["Leadership", "Cyber", "Ages 15-18"],
      highlight: false
    },
    {
      title: "Rural Outreach",
      category: "Missions",
      desc: "Bringing digital literacy to underserved communities through solar-powered mobile learning hubs.",
      image: "/assets/images/photo-1488521787991-ed7bbaae773c.jpeg",
      tags: ["Community", "Access", "Global"],
      highlight: false
    },
    {
      title: "Parent's Guide",
      category: "Books",
      desc: "A comprehensive manual for modern parenting in the digital age, covering everything from screen time to AI.",
      image: "/assets/images/photo-1516627145497-ae6968895b74.jpeg",
      tags: ["Parents", "Education"],
      highlight: false
    },
    {
      title: "Code Camps",
      category: "Workshops",
      desc: "Summer intensive bootcamps focusing on Python, Robotics, and Environmental Science.",
      image: "/assets/images/photo-1509062522246-3755977927d7.jpeg",
      tags: ["Coding", "Summer", "Intensive"],
      highlight: false
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-primary">
      <PageHero 
        chapter="Our Initiatives"
        title="Impact in <span class='text-secondary italic'>Motion.</span>"
        subtitle="Exploring our diverse range of projects designed to empower the next generation of scientific minds."
        image="/assets/mascot/mascot6.png"
        className="bg-neutral-50 text-primary border-b border-black/5"
        accentColor="secondary"
        ctaLabel="Browse Projects"
        ctaHref="#projects-list"
      />
      
     
      <div id="projects-list" className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 py-6">
        <div className="editorial-container flex flex-nowrap md:flex-wrap items-center gap-4 overflow-x-auto no-scrollbar px-6 md:px-0">
          <div className="flex items-center gap-2 mr-4 shrink-0 hidden md:flex">
             <motion.img 
               key={filter}
               initial={{ scale: 0.8, rotate: -10 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{ type: "spring", stiffness: 300, damping: 10 }}
               src="/assets/mascot/mascot-head.png" 
               alt="Filter Bot"
               className="w-8 h-8 object-contain"
               onError={(e) => e.currentTarget.style.display = 'none'}
             />
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Filter by:</span>
          </div>

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shrink-0 border",
                filter === f 
                  ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                  : "bg-white text-[#333333] border-black/10 hover:border-secondary/30 hover:text-secondary"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-neutral-light/20 min-h-[50vh]">
        <div className="editorial-container py-24">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="group h-full flex flex-col p-0 overflow-hidden border-black/5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-heading font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-dark/60 leading-relaxed line-clamp-3">
                          {project.desc}
                        </p>
                      </div>
                      
                      <div className="pt-6 mt-auto border-t border-black/5 flex items-center justify-between">
                        <div className="flex gap-2">
                           {project.tags.map(tag => (
                             <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-neutral-dark/30">#{tag}</span>
                           ))}
                        </div>
                        <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                           <span className="text-[10px] font-bold uppercase tracking-widest">Learn More</span>
                           <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-neutral-dark/40">
              <p className="text-lg">No projects found in this category.</p>
              <Button variant="link" onClick={() => setFilter('All')} className="mt-4">View All Projects</Button>
            </div>
          )}
        </div>
      </div>

      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary z-0" />
        
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary blur-[150px] rounded-full animate-pulse" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent blur-[120px] rounded-full" />
        </div>

        <div className="editorial-container relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
          <div className="space-y-8 text-white">
             <div className="flex items-center gap-3 text-accent">
               <Sparkles className="w-5 h-5" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Join the Movement</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none">
               Help us build a <br /><span className="text-accent italic opacity-90">Safer Future.</span>
             </h2>
             <p className="text-xl text-white/60 font-body leading-relaxed max-w-lg">
               Your support enables us to reach more schools, train more educators, and empower more children with the tools they need.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
                <Button variant="primary" size="xl" className="bg-accent text-white hover:bg-white hover:text-accent shadow-xl shadow-accent/20 border-none group">
                  Support Our Work <Heart className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <Users className="w-4 h-4" />
                  <span>Join 500+ Donors</span>
                </div>
             </div>
          </div>
          
          <div className="relative flex items-center justify-center lg:justify-end">
             <motion.div
               className="lg:absolute lg:-top-100 lg:right-20 z-20"
               animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
               <img 
                 src="/assets/mascot/mascot1.png" 
                 alt="Celebrating Mascot"
                 className="w-[170%] h-[170%] max-w-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
               />
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
