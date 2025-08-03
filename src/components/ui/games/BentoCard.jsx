import { useState, useRef } from "react";

/**
 * A bento-style card with background video, title, and description.
 */
export const BentoCard = ({ src, title, description }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverRef = useRef(null);

  // Track mouse position for radial effect
  const handleMouseMove = (e) => {
    if (!hoverRef.current) return;
    const rect = hoverRef.current.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {/* Background video */}
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-text">
        <div>
          <h1 className="bento-title font-heading">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 font-body text-xs md:text-base">{description}</p>
          )}
        </div>

        {/* Hover effect placeholder (if you still want it for future use) */}
        <div
          ref={hoverRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-0"
        >
          <div
            className="pointer-events-none absolute -inset-px transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(120px circle at ${cursorPosition.x}px ${cursorPosition.y}px, var(--color-primary-alpha), transparent)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
