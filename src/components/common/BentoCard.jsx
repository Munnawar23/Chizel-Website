import { useState, useRef } from "react";

/**
 * A bento-style card with optional icon or video, title, and description.
 */
export const BentoCard = ({ src, icon, title, description}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!hoverRef.current) return;
    const rect = hoverRef.current.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full overflow-hidden bg-card">
      {/* Video background if src is provided */}
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex size-full flex-col justify-between p-4 md:p-5 text-text">
        <div className="flex-1 flex flex-col">
          {icon && <div className="mb-2 md:mb-3 text-4xl md:text-5xl lg:text-6xl text-primary flex-shrink-0">{icon}</div>}
          <h1 className="font-heading text-5xl md:text-lg lg:text-5xl leading-tight mb-2 flex-shrink-0">
            {title}
          </h1>
          {description && (
            <p className="font-body text-xs md:text-sm text-secondary-text leading-relaxed flex-1 overflow-hidden">
              {description}
            </p>
          )}
        </div>

        {/* Radial hover effect */}
        <div
          ref={hoverRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="pointer-events-none absolute inset-0 transition duration-300"
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