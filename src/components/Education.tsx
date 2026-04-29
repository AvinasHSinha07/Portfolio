import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, BookOpen, Scroll, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science (MSc)",
    major: "Computer Science and Engineering",
    institution: "University of Chittagong",
    year: "2023 - Present",
    icon: Award,
    description: "Specializing in advanced software engineering, distributed systems, and modern web architectures."
  },
  {
    degree: "Bachelor of Science (BSc)",
    major: "Computer Science and Engineering",
    institution: "University of Chittagong",
    year: "2019 - 2023",
    icon: GraduationCap,
    description: "Focused on algorithms, data structures, and foundational software engineering principles."
  },
  {
    degree: "Higher Secondary (HSC)",
    major: "Science",
    institution: "Sylhet Government College",
    year: "2017 - 2019",
    icon: BookOpen,
    description: "Science track with strong emphasis on Mathematics and logical problem solving."
  },
  {
    degree: "Secondary School (SSC)",
    major: "General Science",
    institution: "Sylhet Govt. Pilot High School",
    year: "2015 - 2017",
    icon: Scroll,
    description: "General Science background establishing strong analytical skills."
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative bg-[#020617]" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">
            Academic Background.
          </h2>
          <p className="text-alabaster-grey/60 max-w-xl mx-auto text-lg font-light">
            My foundational learning, degrees, and academic milestones from high school to postgraduate studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-500">
                  <item.icon size={24} className="text-white/80" />
                </div>
                <span className="font-mono text-xs font-semibold text-white/50 px-4 py-1.5 bg-white/5 rounded-full border border-white/5">
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {item.degree}
              </h3>
              <div className="text-white/60 text-sm font-medium mb-5 flex flex-col gap-1">
                <span>{item.major}</span>
                <span className="text-white/40">{item.institution}</span>
              </div>
              
              <p className="text-alabaster-grey/60 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
