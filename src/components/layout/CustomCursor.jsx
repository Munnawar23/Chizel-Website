import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse and touch move handlers
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (!isVisible) setIsVisible(true);

      // Animate cursor with GSAP
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: "power2.out"
      });

      // Animate inner dot with slight delay for smooth trail effect
      gsap.to(cursorDotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Touch handlers for mobile - REMOVED e.preventDefault()
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const { clientX, clientY } = touch;
      
      if (!isVisible) setIsVisible(true);

      // Animate cursor with GSAP
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.to(cursorDotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const { clientX, clientY } = touch;
      
      setIsTouching(true);
      setIsVisible(true);

      // Immediate position for touch start
      gsap.set(cursorRef.current, { x: clientX, y: clientY });
      gsap.set(cursorDotRef.current, { x: clientX, y: clientY });
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
      // Keep cursor visible for a moment after touch ends
      setTimeout(() => setIsVisible(false), 1000);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      if (!isMobile) setIsVisible(false);
    };

    // Hover effects for interactive elements
    const handleMouseOver = (e) => {
      if (isMobile && !isTouching) return;
      
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.role === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer');

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.role === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer');

      if (isInteractive) {
        setIsHovering(false);
      }
    };

    // Add event listeners for both mouse and touch
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    // Touch events - CHANGED: removed { passive: false }
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isVisible, isMobile, isTouching]);

  // GSAP animations for hover and touch states
  useGSAP(() => {
    if (isHovering || isTouching) {
      gsap.to(cursorRef.current, {
        scale: isMobile ? 1.5 : 2,
        opacity: isMobile ? 0.8 : 0.6,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isHovering, isTouching, isMobile]);

  // Hide default cursor only on desktop
  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [isMobile]);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 ${
          isMobile ? 'w-12 h-12' : 'w-8 h-8'
        } pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-full h-full border-2 border-white rounded-full bg-transparent ${
          isMobile ? 'border-4' : 'border-2'
        }`} />
      </div>

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 ${
          isMobile ? 'w-3 h-3' : 'w-2 h-2'
        } pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>


    </>
  );
};

export default CustomCursor;