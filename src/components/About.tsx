import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Code2, FolderGit2, Cpu, Globe } from 'lucide-react';

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: FolderGit2, value: "40+", label: "Projects Completed" },
  { icon: Cpu, value: "15+", label: "Technologies Used" },
  { icon: Globe, value: "10+", label: "Freelance Clients" },
];

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#020617]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="about-anim">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                Engineering with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">Precision.</span>
              </h2>
            </div>

            <div className="space-y-6 text-alabaster-grey/70 text-lg leading-relaxed about-anim font-light">
              <p>
                My programming journey began with a curiosity about how the web works. Today, I'm a passionate
                <span className="text-white font-medium"> Full Stack Engineer</span> with a sharp focus on
                building scalable, visually stunning, and highly performant applications.
              </p>
              <p>
                Having roots in <span className="text-white font-medium">frontend architecture</span>,
                I treat the browser as a canvas. I love pairing clean code with modern motion design to create
                experiences that feel alive. But my expertise doesn't stop at the UI.
              </p>
              <p>
                I am deeply experienced in <span className="text-white font-medium">backend development</span> and
                data automation. From designing robust REST APIs to extracting complex data, I thrive on solving hard problems end-to-end.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 z-10">
            {stats.map((stat, i) => (
              <div key={i} className="about-anim">
                <SpotlightCard className="p-6 flex flex-col items-center justify-center text-center space-y-4 group h-full">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors text-dusty-denim">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
                    <p className="text-xs text-alabaster-grey/50 mt-2 tracking-wide uppercase font-medium">{stat.label}</p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
