import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Send, Phone, Mail, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="contact" className="py-24 relative overflow-x-clip" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 hidden md:block -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dusk-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 contact-elem">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 break-words">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusty-denim to-alabaster-grey">extraordinary</span>
          </h2>
          <p className="text-alabaster-grey/70 max-w-2xl mx-auto text-base md:text-lg px-2 sm:px-0">
            Have a project in mind or looking for a backend/frontend architect? Drop a message, and I'll get back to you immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 contact-elem">
            <div className="glass-card p-8 rounded-3xl border-dusty-denim/20">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <a href="mailto:avinashsinha751@gmail.com" className="flex items-center gap-4 group min-w-0">
                  <div className="w-12 h-12 bg-prussian-blue rounded-full border border-white/5 flex items-center justify-center text-dusty-denim group-hover:bg-dusk-blue group-hover:text-white group-hover:border-dusty-denim/50 transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-alabaster-grey/60 mb-1">Email</p>
                    <p className="text-white font-medium break-all sm:break-normal">avinashsinha751@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:01757579127" className="flex items-center gap-4 group min-w-0">
                  <div className="w-12 h-12 bg-prussian-blue rounded-full border border-white/5 flex items-center justify-center text-dusty-denim group-hover:bg-dusk-blue group-hover:text-white group-hover:border-dusty-denim/50 transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-alabaster-grey/60 mb-1">Phone</p>
                    <p className="text-white font-medium break-words">01757579127</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-alabaster-grey/60 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-ink-black rounded-full flex items-center justify-center text-alabaster-grey/70 hover:text-white border border-white/5 hover:border-dusty-denim hover:shadow-[0_0_15px_rgba(119,141,169,0.5)] transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 contact-elem">
            <form className="glass-card p-8 md:p-10 rounded-3xl border-dusty-denim/20 flex flex-col gap-6 relative overflow-hidden group/form">
              {/* Form border glow animation effect */}
              <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-dusty-denim)_0%,_transparent_50%)] bg-[length:150%_150%] bg-[position:-200%_-200%] transition-[background-position] duration-700 ease-in-out group-hover/form:bg-center opacity-20 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-alabaster-grey/80 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-ink-black/50 border border-white/10 focus:border-dusty-denim rounded-xl px-4 py-3.5 text-white placeholder:text-alabaster-grey/30 focus:outline-none focus:ring-2 focus:ring-dusty-denim/20 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-alabaster-grey/80 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-ink-black/50 border border-white/10 focus:border-dusty-denim rounded-xl px-4 py-3.5 text-white placeholder:text-alabaster-grey/30 focus:outline-none focus:ring-2 focus:ring-dusty-denim/20 transition-all font-sans"
                  />
                </div>
              </div>
              
              <div className="space-y-2 relative z-10 flex-grow">
                <label className="text-sm font-medium text-alabaster-grey/80 ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-ink-black/50 border border-white/10 focus:border-dusty-denim rounded-xl px-4 py-3.5 text-white placeholder:text-alabaster-grey/30 focus:outline-none focus:ring-2 focus:ring-dusty-denim/20 transition-all font-sans resize-none"
                />
              </div>
              
              <button 
                type="button" 
                className="relative z-10 w-full py-4 mt-2 bg-white text-ink-black font-bold rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dusty-denim/0 via-ink-black/10 to-dusty-denim/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                <span className="flex items-center justify-center gap-2">
                  Send Message <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
