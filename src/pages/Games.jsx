import BentoTilt from "../components/common/BentoTilt";
import BentoCard from "../components/features/games/BentoCard";
import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup, FaGamepad, FaBrain, FaChild, FaUsers, FaChartLine, FaRocket } from "react-icons/fa";

const Games = () => (
  <section id="games" className="bg-background pb-16 sm:pb-24">
    <div className="container mx-auto px-4 md:px-8">

      {/* ============== SECTION HEADER ============== */}
      <div className="py-16 sm:py-24 text-center">
        <p className="font-ui text-lg text-primary uppercase tracking-wider">Explore Our Games</p>
        <h1 className="font-heading text-5xl md:text-6xl text-text mt-2">A Universe of Fun & Learning</h1>
        <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-secondary-text opacity-80">
          Dive into a world of fun and learning. Each game is designed to boost
          core cognitive skills while your child plays.
        </p>
      </div>

      {/* ============== MAIN FEATURE CARD ============== */}
      <BentoTilt className="border-hsla relative mb-5 h-auto w-full overflow-hidden rounded-xl">
        <div className="relative size-full overflow-hidden bg-card p-6 md:p-8">
          <div className="relative z-10 flex size-full flex-col justify-between items-center text-center text-text">
            <div className="flex flex-col items-center">
              {/* Restored larger icon sizes */}
              <div className="flex gap-4 md:gap-6 mb-4 will-change-transform">
                <FaGamepad className="text-4xl md:text-6xl text-primary drop-shadow" />
                <FaBrain className="text-4xl md:text-6xl text-primary drop-shadow" />
                <FaChild className="text-4xl md:text-6xl text-primary drop-shadow" />
              </div>
              {/* Restored larger heading size */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
                INTREACT WITH CHIZEL
              </h2>
              <a
                href="https://rajvansh-1.github.io/ChizelVerse/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 font-body text-sm font-extrabold uppercase text-badge-text shadow-[0_0_20px_rgba(31,111,235,0.45)]"
              >
                <span className="relative z-10 tracking-wider">TRY ME</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">

            </div>
          </div>
        </div>
      </BentoTilt>

      {/* ============== IMPACT STATS CARDS ============== */}
      <div className="text-center mb-8">
        <h3 className="font-heading text-3xl md:text-4xl text-text mb-3">
          Proven Results That Matter
        </h3>
        <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto">
          Our games don't just entertain — they transform. Here's how much these games literally help your child grow:
        </p>
      </div>
      <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +62%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">Memory Mastery</div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +47%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">Problem Solving</div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +53%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">Laser Logic</div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +38%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">Social Confidence</div>
        </div>
      </div>

      {/* ============== BENTO GRID (Hyped Version) ============== */}
<div className="grid w-full auto-rows-[22rem] gap-5">
  <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up">
    <BentoCard
      icon={<TiPuzzle />}
      title={<>🧩 Play That<br />Teaches</>}
      description={
        <>
          <span className="block font-body text-base md:text-lg text-text">
            Smart challenges that grow focus, memory, and logic.
          </span>
        </>
      }
    />
  </BentoTilt>

  <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="100">
    <BentoCard
      icon={<TiChartLine />}
      title={<>🤖 Confidence in<br />Conversation</>}
      description={
        <>
          <span className="block font-body text-base md:text-lg text-text">
            An AI buddy that boosts social skills, conversation, and confident choices.
          </span>
        </>
      }
    />
  </BentoTilt>

  <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="200">
    <BentoCard
      icon={<TiLightbulb />}
      title={<>🌍 Moderated<br />Global Community</>}
      description={
        <>
          <span className="block font-body text-base md:text-lg text-text">
            Where children spark ideas, share skills, and grow into confident creators safely.
          </span>
        </>
      }
    />
  </BentoTilt>

  <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="300">
    <BentoCard
      icon={<FaLayerGroup />}
      title={<> 🎖️Inclusive<br />by Design</>}
      description={
        <>
          <span className="block font-body text-base md:text-lg text-text">
            Accessible learning for all children — because learning is a right, not a privilege.
          </span>
        </>
      }
    />
  </BentoTilt>

  {/* Keep the "More Games Coming Soon" card unchanged */}
  <BentoTilt className="col-span-1 md:col-span-3">
    <div className="flex size-full flex-col justify-center items-center text-center bg-card border-hsla rounded-xl p-6 gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-badge-bg/10 animate-pulse" />
      <h3 className="font-heading text-4xl md:text-6xl font-extrabold text-text relative z-10 tracking-wide">
  More Big Things Coming Soon!
</h3>

      <TiStarFullOutline className="text-6xl text-primary relative z-10 animate-bounce" />
      <p className="font-body text-lg md:text-2xl text-secondary-text relative z-10 italic">
        Bigger. Smarter. Fiercer.<br />
        <span className="text-primary font-semibold">The next wave is closer than you think.</span>
      </p>
    </div>
  </BentoTilt>
</div>


      {/* ============== WHAT WE OFFER SECTION ============== */}
      <div className="mt-24 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text mb-4">
          What We Offer
        </h2>
        <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto mb-16">
          Tailored experiences for every member of the Chizel family. From playful learning to strategic growth,
          we've got something special for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kids Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-badge-bg/10 border border-white/20 p-8 hover:shadow-[0_0_40px_rgba(31,111,235,0.3)] transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChild className="text-3xl text-white" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">For Kids</h3>
              <p className="font-body text-secondary-text mb-6 leading-relaxed">
                Engaging games that make learning fun. Build critical thinking, memory, and problem-solving skills
                through interactive adventures designed specifically for young minds.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-ui text-sm text-text">Cognitive Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="font-ui text-sm text-text">Fun Learning Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-badge-bg rounded-full" />
                  <span className="font-ui text-sm text-text">Skill Building Games</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parents Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-primary/15 to-badge-bg/10 border border-white/20 p-8 hover:shadow-[0_0_40px_rgba(93,63,211,0.3)] transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">For Parents</h3>
              <p className="font-body text-secondary-text mb-6 leading-relaxed">
                Peace of mind knowing your child is learning while having fun. Track progress, monitor development,
                and be part of your child's educational journey with detailed insights and reports.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="font-ui text-sm text-text">Progress Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-ui text-sm text-text">Development Insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-badge-bg rounded-full" />
                  <span className="font-ui text-sm text-text">Parent Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Investors Card */}
<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-badge-bg/20 via-primary/15 to-accent/10 border border-white/20 p-8 hover:shadow-[0_0_40px_rgba(255,179,71,0.3)] transition-all duration-500 hover:scale-105">
  <div className="absolute inset-0 bg-gradient-to-br from-badge-bg/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="relative z-10 text-center">
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-badge-bg to-primary mb-6 group-hover:scale-110 transition-transform duration-300">
      <FaRocket className="text-3xl text-white" />
    </div>
    <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">For Investors</h3>
    <p className="font-body text-secondary-text mb-6 leading-relaxed">
      Be part of the revolution redefining education for the next generation. <br />
      Chizel is not just another EdTech app — it’s India’s first <strong>AI-powered Skill-Time platform</strong>, 
      built to transform screen time into lifelong growth. 
      The opportunity is massive, the demand is urgent, and the future belongs to those who act first. 
    </p>
    <div className="space-y-3 text-left">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-badge-bg rounded-full" />
        <span className="font-ui text-sm text-text">Category-Creating EdTech</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="font-ui text-sm text-text">Defensible Vision & Innovation</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-accent rounded-full" />
        <span className="font-ui text-sm text-text">Unstoppable Market Growth</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </section>
);

export default Games;