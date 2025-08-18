import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    badge: "Revolutionary Core",
    title: "Hybrid Gamified Learning",
    desc:
      "Not 'edutainment'. A system where play is the engine, and growth is the outcome — by design.",
  },
  {
    badge: "Your Child's Co-Pilot",
    title: "AI Learning Companions",
    desc:
      "Customizable, caring, and adaptive — guiding progress without pressure. Confidence, not comparison.",
  },
  {
    badge: "Cognitive Science",
    title: "Scientifically Tuned Difficulty",
    desc:
      "Spaced repetition, interleaving, and desirable difficulty — calibrated to keep the brain in the sweet spot for growth.",
  },
  {
    badge: "See Growth",
    title: "Adaptive Growth Maps",
    desc:
      "Focus, memory, logic, and social skills — visible, measurable, and motivating for families.",
  },
  {
    badge: "Safe By Default",
    title: "Moderated Global Community",
    desc:
      "Where children spark ideas, share skills, and grow into confident creators in a safe, lively space.",
  },
  {
    badge: "For Every Child",
    title: "Inclusive by Design",
    desc:
      "Built for accessibility for all childrens — because learning isn't a privilege, it's a right.",
  },
];

const Solution = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Optimized scroll reveal with better performance
    gsap.utils.toArray(".sol-feature").forEach((el, i) => {
      // Add null check to prevent GSAP errors
      if (!el) return;

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          // Performance optimizations
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        x: i % 2 === 0 ? -30 : 30, // Reduced movement for better performance
        y: 20, // Reduced movement for better performance
        opacity: 0,
        duration: 0.6, // Reduced duration for better performance
        ease: "power2.out", // Lighter easing for better performance
      });
    });
  }, []);

  return (
    <section id="solution" ref={containerRef} className="relative w-screen bg-background/80 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Eye-catching section heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="font-ui text-sm uppercase tracking-[0.25em] text-accent mb-4">CHIZEL — The Revolutionary Answer</p>
          <h2 className="section-heading relative inline-block">
            Ready To Turn Screens Into A Growth Engine?
          </h2>
          <p className="font-body text-lg text-secondary-text mt-6 max-w-3xl mx-auto">Play becomes purpose. Curiosity becomes courage. Learning becomes an adventure.</p>
        </div>

        <div className="sol-features mt-12 grid sm:grid-cols-2 gap-5">
          {features.map((f, index) => (
            <div
              key={f.title}
              className="sol-feature rounded-2xl bg-card/70 border border-white/10 p-6 md:p-8 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-ui text-[0.7rem] uppercase tracking-widest">{f.badge}</span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl text-text">{f.title}</h3>
              <p className="mt-2 font-body text-secondary-text">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;


