import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          const matchingLink = navLinks.find(link => link.href.substring(1) === sectionId);
          if (matchingLink) {
            setActive(matchingLink.name);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4 bg-ink-black/80 backdrop-blur-md border-b border-prussian-blue/50 shadow-lg shadow-black/20" : "py-6 bg-transparent"
      )}
    >
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-alabaster-grey">
          AS<span className="text-dusty-denim">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium transition-colors hover:text-white"
            >
              <span className={cn(
                "relative z-10 transition-colors",
                active === link.name ? "text-white" : "text-dusty-denim"
              )}>
                {link.name}
              </span>
              {active === link.name && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-dusk-blue"
                  transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 20 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="md:hidden text-dusty-denim hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        id="mobile-navigation"
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden absolute left-0 right-0 top-full overflow-hidden bg-prussian-blue/98 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30"
      >
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 sm:px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                active === link.name ? "text-white" : "text-dusty-denim"
              )}
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
