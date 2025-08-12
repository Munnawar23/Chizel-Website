import BentoTilt from "@components/common/BentoTilt";
import BentoCard from "@components/features/games/BentoCard";
import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup, FaGamepad, FaBrain, FaChild } from "react-icons/fa";

const GameSection = () => (
  <section id="games" className="bg-background pb-8 sm:pb-24">
    <div className="container mx-auto px-4 md:px-8 mt-16 sm:mt-0">

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
              <div className="flex gap-4 md:gap-6 mb-4">
                <FaGamepad className="text-4xl md:text-6xl text-primary" />
                <FaBrain className="text-4xl md:text-6xl text-primary" />
                <FaChild className="text-4xl md:text-6xl text-primary" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
                Games for Every Young Mind
              </h2>
              <p className="max-w-2xl font-body text-sm md:text-base text-secondary-text leading-relaxed">
                Chizel offers a comprehensive collection of cognitive development games. From pattern recognition to memory challenges, each is scientifically designed to enhance learning while keeping them entertained.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                <TiPuzzle className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                <TiLightbulb className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Memory Training</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                <TiChartLine className="text-primary" />
                <span className="font-ui text-xs md:text-sm">Pattern Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </BentoTilt>

      {/* ============== BENTO GRID ============== */}
      <div className="grid w-full auto-rows-[22rem] gap-5">
        <BentoTilt className="col-span-1 md:col-span-2">
          <BentoCard
            icon={<TiPuzzle />}
            title={<>Math<br/>Puzzles</>}
            description="Makes math fun with engaging puzzles that improve problem-solving and numerical skills."
          />
        </BentoTilt>
        <BentoTilt className="col-span-1">
          <BentoCard
            icon={<TiChartLine />}
            title={<>Pattern<br/>Recognition</>}
            description="Develops logical reasoning by identifying and completing complex patterns."
          />
        </BentoTilt>
        <BentoTilt className="col-span-1">
          <BentoCard
            icon={<TiLightbulb />}
            title={<>Memory<br/>Games</>}
            description="Boosts short-term memory and concentration with fun matching challenges."
          />
        </BentoTilt>
        <BentoTilt className="col-span-1 md:col-span-2">
          <BentoCard
            icon={<FaLayerGroup />}
            title={<>Object<br/>Matching</>}
            description="Enhances visual recognition and categorization skills by matching related objects."
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

export default GameSection;