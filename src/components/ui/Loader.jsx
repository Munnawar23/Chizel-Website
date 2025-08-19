import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  const loaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  // All animation and progress logic is preserved exactly as it was.
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.random() * 10;
        return Math.min(prev + increment, 100);
      });
    }, 150);
    return () => clearInterval(progressInterval);
  }, []);

  useGSAP(
    () => {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(progressTextRef.current, {
        textContent: Math.round(progress),
        duration: 0.5,
        ease: "power2.out",
        snap: { textContent: 1 },
      });
      if (progress >= 100) {
        const exitTl = gsap.timeline({
          delay: 0.8,
          onComplete: () => setIsLoading(false),
        });
        exitTl
          .to(".anim-element", {
            y: -40,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in",
          })
          .to(
            loaderRef.current,
            { yPercent: -100, duration: 1.2, ease: "expo.inOut" },
            ">-0.2"
          );
      }
    },
    { dependencies: [progress, setIsLoading], scope: loaderRef }
  );

  useGSAP(
    () => {
      gsap.to(".mascot", {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
      gsap.to(".robot-eye", {
        scaleY: 0.1,
        repeat: -1,
        repeatDelay: 2.5,
        yoyo: true,
        duration: 0.08,
        ease: "power1.inOut",
      });
      gsap.to(".antenna-light", {
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "sine.inOut",
      });
      gsap.to(".bg-shape", {
        y: (i) => (i % 2 === 0 ? -15 : 15),
        x: (i) => (i % 2 === 0 ? 10 : -10),
        rotation: (i) => (i % 2 === 0 ? 10 : -10),
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    },
    { scope: loaderRef }
  );

  return (
    // ============== LOADER CONTAINER ==============
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex-center flex-col gap-3 bg-overlay text-text"
    >
      {/* Background shapes using dark theme colors */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="bg-shape absolute top-[20%] left-[10%] w-6 h-6 bg-primary rounded-full" />
        <div className="bg-shape absolute top-[70%] left-[25%] w-8 h-8 bg-badge-bg rounded-full" />
        <div className="bg-shape absolute top-[15%] right-[15%] w-5 h-5 bg-accent rounded-lg rotate-45" />
        <div className="bg-shape absolute top-[80%] right-[20%] w-7 h-7 bg-primary-alpha rounded-lg -rotate-45" />
      </div>

      <div className="relative z-10 text-center">
        {/* ============== MASCOT ============== */}
        <div className="mascot anim-element mb-4">
          <div className="w-20 h-20 mx-auto relative">
            <div className="w-16 h-16 bg-accent border-2 border-accent/50 rounded-xl mx-auto relative shadow-lg">
              <div className="robot-eye absolute top-5 left-4 w-3 h-3 bg-white rounded-full" />
              <div className="robot-eye absolute top-5 right-4 w-3 h-3 bg-white rounded-full" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-l-2 border-r-2 border-background rounded-b-full" />
            </div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-secondary-text" />
            <div className="antenna-light absolute -top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>

        {/* ============== TEXT CONTENT ============== */}
        <div className="anim-element space-y-1 px-4">
          <h1 className="text-3xl md:text-4xl font-heading uppercase font-bold">
            Get Ready — We’re Teleporting You Into Space
          </h1>
          <p className="font-body text-secondary-text text-xl">
            Brace yourself for your journey into the world of Chizel
          </p>
        </div>

        {/* ============== PROGRESS BAR ============== */}
        <div className="anim-element w-60 mx-auto mt-6 px-4">
          <div className="flex justify-end text-sm text-secondary-text mb-1 font-ui">
            <span ref={progressTextRef}>0</span>%
          </div>
          <div className="w-full h-2 bg-card border border-text/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
