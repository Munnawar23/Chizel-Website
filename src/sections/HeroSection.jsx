// src/sections/HeroSection.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useCallback, useEffect } from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";
import Button from "../components/common/Button";

// Enhanced floating elements with more variety
const floatingElements = [
  { id: 1, size: "w-20 h-20", position: "top-20 left-16", color: "from-blue-400 to-purple-600", delay: 0 },
  { id: 2, size: "w-32 h-32", position: "top-32 right-20", color: "from-pink-400 to-red-500", delay: 0.5 },
  { id: 3, size: "w-16 h-16", position: "bottom-32 left-32", color: "from-green-400 to-blue-500", delay: 1 },
  { id: 4, size: "w-24 h-24", position: "top-1/2 right-16", color: "from-yellow-400 to-orange-500", delay: 1.5 },
  { id: 5, size: "w-28 h-28", position: "bottom-20 right-32", color: "from-purple-400 to-pink-500", delay: 2 },
  { id: 6, size: "w-12 h-12", position: "top-16 left-1/2", color: "from-cyan-400 to-blue-500", delay: 2.5 },
  { id: 7, size: "w-36 h-36", position: "bottom-16 left-16", color: "from-indigo-400 to-purple-600", delay: 3 },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  // Smooth mouse tracking
  const handleMouseMove = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    // Parallax effect on floating elements
    gsap.utils.toArray(".floating-element").forEach((element, index) => {
      const depth = (index + 1) * 0.1;
      gsap.to(element, {
        x: x * 50 * depth,
        y: y * 50 * depth,
        duration: 1.5,
        ease: "power2.out"
      });
    });

    // Parallax on main content
    gsap.to(".hero-main-content", {
      x: x * 20,
      y: y * 20,
      duration: 1.2,
      ease: "power2.out"
    });
  }, []);

  // Custom cursor animation
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useGSAP(() => {
    // Set initial states
    gsap.set(".floating-element", { scale: 0, rotation: -180, opacity: 0 });
    gsap.set(".hero-main-content", { scale: 0.8, opacity: 0, y: 100 });
    gsap.set(".hero-text", { opacity: 0, y: 50 });
    gsap.set(".hero-buttons", { opacity: 0, y: 30 });
    gsap.set(".glow-orb", { scale: 0, opacity: 0 });

    // Create master timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate glow orbs first
    tl.to(".glow-orb", {
      scale: 1,
      opacity: 0.8,
      duration: 2,
      ease: "power2.out",
      stagger: 0.3
    })
    // Floating elements entrance
    .to(".floating-element", {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      stagger: {
        amount: 1.5,
        from: "random"
      }
    }, "-=1")
    // Main content entrance
    .to(".hero-main-content", {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.4)"
    }, "-=0.8")
    // Text content
    .to(".hero-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.5")
    // Buttons
    .to(".hero-buttons", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.4)"
    }, "-=0.3");

    // Continuous animations
    floatingElements.forEach((element, index) => {
      const el = gsap.utils.toArray(".floating-element")[index];
      if (el) {
        // Floating animation
        gsap.to(el, {
          y: "+=30",
          duration: gsap.utils.random(3, 6),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 2)
        });

        // Rotation animation
        gsap.to(el, {
          rotation: "+=360",
          duration: gsap.utils.random(8, 15),
          ease: "none",
          repeat: -1,
          delay: gsap.utils.random(0, 3)
        });

        // Scale breathing
        gsap.to(el, {
          scale: gsap.utils.random(0.8, 1.2),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 1)
        });
      }
    });

    // Background gradient animation
    gsap.to(".animated-bg", {
      rotation: 360,
      duration: 30,
      ease: "none",
      repeat: -1
    });

    // Glow orbs continuous animation
    gsap.to(".glow-orb", {
      scale: 1.5,
      opacity: 0.4,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

  }, { scope: containerRef });

  // Add mouse move listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      {/* Animated Background */}
      <div className="animated-bg absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_70%)]" />
      </div>

      {/* Glowing Orbs */}
      <div className="glow-orb absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30" />
      <div className="glow-orb absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl opacity-25" />
      <div className="glow-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-20" />

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`floating-element absolute ${element.size} ${element.position}`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${element.color} rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/10" />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="hero-main-content absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-6xl">
          {/* Hero Title */}
          <div className="hero-text mb-8">
            <AnimatedTitle
              title="Unlock Your <br/> Child's <b>Brilliance</b>"
              containerClass="!text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl !leading-tight !text-white drop-shadow-2xl"
            />
          </div>

          {/* Subtitle */}
          <div className="hero-text mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              A universe of games designed by experts to boost IQ, problem-solving,
              and pattern recognition through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">engaging interactive experiences</span>
            </p>
          </div>

          {/* App Preview */}
          <div className="hero-text mb-12 relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-50 scale-110" />
              <div className="relative w-80 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl mx-auto flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Chizel App</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              title="Start Your Journey" 
              containerClass="!bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !px-8 !py-4 !text-lg !font-semibold !rounded-full !shadow-2xl hover:!shadow-blue-500/25 hover:!scale-105 !transition-all !duration-300" 
            />
            <button className="group px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                Watch Demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m0 0v8a2 2 0 002 2h14a2 2 0 002-2v-8m0 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats or Features */}
          <div className="hero-text mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">50+</div>
              <div className="text-gray-300 mt-2">Expert-Designed Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">95%</div>
              <div className="text-gray-300 mt-2">Skill Improvement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">10K+</div>
              <div className="text-gray-300 mt-2">Happy Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference bg-white rounded-full hidden lg:block transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;