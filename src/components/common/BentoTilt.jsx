import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  // ============== STATE AND REFS ==============
  const [transformStyle, setTransformStyle] = useState("");
  const containerRef = useRef(null); // A reference to the component's root element

  // ============== EVENT HANDLERS ==============
  /**
   * Calculates and applies the tilt effect when the mouse moves over the component.
   */
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    // Get the position and dimensions of the container element
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // Calculate the mouse position relative to the element (from 0 to 1)
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    // Calculate the desired rotation degrees, mapping [0, 1] to a -10deg to +10deg range
    const tiltX = (relativeY - 0.5) * 20; // Tilt up/down
    const tiltY = (relativeX - 0.5) * -20; // Tilt left/right

    // Apply the transform style with perspective for a 3D effect
    setTransformStyle(
      `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  };

  /**
   * Resets the tilt effect when the mouse leaves the component.
   */
  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  // ============== COMPONENT RENDER ==============
  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        // Apply the dynamic transform style
        transform: transformStyle,
        // Use a longer, smoother transition for a more graceful effect
        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        // Ensure child elements also respect the 3D space
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;