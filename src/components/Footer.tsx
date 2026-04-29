import { Github, Linkedin, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="relative border-t border-white/10 bg-ink-black py-12 overflow-hidden mt-12 z-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-dusty-denim/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 relative z-10">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-alabaster-grey" onClick={(e) => { e.preventDefault(); lenis?.scrollTo(0);}}>
            AS<span className="text-dusty-denim">.</span>
          </a>
          <p className="text-alabaster-grey/50 text-sm mt-3">© {new Date().getFullYear()} Avinash Sinha. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-8 md:gap-16">
           <div className="flex flex-col gap-3 text-sm text-alabaster-grey/60 text-center md:text-left">
              <span className="text-white font-semibold mb-1">Quick Links</span>
              <a href="#home" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#home');}}>Home</a>
              <a href="#about" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#about');}}>About</a>
           </div>
           <div className="flex flex-col gap-3 text-sm text-alabaster-grey/60 text-center md:text-left">
              <span className="text-white font-semibold mb-1">Portfolio</span>
              <a href="#projects" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#projects');}}>Projects</a>
              <a href="#experience" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#experience');}}>Experience</a>
           </div>
        </div>

        {/* Action */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex gap-4">
             <a href="https://github.com/avinashsinha" className="w-10 h-10 rounded-full border border-white/10 bg-prussian-blue/40 flex items-center justify-center text-alabaster-grey/70 hover:text-white hover:border-dusty-denim transition-colors"><Github size={18} /></a>
             <a href="https://linkedin.com/in/avinashsinha" className="w-10 h-10 rounded-full border border-white/10 bg-prussian-blue/40 flex items-center justify-center text-alabaster-grey/70 hover:text-white hover:border-dusty-denim transition-colors"><Linkedin size={18} /></a>
             <a href="https://twitter.com/avinashsinha" className="w-10 h-10 rounded-full border border-white/10 bg-prussian-blue/40 flex items-center justify-center text-alabaster-grey/70 hover:text-white hover:border-dusty-denim transition-colors"><Twitter size={18} /></a>
             <a href="https://facebook.com/avinashsinha" className="w-10 h-10 rounded-full border border-white/10 bg-prussian-blue/40 flex items-center justify-center text-alabaster-grey/70 hover:text-white hover:border-dusty-denim transition-colors"><Facebook size={18} /></a>
          </div>
          <button 
            onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink-black hover:bg-alabaster-grey hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </footer>
  );
}
