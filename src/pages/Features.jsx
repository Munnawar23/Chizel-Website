import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";

// Data is assumed to be in `src/constants/index.js` or similar
import { featuresData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ChizelApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  // Animation for the content on the left
  useGSAP(() => {
    // Animate the GIF and the text block as a sequence when the index changes
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1, // Stagger the appearance of the GIF and the text
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  // Animation for the static header
  useGSAP(() => {
    gsap.from(headerRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="chizel-app" className="relative w-full bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 md:mb-24">
          <p className="font-body text-sm text-secondary-text uppercase tracking-wider mb-4">
            Discover Our Features
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-text mb-6 leading-tight">
            Three Pillars of <span className="text-primary">Smart Learning</span>
          </h1>
          <p className="font-body max-w-3xl mx-auto text-lg text-secondary-text leading-relaxed">
            Transform screen time into meaningful growth with our three core experiences designed for modern learners.
          </p>
        </div>

        {/* --- Interactive Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          {/* LEFT Column: GIF and Text Content */}
          <div ref={contentRef} className="md:h-full flex flex-col justify-center space-y-6">
            {/* FIX: GIF without the card structure */}
            <div key={`${activeIndex}-gif`} className="relative w-full aspect-video rounded-xl overflow-hidden">
              <img
                src={featuresData[activeIndex].gifSrc}
                alt={`${featuresData[activeIndex].title} feature in action`}
                className="size-full object-cover"
              />
            </div>
            {/* Text content (no card) */}
            <div key={`${activeIndex}-text`} className="space-y-4">
              <p className="font-body text-secondary-text">
                {featuresData[activeIndex].description}
              </p>
              <div className="relative border-l-2 border-primary/30 pl-4 pt-2">
                <FaQuoteLeft className="absolute -top-1 -left-1.5 text-xl text-primary/30" />
                <blockquote className="font-body text-text/80 italic">
                  "{featuresData[activeIndex].quote}"
                </blockquote>
                <cite className="mt-2 block text-xs not-italic text-secondary-text">
                  — {featuresData[activeIndex].author}
                </cite>
              </div>
            </div>
          </div>
          
          {/* RIGHT Column: List of Titles */}
          <div className="flex flex-col justify-center md:h-full">
            {/* FIX: No sidebar indicator */}
            <ul className="space-y-6 md:space-y-8 text-center md:text-right">
              {featuresData.map((feature, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
                  <h2
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl uppercase transition-opacity duration-300 ${
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

export default ChizelApp;