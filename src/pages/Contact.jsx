import AnimatedTitle from "../components/common/AnimatedTitle";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 w-screen px-4 sm:px-10">
      {/* Main container with enhanced background */}
      <div className="relative rounded-lg bg-gradient-to-br from-card via-card to-card/80 py-12 sm:py-16 lg:py-20 text-text overflow-hidden">
        
        {/* Animated background elements - reduced and more subtle */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes - fewer and smaller */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500/8 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-12 w-12 h-12 bg-purple-500/8 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-12 left-1/4 w-10 h-10 bg-green-500/8 rounded-full animate-ping"></div>
          
          {/* Single gradient orb for subtle depth */}
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Centered text content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="mb-4 sm:mb-6 flex items-center gap-2">
            <div className="w-6 h-px bg-gradient-to-r from-transparent via-secondary-text to-transparent"></div>
            <p className="font-body text-[10px] sm:text-xs uppercase text-secondary-text tracking-wider">
              Get In Touch
            </p>
            <div className="w-6 h-px bg-gradient-to-r from-transparent via-secondary-text to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <AnimatedTitle
              containerClass="special-font !text-3xl sm:!text-4xl md:!text-5xl lg:!text-[5.5rem] w-full !font-black !leading-[.9] !text-center"
              title="Have an idea t<b>o</b> make <br /> Chizel better? <br /> <b>L</b>et's talk."
            />
          </div>
          
          <p className="mt-4 sm:mt-6 max-w-2xl text-secondary-text text-sm sm:text-base leading-relaxed">
            Got feedback, partnership ideas, or questions about Chizel? 
            We'd love to hear from you and build the future of learning together.
          </p>
          
          <div className="mt-6 sm:mt-8">
            <Button title="Contact Us" containerClass="px-10 py-3" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-text/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default Contact;