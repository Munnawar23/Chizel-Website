import BentoTilt from "../components/common/BentoTilt";
import BentoCard from "../components/common/BentoCard";
import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup, FaGamepad, FaBrain, FaChild } from "react-icons/fa";

/**
 * The main "Games" section of the website, showcasing different games
 * in a bento grid layout with interactive tilt effects.
 */
const Games = () => (
  <section id="games" className="bg-background pb-52">
    <div className="container mx-auto px-3 md:px-10">

      {/* Section Header */}
      <div className="px-5 py-32">
        <p className="font-body text-lg text-text">Explore Our Games</p>
        <p className="max-w-md font-body text-lg text-secondary-text opacity-70">
          Dive into a world of fun and learning. Each game is designed to boost
          core cognitive skills while your child plays.
        </p>
      </div>

      {/* Main Feature Card (Chizel Overview) */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <div className="relative size-full overflow-hidden bg-card">
          {/* Content */}
          <div className="relative z-10 flex size-full flex-col justify-between p-4 md:p-8 text-text">
            <div className="flex flex-col items-center text-center">
              {/* Icons showcasing different game types */}
              <div className="flex gap-4 md:gap-4 mb-4 md:mb-6">
                <FaGamepad className="text-4xl md:text-6xl text-primary" />
                <FaBrain className="text-4xl md:text-6xl text-primary" />
                <FaChild className="text-4xl md:text-6xl text-primary" />
              </div>
              
              <h1 className="font-heading text-xl md:text-4xl lg:text-5xl mb-3 md:mb-4 leading-tight">
                Educational Games for Every Child
              </h1>
              
              <p className="max-w-2xl font-body text-sm md:text-lg text-secondary-text leading-relaxed">
                Chizel offers a comprehensive collection of cognitive development games. 
                From pattern recognition to memory challenges, each game is scientifically 
                designed to enhance your child's learning abilities while keeping them engaged and entertained.
              </p>
            </div>

            {/* Bottom section with key features */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6">
              <div className="flex items-center gap-1 md:gap-2 bg-primary/20 px-2 md:px-3 py-1 rounded-full">
                <TiPuzzle className="text-primary text-sm md:text-base" />
                <span className="text-xs md:text-sm">Problem Solving</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-primary/20 px-2 md:px-3 py-1 rounded-full">
                <TiLightbulb className="text-primary text-sm md:text-base" />
                <span className="text-xs md:text-sm">Memory Training</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-primary/20 px-2 md:px-3 py-1 rounded-full">
                <TiChartLine className="text-primary text-sm md:text-base" />
                <span className="text-xs md:text-sm">Pattern Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </BentoTilt>

      {/* Improved Bento Grid Layout */}
      <div className="grid h-auto w-full gap-7">
        
        {/* Top Row - Two Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Math Puzzles */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<TiPuzzle />}
              title={<>Math<br/>Puzzles</>}
              description="Makes math fun with engaging puzzles that improve problem-solving and numerical skills."
            />
          </BentoTilt>

          {/* Pattern Recognition */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<TiChartLine />}
              title={<>Pattern<br/>Recognition</>}
              description="Develops logical reasoning by identifying and completing complex patterns."
            />
          </BentoTilt>
        </div>

        {/* Bottom Row - Three Cards (1 per row on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Memory Games */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<TiLightbulb />}
              title={<>Memory<br/>Games</>}
              description="Boosts short-term memory and concentration with fun matching challenges."
            />
          </BentoTilt>

          {/* Object Matching (moved from main card, no video) */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<FaLayerGroup />}
              title={<>Object<br/>Matching</>}
              description="Enhances visual recognition and categorization skills by matching related objects."
            />
          </BentoTilt>

          {/* Coming Soon Static Card */}
          <BentoTilt className="bento-tilt_2 border-hsla h-64 md:h-80">
            <div className="flex size-full flex-col justify-between bg-card p-4 md:p-5">
              <h1 className="font-heading text-4xl md:text-xl lg:text-5xl text-text leading-tight">
                M<b>o</b>re Games<br/>Co<b>m</b>ing S<b>o</b>on
              </h1>
              <TiStarFullOutline className="mt-auto self-end text-3xl md:text-4xl lg:text-5xl text-primary" />
            </div>
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Games;