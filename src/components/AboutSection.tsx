import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";
import { GraduationCap, Users, BookOpen, Building2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Years of Excellence", value: 37 },
  { icon: Users, label: "Students Enrolled", value: 1200 },
  { icon: BookOpen, label: "Classrooms", value: 14 },
  { icon: Building2, label: "Acres Campus", value: 3 },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);
  return <span>{count}+</span>;
};

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Parallax BG pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--navy)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto relative" ref={ref}>
        <div className="text-center mb-16">
          <ScrollReveal animation="blur-in">
            <h2 className="section-title">About Our School</h2>
          </ScrollReveal>
          <ScrollReveal animation="blur-in" delay={80}>
            <p className="section-subtitle">
              Shaping futures since 1988 with quality education and values
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal animation="fade-left" duration={0.6}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission & Vision</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              CRM High School Chulkana Dham (School Code: 14208) has been a beacon of quality education
              in Panipat district since 1988. Affiliated to the Haryana State Board of Education, we provide
              comprehensive education from Nursery to Class 12th.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our motto <span className="text-gold font-semibold">"Achieving Excellence Together"</span> drives
              everything we do — from academics to sports, from cultural activities to character building.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located on Ganaur Road, Chulkana, Samalkha, Panipat, Haryana – 132101, our school offers
              modern infrastructure, dedicated faculty, and a nurturing environment for every child.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" duration={0.6} delay={60}>
            <TiltCard className="relative" glareColor="hsl(var(--gold))" tiltDeg={6}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img
                  src="/placeholder.svg"
                  alt="CRM High School Campus"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 gold-gradient rounded-xl px-6 py-3 shadow-lg">
                <span className="font-display font-bold text-accent-foreground text-lg">Since 1988</span>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="fade-up" delay={i * 60}>
              <TiltCard className="text-center p-6 rounded-2xl bg-card shadow-lg border border-border h-full" tiltDeg={4}>
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-gold" />
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  <Counter target={stat.value} inView={inView} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
