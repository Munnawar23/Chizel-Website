const FeatureCard = ({ icon, title, subtitle, isMobile }) => (
  <div
    className={`group rounded-lg bg-card/60 border border-secondary-text/20 p-3 text-center transition-all duration-300 ${
      !isMobile ? "backdrop-blur-sm hover:scale-105 hover:border-accent/40" : ""
    }`}
  >
    <div className="flex justify-center mb-1">{icon}</div>
    <h4 className="text-sm font-medium text-text">{title}</h4>
    <p className="text-xs text-secondary-text">{subtitle}</p>
  </div>
);

export default FeatureCard;
