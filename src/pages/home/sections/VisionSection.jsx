import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "@components/common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-container",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []);

  return (
    <div id="vision" className="min-h-screen w-screen bg-background">
      {/* TOP TEXT CONTENT */}
      <div className="relative flex min-h-[40vh] md:min-h-[40vh] flex-col justify-end items-center gap-4 px-4 pb-12 text-center">
        <p className="font-ui text-xl uppercase text-secondary-text tracking-wider md:text-2xl">
          "Smart Play for Growth"
        </p>

        <AnimatedTitle
          title="Expl<b>o</b>re, learn <br /> and gr<b>o</b>w with Chizel"
          containerClass="!text-text"
        />

        <div className="about-subtext font-body text-text hidden sm:flex flex-col items-center gap-2">
          <p>Embark on a Chizel adventure!</p>
          <p className="text-secondary-text">
            Explore games that spark learning and imagination.
            <br />
            Dive into puzzles, colors, and curious challenges.
          </p>
        </div>
      </div>

      {/* GSAP ANIMATED IMAGE SECTION */}
      <div id="clip-container" className="h-[100vh] w-screen relative overflow-hidden">
        <div className="mask-clip-path about-image absolute inset-0">
          <img
            src="/images/vision-image.webp"
            alt="Kids playing educational games on a tablet"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
