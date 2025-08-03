import BentoTilt from "../components/ui/games/BentoTilt";
import BentoCard from "../components/ui/games/BentoCard";
import { TiStarFullOutline } from "react-icons/ti";

// Games section showcasing all educational games
const GamesSection = () => (
  <section id="games" className="bg-background">
    <div className="container mx-auto px-3 md:px-10">
      
      {/* Section header */}
      <div className="px-5 py-28">
        <p className="font-body text-lg text-text">Explore Our Games</p>
        <p className="max-w-md font-body text-lg text-secondary-text opacity-70">
          Dive into a world of fun and learning. Each game is designed to boost
          core cognitive skills while your child plays.
        </p>
      </div>

      {/* Featured game */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/videos/object-matching.mp4"
          title={<>Object<br/>Matching</>}
          description="Enhances visual recognition and categorization skills."
        />
      </BentoTilt>

      {/* Game grid */}
      <div className="grid h-auto w-full grid-cols-2 grid-rows-3 gap-7 md:h-[135vh]">
        
        <BentoTilt className="bento-tilt_1 border-hsla row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/videos/math-puzzles.mp4"
            title={<>Math<br/>Puzzles</>}
            description="Makes math fun with engaging puzzles."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 border-hsla row-span-1">
          <BentoCard
            src="/videos/pattern-recognition.mp4"
            title={<>Pattern<br/>Recognition</>}
            description="Develops logical reasoning by identifying patterns."
          />
        </BentoTilt>

        {/* Teaser card */}
        <BentoTilt className="bento-tilt_2 border-hsla">
          <div className="flex size-full flex-col justify-between bg-card p-5">
            <h1 className="bento-title font-heading max-w-64 text-text">
              M<b>o</b>re Ga<b>m</b>es co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiStarFullOutline className="m-5 scale-[5] self-end text-primary" />
          </div>
        </BentoTilt>

      </div>
    </div>
  </section>
);

export default GamesSection;
