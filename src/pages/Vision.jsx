import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../components/common/AnimatedTitle";

// ✅ Register ScrollTrigger plugin with GSAP — necessary for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  // ✅ Initialize GSAP animations when component mounts
  useGSAP(() => {
    // 🔧 Get actual viewport height for Chrome mobile fix
    const getViewportHeight = () => {
      return window.innerHeight;
    };

    // 🎯 Create a timeline animation for the clip reveal effect
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-container", // Element that starts the animation
        start: "center center", // Start point: when trigger's center hits viewport's center
        end: "+=800 center", // End point: 800px below start position
        scrub: 0.5, // Sync animation progress with scroll (0.5 = smoothing)
        pin: true, // Pin the container during the animation (stays fixed)
        pinSpacing: true, // Keeps space beneath pinned element so layout doesn't jump
      },
    });

    // 🌀 Animation: Expand the clipped image to full screen with no border radius
    clipAnimation.to(".mask-clip-path", {
      width: "100vw", // Expand to full viewport width
      height: () => `${getViewportHeight()}px`, // ✨ Use actual viewport height for Chrome mobile
      borderRadius: 0, // Remove border radius for a smooth rectangular expansion
    });

    // 🔧 Handle resize/orientation changes
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-background">
      {/* 🟧 Text Content Block */}
      <div className="relative flex min-h-[60vh] md:min-h-[50vh] flex-col justify-end items-center gap-5 px-4 pb-16 md:pb-8">
        <p className="font-body text-sm uppercase text-secondary-text md:text-[20px]">
          "Smart Play for Growth"
        </p>

        {/* 🟪 Animated Title Component */}
        <AnimatedTitle
          title="Expl<b>o</b>re, learn <br /> and gr<b>o</b>w with Chizel"
          containerClass="mt-5 !text-text text-center"
        />

        {/* 🟫 Subtext Below Title - Hidden on mobile devices */}
        <div className="about-subtext font-body text-text text-center hidden sm:block">
          <p>Embark on a Chizel adventure!</p>
          <p className="text-secondary-text mt-2">
            Explore games that spark learning and imagination.
            <br />
            Dive into puzzles, colors, and curious challenges.
          </p>
        </div>
      </div>

      {/* 🟥 GSAP Scroll-Animated Image Section */}
      <div className="h-dvh w-screen" id="clip-container">
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