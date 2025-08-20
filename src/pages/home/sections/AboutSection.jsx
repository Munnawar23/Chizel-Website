import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaChild,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import AnimatedTitle from "@components/common/AnimatedTitle";
import BentoTilt from "@components/common/BentoTilt";
import { principles, problemSlides, offers } from "@utils/constants";
import ProblemCard from "@/components/features/about/ProblemCard";
import OfferCard from "@/components/features/about/OfferCard";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  kids: <FaChild className="text-3xl text-white" />,
  parents: <FaUsers className="text-3xl text-white" />,
  investors: <FaRocket className="text-3xl text-white" />,
};

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const scrollTriggerConfig = {
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      preventOverlaps: true,
    };

    let ctx = gsap.context(() => {
      gsap.from(".about-image-container", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 85%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        clipPath: "inset(0% 50% 0% 50%)",
        duration: 1.2,
        ease: "power3.inOut",
      });
      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
      gsap.from(".principle-item", {
        scrollTrigger: {
          trigger: ".principles-list",
          start: "top 85%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.4,
      });
      gsap.from(".problem-heading", {
        scrollTrigger: {
          trigger: ".problem-heading",
          start: "top 85%",
          ...scrollTriggerConfig,
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.utils.toArray(".problem-slide").forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            ...scrollTriggerConfig,
          },
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative w-screen bg-background py-16 sm:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-1/2 right-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        </div>
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 relative z-10">
            <div className="about-text-content order-1 md:order-2 space-y-6 md:space-y-8">
              <AnimatedTitle
                title="The Smart Solution <br />for Screen Time"
                containerClass="!text-4xl md:!text-5xl !leading-tight !items-start !text-left text-text"
              />
              <ul className="principles-list space-y-4">
                {principles.map((principle) => (
                  <li
                    key={principle.title}
                    className="principle-item flex items-start gap-3 group"
                  >
                    <FaCheckCircle
                      size="1.4em"
                      className="mt-1 flex-shrink-0 text-accent transition-all duration-300 group-hover:text-primary group-hover:scale-110"
                    />
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="font-body text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="font-body text-secondary-text leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <BentoTilt className="about-image-container order-2 md:order-1 relative h-96 w-full rounded-2xl md:h-[70vh]">
              <img
                src="/images/about-image.webp"
                alt="Child learning with Chizel app"
                className="size-full rounded-2xl object-cover"
              />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 blur-xl opacity-40 -z-10" />
            </BentoTilt>
          </div>
        </div>
      </section>

      <section
        id="problem"
        className="relative w-screen bg-background pt-8 sm:pt-12 pb-6 sm:pb-12 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-60 w-60 rounded-full bg-red-500/10 blur-[90px]" />
        </div>
        <div className="container mx-auto px-6 md:px-8">
          <div className="problem-heading text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
              <FaExclamationTriangle />
              <span className="text-sm uppercase tracking-wider">
                THE PROBLEM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text">
              Screen Time is Hurting <br /> Our Kids
            </h2>
            <p className="text-xl text-secondary-text font-medium max-w-3xl mx-auto">
              While technology should help children grow, most apps are designed
              to be addictive rather than educational.
            </p>
          </div>
          <div className="space-y-14 max-w-4xl mx-auto">
            {problemSlides.map((slide, i) => (
              <div
                key={i}
                className="problem-slide w-full max-w-[900px] mx-auto"
                style={{ willChange: "transform, opacity" }}
              >
                <ProblemCard slide={slide} />
              </div>
            ))}
          </div>

          <div className="what-we-offer mt-24 md:mt-32 text-center space-y-6 md:space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text">
              What We Offer
            </h2>
            <p className="font-body text-lg text-secondary-text max-w-3xl mx-auto">
              Tailored experiences for every member of the Chizel family. From
              playful learning to strategic growth, we've got something special
              for everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-6">
              {offers.map((offer) => (
                <OfferCard
                  key={offer.title}
                  icon={iconMap[offer.icon]} 
                  title={offer.title}
                  description={offer.description}
                  bgGradient={offer.bgGradient}
                  iconGradient={offer.iconGradient}
                  hoverShadow={offer.hoverShadow}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
