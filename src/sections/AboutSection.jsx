import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedTitle from "../components/common/AnimatedTitle";
import BentoTilt from "../components/ui/games/BentoTilt";
import {principles} from "../constants/data"

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    // Create a context for better cleanup
    let ctx = gsap.context(() => {
      // Common ScrollTrigger config
      const scrollTriggerConfig = {
        toggleActions: "play none none reverse",
        refreshPriority: -1, // Lower priority to avoid conflicts
      };

      // Kill any existing animations on these elements first
      gsap.killTweensOf([".about-image-container", ".about-description", ".principle-item"]);

      // Reset elements to initial state before animating
      gsap.set(".about-image-container", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        clearProps: "all"
      });
      
      gsap.set(".about-description", {
        opacity: 1,
        y: 0,
        clearProps: "all"
      });
      
      gsap.set(".principle-item", {
        opacity: 1,
        x: 0,
        clearProps: "all"
      });

      // Animate the image with proper cleanup
      gsap.fromTo(".about-image-container", 
        {
          opacity: 0,
          clipPath: "inset(0% 50% 0% 50%)",
        },
        {
          scrollTrigger: {
            trigger: ".about-image-container",
            start: "top 85%",
            id: "about-image", // Unique ID for this trigger
            ...scrollTriggerConfig,
          },
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.inOut",
        }
      );

      // Animate the description paragraph
      gsap.fromTo(".about-description",
        {
          opacity: 0,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: ".about-text-content",
            start: "top 80%",
            id: "about-description", // Unique ID
            ...scrollTriggerConfig,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
        }
      );

      // Animate each principle with stagger
      gsap.fromTo(".principle-item",
        {
          opacity: 0,
          x: -30,
        },
        {
          scrollTrigger: {
            trigger: ".principles-list",
            start: "top 85%",
            id: "about-principles", // Unique ID
            ...scrollTriggerConfig,
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.6,
        }
      );
    });

    // Cleanup function
    return () => {
      ctx.revert(); // This will clean up all animations and ScrollTriggers created in this context
    };
  }, []); // Empty dependency array to run only once

  return (
    <section id="about" className="relative w-screen bg-background py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-10 md:grid-cols-2 md:gap-20 relative z-10">
        
        <BentoTilt className="about-image-container relative h-96 w-full rounded-2xl md:h-[70vh]">
          <img
            src="/images/p5.png"
            alt="A child engaged in a learning game on a tablet"
            className="size-full rounded-2xl object-cover"
          />
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 blur-xl opacity-40 -z-10" />
        </BentoTilt>

        <div className="about-text-content">
          <AnimatedTitle
            title="Learning, <br /> Re<b>i</b>magined."
            containerClass="!text-4xl md:!text-5xl !leading-tight !items-start !text-left"
          />
          
          <p className="about-description mt-6 font-body text-lg text-secondary-text leading-relaxed">
           Chizel is a fun and safe learning app made especially for kids. Instead of just watching videos or wasting time on screens, Chizel turns screen time into smart time — where every tap and swipe helps children learn, think, and grow in a playful way.
          </p>

          <ul className="principles-list mt-8 space-y-6">
            {principles.map((principle) => (
              <li key={principle.title} className="principle-item flex items-start gap-4 group">
                <FaCheckCircle
                  size="1.5em"
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
      </div>
    </section>
  );
};

export default AboutSection;