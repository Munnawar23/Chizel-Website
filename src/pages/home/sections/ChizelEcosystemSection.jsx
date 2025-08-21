import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "@components/common/AnimatedTitle";

const ChizelEcosystemSection = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse move effect for desktop (no changes here)
  useEffect(() => {
    if (isMobile) return;
    const element = frameRef.current;
    if (!element) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const rotateX = ((clientY - top) / height - 0.5) * -10;
      const rotateY = ((clientX - left) / width - 0.5) * 10;
      element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.transition = "transform 0.1s ease-out";
    };
    const handleMouseLeave = () => {
      element.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
      element.style.transition = "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    };
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Reset transform on mobile (no changes here)
  useEffect(() => {
    if (isMobile && frameRef.current) {
      frameRef.current.style.transform = "none";
      frameRef.current.style.transition = "none";
    }
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="chizel-ecosystem"
      className="w-full bg-background text-text overflow-hidden"
    >
      <div className="flex flex-col items-center pt-8 pb-20 sm:pb-20">
        <p className="font-ui text-lg uppercase text-secondary-text tracking-wider">
          Our Vision
        </p>

        <div className="relative w-full mt-4">
          
          {/* FIX 1: Gradient Overlay for Text Contrast */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background/80 via-background/40 to-transparent z-10" />

          <div className="flex justify-center w-full relative z-20">
            {/* FIX 2: Added 'ecosystem-title' class for refined styling */}
            <AnimatedTitle
              title="Building a<br />Chizel <b>Ecosystem</b>"
              containerClass="ecosystem-title pointer-events-none text-center text-4xl p-4 sm:text-5xl"
            />
          </div>

          {/* FIX 3: Reduced Image Container Height */}
          <div className="story-img-container -mt-10 sm:-mt-16 h-[50vh] md:h-[65vh]">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/images/ecosystem-image.webp"
                  alt="Chizel Ecosystem illustration"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FIX 4: Adjusted Negative Margin for Quote */}
        <div className="relative z-10 flex w-full max-w-2xl -mt-80  md:-mt-48 flex-col items-center px-4">
          <p className="text-center font-body text-secondary-text text-lg sm:text-xl">
            "We are creating a comprehensive ecosystem for your child — where
            learning, play, and growth come together in a single, engaging
            experience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChizelEcosystemSection;