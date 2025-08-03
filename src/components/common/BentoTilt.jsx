import { useState, useRef } from "react";

/**
 * Adds a smooth 3D tilt effect to any child component based on mouse position
 */
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const containerRef = useRef(null); // Get reference to the wrapper div

  // 🧲 Calculate tilt based on mouse position
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    setTransformStyle(
      `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    );
  };

  // 🧼 Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setTransformStyle("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)", // Smooth spring-like motion
      }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
