import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import { featuresData } from "@utils/constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeIndex]);

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
    // ============== SECTION CONTAINER ==============
    <section id="features" className="relative w-full bg-background py-6 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* ============== HEADER SECTION ============== */}
        <div ref={headerRef} className="text-center mb-8 md:mb-12">
          <p className="font-ui text-sm text-secondary-text uppercase tracking-wider mb-2">
            Discover Our Features
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-text mb-4 leading-tight">
            Features of <span className="text-primary">Chizel for Better Learning</span>
          </h1>
          <p className="font-body max-w-3xl mx-auto text-base sm:text-lg text-secondary-text leading-relaxed">
            Transform screen time into meaningful growth with our three core experiences designed for modern learners.
          </p>
        </div>

        {/* ============== INTERACTIVE GRID SECTION ============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          
          {/* ============== LEFT COLUMN: DYNAMIC CONTENT ============== */}
          <div ref={contentRef} className="flex flex-col justify-center space-y-4">
            <div key={`${activeIndex}-gif`} className="relative w-full rounded-xl overflow-hidden shadow-lg shadow-black/20">
              <img
                src={featuresData[activeIndex].gifSrc}
                alt={`${featuresData[activeIndex].title} feature in action`}
                className="w-full h-auto object-contain bg-background"
              />
            </div>
            <div key={`${activeIndex}-text`} className="space-y-3 pt-2">
              <p className="font-body text-secondary-text">
                {featuresData[activeIndex].description}
              </p>
              <div className="relative border-l-2 border-primary/30 pl-4 pt-1">
                <FaQuoteLeft className="absolute -top-1 -left-1.5 text-xl text-primary/30" />
                <blockquote className="font-body text-text/80 italic">
                  "{featuresData[activeIndex].quote}"
                </blockquote>
                <cite className="mt-1 block text-xs not-italic text-secondary-text">
                  — {featuresData[activeIndex].author}
                </cite>
              </div>
            </div>
          </div>
          
          {/* ============== RIGHT COLUMN: FEATURE SELECTORS ============== */}
          <div className="flex flex-col justify-center">
            {/* FIX: Reduced spacing between titles */}
            <ul className="space-y-3 md:space-y-4 text-center md:text-right">
              {featuresData.map((feature, index) => (
                <li key={index} onMouseEnter={() => setActiveIndex(index)} className="cursor-pointer">
                  <h2
                    className={`font-heading text-3xl sm:text-4xl lg:text-7xl uppercase transition-opacity duration-300 ${
                      activeIndex === index
                        ? "text-text opacity-100"
                        : "text-secondary-text opacity-30 hover:opacity-60"
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

export default FeatureSection;
