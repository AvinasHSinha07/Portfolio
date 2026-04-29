import { Github, Linkedin, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="relative border-t border-white/5 bg-[#020617] py-16 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 relative z-10">
        
        {/* Brand */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-display font-bold tracking-tight text-white" onClick={(e) => { e.preventDefault(); lenis?.scrollTo(0);}}>
            Avinash Sinha
          </a>
          <p className="text-white/40 text-sm mt-3">© {new Date().getFullYear()} Avinash Sinha. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-12 md:gap-20">
           <div className="flex flex-col gap-3 text-sm text-white/50 text-center md:text-left">
              <span className="text-white/30 font-semibold mb-2 uppercase tracking-widest text-xs">Quick Links</span>
              <a href="#home" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#home');}}>Home</a>
              <a href="#about" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#about');}}>About</a>
           </div>
           <div className="flex flex-col gap-3 text-sm text-white/50 text-center md:text-left">
              <span className="text-white/30 font-semibold mb-2 uppercase tracking-widest text-xs">Portfolio</span>
              <a href="#projects" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#projects');}}>Projects</a>
              <a href="#experience" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); lenis?.scrollTo('#experience');}}>Experience</a>
           </div>
        </div>

        {/* Action */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="flex gap-4">
             {[
               { icon: Github, href: "https://github.com/AvinasHSinha07" },
               { icon: Linkedin, href: "https://www.linkedin.com/in/avinash-sinha-89ba02184/" },
               { icon: Twitter, href: "https://twitter.com/avinashsinha" },
               { icon: Facebook, href: "https://www.facebook.com/share/1BVqWMXo4b/" }
             ].map((social, idx) => (
               <a key={idx} href={social.href} className="w-10 h-10 rounded-full border border-transparent hover:border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                 <social.icon size={16} />
               </a>
             ))}
          </div>
          <button 
            onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#020617] hover:scale-[0.92] transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </footer>
  );
}
