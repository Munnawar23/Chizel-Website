import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title = '', containerClass }) => {
  const containerRef = useRef(null);

  // GSAP: Animate title when it scrolls into view
  useEffect(() => {
    // Create a GSAP context to scope animations and make cleanup easy
    const ctx = gsap.context(() => {
      // The timeline will be controlled by the ScrollTrigger instance
      gsap.to(".animated-word", {
        // ScrollTrigger configuration
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", 
          toggleActions: "play none none reverse", 
        },
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power3.out", 
        stagger: 0.05,     
      });
    }, containerRef); 

    // Cleanup function to revert all animations within the context
    return () => ctx.revert();
  }, []); 

  return (
    // ============== MAIN CONTAINER ==============
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {/* Map through lines separated by <br /> */}
      {title.split("<br />").map((line, lineIndex) => (
        <div
          key={lineIndex}
          // Using `flex-wrap` is a good practice for responsiveness
          className="flex flex-wrap items-center justify-start gap-x-2 md:gap-x-3"
        >
          {/* Map through words in each line */}
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="animated-word" // This class is the target for our GSAP animation
              // Use dangerouslySetInnerHTML to allow for <b>, <i> etc. tags within words
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;