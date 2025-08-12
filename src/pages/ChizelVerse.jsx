import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChizelVerseCard from "../components/features/chizelverse/ChizelVerseCard";
import { featuresData } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const ChizelVerse = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    // Kill any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger && trigger.trigger.closest('#chizelverse')) {
        trigger.kill();
      }
    });

    // 3D Cinematic Heading Animation
    const headingChars = headingRef.current.querySelectorAll('.char');

    // Initial state - characters scattered in 3D space
    gsap.set(headingChars, {
      opacity: 0,
      rotationX: -180,
      rotationY: 90,
      rotationZ: 45,
      z: -500,
      scale: 0.1,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-100, 100),
    });

    // Cinematic entrance animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      }
    });

    headingTl
      .to(headingChars, {
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        z: 0,
        scale: 1,
        x: 0,
        y: 0,
        duration: 2,
        stagger: {
          amount: 1.5,
          from: "random"
        },
        ease: "back.out(2)",
        transformOrigin: "center center -200px",
      })
      .to(headingChars, {
        textShadow: "0 0 20px rgba(31, 111, 235, 0.8), 0 0 40px rgba(93, 63, 211, 0.6), 0 0 60px rgba(31, 111, 235, 0.4)",
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=1")
      .to(headingChars, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut"
      });

    // Horizontal Scrolling Animation - Fixed for all 3 cards
    const cards = gsap.utils.toArray('.chizelverse-card');

    if (cards.length > 0) {
      // Create horizontal scroll animation
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 0.8,
          snap: cards.length > 1 ? 1 / (cards.length - 1) : false,
          start: "top top",
          end: () => `+=${(cards.length - 1) * window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const dots = document.querySelectorAll('.progress-dot');
            const activeIndex = Math.round(self.progress * (cards.length - 1));
            dots.forEach((dot, i) => {
              dot.style.transform = i === activeIndex ? 'scale(1.3)' : 'scale(1)';
              dot.style.backgroundColor = i === activeIndex ? 'var(--color-primary)' : 'rgba(31,111,235,0.3)';
            });
          }
        }
      });

      // Move all cards horizontally
      horizontalTl.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
      });

      // Individual card entrance animations
      cards.forEach((card, index) => {
        const cardContent = card.querySelector('.card-content');

        gsap.fromTo(cardContent,
          {
            opacity: 0,
            y: 100,
            rotationX: 45,
            scale: 0.8,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "left 80%",
              end: "left 20%",
              toggleActions: "play none none reverse",
              containerAnimation: horizontalTl,
            },
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: index * 0.2,
          }
        );
      });
    }

    // Parallax background elements
    gsap.to(".bg-element-1", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -100,
      rotation: 180,
      ease: "none"
    });

    gsap.to(".bg-element-2", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: 50,
      rotation: -90,
      ease: "none"
    });

  }, []);

  const headingLines = ["Welcome To", "The ChizelVerse !"];

  return (
    <section
      ref={containerRef}
      id="chizelverse"
      className="relative w-full bg-background/80 overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-element-1 absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="bg-element-2 absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-lg rotate-45 blur-lg"></div>
        <div className="bg-element-1 absolute bottom-32 left-1/3 w-40 h-40 bg-badge-bg/5 rounded-full blur-2xl"></div>
      </div>

      {/* Header Section with 3D Animated Title */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center relative z-10">
          <p className="font-ui text-lg text-primary uppercase tracking-wider mb-4 opacity-80 animate-pulse">
            Enter the Universe
          </p>

          <h1
            ref={headingRef}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-6 gradient-3d-text"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {headingLines.map((line, i) => (
              <span key={i}>
                {line.split("").map((ch, idx) => (
                  <span className="char" key={`${i}-${idx}`}>{ch === " " ? "\u00A0" : ch}</span>
                ))}
                {i < headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-secondary-text leading-relaxed opacity-0 animate-fade-in-up">
            Embark on an epic journey through three incredible realms of learning and discovery.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards Section */}
      <div ref={scrollContainerRef} className="relative bg-background">
        <div
          ref={cardsContainerRef}
          className="flex h-screen"
          style={{
            width: `${featuresData.length * 100}vw`,
            willChange: 'transform',
            touchAction: 'none'
          }}
        >
          {featuresData.map((feature, index) => (
            <div
              key={`chizelverse-card-${index}`}
              className="chizelverse-card w-screen h-full flex-shrink-0 relative"
            >
              <ChizelVerseCard
                feature={feature}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator (visible only within section) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {featuresData.map((_, index) => (
            <div
              key={`progress-${index}`}
              className="progress-dot w-3 h-3 rounded-full bg-primary/30 transition-all duration-300 border border-primary/50"
              style={{ willChange: 'background-color, transform' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChizelVerse;