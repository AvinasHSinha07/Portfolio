import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Github, Linkedin, Facebook, Twitter, Mail } from 'lucide-react';
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

export default function Hero() {
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-text-anim", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );
      
      gsap.to(imageRef.current, {
        y: -20,
        ease: "sine.inOut",
        duration: 2.5,
        yoyo: true,
        repeat: -1
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 z-10 mt-10 md:mt-0">
          <div className="space-y-4">
            <motion.div 
               className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-prussian-blue/40 border border-dusty-denim/30 backdrop-blur-sm hero-text-anim"
            >
              <span className="w-2 h-2 rounded-full bg-dusty-denim animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-alabaster-grey/80">Available for work</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] text-white hero-text-anim">
              Avinash <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-dusty-denim via-dusk-blue to-alabaster-grey text-glow">
                Sinha
              </span>
            </h1>
            
            <div className="h-10 hero-text-anim overflow-hidden">
               <motion.p 
                  key={currentDesignation}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl md:text-2xl font-medium text-dusty-denim"
                >
                  {designations[currentDesignation]}
                </motion.p>
            </div>
            
            <p className="text-base md:text-lg text-alabaster-grey/70 max-w-xl leading-relaxed hero-text-anim">
              I build immersive digital experiences using modern frontend architecture, 
              premium animations, and scalable backend solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 hero-text-anim">
            <a 
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-dusk-blue rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1_esSMO5sHf9-bKyfUk7sedXIq-MQqsxc/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-dusty-denim border border-prussian-blue bg-prussian-blue/20 rounded-lg hover:bg-prussian-blue/40 hover:text-white transition-all backdrop-blur-sm group"
            >
              Download CV <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4 hero-text-anim">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-dusty-denim hover:text-white hover:scale-110 transition-all hover:drop-shadow-[0_0_10px_rgba(119,141,169,0.8)]"
                aria-label={social.name}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96" ref={imageRef}>
            {/* Animated border/glow */}
            <div className="absolute inset-0 rounded-4xl md:rounded-[3rem] bg-linear-to-tr from-dusk-blue via-dusty-denim to-prussian-blue blur-2xl opacity-40 animate-pulse" />
            <div className="absolute -inset-0.5 rounded-4xl md:rounded-[3rem] bg-linear-to-tr from-dusk-blue via-transparent to-prussian-blue opacity-50" />
            
            <div className="relative w-full h-full rounded-4xl md:rounded-[3rem] overflow-hidden glass-card p-1">
               <img 
                 src="https://i.ibb.co.com/nMX5F3d8/Gemini-Generated-Image-agmabeagmabeagma.png" 
                 alt="Avinash Sinha" 
                 className="w-full h-full object-cover rounded-[1.8rem] md:rounded-[2.8rem] filter saturate-110 contrast-110 aspect-square"
               />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-4 top-10 glass-card px-4 py-2 rounded-2xl flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-sm font-medium">Available</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
