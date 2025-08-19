import { useState } from "react";
import clsx from "clsx";

export const BentoCard = ({ src, icon, title, description, className }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={clsx(
        "relative size-full overflow-hidden rounded-xl bg-card border-hsla p-4 md:p-5",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover"
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 flex h-full flex-col justify-start text-text">
        {icon && <div className="mb-3 text-6xl text-primary">{icon}</div>}

        <h3 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
          {title}
        </h3>

        {description && (
          <p className="mt-2 font-body text-base text-secondary-text leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Hover Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, var(--color-primary-alpha), transparent)`,
        }}
      />
    </div>
  );
};

export default BentoCard;
