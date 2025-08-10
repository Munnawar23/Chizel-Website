import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in window;

  const cursorRingRef = useRef(null);
  const cursorDotRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: document.body });

  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = "none";
    }

    const moveCursor = contextSafe((e) => {
      const { clientX, clientY } = e.touches ? e.touches[0] : e;
      gsap.to(cursorRingRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(cursorDotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    });

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest(
        'a, button, [role="button"], .cursor-pointer'
      );
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("touchmove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      if (!isMobile) {
        document.body.style.cursor = "auto";
      }
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("touchmove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, contextSafe]);

  // GSAP: Animate cursor based on hover state
  useGSAP(() => {
    gsap.to(cursorRingRef.current, {
      scale: isHovering ? 1.8 : 1,
      opacity: isHovering ? 0.7 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(cursorDotRef.current, {
      scale: isHovering ? 0 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isHovering]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* ============== OUTER CURSOR RING ============== */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Using border-accent directly from Tailwind theme */}
        <div className="w-full h-full border-2 rounded-full border-accent" />
      </div>

      {/* ============== INNER CURSOR DOT ============== */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Using bg-text directly from Tailwind theme */}
        <div className="w-full h-full rounded-full bg-text" />
      </div>
    </>
  );
};

export default CustomCursor;
