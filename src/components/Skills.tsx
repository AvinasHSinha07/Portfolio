import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { 
  MonitorPlay, 
  Atom, 
  FileJson, 
  PenTool, 
  Server, 
  Database, 
  Coffee, 
  TerminalSquare, 
  Globe, 
  Cloud, 
  KeyRound, 
  LayoutTemplate,
  Bot,
  Binary,
  Code2,
  Figma,
  Github,
  GitBranch,
  Boxes
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
    skills: [
      { name: "React", level: 95, icon: Atom },
      { name: "Next.js", level: 90, icon: MonitorPlay },
      { name: "TypeScript", level: 85, icon: FileJson },
      { name: "Tailwind CSS", level: 95, icon: PenTool },
      { name: "GSAP & Motion", level: 85, icon: SparklesIcon },
      { name: "Web API & DOM", level: 98, icon: Globe },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, icon: BoxIcon },
      { name: "Express.js", level: 85, icon: Server },
      { name: "MongoDB", level: 80, icon: Database },
      { name: "Firebase", level: 75, icon: Cloud },
      { name: "RESTful APIs", level: 90, icon: KeyRound },
      { name: "SQL (MySQL)", level: 70, icon: Database },
    ]
  },
  {
    title: "Scraping & Automation",
    icon: Bot,
    skills: [
      { name: "Python", level: 85, icon: TerminalSquare },
      { name: "Selenium", level: 90, icon: Globe },
      { name: "BeautifulSoup", level: 85, icon: Coffee },
      { name: "Puppeteer", level: 80, icon: Bot },
      { name: "Scrapy", level: 75, icon: Binary },
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: Boxes,
    skills: [
      { name: "Git & Version Control", level: 90, icon: GitBranch },
      { name: "GitHub Workflows", level: 90, icon: Github },
      { name: "VS Code Architecture", level: 95, icon: Code2 },
      { name: "Figma to Code", level: 80, icon: Figma },
      { name: "Postman & API Client", level: 85, icon: Globe },
    ]
  }
];

// Helper components for icons not directly in lucide
function SparklesIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
}
function BoxIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all"
      });

      // Animate progress bars when they come into view
      gsap.utils.toArray('.progress-fill').forEach((bar: any) => {
        const width = bar.getAttribute('data-width');
        gsap.fromTo(bar, 
          { width: "0%" },
          {
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
            width: `${width}%`,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.2
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
            Technical Arsenal
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-dusty-denim to-transparent rounded-full" />
          </h2>
          <p className="mt-4 text-alabaster-grey/70 max-w-2xl">
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category glass-card p-8 rounded-3xl group transition-all duration-500 hover:border-dusty-denim/40 relative overflow-hidden interactive-hover"
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
              whileHover={{ y: -5 }}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-prussian-blue/40 to-transparent transition-opacity duration-500 pointer-events-none ${activeCategory === idx ? 'opacity-100' : 'opacity-0'}`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-dusk-blue/20 text-dusty-denim border border-dusty-denim/20 group-hover:bg-dusk-blue group-hover:text-white transition-all">
                    <category.icon size={24} />
                  </span>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx} 
                      className="space-y-2 group/skill"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="flex items-center gap-2 text-alabaster-grey group-hover/skill:text-white transition-colors">
                           <skill.icon size={16} className="text-dusty-denim group-hover/skill:text-dusk-blue transition-colors" />
                           {skill.name}
                        </span>
                        <span className="text-dusty-denim group-hover/skill:text-white transition-colors">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-prussian-blue/50 rounded-full overflow-hidden relative">
                        <div 
                          className="progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-dusk-blue to-dusty-denim rounded-full shadow-[0_0_10px_rgba(119,141,169,0.5)]"
                          data-width={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
