import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";
import { FaCheckCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import FeatureCard from "../components/features/chizelApp/FeatureCard";

const ChizelApp = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only add mouse effects on desktop
  useEffect(() => {
    if (isMobile) return; // Completely skip on mobile

    const element = frameRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const rotateX = ((clientY - top) / height - 0.5) * -10;
      const rotateY = ((clientX - left) / width - 0.5) * 10;

      // Use CSS transforms directly instead of GSAP
      element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.transition = 'transform 0.3s ease-out';
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
      element.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Reset any transforms on mobile
  useEffect(() => {
    if (isMobile && frameRef.current) {
      frameRef.current.style.transform = 'none';
      frameRef.current.style.transition = 'none';
    }
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="download"
      className="w-full bg-background/80 text-text overflow-hidden"
    >
      <div className="flex size-full flex-col items-center pt-14 pb-10">
        <p className="font-ui text-xl uppercase text-secondary-text tracking-wider animate-pulse">
          Coming Soon
        </p>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: hype text */}
          <div className="relative z-10 px-6 order-2 md:order-1">
            <div style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)' }}>
              <AnimatedTitle
                title="The Chizel App <br /> launches s<b>o</b>on"
                containerClass="pointer-events-none"
              />
            </div>
            <p className="mt-4 text-secondary-text text-lg">
              A playful space adventure for brighter minds. Smart play. Real skills. Zero junk.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="px-4 py-2 rounded-full border border-primary/40 bg-primary/15 font-ui text-sm">iOS</div>
              <div className="px-4 py-2 rounded-full border border-accent/40 bg-accent/15 font-ui text-sm">Android</div>
              <div className="px-4 py-2 rounded-full border border-badge-bg/40 bg-badge-bg/15 font-ui text-sm">Early Access</div>
            </div>
          </div>

          {/* Right: phone teaser with logo */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-[520px] rounded-[2.2rem] border-2 border-text/15 bg-card/60 backdrop-blur-md shadow-[0_0_40px_rgba(93,63,211,0.25)]">
              <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                <div className="absolute -inset-10 bg-gradient-to-br from-primary/15 via-accent/20 to-badge-bg/10 blur-2xl" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <img src="\public\images\logo.png" alt="Chizel Logo" className="w-28 h-28 object-contain animate-pulse" />
                </div>
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full bg-text/20" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-text/20" />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-4 -mt-[360px] sm:-mt-50">

          <p className="text-center font-body text-secondary-text text-xl">
            Join the first wave. Reserve your spot among the pioneers of smart play.
          </p>
          <div className="mt-6 grid w-full grid-cols-3 gap-2 md:gap-3">
            <FeatureCard
              icon={
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              }
              title="Coming Soon"
              subtitle="Mobile App"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<FaCheckCircle className="text-accent" />}
              title="Smart Play"
              subtitle="AI Powered"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<MdPhoneIphone className="text-accent" />}
              title="Mobile Ready"
              subtitle="iOS & Android"
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChizelApp;