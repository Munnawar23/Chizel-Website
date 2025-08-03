// src/components/ui/LoadingScreen.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    // A dummy object to animate the progress value from 0 to 100
    const progressData = { value: 0 };

    // Master timeline for the entire loading sequence
    const tl = gsap.timeline({
      // This is the crucial callback that tells the HeroSection we're done
      onComplete: onComplete,
    });

    // 1. Animate the main text into view
    tl.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
    // 2. Animate the progress bar and the percentage text simultaneously
    .to(progressData, {
      value: 100,
      duration: 2.5, // A bit longer for dramatic effect
      ease: "power2.out",
      onUpdate: () => {
        // As GSAP animates the value, we update the React state
        setProgress(Math.round(progressData.value));
      },
    }, "-=0.5") // Start this animation slightly before the previous one ends
    // This animates the actual width of the progress bar
    .to(progressRef.current, { 
      width: "100%", 
      duration: 2.5, 
      ease: "power2.out" 
    }, "<") // "<" means start at the same time as the previous animation
    
    // 3. Animate the entire loader screen up and out of view
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power3.inOut",
    }, "+=0.5"); // Add a half-second pause before it slides up
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-background font-black text-2xl">C</span>
        </div>
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-text mb-4">
          Be Ready...
        </h1>
        <p className="text-lg text-secondary-text">Entering the world of Chizel</p>
      </div>

      {/* Progress Bar Area - positioned at the bottom */}
      <div className="absolute bottom-10 left-10 right-10">
        <div className="flex justify-between items-center mb-2 font-body text-secondary-text">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1 bg-card/50 rounded-full">
          <div ref={progressRef} className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;