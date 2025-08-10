import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa"; // Using react-icons for a clean icon

const Home = () => {
  useGSAP(() => {
    // Entrance animation for the main text
    gsap.from(".hero-element", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });

    // Animation for the "scroll down" prompt
    gsap.fromTo(
      ".scroll-prompt",
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2, // Start after the main text has animated in
      }
    );
  }, []);

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      {/* 1. Background Video (z-0) */}
      <video
        src="/videos/warmhole.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* 2. Dark Overlay for Readability (z-10) */}
      <div className="absolute inset-0 z-10 bg-background/70" />
      
      {/* The floating shapes container has been completely removed. */}

      {/* 3. Centered Content Container (z-30) */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          {/* Responsive Main Heading */}
          <h1 className="hero-element font-heading text-5xl font-bold uppercase text-text sm:text-5xl md:text-7xl">
            Turning Screen Time Into <span className="text-primary">Skill Time</span>
          </h1>

          {/* Responsive Subheading */}
          <p className="hero-element mx-auto mt-6 max-w-2xl font-body text-base text-secondary-text md:text-xl">
            Chizel transforms passive screen time into an active, playful
            learning experience. Explore a universe of games designed to spark
            curiosity and build essential skills.
          </p>
        </div>
      </div>

      {/* 4. Scroll Prompt (z-30) */}
      <div className="scroll-prompt absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 font-body text-sm text-secondary-text">
          <span>Scroll for your space journey</span>
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Home;