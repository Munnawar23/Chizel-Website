import { useState, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { 
  FaTimes, 
  FaExternalLinkAlt,
  FaUsers,
  FaRocket,
  FaStar,
  FaGem,
  FaFire
} from "react-icons/fa";

const FeedbackFloatingAlert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1pgIheerPwWhEGL8gNWiv-fvXsn2POEbU2HjEl4RievU/edit";

  const floatingRef = useRef(null);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // Optimized animations - reduced complexity
  useGSAP(() => {
    if (!floatingRef.current) return;

    const tl = gsap.timeline();

    // Single entrance animation
    tl.fromTo(
      floatingRef.current,
      { x: 100, opacity: 0, scale: 0.5 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 2 }
    );

    // Single glow animation
    gsap.to(".glow", {
      opacity: 0.7,
      scale: 1.3,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Simplified fire animation
    gsap.to(".fire", {
      opacity: 0.8,
      scaleY: 1.4,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

  }, []);

  // Optimized modal animations
  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    if (modalRef.current && overlayRef.current) {
      gsap.set([overlayRef.current, modalRef.current], { opacity: 0 });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const closeModal = useCallback(() => {
    if (modalRef.current && overlayRef.current) {
      gsap.to([modalRef.current, overlayRef.current], {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsModalOpen(false);
          document.body.style.overflow = 'unset';
        },
      });
    }
  }, []);

  const dismissAlert = useCallback(() => {
    gsap.to(floatingRef.current, {
      x: 120,
      opacity: 0,
      scale: 0.3,
      duration: 0.6,
      onComplete: () => setIsVisible(false),
    });
  }, []);

  const handleGoogleFormRedirect = useCallback(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
    closeModal();
    dismissAlert();
  }, [closeModal, dismissAlert]);

  if (!isVisible) return null;

  return (
    <>
      {/* Optimized Button */}
      <div
        ref={floatingRef}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 cursor-pointer group"
        onClick={openModal}
      >
        {/* Single glow effect */}
        <div className="glow absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 blur-xl opacity-50" />
        
        {/* Minimal fire effects */}
        <div className="fire absolute -top-3 left-1/2 -translate-x-1/2 text-red-400 opacity-0">
          <FaFire className="text-sm" />
        </div>
        <div className="fire absolute -top-5 left-1/2 -translate-x-1/2 text-orange-400 opacity-0">
          <FaFire className="text-xs" />
        </div>
        
        {/* Minimal sparkles */}
        <div className="absolute -top-2 -left-1 text-yellow-300 opacity-60 animate-pulse">
          <FaStar className="text-xs" />
        </div>
        <div className="absolute -bottom-2 -right-1 text-red-300 opacity-60 animate-pulse">
          <FaGem className="text-xs" />
        </div>
        
        {/* Main button */}
        <div className="relative p-1 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-xl border border-yellow-400 transition-transform duration-300 hover:scale-110">
          <div className="relative bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 p-4 md:p-5 rounded-full">
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-cyan-500/20 blur-sm" />
            <FaRocket className="relative text-cyan-300 text-xl md:text-2xl drop-shadow-lg" />
          </div>
          
          {/* Simple notification */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white animate-pulse" />
        </div>
        
        {/* Optimized tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900/90 px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-orange-500/30 hidden md:block">
          <div className="text-xs font-semibold text-orange-300">🔥 Share Your Voice</div>
        </div>
      </div>

      {/* Optimized Modal */}
      {isModalOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-sm md:max-w-md bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white transition-colors bg-slate-800/50 rounded-full p-2"
              aria-label="Close modal"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 p-6 text-center border-b border-cyan-500/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl animate-pulse">💙</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Your Voice Matters</h2>
              </div>
              <p className="text-cyan-200 text-sm font-medium">✨ Shape Chizel's future together ✨</p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="mb-6">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full blur-md opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-r from-slate-700 to-indigo-700 rounded-full flex items-center justify-center border border-cyan-400/50 shadow-xl">
                    <FaUsers className="text-2xl text-cyan-300" />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text mb-4">
                  💫 Be Part of Something Beautiful 💫
                </h3>
                
                <div className="text-slate-300 space-y-3 text-sm leading-relaxed">
                  <p className="font-medium text-cyan-200">
                    🌟 Your feedback helps us create magical learning experiences for children worldwide.
                  </p>
                  <p className="text-purple-200">
                    💙 Every suggestion becomes a building block for better education, touching young lives.
                  </p>
                  <p className="text-indigo-200">
                    🚀 Join our community of caring voices making learning joyful for every child.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleGoogleFormRedirect}
                  className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group border border-cyan-400/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-lg">💙</span>
                  <span className="relative">Share Your Feedback</span>
                  <FaRocket className="relative text-lg group-hover:rotate-12 transition-transform duration-300" />
                </button>
                
                <div className="bg-slate-800/40 rounded-lg p-3 border border-cyan-500/20">
                  <p className="text-slate-400 text-xs">
                    ✨ <span className="text-cyan-300 font-medium">Quick 2-minute form</span> • Opens in new tab ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackFloatingAlert;
