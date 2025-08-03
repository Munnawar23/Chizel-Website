import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx"; 

// ✅ Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title = '', containerClass }) => {
  const containerRef = useRef(null); // Ref to the title wrapper div

  // 🌀 Animate on Scroll using useEffect
  useEffect(() => {
    // 🔁 Create a GSAP context to scope animations within the component
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,    // Element to watch for scroll
          start: "100 bottom",              // When top 100px of element hits bottom of viewport
          toggleActions: "play none none reverse", // Plays on enter, reverses on leave
        },
      });

      // 🧩 Animation: Reveal each word with fade + 3D unflip + stagger
      titleAnimation.to(".animated-word", {
        opacity: 1, // Make each word visible
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", // Bring to normal 3D position
        ease: "power2.inOut", // Smooth easing
        stagger: 0.02, // Animates words one after another
      });
    }, containerRef); // Limit context to the title container

    return () => ctx.revert(); // 🧼 Clean up animation on unmount
  }, []);

  // 🟩 JSX Output
  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {/* 🔤 Break title into lines and words */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;