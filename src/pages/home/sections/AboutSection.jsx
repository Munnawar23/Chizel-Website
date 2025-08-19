import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedTitle from "@components/common/AnimatedTitle";
import BentoTilt from "@components/common/BentoTilt";
import { principles, features } from "@utils/constants";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const scrollTriggerConfig = {
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      preventOverlaps: true,
    };

    let ctx = gsap.context(() => {
      gsap.from(".about-image-container", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 85%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        clipPath: "inset(0% 50% 0% 50%)",
        duration: 1.2,
        ease: "power3.inOut",
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".principle-item", {
        scrollTrigger: {
          trigger: ".principles-list",
          start: "top 85%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.4,
      });

      gsap.utils.toArray(".sol-feature").forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            ...scrollTriggerConfig,
          },
          x: i % 2 === 0 ? -30 : 30,
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-screen bg-background py-8 sm:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-1/2 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 relative z-10">
          <div className="about-text-content order-1 md:order-2 space-y-6 md:space-y-8">
            <AnimatedTitle
              title="CHIZEL — The <br />Revolutionary Solution"
              containerClass="!text-4xl md:!text-4xl !leading-tight !items-start !text-left text-text"
            />

            <p className="about-description font-body text-lg text-secondary-text max-w-xl">
              Chizel is a kids’ app that boosts IQ and confidence through fun, interactive challenges. It turns screen time into an engaging playground that sharpens critical thinking, problem-solving, and self-esteem.
            </p>

            <ul className="principles-list space-y-4">
              {principles.map((principle) => (
                <li
                  key={principle.title}
                  className="principle-item flex items-start gap-3 group"
                >
                  <FaCheckCircle
                    size="1.4em"
                    className="mt-1 flex-shrink-0 text-accent transition-all duration-300 group-hover:text-primary group-hover:scale-110"
                  />
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="font-body text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="font-body text-secondary-text leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <BentoTilt className="about-image-container order-2 md:order-1 relative h-96 w-full rounded-2xl md:h-[70vh]">
            <img
              src="/images/about-image.webp"
              alt="A child engaged in a learning game on a tablet"
              className="size-full rounded-2xl object-cover"
            />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 blur-xl opacity-40 -z-10" />
          </BentoTilt>
        </div>

        <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
          <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
                Ready To Turn Your Screen Time Into Skill Time?
              </span>
            </h2>
            <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto">
              Play becomes purpose. Curiosity becomes courage. Learning becomes an adventure.
            </p>
          </div>

          <div className="sol-features grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="sol-feature rounded-2xl bg-card/70 border border-[var(--color-border)] p-6 md:p-8 hover:shadow-[0_0_30px_var(--color-accent-alpha)] transition-shadow"
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
      </div>
    </section>
  );
};

export default AboutSection;
