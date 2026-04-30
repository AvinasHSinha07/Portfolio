import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ArrowRight, Github, Linkedin, Facebook, Twitter, Mail, MapPin, TerminalSquare, Code2, Database } from 'lucide-react';
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

const codeLines = [
  <><span className="text-pink-400 font-semibold">const</span> <span className="text-blue-400">profile</span> <span className="text-white/60">=</span> <span className="text-white/60">&#123;</span></>,
  <>&nbsp;&nbsp;<span className="text-sky-300">name</span><span className="text-white/60">:</span> <span className="text-green-300">'Avinash Sinha'</span><span className="text-white/60">,</span></>,
  <>&nbsp;&nbsp;<span className="text-sky-300">role</span><span className="text-white/60">:</span> <span className="text-green-300">'Full Stack Engineer'</span><span className="text-white/60">,</span></>,
  <>&nbsp;&nbsp;<span className="text-sky-300">focus</span><span className="text-white/60">:</span> <span className="text-green-300">'Building scalable web apps'</span><span className="text-white/60">,</span></>,
  <>&nbsp;&nbsp;<span className="text-sky-300">passion</span><span className="text-white/60">:</span> <span className="text-green-300">'Clean code & intuitive UX'</span><span className="text-white/60">,</span></>,
  <><span className="text-white/60">&#125;;</span></>
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
  const [codeKey, setCodeKey] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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
              Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">
                Engineer.
              </span>
            </h1>

            <div className="flex flex-wrap items-center hero-anim gap-2">
              <span className="text-xl md:text-2xl font-light text-alabaster-grey">I specialize as a</span>
              <div className="overflow-hidden h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentDesignation}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-medium text-white inline-block bg-white/10 px-3 py-1 rounded-lg border border-white/5"
                  >
                    {designations[currentDesignation]}
                  </motion.p>
                </AnimatePresence>
              </div>
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

        {/* Right Content - Portrait & Floating Code */}
        <div className="relative flex justify-center lg:justify-end z-10 lg:col-span-5 mt-16 lg:mt-0 hero-anim">

          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-dusty-denim/20 to-transparent blur-[80px] -z-10 rounded-full pointer-events-none" />

          {/* Portrait Wrapper (No overflow-hidden so badges can overhang) */}
          <div className="relative w-full max-w-[22rem] lg:max-w-[25rem] aspect-[4/5] lg:aspect-[3/4]">
            
            {/* Main Portrait Card */}
            <SpotlightCard className="w-full h-full p-2.5 flex flex-col group relative z-20 rounded-[2.5rem] bg-white/[0.02] border-white/10">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0f1d] shadow-inner">
                <img
                  src="https://i.ibb.co.com/nMX5F3d8/Gemini-Generated-Image-agmabeagmabeagma.png"
                  alt="Avinash Sinha"
                  className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.85] saturate-[0.6] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-100"
                />
                
                {/* Premium Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                
                {/* Inner Glass Ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
              </div>
            </SpotlightCard>

            {/* Premium Circular Status Stamp */}
            <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 z-30 pointer-events-none">
              <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-[#0a0f1d]/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 pointer-events-auto cursor-pointer">
                
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                  {"AVAILABLE FOR WORK • HIRE ME NOW • ".split("").map((char, i, arr) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-2 text-[10px] font-mono font-bold text-white/70 uppercase"
                      style={{
                        transformOrigin: "50% 48px",
                        transform: `translateX(-50%) rotate(${i * (360 / arr.length)}deg)`
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>

                {/* Center Glowing Dot */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0f1d]/90 border border-white/5 shadow-inner">
                  <div className="absolute w-full h-full rounded-full bg-green-500/20 animate-ping opacity-60"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,1)]"></div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Floating Code Snippet Overlay */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="absolute -left-2 lg:-left-24 hidden md:block md:bottom-8 w-[17.5rem] md:w-[22rem] rounded-2xl overflow-hidden bg-[#0a0f1d]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 cursor-pointer transition-all duration-300 hover:border-white/20"
          >
            <div className="h-9 bg-white/5 flex items-center px-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50" />
              </div>
              <div className="ml-auto flex items-center gap-2">
                <TerminalSquare size={12} className="text-white/40" />
                <span className="text-[11px] text-white/50 font-mono tracking-wider">developer.ts</span>
              </div>
            </div>
            <div className="p-3 md:p-4 text-[10px] md:text-[12px] font-mono leading-[1.7] w-full relative h-[145px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={codeKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-3 md:p-4"
                >
                  {codeLines.map((line, index) => (
                    <div key={index} className="flex px-2 hover:bg-white/5 rounded-md transition-colors group/line items-center overflow-hidden">
                      <span className="text-white/20 w-4 shrink-0 select-none text-right mr-3 group-hover/line:text-white/40 transition-colors">{index + 1}</span>
                      <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(4px)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }}
                        transition={{ delay: 0.2 + (index * 0.3), duration: 0.5, ease: "easeOut" }}
                        className="inline-block whitespace-nowrap"
                      >
                        {line}
                      </motion.div>
                    </div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (codeLines.length * 0.3) }}
                    className="flex px-2 mt-1 items-center"
                  >
                    <span className="text-white/20 w-4 shrink-0 select-none text-right mr-3">{codeLines.length + 1}</span>
                    <span className="animate-pulse bg-sky-400/80 w-1.5 h-3.5 inline-block" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
