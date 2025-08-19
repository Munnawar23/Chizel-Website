const SpecialFeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-white/10">
    {icon}
    <div>
      <h4 className="font-heading text-lg text-text mb-1">{title}</h4>
      <p className="font-body text-sm text-secondary-text">{description}</p>
    </div>
  </div>
);

export default SpecialFeatureCard;
