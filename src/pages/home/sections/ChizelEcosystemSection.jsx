import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "@components/common/AnimatedTitle";

const ChizelEcosystemSection = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      element.style.transition = "transform 0.3s ease-out";
    };

    const handleMouseLeave = () => {
      element.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
      element.style.transition =
        "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

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
      <div className="flex flex-col items-center mt-12 pb-5 sm:pb-14">
        <p className="font-ui text-lg uppercase text-secondary-text tracking-wider">
          Our Vision
        </p>

        <div className="relative w-full">
          <div className="flex justify-center w-full mt-2 relative z-10">
            <div
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)",
              }}
            >
              <AnimatedTitle
                title="Building a<br />Chizel <b>Ecosystem</b>"
                containerClass="pointer-events-none text-center text-4xl p-4 sm:text-5xl md:text-5xl"
              />
            </div>
          </div>

          <div className="story-img-container -mt-6 sm:-mt-12">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/images/ecosystem-image.webp"
                  alt="Chizel Ecosystem illustration"
                  className="object-contain"
                  style={isMobile ? { transform: "none !important" } : {}}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-2xl -mt-92 sm:-mt-44 flex-col items-center px-4 ">
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
