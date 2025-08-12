import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  useGSAP(() => {
    // GSAP: Animate hero text entrance
    gsap.from(".hero-element", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });

    // GSAP: Animate the scroll down prompt to loop
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
        delay: 2,
      }
    );
  }, []);

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      {/* ============== BACKGROUND VIDEO ============== */}
      <video
        src="/videos/home-video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* ============== OVERLAY ============== */}
      <div className="absolute inset-0 z-10 bg-background/70" />

      {/* ============== CENTERED CONTENT ============== */}
      <div className="relative z-30 flex-center h-full flex-col text-center">
        <div className="max-w-4xl px-4">
          <h1 className="hero-element font-heading text-5xl font-bold uppercase text-text sm:text-6xl md:text-7xl drop-shadow-[0_0_25px_rgba(31,111,235,0.45)]">
            Turning Screen Time Into <span className="bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">Skill Time</span>
          </h1>
          <p className="hero-element mx-auto mt-4 max-w-2xl font-body text-base text-secondary-text md:text-xl">
            Chizel transforms passive screen time into an active, playful learning experience — set among the stars. Every scroll unlocks a new galaxy of growth.
          </p>
        </div>
      </div>

      {/* ============== SCROLL PROMPT ============== */}
      <div className="scroll-prompt absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 font-ui text-sm text-secondary-text">
          <span>Scroll for your space journey</span>
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Home;