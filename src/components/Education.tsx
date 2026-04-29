import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, BookOpen, Scroll, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science (MSc)",
    major: "Computer Science",
    institution: "University Placeholder",
    year: "2023 - Present",
    icon: Award,
    description: "Specializing in advanced software engineering, distributed systems, and modern web architectures."
  },
  {
    degree: "Bachelor of Science (BSc)",
    major: "Computer Science",
    institution: "University Placeholder",
    year: "2019 - 2023",
    icon: GraduationCap,
    description: "Focused on algorithms, data structures, and foundational software engineering principles."
  },
  {
    degree: "Higher Secondary (HSC)",
    major: "Science",
    institution: "College Placeholder",
    year: "2017 - 2019",
    icon: BookOpen,
    description: "Science track with strong emphasis on Mathematics and logical problem solving."
  },
  {
    degree: "Secondary School (SSC)",
    major: "General Science",
    institution: "School Placeholder",
    year: "2015 - 2017",
    icon: Scroll,
    description: "General Science background establishing strong analytical skills."
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative" ref={containerRef}>
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
              <span className="text-dusty-denim font-mono text-sm tracking-widest uppercase">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Academic Path
            </h2>
          </div>
          <p className="text-alabaster-grey/60 max-w-sm text-sm leading-relaxed">
            My foundational learning, degrees, and academic milestones from high school right up to my postgraduate studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-dusk-blue/10 transition-all duration-500">
                  <item.icon size={22} className="text-dusty-denim" />
                </div>
                <span className="font-mono text-xs text-white/50 px-3 py-1 bg-white/5 rounded-full">
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                {item.degree}
              </h3>
              <div className="text-dusty-denim text-sm font-medium mb-4">
                {item.major} <span className="text-white/30 mx-2">•</span> {item.institution}
              </div>
              
              <p className="text-alabaster-grey/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
