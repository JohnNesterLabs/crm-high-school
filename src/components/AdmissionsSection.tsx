import { ScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";
import { FileText, UserPlus, ClipboardCheck, CheckCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "Get Prospectus", desc: "Collect or download the admission form" },
  { icon: UserPlus, title: "Fill Application", desc: "Complete the form with required documents" },
  { icon: ClipboardCheck, title: "Entrance Test", desc: "Appear for the admission assessment" },
  { icon: CheckCircle, title: "Confirmation", desc: "Pay fees and confirm enrollment" },
];

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${6 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: 4 + Math.random() * 8,
          height: 4 + Math.random() * 8,
        }}
      />
    ))}
  </div>
);

const AdmissionsSection = () => (
  <section id="admissions" className="section-padding bg-secondary relative overflow-hidden">
    <Particles />

    <div className="container mx-auto relative">
      <div className="text-center mb-12">
        <ScrollReveal animation="zoom-in">
          <h2 className="section-title">Admissions 2026-27</h2>
        </ScrollReveal>
        <ScrollReveal animation="zoom-in" delay={80}>
          <p className="section-subtitle">
            Join the CRM family — Nursery to Class 12th
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} animation="flip-x" delay={i * 200} className="relative">
            <TiltCard tiltDeg={4} className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border h-full">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-xs font-bold text-gold mb-2">Step {i + 1}</div>
              <h4 className="font-display font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </TiltCard>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/40" />
            )}
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal animation="zoom-out" duration={0.9} className="text-center">
        <a
          href="tel:09466270877"
          className="inline-block gold-gradient text-accent-foreground px-10 py-4 rounded-full font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform shadow-lg"
        >
          Apply Now — Call 094662 70877
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default AdmissionsSection;
