import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/common/Button";
import AnimatedTitle from "../components/common/AnimatedTitle";

/**
 * A section to encourage users to join the waitlist for the upcoming Chizel app,
 * featuring a unique, interactive image with a 3D tilt effect and a gooey edge filter.
 */
const AppSection = () => {
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
        <p className="font-body text-sm uppercase text-secondary-text md:text-[10px]">
          Coming Soon
        </p>

        <div className="relative size-full">
          {/* Animated title with a blend effect that interacts with the image behind it */}
          <AnimatedTitle
            title="The adventure <br /> begins s<b>oo</b>n"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          {/* This is the container for the uniquely shaped interactive image */}
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/images/p5.png"
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
              Get ready to unlock your child's potential. Be the first to know
              when the adventure begins and gain exclusive early access.
            </p>

            <Button
              id="waitlist-btn"
              title="Join the Waitlist"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;