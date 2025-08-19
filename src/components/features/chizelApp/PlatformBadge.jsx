const PlatformBadge = ({ icon, text, colorClasses }) => (
  <div
    className={`px-6 py-3 rounded-full border-2 ${colorClasses} font-ui text-sm font-semibold`}
  >
    <div className="flex items-center gap-2">
      {icon}
      {text}
    </div>
  </div>
);

export default PlatformBadge;
