import { useRef } from "react";

const problemSlides = [
  {
    badge: "🧠 Brainrot",
    title: "The Silent Brainrot",
    highlight: "Every second, a black hole empties your child's mind.",
    description: "This is not distraction — it's a merciless cosmic decay eating away their brain. Focus, memory, feelings — vaporized into space. The clock is ticking, and their future is at stake. Fix this now before it's too late.",
    gradient: "from-purple-900/70 via-indigo-700/60 to-blue-700/60",
    image: "/gifs/brain_rot.gif",
  },
  {
    badge: "🧠 Mind Theft",
    title: "They're Stealing Our Kids' Brains",
    highlight: "Every swipe, every click steals pieces of their soul.",
    description: "Screens are relentless raiders, shattering curiosity and crushing creativity. Your child isn't just distracted — they're being stolen from. This is a theft of hope, imagination, and dreams.",
    gradient: "from-red-700/50 via-orange-600/50 to-yellow-500/50",
    image: "/gifs/brain_hijack.gif",
  },
  {
    badge: "💔 Emotional Decay",
    title: "Hearts Going Radio Silent",
    highlight: "Love, empathy, and compassion are dying in real time.",
    description: "The emotional furnace is shutting down, replaced by numbing void. Children are becoming emotional ghosts — unable to feel, to care, to connect. This isn't just loss — it's heartbreak on a cosmic scale.",
    gradient: "from-purple-700/60 via-pink-600/60 to-red-600/60",
    image: "/gifs/emotional_decay.gif",
  },
  {
    badge: "🚨 Gateway to Harm",
    title: "Doors to Digital Hell",
    highlight: "Predators and poison lurk behind every innocent tap.",
    description: "The internet is a deadly black hole swallowing innocence. Violence, predators, and corrosive content are redefining childhood in the darkest ways imaginable. The gate to hell is just a screen away.",
    gradient: "from-red-900/70 via-red-700/60 to-orange-600/60",
    image: "/gifs/gateway-to-harm.gif",
  },
];

const Problem = () => {
  return (
    <section
      id="problem"
      className="relative w-full bg-background/100 py-24 overflow-hidden"
    >
      {/* Fiery Space Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Blazing comets and burning stars */}
        <div className="absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-red-700/45 via-yellow-500/20 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-gradient-to-br from-orange-600/40 via-pink-600/20 to-transparent blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-indigo-700/40 via-purple-900/30 to-blue-700/20 blur-[80px] animate-pulse delay-500" />
        {/* Cosmic sparks everywhere */}
        <div className="absolute left-1/3 top-[40%] w-3 h-3 bg-yellow-500 animate-ping rounded-full" />
        <div className="absolute right-[15%] top-[10%] w-2 h-2 bg-red-600 animate-ping rounded-full" />
        <div className="absolute left-[7%] bottom-[20%] w-4 h-4 bg-indigo-400 animate-ping rounded-full" />
      </div>

      {/* Section Heading - Urgent and Powerful */}
      <div className="relative z-10 text-center px-6 mb-16">
        <p className="font-bold text-lg uppercase tracking-widest text-red-600 mb-2 animate-pulse">
          EXTREME WARNING
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-indigo-800 bg-clip-text drop-shadow-lg animate-pulse">
          Every Second is a Disaster
        </h2>
        <p className="mt-4 text-2xl text-white font-semibold font-heading animate-pulse">
          Act now or their minds could vanish forever.
        </p>
      </div>

      {/* Fiery Cards Layout */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-14 max-w-4xl mx-auto">
          {problemSlides.map((slide, i) => (
            <div
              key={i}
              className="problem-slide w-full max-w-[900px] mx-auto"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div
                className={`relative w-full rounded-3xl border-4 border-yellow-400/30 bg-gradient-to-br ${slide.gradient} backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(255,51,51,0.3)] transition-all duration-500 hover:scale-[1.06]`}
              >

                {/* Fiery Impact Indicator */}
                <div className="absolute top-5 right-5 flex gap-1">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-ping" />
                  <div className="w-6 h-6 bg-red-600 rounded-full opacity-40 animate-pulse delay-200" />
                  <div className="w-5 h-5 bg-indigo-400 rounded-full opacity-50 animate-ping delay-400" />
                </div>
                {/* Meteoric Border at Bottom */}
                <div className="absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-r from-red-700 via-yellow-400 to-indigo-800 opacity-35 blur-sm z-10" />

                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-72 md:h-80 lg:h-96 object-cover object-center rounded-t-3xl border-b-4 border-yellow-500/40"
                  loading="lazy"
                />

                {/* Extreme Content */}
                <div className="p-8 md:p-10 bg-black/80">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-600 to-indigo-700 border border-red-700 text-white font-bold text-base uppercase tracking-widest shadow-lg">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-black tracking-tight drop-shadow-lg animate-pulse">
                    {slide.title}
                  </h3>

                  {/* Highlight */}
                  <p className="mt-3 font-heading text-xl md:text-2xl lg:text-3xl text-red-600 bg-gradient-to-r from-yellow-300 via-red-600 to-indigo-800 bg-clip-text text-transparent font-bold drop-shadow-lg animate-pulse">
                    {slide.highlight}
                  </p>

                  {/* Description */}
                  <p className="mt-5 font-body text-lg md:text-xl text-gray-100 max-w-2xl font-bold border-l-4 border-yellow-400 pl-5">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action - Extreme Urgency */}
      <div className="relative z-10 text-center px-4 mt-16">
  <div className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer select-none">
    Act Now — Protect Their Future &#x1F6A8;
  </div>
</div>
    </section>
  );
};

export default Problem;
