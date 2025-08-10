import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../components/common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  // GSAP logic remains exactly as provided.
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-container",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100svh",
      borderRadius: 0,
    });
  }, []);

  return (
    // ============== ROOT CONTAINER (LIGHT THEME) ==============
    <div id="vision" className="min-h-screen w-screen bg-light-background">
      
      {/* ============== TOP TEXT CONTENT ============== */}
      <div className="relative flex min-h-[60svh] md:min-h-[50vh] flex-col justify-end items-center gap-4 px-4 pb-12 text-center">
        <p className="font-ui text-sm uppercase text-light-secondary-text tracking-wider md:text-base">
          "Smart Play for Growth"
        </p>

        <AnimatedTitle
          title="Expl<b>o</b>re, learn <br /> and gr<b>o</b>w with Chizel"
          // Switched to light theme text colors
          containerClass="!text-light-text"
        />

        {/* This text is positioned absolutely by the 'about-subtext' utility class */}
        <div className="about-subtext font-body text-light-text hidden sm:block">
          <p>Embark on a Chizel adventure!</p>
          <p className="text-light-secondary-text mt-1">
            Explore games that spark learning and imagination.
            <br />
            Dive into puzzles, colors, and curious challenges.
          </p>
        </div>
      </div>

      {/* ============== GSAP ANIMATED IMAGE SECTION ============== */}
      <div id="clip-container" className="h-[100svh] w-screen">
        {/* The 'about-image' and 'mask-clip-path' classes define the initial state for the animation */}
        <div className="mask-clip-path about-image">
          <img
            src="/images/about-background.png"
            alt="Kids playing educational games on a tablet"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;