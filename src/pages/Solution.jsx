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
      "Not ‘edutainment’. A system where play is the engine, and growth is the outcome — by design.",
  },
  {
    badge: "Your Child’s Co-Pilot",
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
      "Creativity thrives in safety. Share, build, and celebrate wins in a space built for kindness.",
  },
  {
    badge: "For Every Child",
    title: "Inclusive by Design",
    desc:
      "Built for accessibility — because learning isn’t a privilege, it’s a right.",
  },
];

const outcomes = [
  { stat: "+62%", label: "Memory Mastery" },
  { stat: "+47%", label: "Problem Solving" },
  { stat: "+53%", label: "Laser Logic" },
  { stat: "+38%", label: "Social Confidence" },
];

const Solution = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Zig-zag scroll reveal: alternate X directions
    gsap.utils.toArray(".sol-feature").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: i % 2 === 0 ? -40 : 40,
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });
    gsap.from(".sol-stat", {
      scrollTrigger: { trigger: ".sol-stats", start: "top 90%", toggleActions: "play none none reverse" },
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.6)",
    });
  }, []);

  return (
    <section id="solution" ref={containerRef} className="relative w-screen bg-background/80 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <p className="font-ui text-sm uppercase tracking-[0.25em] text-accent">CHIZEL — The Revolutionary Answer</p>
          <h2 className="font-heading text-5xl md:text-6xl text-text mt-3">Turn Screens Into a Growth Engine</h2>
          <p className="font-body text-lg text-secondary-text mt-4">Play becomes purpose. Curiosity becomes courage. Learning becomes an adventure.</p>
        </div>

        <div className="sol-features mt-12 grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="sol-feature rounded-2xl bg-card/70 border border-white/10 p-6 md:p-8 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-ui text-[0.7rem] uppercase tracking-widest">{f.badge}</span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl text-text">{f.title}</h3>
              <p className="mt-2 font-body text-secondary-text">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="sol-stats mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {outcomes.map((o) => (
            <div key={o.label} className="sol-stat text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6">
              <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
                {o.stat}
              </div>
              <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;


