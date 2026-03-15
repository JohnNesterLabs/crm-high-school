import { ScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";
import { Award } from "lucide-react";

import princiImg from "@/assets/teacher/Satish-kumar.jpeg";
import anandImg from "@/assets/teacher/Anand.jpeg";
import tilakImg from "@/assets/teacher/Tilak.jpeg";
import parmodImg from "@/assets/teacher/Parmod.jpeg";
import sandeepImg from "@/assets/teacher/Sandeep.jpeg";
import deepakImg from "@/assets/teacher/Deepak.jpeg";
import kusumImg from "@/assets/teacher/Kusum.jpeg";
import sheelaImg from "@/assets/teacher/Sheela.jpeg";
import poonamImg from "@/assets/teacher/Poonam.jpeg";
import mukeshImg from "@/assets/teacher/Mukesh.jpeg";
import mukesh1Img from "@/assets/teacher/Mukesh1.jpeg";
import rituImg from "@/assets/teacher/Ritu.jpeg";
import ritu1Img from "@/assets/teacher/Ritu1.jpeg";
import sushmaImg from "@/assets/teacher/Sushma.jpeg";
import sushma1Img from "@/assets/teacher/Sushma1.jpeg";
import peon1Img from "@/assets/teacher/peon1.jpeg";
import peon2Img from "@/assets/teacher/peon2.jpeg";
import soniaImg from "@/assets/teacher/Sonia.jpeg";
import sushilaImg from "@/assets/teacher/Sushila.jpeg";
import monikaImg from "@/assets/teacher/Monika.jpeg";
import sunilImg from "@/assets/teacher/Sunil.jpeg";
import satishImg from "@/assets/teacher/Satish.jpeg";
import pardeepImg from "@/assets/teacher/Pardeep.jpeg";
import pushpaImg from "@/assets/teacher/Pushpa.jpeg";
import sunitaImg from "@/assets/teacher/Sunita.jpeg";
import nehaImg from "@/assets/teacher/Neha.jpeg";
import meenuImg from "@/assets/teacher/Meenu.jpeg";
import preetiImg from "@/assets/teacher/Preeti.jpeg";
import anilImg from "@/assets/teacher/anil.jpeg";
import priyankaImg from "@/assets/teacher/Priyanka.jpeg";
import kiranImg from "@/assets/teacher/Kiran.jpeg";
import prasantImg from "@/assets/teacher/Prasant.jpeg";

const teachers = [
  { name: "Mr. Satish Kumar", role: "Principal", subject: "Administration", featured: true, image: princiImg },
  { name: "Mr. Anand Kumar", role: "Vice Principal", subject: "Administration", featured: false, image: anandImg },
  { name: "Mr. Tilak", role: "Math Teacher", subject: "Mathematics", featured: false, image: tilakImg },
  { name: "Mr. Parmod Kumar", role: "English Teacher", subject: "English", featured: false, image: parmodImg },
  { name: "Mr. Sandeep", role: "Science Teacher", subject: "Science", featured: false, image: sandeepImg },
  { name: "Mr. Deepak", role: "Social Science Teacher", subject: "Social Science", featured: false, image: deepakImg },
  { name: "Mrs. Kusum", role: "Hindi Teacher", subject: "Hindi", featured: false, image: kusumImg },
  { name: "Mrs. Sheela", role: "Teacher", subject: "Faculty", featured: false, image: sheelaImg },
  { name: "Mrs. Poonam", role: "Teacher", subject: "Faculty", featured: false, image: poonamImg },
  { name: "Mr. Mukesh", role: "Teacher", subject: "Faculty", featured: false, image: mukeshImg },
  { name: "Mr. Mukesh", role: "Teacher", subject: "Faculty", featured: false, image: mukesh1Img },
  { name: "Mrs. Ritu", role: "Teacher", subject: "Faculty", featured: false, image: rituImg },
  { name: "Mrs. Ritu", role: "Teacher", subject: "Faculty", featured: false, image: ritu1Img },
  { name: "Mrs. Sushma", role: "Teacher", subject: "Faculty", featured: false, image: sushmaImg },
  { name: "Mrs. Sushma", role: "Teacher", subject: "Faculty", featured: false, image: sushma1Img },
  { name: "Mrs. Sonia", role: "Teacher", subject: "Faculty", featured: false, image: soniaImg },
  { name: "Mrs. Sushila", role: "Teacher", subject: "Faculty", featured: false, image: sushilaImg },
  { name: "Mrs. Monika", role: "Teacher", subject: "Faculty", featured: false, image: monikaImg },
  { name: "Mr. Sunil", role: "Teacher", subject: "Faculty", featured: false, image: sunilImg },
  { name: "Mr. Satish", role: "Teacher", subject: "Faculty", featured: false, image: satishImg },
  { name: "Mr. Pardeep", role: "Teacher", subject: "Faculty", featured: false, image: pardeepImg },
  { name: "Mrs. Pushpa", role: "Teacher", subject: "Faculty", featured: false, image: pushpaImg },
  { name: "Mrs. Sunita", role: "Teacher", subject: "Faculty", featured: false, image: sunitaImg },
  { name: "Mrs. Neha", role: "Teacher", subject: "Faculty", featured: false, image: nehaImg },
  { name: "Mrs. Meenu", role: "Teacher", subject: "Faculty", featured: false, image: meenuImg },
  { name: "Mrs. Preeti", role: "Teacher", subject: "Faculty", featured: false, image: preetiImg },
  { name: "Mr. Anil", role: "Teacher", subject: "Faculty", featured: false, image: anilImg },
  { name: "Mrs. Priyanka", role: "Teacher", subject: "Faculty", featured: false, image: priyankaImg },
  { name: "Mrs. Kiran", role: "Teacher", subject: "Faculty", featured: false, image: kiranImg },
  { name: "Mr. Prasant", role: "Teacher", subject: "Faculty", featured: false, image: prasantImg },
];

const supportStaff = [
  { name: "Mrs. Geeta", role: "Support Staff", subject: "Administration", image: peon1Img },
  { name: "Mrs. Rinki", role: "Support Staff", subject: "Administration", image: peon2Img },
];

// Initials from name (e.g. "Mr. Anand Kumar" -> "AK", "Mr. Tilak" -> "T")
function getInitials(name: string): string {
  const words = name.replace(/^(Mr\.|Mrs\.)\s*/i, "").trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  return (words[0]?.[0] ?? "?").toUpperCase();
}

// Avatar/badge color pairs (light bg, dark text) for variety per card
const avatarColors = [
  { bg: "bg-blue-100", text: "text-blue-800" },
  { bg: "bg-violet-100", text: "text-violet-800" },
  { bg: "bg-amber-100", text: "text-amber-800" },
  { bg: "bg-rose-100", text: "text-rose-800" },
  { bg: "bg-sky-100", text: "text-sky-800" },
  { bg: "bg-pink-100", text: "text-pink-800" },
  { bg: "bg-teal-100", text: "text-teal-800" },
  { bg: "bg-indigo-100", text: "text-indigo-800" },
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
            src={teachers[0].image}
            alt="Mr. Satish Kumar - Principal"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-[center_30%] border-2 border-gold/50"
          />
          <h3 className="font-display text-xl font-bold text-white">Mr. Satish Kumar</h3>
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
          const colors = avatarColors[i % avatarColors.length];
          return (
            <ScrollReveal key={`${t.name}-${i}`} animation={anim} delay={i * 120}>
              <TiltCard
                className="rounded-xl bg-white p-7 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full"
                glareColor={i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--gold))" : "hsl(var(--accent))"}
                tiltDeg={5}
              >
                <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-gray-100">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className={`w-full h-full flex items-center justify-center font-bold text-2xl ${colors.bg} ${colors.text}`}>
                      {getInitials(t.name)}
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 text-base mb-2">{t.name}</h4>
                <span className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                  {t.role}
                </span>
                <p className="text-gray-500 text-sm mt-3">{t.subject}</p>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Support Staff / Office Staff */}
      {supportStaff.length > 0 && (
        <>
          <ScrollReveal animation="rotate-in" className="text-center mt-16 mb-8">
            <h3 className="text-xl font-display font-bold text-foreground">Our Support Staff</h3>
            <p className="text-muted-foreground text-sm mt-1">Dedicated office staff keeping our school running smoothly</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {supportStaff.map((s, i) => (
              <ScrollReveal key={i} animation="slide-up-spring" delay={i * 100}>
                <TiltCard
                  className="rounded-xl bg-white p-7 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full"
                  glareColor="hsl(var(--primary))"
                  tiltDeg={5}
                >
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-gray-100">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover object-[center_32%]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">{s.name}</h4>
                  <p className="text-gray-500 text-sm">{s.role}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

export default TeachersSection;
