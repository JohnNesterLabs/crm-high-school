import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import { useState } from "react";

const toppers = [
  { name: "Priya Sharma", class: "12th", percentage: "96.4%", stream: "Science" },
  { name: "Rohit Kumar", class: "12th", percentage: "94.8%", stream: "Commerce" },
  { name: "Anita Devi", class: "10th", percentage: "97.2%", stream: "General" },
  { name: "Vikram Singh", class: "10th", percentage: "95.6%", stream: "General" },
  { name: "Meena Rani", class: "12th", percentage: "93.2%", stream: "Arts" },
  { name: "Arjun Yadav", class: "10th", percentage: "94.1%", stream: "General" },
];

const FlipCard = ({ topper, i }: { topper: typeof toppers[0]; i: number }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12 }}
      className="perspective-1000 h-52 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl bg-card shadow-lg border border-border p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-full navy-gradient flex items-center justify-center mb-3">
            <span className="text-primary-foreground font-display font-bold text-xl">
              {topper.name.charAt(0)}
            </span>
          </div>
          <h4 className="font-display font-bold text-foreground">{topper.name}</h4>
          <p className="text-sm text-muted-foreground">Class {topper.class}</p>
          <p className="text-xs text-gold mt-1">Tap to see result</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl gold-gradient p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Star className="w-8 h-8 text-accent-foreground mb-2" />
          <div className="font-display text-4xl font-bold text-accent-foreground mb-1">
            {topper.percentage}
          </div>
          <p className="text-accent-foreground/80 font-semibold">{topper.stream}</p>
          <p className="text-accent-foreground/60 text-sm">Class {topper.class} - 2025</p>
        </div>
      </div>
    </motion.div>
  );
};

const ResultsSection = () => (
  <section id="results" className="section-padding bg-secondary relative overflow-hidden">
    {/* Decorative stars */}
    {[...Array(8)].map((_, i) => (
      <Star
        key={i}
        className="absolute text-gold/10 pointer-events-none"
        style={{
          width: 20 + Math.random() * 30,
          height: 20 + Math.random() * 30,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}

    <div className="container mx-auto relative">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-6 py-2 rounded-full font-semibold text-sm mb-6"
        >
          <Trophy className="w-4 h-4" /> Best Results in Block & District
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Academic Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Our students consistently achieve outstanding results — hover over cards to reveal scores!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toppers.map((t, i) => (
          <FlipCard key={t.name} topper={t} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
