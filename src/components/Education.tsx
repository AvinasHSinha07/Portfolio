import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science (MSc) in Computer Science",
    institution: "University Placeholder",
    year: "2023 - Present",
    description: "Specializing in advanced software engineering, distributed systems, and modern web architectures."
  },
  {
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "University Placeholder",
    year: "2019 - 2023",
    description: "Focused on algorithms, data structures, and foundational software engineering principles."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "College Placeholder",
    year: "2017 - 2019",
    description: "Science track with strong emphasis on Mathematics and logical problem solving."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "School Placeholder",
    year: "2015 - 2017",
    description: "General Science background establishing strong analytical skills."
  }
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline line animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0, transformOrigin: "top" },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1
          }
        }
      );

      // Items animation
      gsap.utils.toArray('.edu-card').forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="py-24 relative overflow-x-clip" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-flex items-center gap-4">
            <GraduationCap className="text-dusty-denim" size={40} />
            Education
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-linear-to-r from-transparent via-dusk-blue to-transparent rounded-full" />
          </h2>
        </div>

        <div className="relative overflow-x-clip">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-prussian-blue/50 rounded-full md:-translate-x-1/2">
             <div ref={lineRef} className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-b from-dusk-blue to-dusty-denim rounded-full" />
          </div>

          <div className="space-y-12">
            {educationData.map((item, idx) => (
              <div key={idx} className={`edu-card relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-ink-black border-4 border-dusty-denim transform -translate-x-1.5 md:-translate-x-1/2 mt-6 md:mt-8 z-10 shadow-[0_0_15px_rgba(119,141,169,0.8)]" />

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 pt-2 md:pt-0">
                  <div className={`glass-card p-6 md:p-8 rounded-3xl transition-transform hover:-translate-y-1 hover:shadow-2xl hover:border-dusty-denim/50 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <span className="inline-block px-3 py-1 bg-prussian-blue rounded-full text-xs font-semibold text-dusty-denim tracking-wider mb-4 border border-white/5">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">{item.degree}</h3>
                    <h4 className="text-lg text-dusk-blue font-medium mb-4">{item.institution}</h4>
                    <p className="text-alabaster-grey/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
