import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, MapPin, ArrowUpRight } from 'lucide-react';

const experienceData = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
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
    <section id="experience" className="py-32 relative bg-[#020617]" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">
            Professional Experience.
          </h2>
          <p className="text-alabaster-grey/60 max-w-xl mx-auto text-lg font-light">
            A chronological look at my engineering roles, focusing on impact, scale, and technical depth.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/3 flex-shrink-0">
                  <span className="inline-block text-dusty-denim font-mono text-sm mb-4 bg-dusty-denim/10 px-3 py-1 rounded-full border border-dusty-denim/20">
                    {exp.timeline}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm font-medium text-alabaster-grey/60">
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} className="text-white/40" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-white/40" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="md:w-2/3 flex flex-col">
                  <div className="space-y-4 mb-8">
                    {exp.summary.map((item, i) => (
                      <p key={i} className="text-alabaster-grey/70 leading-relaxed font-light">
                        {item}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-[13px] font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-alabaster-grey group-hover:bg-white/10 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
