import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";
import { FaCheckCircle, FaMobile, FaTablet, FaDesktop, FaRocket, FaBrain, FaUsers } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import FeatureCard from "../components/features/chizelApp/FeatureCard";

const ChizelApp = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only add mouse effects on desktop
  useEffect(() => {
    if (isMobile) return; // Completely skip on mobile

    const element = frameRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const rotateX = ((clientY - top) / height - 0.5) * -10;
      const rotateY = ((clientX - left) / width - 0.5) * 10;

      // Use CSS transforms directly instead of GSAP
      element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.transition = 'transform 0.3s ease-out';
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
      element.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Reset any transforms on mobile
  useEffect(() => {
    if (isMobile && frameRef.current) {
      frameRef.current.style.transform = 'none';
      frameRef.current.style.transition = 'none';
    }
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="download"
      className="w-full bg-background/80 text-text overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="font-ui text-lg md:text-xl uppercase text-primary tracking-wider mb-4">
            Coming Soon
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6 leading-tight">
            The Chizel App
          </h1>
          <p className="font-body text-lg md:text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
            A revolutionary space adventure that transforms learning into an exciting journey.
            Smart play, real skills, zero junk content.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: App Features & Info */}
          <div className="space-y-8">
            {/* App Description */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
                Launching <span className="text-primary">Soon</span>
              </h2>
              <p className="font-body text-lg text-secondary-text leading-relaxed">
                Join the first wave of pioneers in smart play. Our app combines cutting-edge AI technology
                with proven educational methods to create an experience that's both fun and transformative.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-6 py-3 rounded-full border-2 border-primary/40 bg-primary/15 font-ui text-sm font-semibold text-primary">
                <div className="flex items-center gap-2">
                  <MdPhoneIphone className="text-lg" />
                  iOS
                </div>
              </div>
              <div className="px-6 py-3 rounded-full border-2 border-accent/40 bg-accent/15 font-ui text-sm font-semibold text-accent">
                <div className="flex items-center gap-2">
                  <FaMobile className="text-lg" />
                  Android
                </div>
              </div>
              <div className="px-6 py-3 rounded-full border-2 border-badge-bg/40 bg-badge-bg/15 font-ui text-sm font-semibold text-badge-bg">
                <div className="flex items-center gap-2">
                  <FaRocket className="text-lg" />
                  Early Access
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">
                What Makes Us Special
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-white/10">
                  <FaBrain className="text-2xl text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg text-text mb-1">AI-Powered Learning</h4>
                    <p className="font-body text-sm text-secondary-text">Adaptive difficulty and personalized challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-white/10">
                  <FaUsers className="text-2xl text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg text-text mb-1">Progress Tracking</h4>
                    <p className="font-body text-sm text-secondary-text">Monitor development with detailed insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={frameRef}
              className="relative w-72 h-[600px] rounded-[2.5rem] border-2 border-white/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl shadow-[0_0_60px_rgba(31,111,235,0.3)] overflow-hidden"
            >
              {/* Phone Screen Content */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/15 to-badge-bg/10" />

                {/* App Content Preview */}
                <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
                  {/* Logo */}
                  <div className="mb-8">
                    <img
                      src="/images/logo.png"
                      alt="Chizel Logo"
                      className="w-24 h-24 object-contain animate-pulse"
                    />
                  </div>

                  {/* App Name */}
                  <h3 className="font-heading text-2xl text-text text-center mb-4">
                    Chizel
                  </h3>

                  {/* Status */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="font-ui text-sm text-primary font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Details */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full bg-white/30" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="text-center">
          <h3 className="font-heading text-2xl md:text-3xl text-text mb-8">
            Join the Revolution
          </h3>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto mb-12">
            Be among the first to experience the future of educational gaming.
            Reserve your spot and get exclusive early access benefits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={<FaRocket className="text-2xl text-primary" />}
              title="Early Access"
              subtitle="First to Experience"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<FaCheckCircle className="text-2xl text-accent" />}
              title="Smart Play"
              subtitle="AI Powered"
              isMobile={isMobile}
            />
            <FeatureCard
              icon={<MdPhoneIphone className="text-2xl text-badge-bg" />}
              title="Mobile Ready"
              subtitle="iOS & Android"
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChizelApp;
