import AnimatedTitle from "../components/common/AnimatedTitle";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 w-screen px-4 sm:px-10">
      {/* Main container with reduced height and enhanced effects */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/40 backdrop-blur-sm py-14 sm:py-16 text-text overflow-hidden border border-white/5 shadow-2xl">
        
        {/* Enhanced animated background with floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary floating shapes with custom animations */}
          <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg rotate-45 animate-float-delayed blur-sm"></div>
          <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full animate-float-reverse blur-sm"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full animate-pulse blur-sm"></div>
          
          {/* Large ambient glows */}
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-float-slow"></div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-white/5 to-transparent" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        {/* Interactive hover effects container */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-700 hover:opacity-100"></div>

        {/* Main content with enhanced styling */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 md:px-16">
          
          {/* Enhanced section indicator */}
          <div className="mb-6 sm:mb-8 flex items-center gap-3 group">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-purple-400/60 group-hover:via-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
            <div className="relative overflow-hidden px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="font-body text-xs uppercase text-cyan-300 tracking-widest font-medium">
                Get In Touch
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-cyan-400/60 to-purple-400/60 group-hover:via-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Enhanced title with glow effect */}
            <div className="relative group">
              <AnimatedTitle
                containerClass="special-font !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl w-full !font-black !leading-[.9] !text-center !text-white drop-shadow-2xl"
                title="Have any question <br /> or want to talk with us"

              />
              {/* Glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-xl scale-110 opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          {/* Enhanced and updated description */}
          <div className="mt-8 max-w-2xl relative">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Have a question, an idea for a new feature, 
              <span className="text-cyan-300 font-medium"> Don't hesitate to reach out.</span> We're excited to 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium"> build the future of learning with you.</span>
            </p>
          </div>
          
          {/* Enhanced CTA button with updated text and subtler glow */}
          <div className="mt-10 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-25 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-slow"></div>
            <div className="relative">
              <Button 
                title="Contact Us" 
                containerClass="px-10 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              />
            </div>
            
            {/* Floating action indicators */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Contact method hints with updated text */}
          <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Feedback Welcome</span>
            </div>
          </div>
        </div>

        {/* Enhanced bottom accent with animated gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-purple-400/40 animate-pulse-slow"></div>
        
        {/* Corner decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg"></div>
      </div>
      
      {/* Add custom animations to your CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(225deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite 3s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;