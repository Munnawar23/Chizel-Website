const OfferCard = ({ icon, title, description, bgGradient, iconGradient, hoverShadow }) => {
  const cardClasses = `
    group relative overflow-hidden rounded-2xl bg-gradient-to-br ${bgGradient} 
    border border-white/20 p-8 transition-all duration-500 hover:scale-105 ${hoverShadow}
  `;

  const iconContainerClasses = `
    inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br 
    ${iconGradient} mb-6 group-hover:scale-110 transition-transform duration-300
  `;

  return (
    <div className={cardClasses.trim()}>
      <div className="relative z-10 text-center">
        <div className={iconContainerClasses.trim()}>
          {icon}
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">
          {title}
        </h3>
        <p className="font-body text-secondary-text mb-6 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;