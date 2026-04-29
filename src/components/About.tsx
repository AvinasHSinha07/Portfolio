import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Code2, FolderGit2, Cpu, Globe } from 'lucide-react';

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: FolderGit2, value: "40+", label: "Projects Completed" },
  { icon: Cpu, value: "15+", label: "Technologies Used" },
  { icon: Globe, value: "10+", label: "Freelance Clients" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)"
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="about-content space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-dusty-denim to-transparent rounded-full" />
            </h2>
            
            <div className="space-y-4 text-alabaster-grey/80 text-lg leading-relaxed">
              <p>
                My programming journey began with a curiosity about how the web works. Today, I'm a passionate 
                <span className="text-white font-medium"> Full Stack Engineer</span> with a sharp focus on 
                building scalable, visually stunning, and highly performant applications.
              </p>
              <p>
                Having roots in <span className="text-dusty-denim">frontend architecture and UI engineering</span>, 
                I treat the browser as a canvas. I love pairing clean code with modern motion design to create 
                experiences that feel alive. But my expertise doesn't stop at the UI.
              </p>
              <p>
                I am deeply experienced in <span className="text-white font-medium">backend development</span> and 
                <span className="text-dusty-denim"> web scraping & automation</span>. From designing robust REST APIs 
                to extracting complex data using Python, I thrive on solving hard problems end-to-end.
              </p>
              <p>
                When I'm not coding, you'll find me gaming, diving into the latest tech frameworks, 
                watching development content, or reading up on software architecture.
              </p>
            </div>
          </div>
          
          <div className="stats-container grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="stat-card glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 group hover:border-dusty-denim/50 transition-colors"
              >
                <div className="p-3 bg-prussian-blue/50 rounded-xl group-hover:bg-dusk-blue/40 transition-colors text-dusty-denim group-hover:text-white">
                  <stat.icon size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
                  <p className="text-sm text-alabaster-grey/60 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
