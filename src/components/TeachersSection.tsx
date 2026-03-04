import { motion } from "framer-motion";
import { Award } from "lucide-react";

const teachers = [
  { name: "Dr. Rajesh Kumar", role: "Principal", subject: "Administration", featured: true },
  { name: "Mrs. Sunita Devi", role: "Vice Principal", subject: "Hindi", featured: false },
  { name: "Mr. Amit Sharma", role: "Senior Teacher", subject: "Mathematics", featured: false },
  { name: "Mrs. Kavita Rani", role: "Teacher", subject: "English", featured: false },
  { name: "Mr. Suresh Yadav", role: "Teacher", subject: "Science", featured: false },
  { name: "Mrs. Pooja Gupta", role: "Teacher", subject: "Social Studies", featured: false },
  { name: "Mr. Deepak Singh", role: "Teacher", subject: "Computer Science", featured: false },
  { name: "Mrs. Neelam Kumari", role: "Teacher", subject: "Physical Education", featured: false },
];

const TeachersSection = () => (
  <section id="teachers" className="section-padding relative overflow-hidden">
    {/* Gradient blob parallax */}
    <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="container mx-auto relative">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Dedicated Faculty
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Experienced educators committed to nurturing every student
        </motion.p>
      </div>

      {/* Principal card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mb-12"
      >
        <div className="relative rounded-2xl overflow-hidden navy-gradient p-8 text-center shadow-2xl border-2 border-gold/30">
          <Award className="w-10 h-10 text-gold mx-auto mb-4" />
          <img
            src="/science-fair/487402671_1124568666381135_173436738163303464_n.jpg"
            alt="Dr. Rajesh Kumar, Principal"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-[center_30%] border-2 border-gold/50"
          />
          <h3 className="font-display text-xl font-bold text-white">Dr. Rajesh Kumar</h3>
          <p className="text-gold font-semibold text-sm mt-1">Principal</p>
          <p className="text-white/80 text-sm mt-2">
            Leading CRM High School with vision, passion, and dedication to academic excellence.
          </p>
        </div>
      </motion.div>

      {/* Teacher grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.filter((t) => !t.featured).map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, rotateY: 5, rotateX: 5 }}
            className="rounded-2xl bg-card p-6 text-center shadow-lg border border-border hover:shadow-xl transition-shadow"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-secondary flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </span>
            </div>
            <h4 className="font-display font-bold text-foreground text-sm">{t.name}</h4>
            <p className="text-gold text-xs font-semibold mt-1">{t.role}</p>
            <p className="text-muted-foreground text-xs mt-1">{t.subject}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeachersSection;
