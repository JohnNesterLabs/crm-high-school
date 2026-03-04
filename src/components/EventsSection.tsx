import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const events = [
  { title: "Annual Sports Day", date: "March 15, 2026", time: "9:00 AM", upcoming: true, desc: "Inter-house athletics competition on the school ground." },
  { title: "Parent-Teacher Meeting", date: "March 22, 2026", time: "10:00 AM", upcoming: true, desc: "Discuss student progress with faculty members." },
  { title: "Science Exhibition", date: "April 5, 2026", time: "11:00 AM", upcoming: true, desc: "Students showcase innovative science projects." },
  { title: "Annual Function & Prize Distribution", date: "April 20, 2026", time: "5:00 PM", upcoming: false, desc: "Cultural performances and recognition of achievers." },
];

const EventsSection = () => (
  <section id="events" className="section-padding relative overflow-hidden">
    {/* Floating calendar decoration */}
    <Calendar className="absolute top-20 right-10 w-40 h-40 text-gold/5 pointer-events-none" />
    <Clock className="absolute bottom-20 left-10 w-32 h-32 text-primary/5 pointer-events-none" />

    <div className="container mx-auto relative">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Upcoming Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Stay updated with school activities and important dates
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {events.map((evt, i) => (
          <motion.div
            key={evt.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex gap-4 p-6 rounded-2xl bg-card shadow-lg border border-border hover:shadow-xl transition-shadow"
          >
            {evt.upcoming && (
              <span className="absolute top-4 right-4 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
                <span className="text-xs text-destructive font-semibold">Upcoming</span>
              </span>
            )}
            <div className="shrink-0 w-16 h-16 rounded-xl gold-gradient flex flex-col items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg leading-none">
                {evt.date.split(" ")[1]?.replace(",", "")}
              </span>
              <span className="text-accent-foreground/70 text-[10px] font-semibold">
                {evt.date.split(" ")[0]?.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-bold text-foreground">{evt.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">{evt.desc}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{evt.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{evt.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
