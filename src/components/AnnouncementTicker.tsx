import { motion } from "framer-motion";

const items = [
  "🎓 Admissions Open 2026-27",
  "🏆 Best Result in Block & District",
  "📞 Call: 094662 70877",
  "📅 Established 1988",
  "📍 Ganaur Road, Chulkana, Samalkha, Panipat",
  "📋 School Code: 14208",
];

const AnnouncementTicker = ({ visible = true }: { visible?: boolean }) => {
  const text = items.join("   •   ");
  return (
    <motion.div
      initial={false}
      animate={{
        height: visible ? 40 : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden shrink-0"
    >
      <div className="gold-gradient text-accent-foreground overflow-hidden py-2.5">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-sm font-semibold tracking-wide px-4">{text}</span>
          <span className="text-sm font-semibold tracking-wide px-4">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementTicker;
