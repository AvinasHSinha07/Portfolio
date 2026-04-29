import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviewsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    text: "Avinash completely transformed our frontend architecture. His attention to detail in motion design and performance optimization made our web app feel incredibly premium. Truly a top-tier engineer.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "CTO at DataSync Analytics",
    text: "The scraping automation Avinash built for us bypassed complex bot protections we had been struggling with for months. His Python expertise and problem-solving skills are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder of Nexus UI",
    text: "Working with Avinash was a breeze. He took our Figma designs and turned them into a pixel-perfect, buttery-smooth React application. His GSAP animations brought the whole project to life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop"
  },
  {
     id: 4,
     name: "David Kim",
     role: "Lead Developer at Orbit",
     text: "Incredible speed and efficiency! Avinash debugged our critical React optimization issues causing infinite re-renders. He understands the core web vitals deeply and implemented flawless code-splitting.",
     rating: 5,
     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
  }
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".review-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
      
      gsap.from(".marquee-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // For a continuous loop, we duplicate the array multiple times to ensure we can scroll infinitely without jumps
  const duplicatedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-24 relative overflow-x-clip overflow-y-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-prussian-blue/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="review-header mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block max-w-full break-words">
            Client Testimonials
            <div className="absolute -bottom-2 left-[10%] w-[80%] h-1 bg-linear-to-r from-transparent via-dusty-denim to-transparent rounded-full" />
          </h2>
          <p className="mt-6 text-alabaster-grey/70 max-w-2xl text-base md:text-lg px-2 sm:px-0">
            What people say about my engineering quality, design intuition, and collaboration.
          </p>
        </div>
      </div>

      <div className="marquee-container relative w-full overflow-hidden py-10 flex group">
        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 md:w-64 bg-linear-to-r from-ink-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 md:w-64 bg-linear-to-l from-ink-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
           {duplicatedReviews.map((review, idx) => (
             <div 
               key={`${review.id}-${idx}`} 
               className="glass-card shrink-0 w-[min(22rem,calc(100vw-2.5rem))] sm:w-[24rem] md:w-[28rem] mx-3 sm:mx-4 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-dusty-denim/40 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(119,141,169,0.3)] relative group/card flex flex-col h-full cursor-pointer"
             >
               <Quote className="absolute top-6 right-6 text-dusty-denim/10 group-hover/card:text-dusty-denim/30 transition-colors" size={60} />
               <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-dusty-denim fill-dusty-denim" />
                  ))}
               </div>
               <p className="text-alabaster-grey/80 text-base leading-relaxed mb-10 relative z-10 grow">
                 "{review.text}"
               </p>
               <div className="flex items-center gap-4 mt-auto relative z-10">
                 <img 
                   src={review.image} 
                   alt={review.name}
                   loading="lazy"
                   className="w-12 h-12 rounded-full object-cover border-2 border-prussian-blue"
                 />
                 <div>
                   <h4 className="text-white font-display font-semibold text-md">{review.name}</h4>
                   <p className="text-alabaster-grey/50 text-xs">{review.role}</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
