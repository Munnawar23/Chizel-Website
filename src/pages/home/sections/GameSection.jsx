import BentoTilt from "@components/common/BentoTilt";
import BentoCard from "@components/features/games/BentoCard";
import StatCard from "@components/features/games/StatCard"; 

import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup, FaChild, FaUsers, FaRocket, FaGamepad, FaBrain } from "react-icons/fa";

const impactStats = [
  { percentage: "+62%", label: "Memory Mastery" },
  { percentage: "+47%", label: "Problem Solving" },
  { percentage: "+53%", label: "Laser Logic" },
  { percentage: "+38%", label: "Social Confidence" },
];

const GameSection = () => (
  <section id="games" className="bg-background py-12 md:py-16 pb-20 md:pb-24">
    <div className="container mx-auto px-4 md:px-8">

      {/* ============== SECTION HEADER ============== */}
      <div className="text-center flex flex-col items-center mb-6 space-y-4 md:space-y-6">
        <p className="font-ui text-lg text-primary uppercase tracking-wider">Explore Our Games</p>
        <h1 className="font-heading text-5xl md:text-6xl text-text">A Universe of Fun & Learning</h1>
        <p className="max-w-2xl font-body text-lg text-secondary-text opacity-80">
          Dive into a world of fun and learning. Each game is designed to boost
          core cognitive skills while your child plays.
        </p>
      </div>

      {/* ============== IMPACT STATS CARDS ============== */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-12">
        {impactStats.map((stat) => (
          <StatCard key={stat.label} percentage={stat.percentage} label={stat.label} />
        ))}
      </div>

      {/* ============== BENTO GRID (Hyped Version) ============== */}
      <div className="grid w-full auto-rows-[22rem] gap-5 md:gap-6">
        <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up">
          <BentoCard
            icon={<TiPuzzle />}
            title={<>🧩 Next-Level<br />Numbers</>}
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Crack today’s puzzles… but miss tomorrow, and you’ll never catch up. <br />
                <strong>Fall behind once, stay behind forever.</strong>
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="100">
          <BentoCard
            icon={<TiChartLine />}
            title={<>📈 Hidden<br />Codes Await</>}
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Spot the patterns now—before new ones appear that only the sharpest will see.
                <br /><em>Blink… and you’ll miss it.</em>
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt className="col-span-1" data-aos="fade-up" data-aos-delay="200">
          <BentoCard
            icon={<TiLightbulb />}
            title={<>🧠 Memory<br />Under Fire</>}
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Train your memory today… or risk being left behind when the real tests arrive.
                <br /><strong>Memories unlock magic.</strong>
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="300">
          <BentoCard
            icon={<FaLayerGroup />}
            title={<>⚡ Speed is<br />Just the Start</>}
            description={
              <span className="block font-body text-base md:text-lg text-text">
                Think you’re fast? The next wave is coming… and hesitation means elimination.
              </span>
            }
          />
        </BentoTilt>

        <BentoTilt className="col-span-1 md:col-span-3">
          <div className="flex h-full flex-col justify-center items-center text-center bg-card border-hsla rounded-xl p-6 gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-badge-bg/10 animate-pulse" />
            <h3 className="font-heading text-4xl md:text-6xl font-extrabold text-text relative z-10 tracking-wide">
              M<b>o</b>re Big Things Co<b>m</b>ing S<b>o</b>on
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
      <div className="mt-12 md:mt-16 text-center space-y-6 md:space-y-8">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text">
          What We Offer
        </h2>
        <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto">
          Tailored experiences for every member of the Chizel family. From playful learning to strategic growth,
          we've got something special for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GameSection;
