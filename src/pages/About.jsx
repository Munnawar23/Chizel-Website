import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedTitle from "../components/common/AnimatedTitle";
import BentoTilt from "../components/common/BentoTilt";
import { principles } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // GSAP logic is unchanged.
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const scrollTriggerConfig = { toggleActions: "play none none reverse" };
      gsap.killTweensOf([
        ".about-image-container",
        ".about-description",
        ".principle-item",
      ]);
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
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
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
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    // ============== SECTION CONTAINER (CORRECTED BACKGROUND) ==============
    <section
      id="about"
      className="relative w-screen bg-background py-16 sm:py-24 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-8 md:grid-cols-2 md:gap-20 relative z-10">
        {/* ============== TEXT CONTENT ============== */}
        <div className="about-text-content order-1 md:order-2">
          <AnimatedTitle
            title="Learning, <br /> Re<b>i</b>magined."
            containerClass="!text-4xl md:!text-5xl !leading-tight !items-start !text-left text-text"
          />
          <p className="about-description mt-4 font-body text-lg text-secondary-text leading-relaxed">
            Screens aren’t the enemy — meaningless scrolling is. Chizel transforms idle screen time into a guided space adventure where every minute builds real skills.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-card border-hsla">
              <h4 className="font-heading text-2xl text-text">What Kids Gain</h4>
              <ul className="mt-2 space-y-1 text-secondary-text">
                <li>+62% Memory Retention</li>
                <li>+47% Problem Solving</li>
                <li>+53% Logic & Patterns</li>
                <li>+38% Social Confidence</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-card border-hsla">
              <h4 className="font-heading text-2xl text-text">Why Parents Trust</h4>
              <ul className="mt-2 space-y-1 text-secondary-text">
                <li>No violence or junk content</li>
                <li>Guided learning in play</li>
                <li>Built for attention and calm</li>
                <li>Meaningful, measurable growth</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-5 rounded-xl bg-card border-hsla">
            <h4 className="font-heading text-2xl text-text">For Investors</h4>
            <p className="mt-2 text-secondary-text">
              A category-defining platform at the intersection of gaming and learning. Strong retention loops, cross-device reach, and a mission parents love.
            </p>
          </div>
          <ul className="principles-list mt-6 space-y-4">
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

        {/* ============== IMAGE CONTENT ============== */}
        <BentoTilt className="about-image-container order-2 md:order-1 relative h-96 w-full rounded-2xl md:h-[70vh]">
          <img
            src="/images/about-image.webp"
            alt="A child engaged in a learning game on a tablet"
            className="size-full rounded-2xl object-cover"
          />
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 blur-xl opacity-40 -z-10" />
        </BentoTilt>
      </div>
    </section>
  );
};

export default About;
