import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";
import Button from "../components/common/Button";

const Contact = () => {
  const containerRef = useRef(null);

  // GSAP animations are unchanged, but they will now run on more performant elements.
  useGSAP(
    () => {
      gsap.to(".float-1", {
        y: -20,
        rotation: 180,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-2", {
        y: -15,
        rotation: 225,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
      gsap.to(".float-3", {
        y: 20,
        rotation: 180,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
      gsap.to(".float-slow-1", {
        y: -30,
        scale: 1.1,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3,
      });
      gsap.to([".pulse-slow", ".contact-ping"], {
        opacity: 0.25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".dot-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      id="contact"
      ref={containerRef}
      className="my-16 sm:my-24 w-screen px-4 sm:px-8"
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-card to-background/50 backdrop-blur-sm py-14 sm:py-16 text-text overflow-hidden border-hsla shadow-2xl">
        {/* ============== DECORATIVE BACKGROUND ELEMENTS ============== */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="float-1 absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"></div>
          <div
            className="float-2 absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg"
            style={{ transform: "rotate(45deg)" }}
          ></div>
          <div className="float-3 absolute bottom-16 left-1/4 w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"></div>
          <div className="float-slow-1 absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          <div className="pulse-slow absolute top-1/3 right-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* ============== MAIN CONTENT ============== */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8">
          <div className="mb-6 flex items-center gap-3 group">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-accent/50 group-hover:via-primary group-hover:to-accent transition-all"></div>
            <div className="relative overflow-hidden px-4 py-1 rounded-full border border-text/10 bg-card/50 backdrop-blur-sm">
              <p className="font-ui text-xs uppercase text-primary tracking-widest font-medium">
                Get In Touch
              </p>
            </div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-primary/50 to-accent/50 group-hover:via-primary group-hover:to-accent transition-all"></div>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <AnimatedTitle
              containerClass="!text-4xl sm:!text-5xl md:!text-6xl !font-black !leading-[.9] !text-center !items-center !text-text drop-shadow-lg"
              title="Have any question <br /> or want to talk with us"
            />
            <div className="pulse-slow absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
          </div>

          <p className="mt-6 max-w-2xl text-secondary-text text-base sm:text-lg leading-relaxed">
            Have a question or an idea?
            <span className="text-primary font-medium">
              {" "}
              Don't hesitate to reach out.
            </span>{" "}
            We're excited to
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-medium">
              {" "}
              build the future of learning with you.
            </span>
          </p>

          <div className="mt-10 relative group">
            <div className="contact-ping absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary/50 rounded-full blur-md opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <Button title="Contact Us" containerClass="button-primary" />
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-secondary-text">
            <div className="flex items-center gap-2">
              <div className="dot-pulse w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="dot-pulse w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="dot-pulse w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span>Feedback Welcome</span>
            </div>
          </div>
        </div>

        {/* Border Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default Contact;
