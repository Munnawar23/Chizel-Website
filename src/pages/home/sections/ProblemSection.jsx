import { useState, useEffect } from "react"; // CHANGED: Imported useState and useEffect
import { problemSlides } from "@utils/constants";
import ProblemCard from "@components/features/problem/ProblemCard"; 

const ProblemSection = () => {
  // OPTIMIZED: State for mobile check to prevent re-calculating on every render
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section
      id="problem"
      className="relative w-full bg-background/100 py-24 overflow-hidden"
    >
      {/* Fiery Space Background - OPTIMIZED */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          // REMOVED `animate-pulse` - Animating large blurs is extremely resource-intensive.
          className={`absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-problem-red-mid/45 via-problem-yellow/20 to-transparent ${
            isMobile ? "blur-[40px]" : "blur-[80px]"
          }`}
        />
        <div
          // REMOVED `animate-pulse`
          className={`absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-gradient-to-br from-problem-orange/40 via-problem-pink/20 to-transparent ${
            isMobile ? "blur-[50px]" : "blur-[100px]"
          }`}
        />
        <div
          // REMOVED `animate-pulse`
          className={`absolute top-32 left-1/2 transform -translate-x-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-problem-indigo/40 via-problem-purple-start/30 to-problem-blue/20 ${
            isMobile ? "blur-[40px]" : "blur-[80px]"
          }`}
        />
        {/* The small 'ping' animations are less expensive and can remain */}
        <div
          className="absolute left-1/3 top-[40%] w-3 h-3 bg-problem-yellow animate-ping rounded-full"
          style={{ willChange: "transform, opacity" }}
        />
        <div
          className="absolute right-[15%] top-[10%] w-2 h-2 bg-problem-red-mid animate-ping rounded-full"
          style={{ willChange: "transform, opacity" }}
        />
        <div
          className="absolute left-[7%] bottom-[20%] w-4 h-4 bg-problem-indigo animate-ping rounded-full"
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Section Heading (animations are okay here as they are on text) */}
      <div className="relative z-10 text-center px-6 mb-16">
        <p className="font-bold text-lg uppercase tracking-widest text-problem-red-mid mb-2 animate-pulse">
          EXTREME WARNING
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-problem-red-mid via-problem-yellow to-problem-indigo bg-clip-text drop-shadow-lg animate-pulse">
          Every Second is a Disaster
        </h2>
        <p className="mt-4 text-2xl text-text font-semibold font-heading animate-pulse">
          Act now or your child’s spark will vanish forever.
        </p>
      </div>

      {/* Fiery Cards Layout */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-14 max-w-4xl mx-auto">
          {problemSlides.map((slide, i) => (
            <div
              key={i}
              className="problem-slide w-full max-w-[900px] mx-auto"
              // OPTIMIZED: Add will-change to hint browser about upcoming transform from AOS
              style={{ willChange: "transform, opacity" }}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <ProblemCard slide={slide} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;