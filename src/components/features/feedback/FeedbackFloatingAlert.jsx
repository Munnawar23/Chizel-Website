import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { 
  FaCommentDots, 
  FaTimes, 
  FaExternalLinkAlt,
  FaLightbulb,
  FaUsers
} from "react-icons/fa";

const FeedbackFloatingAlert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Replace this with your Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1pgIheerPwWhEGL8gNWiv-fvXsn2POEbU2HjEl4RievU/edit";

  const floatingRef = useRef(null);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // GSAP animations for floating alert
  useGSAP(() => {
    if (!floatingRef.current) return;

    // Initial entrance animation
    gsap.fromTo(
      floatingRef.current,
      {
        x: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 2,
      }
    );

    // Floating animation
    gsap.to(floatingRef.current, {
      y: -8,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Pulse glow effect
    gsap.to(".feedback-glow", {
      opacity: 0.3,
      scale: 1.2,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  // Modal animations
  useGSAP(() => {
    if (isModalOpen && modalRef.current && overlayRef.current) {
      // Overlay fade in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Modal slide and scale in
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (modalRef.current && overlayRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsModalOpen(false);
          document.body.style.overflow = 'unset';
        },
      });
    }
  };

  const dismissAlert = () => {
    gsap.to(floatingRef.current, {
      x: 100,
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => setIsVisible(false),
    });
  };

  const handleGoogleFormRedirect = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
    closeModal();
    // Removed dismissAlert() - keep the floating button visible
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Alert Button */}
      <div
        ref={floatingRef}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
        onClick={openModal}
      >
        {/* Glow effect */}
        <div className="feedback-glow absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary blur-lg opacity-20" />
        
        {/* Main button */}
        <div className="relative bg-gradient-to-r from-accent to-primary p-4 rounded-full shadow-2xl group-hover:shadow-accent/25 transition-all duration-300 group-hover:scale-110">
          <FaCommentDots className="text-white text-xl" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-badge-bg rounded-full animate-pulse" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="text-sm font-medium text-text">Be an early person to give feedback!</div>
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-card" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-accent to-primary p-6 text-center">
              <button
                onClick={() => {
                  closeModal();
                  dismissAlert();
                }}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <FaTimes className="text-lg" />
              </button>
              
              <div className="flex items-center justify-center gap-3 mb-2">
                <FaLightbulb className="text-2xl text-white" />
                <h2 className="text-xl font-bold text-white font-heading">
                  Help Improve Chizel
                </h2>
              </div>
              <p className="text-white/90 text-sm">
                Be an early person to shape the future of learning!
              </p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-3 font-heading">
                  Share Your Feedback
                </h3>
                <p className="text-secondary-text text-lg leading-relaxed">
                  Help us improve Chizel by sharing your thoughts and suggestions. 
                  Your feedback is invaluable in creating the best learning experience for kids!
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleGoogleFormRedirect}
                  className="w-full bg-gradient-to-r from-accent to-primary text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
                >
                  <FaExternalLinkAlt />
                  Fill Feedback Form
                </button>
                
               
                
                <p className="text-sm text-secondary-text">
                  Opens in a new tab • Takes less than 2 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackFloatingAlert;