import { useRef } from "react";

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
  return (
    <section
      id="problem"
      className="relative w-full bg-background/80 py-20"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      {/* Eye-catching section heading */}
      <div className="relative z-10 text-center px-4 mb-16">
        <p className="font-ui text-sm uppercase tracking-[0.25em] text-primary mb-4">
          The Problem
        </p>
        <h2 className="section-heading relative inline-block">
          We're Losing Their Minds to Screens
        </h2>
      </div>

      {/* Vertical Cards Layout */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-12 max-w-4xl mx-auto">
          {problemSlides.map((slide, i) => (
            <div
              key={i}
              className="problem-slide w-full max-w-[900px] mx-auto"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className={`relative w-full rounded-3xl border border-white/10 bg-gradient-to-br ${slide.gradient} backdrop-blur-md overflow-hidden hover:shadow-[0_0_40px_rgba(31,111,235,0.25)] transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
                  loading="lazy"
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
      </div>
    </section>
  );
};

export default Problem;
