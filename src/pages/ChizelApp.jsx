import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/common/Button";
import AnimatedTitle from "../components/common/AnimatedTitle";

/**
 * A section to encourage users to join the waitlist for the upcoming Chizel app,
 * featuring a unique, interactive image with a 3D tilt effect and a gooey edge filter.
 */
const ChizelApp = () => {
  // A ref for the interactive image element.
  const frameRef = useRef(null);

  // --- GSAP Animation Logic for 3D Tilt Effect ---
  // This logic remains the same as it's independent of the theme.

  // Handles the mouse moving over the image frame.
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10; // Invert for natural feel
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  // Resets the image rotation when the mouse leaves.
  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: "elastic.out(1, 0.5)", // A fun, bouncy return animation
      });
    }
  };

  return (
    <section id="download" className="min-h-dvh w-screen bg-background text-text">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-body text-sm uppercase text-secondary-text md:text-base tracking-wide">
          Coming Soon
        </p>

        <div className="relative size-full">
          {/* Animated title with proper centering and visibility */}
          <div className="flex justify-center w-full mt-5 relative z-10">
            <AnimatedTitle
              title="Chizel app<br />is c<b>o</b>ming "
              containerClass="pointer-events-none text-center"
            />
          </div>

          {/* This is the container for the uniquely shaped interactive image */}
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/images/p3.png"
                  alt="A phone showcasing the Chizel application"
                  className="object-contain"
                />
              </div>
            </div>

            {/* 
              This inline SVG is not a mistake! It defines a filter that gives the 
              edges of the clipped image a soft, "gooey" appearance.
              The .story-img-container class applies this filter via CSS.
            */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
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

        {/* Text content and call-to-action button */}
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-body text-secondary-text md:text-start">
              "Big things are coming! The Chizel mobile app will soon bring smart play to your phone."
            </p>

            {/* Feature showcase - mobile optimized */}
            <div className="mt-5 w-full max-w-sm mx-auto sm:max-w-none">
              {/* Mobile: Single stacked card, Desktop: Three cards */}
              <div className="sm:hidden">
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 p-4 transition-all duration-300">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-base font-medium text-text">Coming Soon</span>
                      </div>
                      <p className="text-sm text-secondary-text mb-3">Smart Play • AI Powered • Mobile Ready</p>
                      <div className="flex justify-center gap-4 text-xs text-secondary-text">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          iOS
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Android
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Original three cards */}
              <div className="hidden sm:flex gap-3">
                {/* Coming Soon Badge */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 p-3 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-text">Coming Soon</span>
                    </div>
                    <p className="text-xs text-secondary-text mt-1">Mobile App</p>
                  </div>
                </div>

                {/* Smart Play Feature */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg bg-card/60 backdrop-blur-sm border border-secondary-text/20 p-3 transition-all duration-300 hover:scale-105 hover:border-accent/40">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-text">Smart Play</span>
                    </div>
                    <p className="text-xs text-secondary-text mt-1">AI Powered</p>
                  </div>
                </div>

                {/* Mobile Ready */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg bg-card/60 backdrop-blur-sm border border-secondary-text/20 p-3 transition-all duration-300 hover:scale-105 hover:border-accent/40">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-text">Mobile Ready</span>
                    </div>
                    <p className="text-xs text-secondary-text mt-1">iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChizelApp;