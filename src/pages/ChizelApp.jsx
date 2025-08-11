import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Correctly import useGSAP
import AnimatedTitle from "../components/common/AnimatedTitle";
import { FaCheckCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const ChizelApp = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useGSAP(
    () => {
      // Capture the DOM element from the ref.
      const element = frameRef.current;
      if (!element) return;

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = element.getBoundingClientRect();
        const rotateX = ((clientY - top) / height - 0.5) * -10;
        const rotateY = ((clientX - left) / width - 0.5) * 10;
        gsap.to(element, {
          duration: 0.3,
          rotateX,
          rotateY,
          transformPerspective: 500,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          duration: 0.5,
          rotateX: 0,
          rotateY: 0,
          ease: "elastic.out(1, 0.5)",
        });
      };

      // Add the event listeners
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  ); // Scope the context to the component's root

  return (
    // The containerRef is used by GSAP to scope the animations.
    <section
      ref={containerRef}
      id="download"
      className="min-h-dvh w-screen bg-background text-text overflow-hidden"
    >
      <div className="flex size-full flex-col items-center pt-14 pb-10">
        <p className="font-ui text-sm uppercase text-secondary-text tracking-wider">
          Coming Soon
        </p>

        <div className="relative w-full">
          <div className="flex justify-center w-full mt-4 relative z-10">
            <AnimatedTitle
              title="Chizel app<br />is c<b>o</b>ming "
              containerClass="pointer-events-none text-center"
            />
          </div>
          <div className="story-img-container -mt-16">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/images/app-image.webp"
                  alt="A phone showcasing the Chizel application"
                  className="object-contain"
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

        <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-4 -mt-72 sm:-mt-32">
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
            />
            <FeatureCard
              icon={<FaCheckCircle className="text-accent" />}
              title="Smart Play"
              subtitle="AI Powered"
            />
            <FeatureCard
              icon={<MdPhoneIphone className="text-accent" />}
              title="Mobile Ready"
              subtitle="iOS & Android"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, subtitle }) => (
  <div className="group rounded-lg bg-card/60 backdrop-blur-sm border border-secondary-text/20 p-3 text-center transition-all duration-300 hover:scale-105 hover:border-accent/40">
    <div className="flex justify-center mb-1">{icon}</div>
    <h4 className="text-sm font-medium text-text">{title}</h4>
    <p className="text-xs text-secondary-text">{subtitle}</p>
  </div>
);

export default ChizelApp;
