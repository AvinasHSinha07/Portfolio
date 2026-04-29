import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Briefcase, Calendar, MapPin, Code2, Globe, Server, ArrowUpRight } from 'lucide-react';

const experienceData = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    icon: Code2,
    timeline: "2022 - Present",
    summary: [
      "Architected completely custom full-stack solutions for international clients using Next.js and Node.js.",
      "Engineered secure authentication systems and optimized complex relational database queries.",
      "Delivered highly accessible, responsive UI/UX achieving 90+ Lighthouse performance scores."
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Web Scraping & Automation Engineer",
    company: "Freelance",
    location: "Remote",
    icon: Globe,
    timeline: "2021 - Present",
    summary: [
      "Built resilient web scraping pipelines capable of extracting thousands of records daily.",
      "Navigated dynamic DOMs, rate limits, and anti-bot mechanisms using Selenium and Puppeteer.",
      "Automated complex data normalization workflows for clean business intelligence insights."
    ],
    tech: ["Python", "Selenium", "Puppeteer", "Pandas", "Docker"],
  },
  {
    title: "Frontend UI Developer",
    company: "Contract",
    location: "Remote",
    icon: Briefcase,
    timeline: "2020 - 2022",
    summary: [
      "Transformed rich Figma designs into dynamic, pixel-perfect frontend interfaces.",
      "Implemented comprehensive state management using Redux and interactive animations via GSAP.",
      "Collaborated tightly with design teams to enforce design system consistency across projects."
    ],
    tech: ["JavaScript", "React", "GSAP", "Redux", "Tailwind CSS"],
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-dusty-denim rounded-full"></span>
              <span className="text-dusty-denim font-mono text-sm tracking-widest uppercase">Career</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-alabaster-grey/60 max-w-sm text-sm leading-relaxed">
            A chronological look at my professional engineering roles, focusing on impact, scale, and technical depth.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-12 relative p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-white/[0.02] border border-transparent hover:border-white/5"
            >
              {/* Left Column: Timeline & Company */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-24">
                  <span className="inline-block text-dusk-blue font-mono text-sm mb-4">
                    {exp.timeline}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-alabaster-grey/70">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-dusty-denim" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-dusty-denim" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:w-2/3 flex flex-col justify-between">
                <div className="space-y-4 mb-8">
                  {exp.summary.map((item, i) => (
                    <p key={i} className="text-alabaster-grey/80 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-ink-black border border-white/10 rounded-lg text-dusty-denim group-hover:border-dusty-denim/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight size={24} className="text-dusty-denim" />
                </div>
              </div>
              
              {/* Divider for mobile */}
              <div className="md:hidden w-full h-[1px] bg-white/5 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
