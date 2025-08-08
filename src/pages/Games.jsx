import BentoTilt from "../components/common/BentoTilt";
import BentoCard from "../components/common/BentoCard";
import { TiStarFullOutline, TiPuzzle, TiChartLine, TiLightbulb } from "react-icons/ti";
import { FaLayerGroup } from "react-icons/fa";

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

      {/* Main Feature Card (Object Matching - untouched) */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/videos/object-matching.webm"
          title={<>Object<br/>Matching</>}
          description="Enhances visual recognition and categorization skills by matching related objects."
        />
      </BentoTilt>

      {/* Improved Bento Grid Layout */}
      <div className="grid h-auto w-full gap-7">
        
        {/* Top Row - Two Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Math Puzzles */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<TiPuzzle />}
              title={<>Math Puzzles</>}
              description="Makes math fun with engaging puzzles that improve problem-solving and numerical skills."
            />
          </BentoTilt>

          {/* Pattern Recognition */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-80">
            <BentoCard
              icon={<TiChartLine />}
              title={<>Pattern Recognition</>}
              description="Develops logical reasoning by identifying and completing complex patterns."
            />
          </BentoTilt>
        </div>

        {/* Bottom Row - Three Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {/* Memory Games */}
          <BentoTilt className="bento-tilt_1 border-hsla h-64 md:h-72">
            <BentoCard
              icon={<TiLightbulb />}
              title={<>Memory<br/>Games</>}
              description="Boosts short-term memory and concentration with fun matching challenges."
            />
          </BentoTilt>

          {/* Coming Soon Static Card */}
          <BentoTilt className="bento-tilt_2 border-hsla h-64 md:h-72">
            <div className="flex size-full flex-col justify-between bg-card p-5">
              <h1 className="bento-title font-heading max-w-64 text-text">
                M<b>o</b>re Ga<b>m</b>es co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiStarFullOutline className="m-5 scale-[5] self-end text-primary" />
            </div>
          </BentoTilt>

          {/* Chizel Montage */}
          <BentoTilt className="bento-tilt_2 border-hsla h-64 md:h-72">
            <BentoCard
              icon={<FaLayerGroup />}
              title={<>Chizel<br/>Montage</>}
              description="A sneak peek into what we're building next for your child's learning journey."
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Games;