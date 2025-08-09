import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../components/common/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  useGSAP(() => {
    // A clean, simple timeline is all we need now.
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

    // Animate the clip-path element to a stable 100svh height.
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100svh", // ✨ FIX: Use stable small viewport height
      borderRadius: 0,
    });

    // GSAP's ScrollTrigger automatically handles refreshing on resize,
    // so the manual event listeners are not required.
  }, []); // Empty dependency array is fine here.

  return (
    // FIX: Using svh for min-height to ensure the top section is also stable.
    <div id="about" className="min-h-screen w-screen bg-background">
      {/* Text Content Block */}
      <div className="relative flex min-h-[60svh] md:min-h-[50vh] flex-col justify-end items-center gap-5 px-4 pb-16 md:pb-8">
        <p className="font-body text-sm uppercase text-secondary-text md:text-[20px]">
          "Smart Play for Growth"
        </p>

        <AnimatedTitle
          title="Expl<b>o</b>re, learn <br /> and gr<b>o</b>w with Chizel"
          containerClass="mt-5 !text-text text-center"
        />

        <div className="about-subtext font-body text-text text-center hidden sm:block">
          <p>Embark on a Chizel adventure!</p>
          <p className="text-secondary-text mt-2">
            Explore games that spark learning and imagination.
            <br />
            Dive into puzzles, colors, and curious challenges.
          </p>
        </div>
      </div>

      {/* GSAP Scroll-Animated Image Section */}
      {/* FIX: Using h-[100svh] to give the pinning container a stable height. */}
      <div className="h-[100svh] w-screen" id="clip-container">
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