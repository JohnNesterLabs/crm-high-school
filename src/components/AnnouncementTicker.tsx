const items = [
  "🎓 Admissions Open 2026-27",
  "🏆 Best Result in Block & District",
  "📞 Call: 094662 70877",
  "📅 Established 1988",
  "📍 Ganaur Road, Chulkana, Samalkha, Panipat",
  "📋 School Code: 14208",
];

const AnnouncementTicker = () => {
  const text = items.join("   •   ");
  return (
    <div className="gold-gradient text-accent-foreground overflow-hidden py-2.5 relative z-30">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-sm font-semibold tracking-wide px-4">{text}</span>
        <span className="text-sm font-semibold tracking-wide px-4">{text}</span>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
