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
    // 3D Animated Heading on Scroll
    const headingChars = headingRef.current.querySelectorAll('.char');
    
    gsap.fromTo(headingChars, 
      {
        opacity: 0,
        rotationX: -90,
        rotationY: 45,
        z: -200,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)",
        transformOrigin: "center center -100px",
      }
    );

    // Horizontal Scrolling Animation
    const cards = gsap.utils.toArray('.chizelverse-card');
    const totalWidth = cards.length * 100; // 100vw per card
    
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        start: "top top",
        end: () => `+=${totalWidth}vw`,
        onUpdate: (self) => {
          // Ensure smooth scrolling without conflicts
          const progress = self.progress;
          gsap.set(scrollContainerRef.current, {
            background: `linear-gradient(${progress * 360}deg, var(--color-background) 0%, var(--color-card) 100%)`,
          });
        }
      }
    });

    // Card entrance animations
    cards.forEach((card, index) => {
      gsap.fromTo(card.querySelector('.card-content'),
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            end: "left 20%",
            toggleActions: "play none none reverse",
            horizontal: true,
          },
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
        }
      );
    });

  }, []);

  // Split text into characters for 3D animation
  useEffect(() => {
    const heading = headingRef.current;
    const text = heading.textContent;
    heading.innerHTML = text
      .split('')
      .map(char => char === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${char}</span>`)
      .join('');
  }, []);

  return (
    <section id="chizelverse" className="relative w-full bg-background overflow-hidden">
      {/* Header Section with 3D Animated Title */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-ui text-lg text-primary uppercase tracking-wider mb-4 opacity-80">
            Enter the Universe
          </p>
          <h1 
            ref={headingRef}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-text leading-none"
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            Welcome to the ChizelVerse!
          </h1>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-secondary-text leading-relaxed">
            Embark on an epic journey through three incredible realms of learning and discovery.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards Section */}
      <div ref={scrollContainerRef} className="relative">
        <div 
          ref={cardsContainerRef}
          className="flex w-[300vw] h-screen"
          style={{ willChange: 'transform' }}
        >
          {featuresData.map((feature, index) => (
            <div 
              key={index}
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

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {featuresData.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30 transition-all duration-300"
              style={{ willChange: 'background-color' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChizelVerse;