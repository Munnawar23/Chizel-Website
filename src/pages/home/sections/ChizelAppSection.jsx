import { useRef, useEffect, useState } from "react";
import FeatureCard from "@components/features/chizelApp/FeatureCard";
import PlatformBadge from "@components/features/chizelApp/PlatformBadge";
import SpecialFeatureCard from "@components/features/chizelApp/SpecialFeatureCard";
import { chizelAppData } from "@utils/constants";
import { FaCheckCircle, FaMobile, FaRocket, FaBrain, FaUsers } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const iconMap = { MdPhoneIphone, FaMobile, FaRocket, FaBrain, FaUsers, FaCheckCircle };

const ChizelAppSection = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 3D tilt effect on desktop
  useEffect(() => {
    if (isMobile) return;
    const element = frameRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const rotateX = ((clientY - top) / height - 0.5) * -10;
      const rotateY = ((clientX - left) / width - 0.5) * 10;
      element.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.transition = "transform 0.3s ease-out";
    };

    const handleMouseLeave = () => {
      element.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
      element.style.transition = "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Reset transforms on mobile
  useEffect(() => {
    if (isMobile && frameRef.current) {
      frameRef.current.style.transform = "none";
      frameRef.current.style.transition = "none";
    }
  }, [isMobile]);

  // Dynamic icon renderer
  const renderIcon = (name,type) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;

    switch (type) {
      case "platform":
        return <IconComponent className="text-lg" />;
      case "special":
        const colorClass = name === "FaBrain" ? "text-primary" : "text-accent";
        return <IconComponent className={`text-2xl ${colorClass} mt-1 flex-shrink-0`} />;
      case "revolution":
        const revColor = {
          FaRocket: "text-primary",
          FaCheckCircle: "text-accent",
          MdPhoneIphone: "text-badge-bg",
        }[name];
        return <IconComponent className={`text-2xl ${revColor}`} />;
      default:
        return <IconComponent />;
    }
  };

  return (
    <section ref={containerRef} id="chizel-app" className="w-full bg-background/80 text-text overflow-hidden py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-6">
        
          <h1 className="font-heading text-5xl md:text-7xl lg:text-7xl text-text leading-tight">
            {chizelAppData.header.title}
          </h1>
          <p className="font-body text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
            {chizelAppData.header.subtitle}
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT PANEL */}
          <div className="space-y-8">

            {/* Title & Description */}
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
                {chizelAppData.mainContent.leftPanel.title}{" "}
                <span className="text-primary">{chizelAppData.mainContent.leftPanel.highlight}</span>
              </h2>
              <p className="font-body text-xl text-secondary-text leading-relaxed">
                {chizelAppData.mainContent.leftPanel.description}
              </p>
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap gap-3">
              {chizelAppData.mainContent.leftPanel.platformBadges.map((badge) => (
                <PlatformBadge
                  key={badge.text}
                  icon={renderIcon(badge.iconName, "platform")}
                  text={badge.text}
                  colorClasses={badge.colorClasses}
                />
              ))}
            </div>

            {/* Special Features */}
            <div className="space-y-4">
              <h3 className="font-heading text-3xl md:text-4xl text-text mb-4">
                {chizelAppData.mainContent.leftPanel.specialFeatures.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {chizelAppData.mainContent.leftPanel.specialFeatures.features.map((feature) => (
                  <SpecialFeatureCard
                    key={feature.title}
                    icon={renderIcon(feature.iconName, "special")}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: PHONE MOCKUP */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={frameRef}
              className="relative w-72 h-[600px] rounded-[2.5rem] border-2 border-white/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl shadow-[0_0_60px_rgba(31,111,235,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/15 to-badge-bg/10" />
                <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
                  <div className="mb-8">
                    <img src="/images/logo.png" alt="Chizel Logo" className="w-24 h-24 object-contain animate-pulse" />
                  </div>
                  <h3 className="font-heading text-2xl text-text text-center mb-4">Chizel</h3>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="font-ui text-sm text-primary font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full bg-white/30" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* BOTTOM REVOLUTION FEATURES */}
        <div className="text-center space-y-8">
          <h3 className="font-heading text-3xl md:text-4xl text-text">
            {chizelAppData.revolutionSection.title}
          </h3>
          <p className="font-body text-xl text-secondary-text max-w-2xl mx-auto">
            {chizelAppData.revolutionSection.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {chizelAppData.revolutionSection.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={renderIcon(feature.iconName, "revolution")}
                title={feature.title}
                subtitle={feature.subtitle}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChizelAppSection;
