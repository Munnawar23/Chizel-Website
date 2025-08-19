const StatCard = ({ percentage, label }) => (
  <div className="text-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-badge-bg/10 border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(93,63,211,0.25)] transition-shadow">
    <div className="font-heading text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">
      {percentage}
    </div>
    <div className="mt-1 font-ui text-xs uppercase tracking-widest text-secondary-text">
      {label}
    </div>
  </div>
);

export default StatCard;
