import BentoTilt from "../components/common/BentoTilt";
import BentoCard from "../components/features/games/BentoCard";
import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup, FaGamepad, FaBrain, FaChild } from "react-icons/fa";

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
                Games for Every Young Mind
              </h2>
              <a
                href="https://rajvansh-1.github.io/ChizelVerse/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 font-body text-sm font-extrabold uppercase text-badge-text shadow-[0_0_20px_rgba(31,111,235,0.45)]"
              >
                <span className="relative z-10 tracking-wider">Try Me</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-1.5 rounded-full border border-white/10">
                <TiPuzzle className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-1.5 rounded-full border border-white/10">
                <TiLightbulb className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Memory Training</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-1.5 rounded-full border border-white/10">
                <TiChartLine className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Pattern Recognition</span>
              </div>
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

      {/* ============== BENTO GRID (Larger rows to accommodate fonts) ============== */}
      <div className="grid w-full auto-rows-[22rem] gap-5">
        <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up">
          <BentoCard
            icon={<TiPuzzle />}
            title={<>
              Math<br />Puzzle
            </>}
            description={
              <>
                <span className="block font-body text-base md:text-lg text-text">
                  Outsmart the toughest numbers, crush every challenge.
                </span>
                <span className="block mt-1 font-heading text-xl md:text-2xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent font-extrabold tracking-wide animate-shine">
                  Unlock <span className="drop-shadow">+47% Sharper Problem-Solving</span> — instantly!
                </span>
              </>
            }
          />
        </BentoTilt>
        <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="100">
          <BentoCard
            icon={<TiChartLine />}
            title={<>
              Pattern<br />Recognition
            </>}
            description={
              <>
                <span className="block font-body text-base md:text-lg text-text">
                  Expose the hidden codes no one else sees.
                </span>
                <span className="block mt-1 font-heading text-xl md:text-2xl bg-gradient-to-r from-accent via-primary to-badge-bg bg-clip-text text-transparent font-extrabold tracking-wide animate-shine">
                  Gain <span className="drop-shadow">+53% Laser-Focused Logic</span> — before they do!
                </span>
              </>
            }
          />
        </BentoTilt>
        <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="200">
          <BentoCard
            icon={<TiLightbulb />}
            title={<>
              Memory<br />Games
            </>}
            description={
              <>
                <span className="block font-body text-base md:text-lg text-text">
                  Turn your brain into a recall machine.
                </span>
                <span className="block mt-1 font-heading text-xl md:text-2xl bg-gradient-to-r from-badge-bg via-accent to-primary bg-clip-text text-transparent font-extrabold tracking-wide animate-shine">
                  Boost <span className="drop-shadow">+62% Memory Mastery</span> — starting now!
                </span>
              </>
            }
          />
        </BentoTilt>
        <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="300">
          <BentoCard
            icon={<FaLayerGroup />}
            title={<>
              Object<br />Matching
            </>}
            description={
              <>
                <span className="block font-body text-base md:text-lg text-text">
                  Spot the difference in record time.
                </span>
                <span className="block mt-1 font-heading text-xl md:text-2xl bg-gradient-to-r from-primary via-badge-bg to-accent bg-clip-text text-transparent font-extrabold tracking-wide animate-shine">
                  Upgrade to <span className="drop-shadow">+58% Eagle-Eye Precision</span> — don’t blink!
                </span>
              </>
            }
          />
        </BentoTilt>
        <BentoTilt className="col-span-1 md:col-span-3">
          <div className="flex size-full flex-col justify-center items-center text-center bg-card border-hsla rounded-xl p-6 gap-4">
            {/* Restored larger font size */}
            <h3 className="font-heading text-4xl md:text-6xl font-bold text-text">
              M<b>o</b>re Games Co<b>m</b>ing S<b>o</b>on
            </h3>
            <TiStarFullOutline className="text-6xl text-primary" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Games;