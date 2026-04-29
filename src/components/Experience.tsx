import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Calendar, MapPin, Code2, Globe, Server, CheckCircle2, Building2 } from 'lucide-react';
import gsap from 'gsap';

const experienceData = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed / Remote",
    icon: Code2,
    timeline: "2022 - Present",
    summary: [
      "Built completely custom full-stack applications for various international clients.",
      "Developed high-performance React/Next.js frontends and robust Node.js backends.",
      "Integrated secure authentication and complex relational databases."
    ],
    tech: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Web Scraping Automation Engineer",
    company: "Freelance Projects",
    icon: Globe,
    timeline: "2021 - Present",
    summary: [
      "Automated complex workflows and data extraction pipelines bypassing anti-bot mechanisms.",
      "Utilized Python, Selenium, and Puppeteer to bypass anti-bot mechanisms.",
      "Delivered clean, structured datasets for business intelligence and analytics."
    ],
    tech: ["Python", "Selenium", "Puppeteer", "Pandas", "Docker"],
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "Frontend UI Developer",
    company: "Remote Contract",
    icon: Briefcase,
    timeline: "2020 - 2022",
    summary: [
      "Transformed UI/UX designs into pixel-perfect interactive web pages.",
      "Optimized frontend performance, achieving 95+ Lighthouse scores.",
      "Implemented complex state management and motion animations."
    ],
    tech: ["JavaScript", "HTML/CSS", "React", "GSAP", "Redux"],
    color: "from-emerald-500 to-teal-400"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".exp-card-modern", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-x-clip" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-prussian-blue/50 border border-white/5 flex items-center justify-center shadow-lg text-dusty-denim">
            <Server size={32} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
              Experience
              <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-dusty-denim to-transparent rounded-full" />
            </h2>
            <p className="text-alabaster-grey/70 mt-3 max-w-xl">My professional journey delivering high-quality engineering solutions.</p>
          </div>
        </div>

        <div className="relative pl-4 md:pl-8 lg:pl-12 overflow-x-clip">
          {/* Animated vertical track */}
          <div className="absolute left-7 md:left-[47px] lg:left-[63px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full" />
          
          {/* Animated vertical progressive line */}
          <motion.div 
            className="absolute left-7 md:left-[47px] lg:left-[63px] top-4 w-[2px] bg-gradient-to-b from-dusk-blue via-dusty-denim to-alabaster-grey rounded-full shadow-[0_0_15px_rgba(119,141,169,0.8)] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 lg:space-y-24">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="exp-card-modern relative group">
                
                {/* Node marker point */}
                <div className="absolute -left-6 md:-left-[46px] lg:-left-[62px] top-6 md:top-8 w-14 h-14 bg-ink-black border-2 border-white/10 rounded-full flex items-center justify-center group-hover:border-dusty-denim transition-colors z-10 duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(119,141,169,0.4)]">
                   <exp.icon size={24} className="text-alabaster-grey/50 group-hover:text-dusty-denim transition-colors duration-500" />
                </div>

                {/* Content Card */}
                <div className="ml-10 md:ml-12 lg:ml-16 glass-card p-6 md:p-10 rounded-[2rem] border-transparent group-hover:border-white/10 transition-all duration-500 bg-prussian-blue/20 hover:bg-prussian-blue/40 relative overflow-hidden">
                  
                  {/* Subtle Gradient Glow inside card */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 blur-[80px] transition-opacity duration-700 pointer-events-none rounded-full`} />

                  <div className="relative z-10 flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                         <span className="px-3 py-1 bg-ink-black/80 backdrop-blur rounded-full text-xs font-semibold text-alabaster-grey border border-white/10 flex items-center gap-2">
                           <Calendar size={12} className="text-dusty-denim" />
                           {exp.timeline}
                         </span>
                         <span className="px-3 py-1 bg-ink-black/80 backdrop-blur rounded-full text-xs font-medium text-alabaster-grey border border-white/10 flex items-center gap-2 hidden sm:flex">
                           <MapPin size={12} className="text-dusty-denim" />
                           Remote
                         </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-dusty-denim transition-all duration-300">{exp.title}</h3>
                      <h4 className="text-lg text-dusty-denim font-medium flex items-center gap-2 placeholder-anim">
                        <Building2 size={16} />
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
                    <div className="lg:col-span-3 space-y-4">
                      {exp.summary.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-alabaster-grey/80 group/list">
                          <CheckCircle2 size={18} className="mt-1 text-prussian-blue group-hover/list:text-dusty-denim transition-colors flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="lg:col-span-2 flex flex-col gap-3">
                      <span className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="text-xs font-medium text-alabaster-grey bg-ink-black/50 hover:bg-prussian-blue/80 px-3 py-2 rounded-lg border border-white/5 transition-colors cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
