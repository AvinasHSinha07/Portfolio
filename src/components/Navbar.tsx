import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const MagneticItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPosition({ x: (clientX - (left + width / 2)) * 0.2, y: (clientY - (top + height / 2)) * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const matchingLink = navLinks.find(link => link.href.substring(1) === sectionId);
          if (matchingLink) setActive(matchingLink.name);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      {/* Desktop Floating Nav */}
      <div className={cn(
        "hidden md:flex items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-500 pointer-events-auto shadow-2xl",
        scrolled ? "bg-white/[0.03] backdrop-blur-xl border border-white/10" : "bg-transparent border border-transparent"
      )}>
        {navLinks.map((link) => (
          <MagneticItem key={link.name}>
            <a
              href={link.href}
              className="relative px-5 py-2.5 text-sm font-medium transition-colors group block rounded-full"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                active === link.name ? "text-white" : "text-alabaster-grey/70 group-hover:text-white"
              )}>
                {link.name}
              </span>
              {active === link.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          </MagneticItem>
        ))}
      </div>

      {/* Mobile Nav Header */}
      <div className={cn(
        "md:hidden w-full flex items-center justify-between px-6 py-4 rounded-2xl pointer-events-auto transition-all duration-300",
        (scrolled || mobileOpen) ? "bg-[#020617]/90 backdrop-blur-xl border border-white/10" : "bg-transparent"
      )}>
        <a href="#home" className="text-xl font-display font-bold tracking-tight text-white">
          Avinash Sinha
        </a>
        <button
          className="text-alabaster-grey hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                    active === link.name ? "bg-white/10 text-white" : "text-alabaster-grey/70 hover:text-white hover:bg-white/5"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
