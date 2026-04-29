import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ArrowRight, Github, Linkedin, Facebook, Twitter, Mail, MapPin, TerminalSquare } from 'lucide-react';
import gsap from 'gsap';

const designations = [
  "Frontend Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Web Scraping Expert",
  "UI Engineer"
];

const socialLinks = [
  { icon: Github, href: "https://github.com/AvinasHSinha07", name: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/avinash-sinha-89ba02184/", name: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/share/1BVqWMXo4b/", name: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/avinashsinha", name: "Twitter" },
  { icon: Mail, href: "mailto:avinashsinha751@gmail.com", name: "Email" },
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
      className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-2xl ${className}`}
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

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-anim", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.1 }
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]" ref={heroRef}>
      
      {/* Refined Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-dusk-blue/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-dusk-blue/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dusty-denim/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 z-10 mt-10 md:mt-0 lg:col-span-7">
          <div className="space-y-5">
            <div className="hero-anim">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[13px] font-medium tracking-wide text-alabaster-grey/90">Available for Opportunities</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold tracking-tight leading-[1.05] text-white hero-anim relative">
              Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">
                Engineer.
              </span>
            </h1>
            
            <div className="h-10 hero-anim overflow-hidden flex items-center">
              <span className="text-xl md:text-2xl font-light text-alabaster-grey mr-2">I specialize as a</span>
              <AnimatePresence mode="wait">
                 <motion.p 
                    key={currentDesignation}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-medium text-white inline-block bg-white/10 px-3 py-1 rounded-lg border border-white/5"
                  >
                    {designations[currentDesignation]}
                  </motion.p>
              </AnimatePresence>
            </div>
            
            <p className="text-lg text-alabaster-grey/60 max-w-lg leading-relaxed hero-anim font-light pt-2">
              My name is <strong className="font-semibold text-white">Avinash Sinha</strong>. I craft highly interactive, scalable web applications focusing on elegant architecture, seamless user experiences, and clean code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 hero-anim pt-6">
            <MagneticButton>
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 font-medium text-[#020617] bg-white rounded-full overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a 
                href="https://drive.google.com/file/d/1_esSMO5sHf9-bKyfUk7sedXIq-MQqsxc/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-medium text-white border border-white/20 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md group active:scale-95"
              >
                <span>Resume</span>
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform text-dusty-denim" />
              </a>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-4 pt-8 hero-anim border-t border-white/5 mt-8 max-w-md">
            {socialLinks.map((social) => (
              <MagneticButton key={social.name}>
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex p-3 rounded-full bg-white/5 border border-white/5 text-alabaster-grey hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Right Content - Interactive Portrait Card */}
        <div className="relative flex justify-center lg:justify-end z-10 lg:col-span-5 mt-12 lg:mt-0 hero-anim">
          <SpotlightCard className="w-full max-w-sm aspect-[4/5] p-3 flex flex-col group">
             {/* Main Image Container */}
             <div className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#0b1121]">
                <img 
                  src="https://i.ibb.co.com/nMX5F3d8/Gemini-Generated-Image-agmabeagmabeagma.png" 
                  alt="Avinash Sinha" 
                  className="w-full h-full object-cover filter saturate-100 contrast-110 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                
                {/* Location overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                   <MapPin size={14} className="text-dusty-denim" />
                   <span className="text-xs font-medium text-white">Based in Global</span>
                </div>
             </div>
             
             {/* Bottom Info Bar inside Card */}
             <div className="h-20 mt-3 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center justify-between px-6">
                <div className="flex flex-col">
                   <span className="text-sm font-semibold text-white">Avinash Sinha</span>
                   <span className="text-xs text-alabaster-grey/60">Software Engineer</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                   <TerminalSquare size={18} className="text-dusty-denim" />
                </div>
             </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
