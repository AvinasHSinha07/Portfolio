import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Network,
  Server,
  Webhook,
  Soup,
  Bot,
  Bug,
  LayoutTemplate,
  Boxes
} from 'lucide-react';
import StackIcon from 'tech-stack-icons';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
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
    skills: [
      { name: "Git", iconName: "git" },
      { name: "GitHub Actions", iconName: "github" },
      { name: "VS Code", iconName: "vscode" },
      { name: "Figma", iconName: "figma" },
      { name: "Postman", iconName: "postman" },
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
    <section id="skills" className="py-32 relative bg-[#020617]" ref={sectionRef}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Technical Arsenal.
            </h2>
          </div>
          <p className="text-alabaster-grey/60 max-w-sm text-sm font-light leading-relaxed">
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
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <category.icon size={18} className="text-white/60" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group relative px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 transition-all overflow-hidden flex items-center gap-3"
                  >
                    {/* Hover Line reveal */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {skill.iconName ? (
                      <div className="w-5 h-5 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        <StackIcon name={skill.iconName as any} className="w-4 h-4" />
                      </div>
                    ) : skill.icon ? (
                      <skill.icon size={16} className="text-white/30 group-hover:text-white transition-colors" />
                    ) : null}
                    
                    <span className="text-sm font-medium text-alabaster-grey/70 group-hover:text-white transition-colors">
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
