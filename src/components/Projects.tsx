import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, Plus, PlaySquare, Layers, Database, Globe, Cloud, Bot, Code2, Server } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Cinematic Web Experience",
    category: "Frontend Project",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2560&auto=format&fit=crop",
    shortDesc: "A high-performance portfolio with immersive scroll animations.",
    tech: [
      { name: "Next.js", icon: PlaySquare }, 
      { name: "GSAP", icon: Layers }, 
      { name: "Tailwind", icon: Code2 }
    ],
    fullDesc: "Built a fully immersive, cinematic web experience designed to showcase high-level frontend architecture. The interface focuses on smooth page transitions, detailed micro-interactions, and heavy reliance on hardware-accelerated animations to maintain 60fps.",
    features: [
      "Custom Lenis integration for butter-smooth scrolling",
      "GSAP ScrollTrigger for complex timeline animations",
      "Dynamic data fetching with caching layers",
      "Fully responsive and touch-optimized"
    ],
    challenges: "Synchronizing GSAP timelines with React's component lifecycle and maintaining performance while rendering multiple heavy graphic elements at once.",
    improvements: "Plan to integrate WebGL for even more advanced background distortions and 3D visual elements.",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Enterprise E-Commerce API",
    category: "Backend Project",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2560&auto=format&fit=crop",
    shortDesc: "Scalable automated backend architecture for high-volume sales.",
    tech: [
      { name: "Node.js", icon: Server }, 
      { name: "PostgreSQL", icon: Database }, 
      { name: "Redis", icon: Cloud }
    ],
    fullDesc: "An enterprise-grade RESTful API built to handle thousands of concurrent transactions. Designed with a microservices-ready architecture, featuring robust authentication, rate limiting, and an integrated caching layer.",
    features: [
      "JWT-based role authentication and authorization",
      "Redis caching reducing database load by 70%",
      "Stripe payment gateway integration",
      "Automated CI/CD pipeline deployment"
    ],
    challenges: "Handling database concurrency and race conditions during high-traffic flash sales events.",
    improvements: "Migrating to a serverless architecture or Kubernetes cluster for better auto-scaling capabilities.",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Market Insight Engine",
    category: "Scraping Project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
    shortDesc: "Distributed web scraper breaking through difficult anti-bot systems.",
    tech: [
      { name: "Python", icon: Code2 }, 
      { name: "Selenium", icon: Globe }, 
      { name: "Pandas", icon: Bot }
    ],
    fullDesc: "Developed an advanced data extraction pipeline capable of bypassing sophisticated anti-bot protections like Cloudflare. It processes thousands of pages daily to generate structured machine-learning-ready datasets.",
    features: [
      "Headless automated browsing with rotating proxy pools",
      "CAPTCHA solving integration",
      "Data cleaning and normalization using Pandas",
      "Automated export to BigQuery"
    ],
    challenges: "Adapting to constantly changing DOM structures and reverse-engineering complex API endpoints that were heavily obfuscated.",
    improvements: "Implement a fully distributed task queue using Celery and Redis to speed up extraction.",
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (selectedProject) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [selectedProject, lenis]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
            Selected Works
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-linear-to-r from-dusty-denim to-transparent rounded-full" />
          </h2>
          <p className="mt-4 text-alabaster-grey/70 max-w-2xl">
            A showcase of my finest engineering endeavors across frontend, backend, and data automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card group glass-card rounded-4xl overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(119,141,169,0.3)] interactive-hover cursor-pointer" onClick={() => setSelectedProject(proj)}>
              
              {/* Image Container with Scroll Animation on Hover */}
              <div className="relative h-64 overflow-hidden bg-ink-black shrink-0">
                <div className="absolute inset-0 bg-prussian-blue animate-pulse z-0" />
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="relative z-10 w-full object-cover transform transition-transform duration-[4s] ease-linear group-hover:translate-y-[calc(-100%+16rem)] h-[200%]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-black/90 to-transparent z-20 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="px-3 py-1 bg-dusk-blue/80 backdrop-blur text-xs font-semibold text-white rounded-full border border-dusk-blue/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col grow p-6 md:p-8 bg-prussian-blue/10 backdrop-blur-md">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-dusty-denim transition-colors flex items-center justify-between">
                  {proj.title}
                  <ExternalLink size={20} className="text-alabaster-grey/20 group-hover:text-dusty-denim transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300" />
                </h3>
                <p className="text-alabaster-grey/70 text-sm mb-6 grow">
                  {proj.shortDesc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs font-medium text-alabaster-grey bg-ink-black/50 px-2.5 py-1.5 rounded-md border border-white/5 group-hover:border-dusty-denim/30 transition-colors">
                      <t.icon size={12} className="text-dusty-denim" />
                      {t.name}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(proj); }}
                  className="w-full py-3 flex items-center justify-center gap-2 bg-prussian-blue/40 border border-dusty-denim/30 group-hover:bg-dusty-denim group-hover:text-ink-black group-hover:border-dusty-denim hover:shadow-[0_0_15px_rgba(119,141,169,0.5)] text-white rounded-xl transition-all duration-300 font-semibold mt-auto"
                >
                  View Case Study <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 bg-ink-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            
            <motion.div 
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-dusty-denim/40 rounded-3xl z-10 flex flex-col"
              data-lenis-prevent="true"
            >
              {/* Modal sticky header/close */}
              <div className="sticky top-0 right-0 z-50 flex justify-end p-4 pointer-events-none drop-shadow-lg">
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="pointer-events-auto p-2 bg-ink-black/80 backdrop-blur text-white rounded-full hover:bg-dusty-denim hover:text-ink-black transition-colors border border-white/10 hover:border-dusty-denim shadow-xl"
                 >
                   <X size={24} />
                 </button>
              </div>

              {/* Modal Image */}
              <div className="h-64 md:h-80 w-full relative -mt-16">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-linear-to-t from-prussian-blue via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 -mt-10 relative z-10">
                <span className="text-dusty-denim font-semibold mb-2 block tracking-wider uppercase text-sm">{selectedProject.category}</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <a href={selectedProject.github} className="flex items-center gap-2 px-5 py-2.5 bg-ink-black hover:bg-prussian-blue text-white rounded-xl transition-colors border border-white/10 font-medium interactive-hover">
                    <Github size={18} /> Source Code
                  </a>
                  <a href={selectedProject.live} className="flex items-center gap-2 px-5 py-2.5 bg-white text-ink-black hover:bg-alabaster-grey rounded-xl transition-colors font-semibold interactive-hover">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xl font-display font-semibold text-white mb-3 border-b border-white/10 pb-2">Project Overview</h4>
                      <p className="text-alabaster-grey/80 leading-relaxed text-lg">{selectedProject.fullDesc}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-display font-semibold text-white mb-3 border-b border-white/10 pb-2">Key Features</h4>
                      <ul className="space-y-3 mt-4">
                        {selectedProject.features.map((f, i) => (
                          <li key={i} className="flex gap-3 text-alabaster-grey/80 items-start">
                            <span className="w-2 h-2 rounded-full bg-dusk-blue mt-2 shrink-0" />
                            <span className="leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8 glass-card bg-ink-black/30 p-6 rounded-2xl border border-white/5 h-fit">
                    <div>
                      <h4 className="text-lg font-display font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="flex items-center gap-1.5 text-xs font-medium text-white bg-prussian-blue px-3 py-1.5 rounded-lg border border-white/10">
                            <t.icon size={14} className="text-dusty-denim" />
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold text-white mb-3">Challenges</h4>
                      <p className="text-sm text-alabaster-grey/70 leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold text-white mb-3">Future Improvements</h4>
                      <p className="text-sm text-alabaster-grey/70 leading-relaxed">{selectedProject.improvements}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
