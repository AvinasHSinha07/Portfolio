import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
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
  Boxes,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: MonitorPlay },
      { name: "TypeScript", icon: FileJson },
      { name: "Tailwind CSS", icon: PenTool },
      { name: "Framer Motion", icon: Cpu },
      { name: "Web API", icon: Globe },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Code2 },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "RESTful APIs", icon: KeyRound },
      { name: "SQL", icon: Database },
    ]
  },
  {
    title: "Data & Automation",
    icon: Bot,
    skills: [
      { name: "Python", icon: TerminalSquare },
      { name: "Selenium", icon: Globe },
      { name: "BeautifulSoup", icon: Coffee },
      { name: "Puppeteer", icon: Bot },
      { name: "Scrapy", icon: Binary },
    ]
  },
  {
    title: "Core Tools",
    icon: Boxes,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub Actions", icon: Github },
      { name: "VS Code", icon: Code2 },
      { name: "Figma", icon: Figma },
      { name: "Postman", icon: Globe },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20
    }
  }
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-dusty-denim rounded-full"></span>
              <span className="text-dusty-denim font-mono text-sm tracking-widest uppercase">Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-alabaster-grey/60 max-w-sm text-sm leading-relaxed">
            The languages, frameworks, and architecture tools I use to craft performant digital products.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon size={20} className="text-dusty-denim" />
                <h3 className="text-lg font-display font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group relative px-4 py-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-dusty-denim/40 transition-all overflow-hidden flex items-center gap-3"
                  >
                    {/* Hover Line reveal */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-dusty-denim opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <skill.icon size={16} className="text-alabaster-grey/40 group-hover:text-dusty-denim transition-colors" />
                    <span className="text-sm font-medium text-alabaster-grey/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
