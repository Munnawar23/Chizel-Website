import BentoTilt from "@components/common/BentoTilt";
import BentoCard from "@components/features/games/BentoCard";
import {
  TiStarFullOutline,
  TiPuzzle,
  TiChartLine,
  TiLightbulb,
} from "react-icons/ti";
import { FaLayerGroup,} from "react-icons/fa";

const GameSection = () => (
  <section id="games" className="bg-background py-12 md:py-16 pb-20 md:pb-24">
    <div className="container mx-auto px-4 md:px-8">
      {/* ============== SECTION HEADER ============== */}
      <div className="text-center flex flex-col items-center mb-12 space-y-4 md:space-y-6">
        <p className="font-ui text-lg text-primary uppercase tracking-wider">
          Explore Our Games
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-text">
          A Universe of Fun & Learning
        </h1>
        <p className="max-w-2xl font-body text-lg text-secondary-text opacity-80">
          Dive into a world of fun and learning. Each game is designed to boost
          core cognitive skills while your child plays.
        </p>
      </div>

      <div className="text-center mb-8">
        <h3 className="font-heading text-3xl md:text-4xl text-accent mb-3">
          Proven Results That Matter
        </h3>
        <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto">
          Our games don't just entertain — they transform. Here's how much these
          games literally help your child grow:
        </p>
      </div>
      <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +62%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">
            Memory Mastery
          </div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +47%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">
            Problem Solving
          </div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +53%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">
            Laser Logic
          </div>
        </div>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
          <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
            +38%
          </div>
          <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">
            Social Confidence
          </div>
        </div>
      </div>

      <div className="grid w-full auto-rows-[22rem] gap-5 md:gap-6">
        <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up">
          <BentoCard
            icon={<TiPuzzle />}
            title={
              <>
                🧩 Play That
                <br />
                Teaches
              </>
            }
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Smart challenges that grow focus, memory, and logic.
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt
          className="col-span-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <BentoCard
            icon={<TiChartLine />}
            title={
              <>
                🤖 Confidence in
                <br />
                Conversation
              </>
            }
            description={
              <span className="block font-body text-base md:text-lg text-text">
                An AI buddy that boosts social skills, conversation, and
                confident choices.
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt
          className="col-span-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <BentoCard
            icon={<TiLightbulb />}
            title={
              <>
                🌍 Moderated
                <br />
                Global Community
              </>
            }
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Where children spark ideas, share skills, and grow into
                confident creators safely.
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt
          className="col-span-1 md:col-span-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <BentoCard
            icon={<FaLayerGroup />}
            title={
              <>
                🎖Inclusive
                <br />
                by Design
              </>
            }
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Accessible learning for all children — because learning is a
                right, not a privilege.
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt className="col-span-1 md:col-span-3">
          <div className="flex h-full flex-col justify-center items-center text-center bg-card border-hsla rounded-xl p-6 gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-badge-bg/10 animate-pulse" />
            <h3 className="font-heading text-4xl md:text-6xl font-extrabold text-text relative z-10 tracking-wide">
              More Big Things Coming Soon!
            </h3>
            <TiStarFullOutline className="text-6xl text-primary relative z-10 animate-bounce" />
            <p className="font-body text-lg md:text-2xl text-secondary-text relative z-10 italic">
              Bigger. Smarter. Fiercer.
              <br />
              <span className="text-primary font-semibold">
                The next wave is closer than you think.
              </span>
            </p>
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default GameSection;
