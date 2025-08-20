const ProblemCard = ({ slide }) => {
  return (
    <div
      className="relative w-full rounded-3xl border border-[var(--color-border)] bg-card/70 backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_var(--color-accent-alpha)]"
    >
      {/* Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-52 md:h-80 lg:h-96 object-cover object-center rounded-t-3xl border-b border-[var(--color-border)]"
        loading="lazy"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Content */}
      <div className="p-8 md:p-10">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent border border-primary/50 text-white font-bold text-sm uppercase tracking-wider shadow-lg">
            {slide.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl text-text font-black tracking-tight">
          {slide.title}
        </h3>

        {/* Highlight */}
        <p className="mt-3 font-heading text-xl md:text-2xl text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-bold">
          {slide.highlight}
        </p>

        {/* Description */}
        <p className="mt-5 font-body text-lg text-secondary-text max-w-2xl border-l-4 border-primary pl-5">
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard