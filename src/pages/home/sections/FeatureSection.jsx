import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";
import { featuresData } from "@utils/constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef(null);

  useGSAP(() => {
    if (!headerRef.current) return;
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
    <section
      id="features"
      className="relative w-full bg-background py-20 sm:py-16 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center flex flex-col items-center space-y-4 md:space-y-6"
        >
          <p className="font-ui text-sm text-secondary-text uppercase tracking-wider">
            Discover Our Features
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl text-text leading-tight">
            Features of{" "}
            <span className="text-primary">Chizel for Better Learning</span>
          </h1>
          <p className="font-body max-w-3xl mx-auto text-base sm:text-lg text-secondary-text leading-relaxed">
            Transform screen time into meaningful growth with our <span className="font-bold text-primary">three core experiences</span> designed for modern learners.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mt-12 md:mt-16">
          {/* LEFT COLUMN */}
          <div className="order-2 md:order-1 flex flex-col space-y-8">
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg shadow-black/20 h-[350px] md:h-[550px] bg-background">
              {featuresData.map((feature, index) => (
                <img
                  key={index}
                  src={feature.gifSrc}
                  alt={`${feature.title} feature in action`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div>
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className={`space-y-4 transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <p className="font-body text-secondary-text">
                    {feature.description}
                  </p>
                  <div className="relative border-l-2 border-primary/30 pl-4 pt-1">
                    <FaQuoteLeft className="absolute -top-1 -left-1.5 text-xl text-primary/30" />
                    <blockquote className="font-body text-text/80 italic">
                      "{feature.quote}"
                    </blockquote>
                    <cite className="block text-xs not-italic text-secondary-text">
                      — {feature.author}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-1 md:order-2 flex flex-col justify-center md:justify-end h-auto md:h-[550px]">
            <ul className="space-y-3 md:space-y-4 text-center md:text-right">
              {featuresData.map((feature, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
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
