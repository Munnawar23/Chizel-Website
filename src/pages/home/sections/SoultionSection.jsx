import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "@utils/constants"; // ✅ content imported

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const containerRef = useRef(null);

  // ✅ GSAP Animations
  useGSAP(() => {
    gsap.utils.toArray(".sol-feature").forEach((el, i) => {
      if (!el) return;

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        x: i % 2 === 0 ? -30 : 30, // alternate left-right animation
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section
      id="solution"
      ref={containerRef}
      className="relative w-screen bg-background/80 py-20 overflow-hidden"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="font-ui text-sm uppercase tracking-[0.25em] text-accent mb-4">
            CHIZEL — The Revolutionary Answer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text relative inline-block">
             <span className="bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">Ready To Turn Your Screen Time Into Skill Time?</span>
          </h2>
          <p className="font-body text-lg text-secondary-text mt-6 max-w-3xl mx-auto">
            Play becomes purpose. Curiosity becomes courage. Learning becomes an adventure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="sol-features mt-12 grid sm:grid-cols-2 gap-5">
          {features.map((f, index) => (
            <div
              key={f.title}
              className="sol-feature rounded-2xl bg-card/70 border border-[var(--color-border)] p-6 md:p-8 hover:shadow-[0_0_30px_var(--color-accent-alpha)] transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-ui text-[0.7rem] uppercase tracking-widest">
                {f.badge}
              </span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl text-text">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-secondary-text">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
