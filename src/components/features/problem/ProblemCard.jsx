const ProblemCard = ({ slide, isMobile }) => {
  return (
    <div
      className={`relative w-full rounded-3xl border-4 border-problem-yellow/30 bg-gradient-to-br ${slide.gradient} backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(255,51,51,0.3)] transition-all duration-500 hover:scale-[1.06]`}
    >
      {/* Fiery Impact Indicator */}
      <div className="absolute top-5 right-5 flex gap-1">
        <div className="w-6 h-6 bg-problem-yellow rounded-full opacity-60 animate-ping" />
        <div className="w-6 h-6 bg-problem-red-mid rounded-full opacity-40 animate-pulse delay-200" />
        <div className="w-5 h-5 bg-problem-indigo rounded-full opacity-50 animate-ping delay-400" />
      </div>
      {/* Meteoric Border at Bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-r from-problem-red-mid via-problem-yellow to-problem-indigo opacity-35 blur-sm z-10" />

      {/* Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className={`w-full ${
          isMobile ? "h-52" : "h-72"
        } md:h-80 lg:h-96 object-cover object-center rounded-t-3xl border-b-4 border-problem-yellow/40`}
        loading="lazy"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Extreme Content */}
      <div className="p-8 md:p-10 bg-black/80">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-problem-yellow via-problem-red-mid to-problem-indigo border border-problem-red-mid text-white font-bold text-base uppercase tracking-widest shadow-lg">
            {slide.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl text-problem-yellow font-black tracking-tight drop-shadow-lg animate-pulse">
          {slide.title}
        </h3>

        {/* Highlight */}
        <p className="mt-3 font-heading text-xl md:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-problem-yellow via-problem-red-mid to-problem-indigo bg-clip-text font-bold drop-shadow-lg animate-pulse">
          {slide.highlight}
        </p>

        {/* Description */}
        <p className="mt-5 font-body text-lg md:text-xl text-problem-text max-w-2xl font-bold border-l-4 border-problem-yellow pl-5">
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;