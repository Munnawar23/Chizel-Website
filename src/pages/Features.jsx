import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import { featuresData } from "../constants"; 

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  // GSAP: Animate left column content when the active feature changes
  useGSAP(() => {
    // Animate the GIF and text block in sequence
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1, 
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  // GSAP: Scroll-triggered animation for the main header
  useGSAP(() => {
    gsap.from(headerRef.current.children, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="features" className="relative w-full bg-light-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* ============== HEADER SECTION ============== */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <p className="font-ui text-sm text-light-secondary-text uppercase tracking-wider mb-2">
            Discover Our Features
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-light-text mb-4 leading-tight">
            Three Pillars of <span className="text-light-primary">Smart Learning</span>
          </h1>
          <p className="font-body max-w-3xl mx-auto text-lg text-light-secondary-text leading-relaxed">
            Transform screen time into meaningful growth with our three core experiences designed for modern learners.
          </p>
        </div>

        {/* ============== INTERACTIVE GRID SECTION ============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[60vh]">
          
          {/* ============== LEFT COLUMN: DYNAMIC CONTENT ============== */}
          <div ref={contentRef} className="md:h-full flex flex-col justify-center space-y-4">
            {/* Display GIF for the active feature */}
            <div key={`${activeIndex}-gif`} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={featuresData[activeIndex].gifSrc}
                alt={`${featuresData[activeIndex].title} feature in action`}
                className="size-full object-cover"
              />
            </div>
            {/* Display text content for the active feature */}
            <div key={`${activeIndex}-text`} className="space-y-3 pt-2">
              <p className="font-body text-light-secondary-text">
                {featuresData[activeIndex].description}
              </p>
              <div className="relative border-l-2 border-light-primary/30 pl-4 pt-1">
                <FaQuoteLeft className="absolute -top-1 -left-1.5 text-xl text-light-primary/30" />
                <blockquote className="font-body text-light-text/80 italic">
                  "{featuresData[activeIndex].quote}"
                </blockquote>
                <cite className="mt-1 block text-xs not-italic text-light-secondary-text">
                  — {featuresData[activeIndex].author}
                </cite>
              </div>
            </div>
          </div>
          
          {/* ============== RIGHT COLUMN: FEATURE SELECTORS ============== */}
          <div className="flex flex-col justify-center md:h-full">
            <ul className="space-y-4 md:space-y-6 text-center md:text-right">
              {featuresData.map((feature, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
                  <h2
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl uppercase transition-opacity duration-300 ${
                      activeIndex === index
                        ? "text-light-text opacity-100"
                        // Apply different style for active vs. inactive items
                        : "text-light-secondary-text opacity-30 hover:opacity-60"
                    }`}
                  >
                    {feature.title}
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;