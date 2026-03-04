import { ScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";
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
        <ScrollReveal animation="rotate-in">
          <h2 className="section-title">Our Dedicated Faculty</h2>
        </ScrollReveal>
        <ScrollReveal animation="rotate-in" delay={80}>
          <p className="section-subtitle">
            Experienced educators committed to nurturing every student
          </p>
        </ScrollReveal>
      </div>

      {/* Principal card */}
      <ScrollReveal animation="slide-up-spring" className="max-w-md mx-auto mb-12">
        <TiltCard glareColor="hsl(var(--gold))" tiltDeg={6} className="relative rounded-2xl overflow-hidden navy-gradient p-8 text-center shadow-2xl border-2 border-gold/30">
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
        </TiltCard>
      </ScrollReveal>

      {/* Teacher grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.filter((t) => !t.featured).map((t, i) => {
          const anim = i % 3 === 0 ? "fade-left" : i % 3 === 1 ? "slide-up-spring" : "fade-right";
          return (
            <ScrollReveal key={t.name} animation={anim} delay={i * 120}>
              <TiltCard
                className="rounded-2xl bg-card p-6 text-center shadow-lg border border-border hover:shadow-xl transition-shadow h-full"
                glareColor={i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--gold))" : "hsl(var(--accent))"}
                tiltDeg={5}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-secondary flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <h4 className="font-display font-bold text-foreground text-sm">{t.name}</h4>
                <p className="text-gold text-xs font-semibold mt-1">{t.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.subject}</p>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default TeachersSection;
