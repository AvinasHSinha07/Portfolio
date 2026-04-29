import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Send, Phone, Mail, Github, Linkedin, Twitter, Facebook, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

const MagneticButton = ({ children, className, type = "button", disabled }: { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset", disabled?: boolean }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${className} ${disabled ? 'opacity-80 cursor-not-allowed' : ''}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-32 relative overflow-x-clip bg-[#020617]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 contact-elem">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 break-words tracking-tight">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">extraordinary.</span>
          </h2>
          <p className="text-alabaster-grey/60 max-w-xl mx-auto text-lg font-light mt-4">
            Have a project in mind or looking for a backend/frontend architect? Drop a message, and I'll get back to you immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 contact-elem">
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Details</h3>
                
                <div className="space-y-6">
                  <a href="mailto:avinashsinha751@gmail.com" className="flex items-center gap-5 group min-w-0">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-alabaster-grey/50 mb-1 font-medium">Email</p>
                      <p className="text-white font-medium break-all sm:break-normal">avinashsinha751@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:01757579127" className="flex items-center gap-5 group min-w-0">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-alabaster-grey/50 mb-1 font-medium">Phone</p>
                      <p className="text-white font-medium break-words">01757579127</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-sm text-alabaster-grey/50 mb-4 font-medium">Follow Me</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/AvinasHSinha07" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/avinash-sinha-89ba02184/" },
                    { icon: Twitter, href: "https://twitter.com/avinashsinha" },
                    { icon: Facebook, href: "https://www.facebook.com/share/1BVqWMXo4b/" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all border border-transparent">
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 contact-elem">
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem] flex flex-col gap-6 h-full">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-alabaster-grey/60 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/5 focus:border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:bg-white/10 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-alabaster-grey/60 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/5 focus:border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:bg-white/10 transition-all font-sans"
                  />
                </div>
              </div>
              
              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-sm font-medium text-alabaster-grey/60 ml-2">Your Message</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full grow min-h-[160px] bg-white/5 border border-white/5 focus:border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:bg-white/10 transition-all font-sans resize-none"
                />
              </div>
              
              <MagneticButton type="submit" className="w-full mt-2" disabled={status === 'submitting'}>
                <div className={`w-full py-4 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'success' ? 'bg-green-500 text-white' : 
                  status === 'error' ? 'bg-red-500 text-white' : 
                  'bg-white text-[#020617] hover:scale-[0.98]'
                }`}>
                  {status === 'submitting' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 size={18} /> Message Sent!</>
                  ) : status === 'error' ? (
                    <><AlertCircle size={18} /> Error Sending</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </div>
              </MagneticButton>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
