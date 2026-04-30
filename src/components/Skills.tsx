import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Network,
  Server,
  Webhook,
  Soup,
  Bot,
  Bug,
  LayoutTemplate,
  Boxes,
  ChevronRight,
  TerminalSquare
} from 'lucide-react';
import StackIcon from 'tech-stack-icons';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
    description: "Crafting pixel-perfect, responsive, and highly interactive user interfaces.",
    skills: [
      { name: "React", iconName: "react" },
      { name: "Next.js", iconName: "nextjs2" },
      { name: "TypeScript", iconName: "typescript" },
      { name: "Tailwind CSS", iconName: "tailwindcss" },
      { name: "Framer Motion", iconName: "framer" },
      { name: "Web API", icon: Network },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Building scalable, secure, and high-performance server-side architectures.",
    skills: [
      { name: "Node.js", iconName: "nodejs" },
      { name: "Express.js", iconName: "expressjs" },
      { name: "MongoDB", iconName: "mongodb" },
      { name: "Firebase", iconName: "firebase" },
      { name: "RESTful APIs", icon: Webhook },
      { name: "SQL", iconName: "mysql" },
    ]
  },
  {
    title: "Data & Automation",
    icon: Bot,
    description: "Extracting insights and automating complex workflows with robust scripts.",
    skills: [
      { name: "Python", iconName: "python" },
      { name: "Selenium", iconName: "selenium" },
      { name: "BeautifulSoup", icon: Soup },
      { name: "Puppeteer", iconName: "puppeteer" },
      { name: "Scrapy", icon: Bug },
    ]
  },
  {
    title: "Core Tools",
    icon: Boxes,
    description: "The foundational tools and platforms that drive my development lifecycle.",
    skills: [
      { name: "Git", iconName: "git" },
      { name: "GitHub Actions", iconName: "github" },
      { name: "VS Code", iconName: "vscode" },
      { name: "Figma", iconName: "figma" },
      { name: "Postman", iconName: "postman" },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="py-32 relative bg-[#020617] overflow-hidden" ref={sectionRef}>
      
      {/* Background matching Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-dusk-blue/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-dusk-blue/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-dusty-denim/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6">
            <TerminalSquare size={14} className="text-sky-400" />
            <span className="text-[13px] font-medium tracking-wide text-alabaster-grey/90">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Technical <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">
               Arsenal.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Tabs Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            {skillCategories.map((category, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex items-center gap-4 p-4 md:p-5 rounded-2xl transition-all duration-500 text-left overflow-hidden ${
                    isActive 
                      ? 'bg-white/[0.05] border border-white/10 shadow-lg' 
                      : 'bg-transparent border border-transparent hover:bg-white/[0.02] hover:border-white/5 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Active Background Gradient */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none" />
                  )}
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full bg-sky-400"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className={`w-12 h-12 rounded-xl flex shrink-0 items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-white/10 text-white shadow-inner' : 'bg-white/5 text-white/50 group-hover:text-white/80'
                  }`}>
                    <category.icon size={22} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-display font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {category.title}
                    </h3>
                  </div>

                  <ChevronRight size={20} className={`transition-all duration-300 shrink-0 ${
                    isActive ? 'text-white/40 translate-x-0 opacity-100' : '-translate-x-4 opacity-0 text-transparent'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[420px] rounded-3xl border border-white/10 bg-[#0a0f1d]/60 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl">
              
              {/* Subtle inner grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none"></div>
              
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 h-full flex flex-col"
                >
                  <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
                      <activeCategory.icon size={32} className="text-white/70" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {activeCategory.title}
                    </h3>
                    <p className="text-alabaster-grey/60 text-lg leading-relaxed max-w-xl font-light">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    {activeCategory.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 + 0.2, duration: 0.4, ease: "easeOut" }}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-colors">
                           {skill.iconName ? (
                             <div className="w-5 h-5 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                               <StackIcon name={skill.iconName as any} className="w-5 h-5" />
                             </div>
                           ) : skill.icon ? (
                             <skill.icon size={20} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                           ) : null}
                        </div>
                        <span className="text-base font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
