import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "@components/common/AnimatedTitle";
import { FaCheckCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import FeatureCard from "@components/features/chizelApp/FeatureCard";

const ChizelAppSection = () => {
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
      id="chizel-app"
      className="w-full bg-background text-text overflow-hidden"
    >
      <div className="flex size-full flex-col items-center pt-14 pb-10">
        <p className="font-ui text-xl uppercase text-secondary-text tracking-wider">
          Coming Soon
        </p>

        <div className="relative w-full">
          <div className="flex justify-center w-full mt-4 relative z-10">
            <div style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)' }}>
              <AnimatedTitle
                title="Chizel app<br />is c<b>o</b>ming "
                containerClass="pointer-events-none text-center"
              />
            </div>
          </div>
          <div className="story-img-container -mt-8 sm:-mt-16">
            <div className="story-img-mask">
              <div className="story-img-content ">
                <img
                  ref={frameRef}
                  src="/images/app-image.webp"
                  alt="A phone showcasing the Chizel application"
                  className="object-contain"
                  style={isMobile ? { transform: 'none !important', willChange: 'auto' } : {}}
                />
              </div>
            </div>
            <svg className="invisible absolute size-0">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

       <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-4 -mt-[360px] sm:-mt-50">

          <p className="text-center font-body text-secondary-text text-xl">
            "Big things are coming! The Chizel mobile app will soon bring smart
            play right to your phone."
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

export default ChizelAppSection;