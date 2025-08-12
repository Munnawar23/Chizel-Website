import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problemSlides = [
  {
    badge: "Brain Hijack",
    title: "A Generation Under Siege",
    highlight: "We are raising creators in theory — but consumers in reality.",
    description:
      "Glowing rectangles are silently dismantling the foundation of young minds. Harmless-looking videos and games form dopamine loops that dull curiosity, erode patience, and make real learning feel 'too slow' to tolerate.",
    gradient: "from-primary/25 via-accent/20 to-badge-bg/20",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdjMWxlOTFyZ29yeGd2dWgxd2FrajVwZXltbnYyaHR2eGNrMWJ6OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlEEwgZfgqfH70c/giphy.webp",
  },
  {
    badge: "Emotional Decay",
    title: "Hearts Going Numb",
    highlight: "Empathy is shrinking before our eyes.",
    description:
      "Quick hits replace real stories. Kids lose the ability to wait, listen, and care — not because they're bad, but because they're wired for speed. The result? Numbness where wonder should live.",
    gradient: "from-accent/25 via-badge-bg/20 to-primary/20",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXozb2g1YjEwb3hvc3B0d243NjFqa256cDgzdzRyd3Rhemh1YjkxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Ki1fHZorEdWAPsc/giphy.gif",
  },
  {
    badge: "Gateway to Harm",
    title: "Doors to Darker Worlds",
    highlight: "The internet finds them before they're ready.",
    description:
      "Violence and explicit content are reaching children far earlier than parents imagine. What shocks at 8 feels normal at 10 — rewiring values, emotions, and trust.",
    gradient: "from-red-500/15 via-orange-400/15 to-primary/10",
    image: "https://media1.tenor.com/m/ACZReejIQ0MAAAAC/hack-hacking.gif",
  },
];

const Problem = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray(".problem-slide");
    if (slides.length === 0) return;

    const cardWidth = window.innerWidth * 0.75; // 75% viewport width
    const totalScroll =
      (slides.length - 1) * (cardWidth + window.innerWidth * 0.08); // includes gap

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 0.85,
        invalidateOnRefresh: true,
      },
    });

    tl.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
    });

    // Hover glow
    slides.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          duration: 0.3,
          scale: 1.03,
          boxShadow: "0 0 40px rgba(31,111,235,0.25)",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          duration: 0.3,
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        });
      });
    });
  }, []);

  return (
    <section
      id="problem"
      ref={containerRef}
      className="relative w-screen h-screen bg-background/80 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      {/* Section heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center px-4">
        <p className="font-ui text-sm uppercase tracking-[0.25em] text-primary">
          The Problem
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-5xl">
          We’re Losing Their Minds to Screens
        </h2>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex h-full items-center gap-[8vw]"
        style={{
          width: `${problemSlides.length * 80}vw`,
          willChange: "transform",
          touchAction: "none",
        }}
      >
        {problemSlides.map((slide, i) => (
          <div
            key={i}
            className="problem-slide w-[75vw] max-w-[900px] h-[75vh] flex-shrink-0 p-6 md:p-8"
          >
            <div
              className={`relative h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br ${slide.gradient} backdrop-blur-md overflow-hidden`}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 md:h-64 lg:h-72 object-cover object-center rounded-t-3xl"
              />

              {/* Text Content */}
              <div className="p-8 md:p-10">
                {/* Badge */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-card/60 border border-primary/30 text-primary font-ui text-[0.7rem] uppercase tracking-widest">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 font-heading text-2xl md:text-3xl lg:text-4xl text-text">
                  {slide.title}
                </h3>

                {/* Highlight */}
                <p className="mt-3 font-heading text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
                  {slide.highlight}
                </p>

                {/* Description */}
                <p className="mt-4 font-body text-base md:text-lg text-secondary-text max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {problemSlides.map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-primary/30 border border-primary/50"
          />
        ))}
      </div>
    </section>
  );
};

export default Problem;
