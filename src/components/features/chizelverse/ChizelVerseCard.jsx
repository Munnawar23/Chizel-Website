import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChizelVerseCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Floating animation for the entire card
    gsap.to(cardRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.7,
    });

    // Subtle rotation animation
    gsap.to(cardRef.current, {
      rotation: index % 2 === 0 ? 1 : -1,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.5,
    });

    // Image hover effects
    const handleMouseEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.15,
        rotation: index % 2 === 0 ? 8 : -8,
        duration: 0.6,
        ease: "power2.out",
      });
      
      gsap.to(contentRef.current, {
        y: -10,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      
      gsap.to(contentRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [index]);

  const getGradientColors = (index) => {
    const gradients = [
      'from-blue-500/30 to-purple-600/30',   // Word Warriors
      'from-green-500/30 to-teal-600/30',   // Logic League  
      'from-orange-500/30 to-red-600/30',   // Chizel Club
    ];
    return gradients[index] || gradients[0];
  };

  const getAccentColor = (index) => {
    const colors = ['text-blue-400', 'text-green-400', 'text-orange-400'];
    return colors[index] || colors[0];
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className={`absolute top-20 left-20 w-40 h-40 bg-gradient-to-br ${getGradientColors(index)} rounded-full blur-2xl animate-pulse`} />
        <div className={`absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br ${getGradientColors(index)} rounded-full blur-3xl`} />
        <div className={`absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br ${getGradientColors(index)} rounded-lg rotate-45 blur-xl opacity-60`} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float-${i % 3 + 1}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div 
        ref={cardRef}
        className="card-content relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Content Side */}
        <div 
          ref={contentRef}
          className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-8 relative z-10`}
        >
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 bg-primary/20 rounded-full border-2 border-primary/30 backdrop-blur-sm">
              <span className="font-ui text-sm text-primary uppercase tracking-wider font-bold">
                🌟 Realm {index + 1}
              </span>
            </div>
            
            <h2 className={`font-heading text-5xl md:text-6xl lg:text-7xl font-black text-text leading-tight ${getAccentColor(index)} drop-shadow-lg`}>
              {feature.title}
            </h2>
            
            <p className="font-body text-xl text-secondary-text leading-relaxed">
              {feature.description}
            </p>
            
            <blockquote className="border-l-4 border-primary pl-8 py-6 bg-card/40 rounded-r-2xl backdrop-blur-sm shadow-lg">
              <p className="font-body text-text/90 italic text-xl leading-relaxed">
                "{feature.quote}"
              </p>
              <cite className="block mt-3 text-base text-secondary-text not-italic font-medium">
                — {feature.author}
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-accent/20 rounded-full border-2 border-accent/30 backdrop-blur-sm">
              <span className="font-ui text-sm text-accent uppercase tracking-wider font-bold">
                🎮 Interactive
              </span>
            </div>
            <div className="px-6 py-3 bg-primary/20 rounded-full border-2 border-primary/30 backdrop-blur-sm">
              <span className="font-ui text-sm text-primary uppercase tracking-wider font-bold">
                🧠 Educational
              </span>
            </div>
            <div className="px-6 py-3 bg-badge-bg/20 rounded-full border-2 border-badge-bg/30 backdrop-blur-sm">
              <span className="font-ui text-sm text-badge-bg uppercase tracking-wider font-bold">
                ⭐ Fun
              </span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
          <div className="relative">
            {/* Enhanced Glow Effect */}
            <div className={`absolute -inset-8 bg-gradient-to-r ${getGradientColors(index)} rounded-3xl blur-2xl opacity-60 animate-pulse`} />
            
            {/* Main Image Container */}
            <div className="relative bg-card/60 backdrop-blur-md rounded-3xl p-8 border-2 border-text/20 shadow-2xl">
              <div 
                ref={imageRef}
                className="relative overflow-hidden rounded-2xl shadow-xl"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={feature.gifSrc}
                  alt={`${feature.title} in action`}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-badge-bg rounded-full animate-pulse shadow-lg" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChizelVerseCard;