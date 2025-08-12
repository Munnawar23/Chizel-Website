import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChizelVerseCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Floating animation for the card
    gsap.to(cardRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.5,
    });

    // Image hover effect
    const handleMouseEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const card = cardRef.current;
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  const getGradientColors = (index) => {
    const gradients = [
      'from-blue-500/20 to-purple-600/20', // Logic League
      'from-green-500/20 to-teal-600/20',  // Word Warriors
      'from-orange-500/20 to-red-600/20',  // Chizel Club
    ];
    return gradients[index] || gradients[0];
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-20 left-20 w-32 h-32 bg-gradient-to-br ${getGradientColors(index)} rounded-full blur-xl`} />
        <div className={`absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br ${getGradientColors(index)} rounded-full blur-2xl`} />
      </div>

      <div 
        ref={cardRef}
        className="card-content relative max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Content Side */}
        <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="font-ui text-sm text-primary uppercase tracking-wider">
                Realm {index + 1}
              </span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-text leading-tight">
              {feature.title}
            </h2>
            
            <p className="font-body text-lg text-secondary-text leading-relaxed">
              {feature.description}
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-card/30 rounded-r-lg">
              <p className="font-body text-text/90 italic text-lg">
                "{feature.quote}"
              </p>
              <cite className="block mt-2 text-sm text-secondary-text not-italic">
                — {feature.author}
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="font-ui text-xs text-accent uppercase tracking-wider">
                Interactive
              </span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="font-ui text-xs text-primary uppercase tracking-wider">
                Educational
              </span>
            </div>
            <div className="px-4 py-2 bg-badge-bg/10 rounded-full border border-badge-bg/20">
              <span className="font-ui text-xs text-badge-bg uppercase tracking-wider">
                Fun
              </span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
          <div className="relative">
            {/* Glow Effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${getGradientColors(index)} rounded-2xl blur-xl opacity-50`} />
            
            {/* Main Image Container */}
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-text/10">
              <div 
                ref={imageRef}
                className="relative overflow-hidden rounded-xl"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={feature.gifSrc}
                  alt={`${feature.title} in action`}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChizelVerseCard;