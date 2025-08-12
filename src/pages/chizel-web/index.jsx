import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const ChizelWebPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background p-4 text-text">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl ${
            mounted ? "animate-pulse" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-32 right-32 w-24 h-24 bg-accent/15 rounded-full blur-lg ${
            mounted ? "animate-bounce" : ""
          }`}
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full blur-md ${
            mounted ? "animate-pulse" : ""
          }`}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_70%)]"></div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status Badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-accent/50"></div>
          <div className="relative overflow-hidden px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="font-ui text-xs uppercase text-primary tracking-widest font-medium">
                Coming Soon
              </p>
            </div>
          </div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent via-primary/50 to-accent/50"></div>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
          <span className="bg-gradient-to-r from-text via-primary to-accent bg-clip-text text-transparent">
            Experience Chizel App
          </span>
          <br />
          <span className="text-text">Directly on the Web</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-2xl font-body text-base md:text-lg text-secondary-text leading-relaxed px-4">
          Our developer is working hard to bring you the Chizel app experience
          in your browser.
          <span className="text-primary font-medium">
            {" "}
            Stay tuned — launching soon!
          </span>
        </p>

        {/* Back Button */}
        <div className="mt-10">
          <Link to="/">
            <Button
              title="Go Back Home"
              leftIcon={<FaHome className="text-sm" />}
              containerClass="!bg-card/50 !text-text border border-text/10 hover:border-primary/30 hover:!bg-card/80 transition-all duration-300"
            />
          </Link>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-primary/20 rounded-tl-xl"></div>
      <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-accent/20 rounded-tr-xl"></div>
      <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-primary/20 rounded-bl-xl"></div>
      <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-accent/20 rounded-br-xl"></div>
    </section>
  );
};

export default ChizelWebPage;
