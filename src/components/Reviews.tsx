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
      gsap.from(".review-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
      });
      
      gsap.from(".marquee-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-32 relative overflow-x-clip bg-[#020617]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="review-anim mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-4">
            Client Testimonials.
          </h2>
          <p className="mt-4 text-alabaster-grey/60 max-w-xl mx-auto text-lg font-light">
            What people say about my engineering quality, design intuition, and collaboration.
          </p>
        </div>
      </div>

      <div className="marquee-container relative w-full overflow-hidden py-10 flex group">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
           {duplicatedReviews.map((review, idx) => (
             <div 
               key={`${review.id}-${idx}`} 
               className="shrink-0 w-[min(22rem,calc(100vw-2.5rem))] sm:w-[26rem] mx-3 sm:mx-4 p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 relative group/card flex flex-col h-full"
             >
               <Quote className="absolute top-8 right-8 text-white/5 group-hover/card:text-white/10 transition-colors" size={60} />
               <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-white/80 fill-white/80" />
                  ))}
               </div>
               <p className="text-alabaster-grey/70 text-base leading-relaxed mb-10 relative z-10 font-light grow">
                 "{review.text}"
               </p>
               <div className="flex items-center gap-4 mt-auto relative z-10">
                 <img 
                   src={review.image} 
                   alt={review.name}
                   loading="lazy"
                   className="w-12 h-12 rounded-full object-cover border border-white/10"
                 />
                 <div>
                   <h4 className="text-white font-display font-semibold text-sm">{review.name}</h4>
                   <p className="text-white/40 text-xs font-medium">{review.role}</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
