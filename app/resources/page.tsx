'use client';

import { useState } from 'react';
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, BookOpen, Video, FileText, Filter, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ResourcesPage() {
  const [activeType, setActiveType] = useState('All');
  const [activeAudience, setActiveAudience] = useState('All');

  const types = ['All', 'PDF Guides', 'Videos', 'Interactives'];
  const audiences = ['All', 'Parents', 'Teachers', 'Students'];

  const resources = [
    { 
      title: "Digital Safety Handbook", 
      type: "PDF Guides", 
      audience: "Parents", 
      desc: "A complete guide to setting up parental controls and monitoring.",
      fileSize: "2.4 MB",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-accent"
    },
    { 
      title: "Classroom Cybersecurity Kit", 
      type: "PDF Guides", 
      audience: "Teachers", 
      desc: "Lesson plans and printable activities for grades 4-6.",
      fileSize: "5.1 MB",
      icon: <FileText className="w-5 h-5" />,
      color: "text-secondary"
    },
    { 
      title: "Logic Puzzles Vol. 1", 
      type: "Interactives", 
      audience: "Students", 
      desc: "Brain teasers to develop computational thinking skills.",
      fileSize: "Interactive Web",
      icon: <Sparkles className="w-5 h-5" />,
      color: "text-primary"
    },
    { 
      title: "Intro to Algorithms", 
      type: "Videos", 
      audience: "Students", 
      desc: "Animated series explaining sorting and searching algorithms.",
      fileSize: "12 Min",
      icon: <Video className="w-5 h-5" />,
      color: "text-primary"
    },
    { 
      title: "Family Tech Agreement", 
      type: "PDF Guides", 
      audience: "Parents", 
      desc: "A template to establish screen time rules at home.",
      fileSize: "1.2 MB",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-accent"
    },
    { 
      title: "Coding Club Starter Pack", 
      type: "PDF Guides", 
      audience: "Teachers", 
      desc: "Everything you need to launch an after-school coding club.",
      fileSize: "8.5 MB",
      icon: <FileText className="w-5 h-5" />,
      color: "text-secondary"
    },
    { 
      title: "The Internet's Journey", 
      type: "Videos", 
      audience: "Students", 
      desc: "How data travels from your device to the server and back.",
      fileSize: "8 Min",
      icon: <Video className="w-5 h-5" />,
      color: "text-primary"
    },
    { 
      title: "Screen Time Tracker", 
      type: "PDF Guides", 
      audience: "Parents", 
      desc: "Printable logs to help manage and balance digital consumption.",
      fileSize: "0.5 MB",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-accent"
    }
  ];

  const filteredResources = resources.filter(r => {
    const typeMatch = activeType === 'All' || r.type === activeType;
    const audienceMatch = activeAudience === 'All' || r.audience === activeAudience;
    return typeMatch && audienceMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero 
        chapter="Knowledge Base"
        title="Tools for <span class='text-secondary italic'>Growth.</span>"
        subtitle="Curated blueprints, guides, and interactive tools to support the digital journey of every child, parent, and educator."
        image="/assets/images/photo-1488521787991-ed7bbaae773c.jpeg"
        accentColor="secondary"
      />

       {/* Floating Hero Mascot - Reading Pose */}
       <div className="absolute top-[35%] left-[5%] w-[300px] md:w-[450px] z-20 pointer-events-none select-none hidden lg:block">
        <motion.div
           animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
           className="relative"
        >
          <img 
            src="/assets/mascot/mascot4.png"
            alt="Reading Mascot"
             className="w-full h-auto drop-shadow-[0_30px_60px_rgba(122,73,255,0.25)]"
          />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/10 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="editorial-container py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
               <Filter className="w-4 h-4 text-neutral-dark/40 mr-2 shrink-0" />
               {types.map(t => (
                 <button
                   key={t}
                   onClick={() => setActiveType(t)}
                   className={cn(
                     "px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shrink-0",
                     activeType === t 
                       ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                       : "bg-neutral-50/50 text-neutral-dark/60 hover:bg-neutral-100"
                   )}
                 >
                   {t}
                 </button>
               ))}
            </div>

            {/* Mobile Filter Dropdown */}
            <div className="md:hidden w-full space-y-4">
               <div className="relative">
                 <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-dark/40" />
                 <select 
                   value={activeType}
                   onChange={(e) => setActiveType(e.target.value)}
                   className="w-full appearance-none bg-neutral-50 border border-black/10 rounded-xl py-3 pl-12 pr-4 text-sm font-bold uppercase tracking-wide text-neutral-dark/60 outline-none focus:border-secondary"
                 >
                   {types.map(t => <option key={t} value={t}>{t}</option>)}
                 </select>
               </div>
               <div className="flex gap-2 items-center overflow-x-auto pb-2">
                 {audiences.map(a => (
                    <button
                      key={a}
                      onClick={() => setActiveAudience(a)}
                      className={cn(
                        "px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all shrink-0 whitespace-nowrap",
                        activeAudience === a
                          ? "border-primary bg-primary text-white" 
                          : "border-black/10 text-neutral-dark/60 hover:border-black/30"
                      )}
                    >
                      {a}
                    </button>
                 ))}
               </div>
            </div>

            {/* Desktop Audience Filters */}
            <div className="hidden md:flex items-center gap-2 border-l border-black/5 pl-0 md:pl-6 overflow-x-auto no-scrollbar max-w-full">
               <span className="text-[10px] font-bold uppercase text-neutral-dark/40 shrink-0 mr-2">For:</span>
               {audiences.map(a => (
                 <button
                   key={a}
                   onClick={() => setActiveAudience(a)}
                   className={cn(
                     "px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all shrink-0",
                     activeAudience === a
                       ? "border-primary bg-primary text-white" 
                       : "border-black/10 text-neutral-dark/60 hover:border-black/30"
                   )}
                 >
                   {a}
                 </button>
               ))}
            </div>

          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-neutral-light/20 min-h-[60vh]">
        <div className="editorial-container py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
               {filteredResources.map((res, idx) => (
                 <motion.div
                   key={res.title}
                   layout
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Card className="h-full flex flex-col justify-between p-8 hover:shadow-xl transition-all duration-300 border-black/5 bg-white group relative overflow-hidden">
                      {/* Mascot Stamp Logic (every 3rd card for visual variety) */}
                      {idx % 3 === 0 && (
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                           <img src="/assets/mascot/mascot-head.png" alt="Approved" className="w-10 h-10 opacity-60 grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                      )}

                      <div className="space-y-6 relative z-10">
                         <div className="flex justify-between items-start">
                            <div className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-neutral-50 group-hover:bg-primary group-hover:text-white",
                              res.color
                            )}>
                               {res.icon}
                            </div>
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider",
                              res.audience === 'Parents' && "bg-[#FF7A49]/10 text-[#FF7A49]",
                              res.audience === 'Teachers' && "bg-[#7A49FF]/10 text-[#7A49FF]",
                              res.audience === 'Students' && "bg-primary/10 text-primary"
                            )}>
                              {res.audience}
                            </span>
                         </div>
                         
                         <div>
                           <h3 className="text-xl font-heading font-black text-primary leading-tight mb-2 group-hover:text-secondary transition-colors">
                             {res.title}
                           </h3>
                           <p className="text-xs text-neutral-dark/60 leading-relaxed">
                             {res.desc}
                           </p>
                         </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between relative z-10">
                         <span className="text-[10px] font-bold text-neutral-dark/40 uppercase tracking-wider">
                           {res.fileSize}
                         </span>
                         <Button variant="ghost" size="sm" className="h-8 px-0 hover:bg-transparent text-secondary hover:text-primary transition-colors group/btn">
                           Download <Download className="ml-2 w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" />
                         </Button>
                      </div>
                   </Card>
                 </motion.div>
               ))}
            </AnimatePresence>
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-24 text-neutral-dark/40">
              <p className="text-lg">No resources found matching your filters.</p>
              <Button 
                variant="link" 
                onClick={() => { setActiveType('All'); setActiveAudience('All'); }} 
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Subscription Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary blur-[150px] opacity-20 rounded-full" />
         
         <div className="editorial-container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="space-y-6 max-w-xl text-center lg:text-left relative">
               {/* Mascot Delivery */}
               <div className="absolute -top-24 -left-20 w-[150px] hidden lg:block pointer-events-none">
                  <motion.img 
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    src="/assets/mascot/mascot2.png" 
                    alt="Delivery Bot"
                    className="w-full h-auto drop-shadow-xl" 
                  />
               </div>

               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent">
                  <Mail className="w-3 h-3" />
                  <span>Weekly Wisdom</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-none">
                 Get fresh resources <br />delivered to your inbox.
               </h2>
               <p className="text-lg text-white/60 font-body leading-relaxed">
                 Join 5,000+ parents and educators receiving our weekly digest of digital safety tips and STEM activities.
               </p>
            </div>

            <div className="w-full max-w-md bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="teacher@school.org" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-2">I am a...</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer">
                       <option>Parent</option>
                       <option>Educator</option>
                       <option>Student</option>
                    </select>
                  </div>
                  <Button variant="secondary" size="lg" className="w-full mt-4 bg-secondary hover:bg-white hover:text-secondary shadow-lg shadow-secondary/20">
                    Subscribe Free
                  </Button>
                  <p className="text-[9px] text-white/40 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
