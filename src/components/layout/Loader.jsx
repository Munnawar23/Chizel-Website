import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Accept setIsLoading as a prop from the parent App.jsx
const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);
  
  const loaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  // NO scroll lock useEffect needed here anymore. The parent handles it.

  // This effect simulates the loading progress data (no changes here)
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
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

  // GSAP animation hook
  useGSAP(() => {
    // Animate progress bar (no changes here)
    gsap.to(progressBarRef.current, { width: `${progress}%`, duration: 0.4, ease: "power2.out" });
    gsap.to(progressTextRef.current, { textContent: Math.round(progress), duration: 0.4, ease: "power2.out", snap: { textContent: 1 } });

    // When loading is complete, run the exit animation
    if (progress >= 100) {
      const exitTl = gsap.timeline({
        delay: 0.8, 
        // THE CRITICAL CHANGE: When the exit animation is complete,
        // call the function from the parent to set isLoading to false.
        onComplete: () => setIsLoading(false),
      });

      exitTl
        .to(".anim-element", { y: -50, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.in" })
        .to(loaderRef.current, { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, ">-0.2");
    }

  }, { dependencies: [progress, setIsLoading], scope: loaderRef });

  // Looping animations (no changes here)
  useGSAP(() => {
    gsap.to(".mascot", { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
    gsap.to(".robot-eye", { scaleY: 0.1, repeat: -1, repeatDelay: 2.5, yoyo: true, duration: 0.08, ease: "power1.inOut" });
    gsap.to(".antenna-light", { scale: 1.4, opacity: 0.5, repeat: -1, yoyo: true, duration: 0.8, ease: "sine.inOut" });
    gsap.to(".bg-shape", { y: (i) => (i % 2 === 0 ? -20 : 20), x: (i) => (i % 2 === 0 ? 15 : -15), rotation: (i) => (i % 2 === 0 ? 10 : -10), repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut", stagger: 0.5 });
  }, { scope: loaderRef });

  // We no longer need `if (isFinished) return null;` because the parent handles the state.
  // The Loader just animates itself out of view.
  
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex-center flex-col gap-4 bg-[#dfdff0] text-gray-800"
    >
      {/* All JSX content remains the same */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="bg-shape absolute top-[20%] left-[10%] w-6 h-6 bg-red-400 rounded-full" />
            <div className="bg-shape absolute top-[70%] left-[25%] w-8 h-8 bg-yellow-400 rounded-full" />
            <div className="bg-shape absolute top-[15%] right-[15%] w-5 h-5 bg-blue-400 rounded-lg rotate-45" />
            <div className="bg-shape absolute top-[80%] right-[20%] w-7 h-7 bg-green-400 rounded-lg -rotate-45" />
        </div>
        <div className="relative z-10 text-center">
            <div className="mascot anim-element mb-8">
                <div className="w-20 h-20 mx-auto relative">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto relative shadow-lg">
                        <div className="robot-eye absolute top-5 left-4 w-3 h-3 bg-white rounded-full" />
                        <div className="robot-eye absolute top-5 right-4 w-3 h-3 bg-white rounded-full" />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-l-2 border-r-2 border-white rounded-b-full" />
                    </div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-600" />
                    <div className="antenna-light absolute -top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
                </div>
            </div>
            <div className="anim-element space-y-4 px-4">
                <h1 className="text-4xl md:text-5xl font-zentry uppercase">Welcome to Chizel</h1>
                <p className="font-robert-regular text-gray-600 text-lg">Getting the fun ready...</p>
            </div>
            <div className="anim-element w-64 mx-auto mt-8 px-4">
                <div className="flex justify-end text-sm text-gray-600 mb-2 font-mono">
                    <span ref={progressTextRef}>0</span>%
                </div>
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                    <div ref={progressBarRef} className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Loader;