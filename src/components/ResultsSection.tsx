import { useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Star } from "lucide-react";

type Topper = {
  name: string;
  class: string;
  percentage: string;
  stream: string;
  image?: string;
};

import tanishaImg from "@/assets/toppers/tanisha.jpg";
import anshuImg from "@/assets/toppers/anshu.jpg";
import deepanshuImg from "@/assets/toppers/deepanshu.jpg";
import kabirImg from "@/assets/toppers/kabir.jpg";
import sahilImg from "@/assets/toppers/sahil.jpg";
import anviImg from "@/assets/toppers/anvi.jpg";
import simranImg from "@/assets/toppers/simran.jpg";
import priyanshiImg from "@/assets/toppers/priyanshi.jpg";

const toppers: Topper[] = [
  { name: "Tanisha", class: "10th", percentage: "97%", stream: "General", image: tanishaImg },
  { name: "Anshu", class: "10th", percentage: "96%", stream: "General", image: anshuImg },
  { name: "Deepanshu", class: "10th", percentage: "96%", stream: "General", image: deepanshuImg },
  { name: "Kabir", class: "10th", percentage: "95%", stream: "General", image: kabirImg },
  { name: "Sahil", class: "10th", percentage: "94.8%", stream: "General", image: sahilImg },
  { name: "Anvi", class: "10th", percentage: "94.2%", stream: "General", image: anviImg },
  { name: "Simran", class: "10th", percentage: "94%", stream: "General", image: simranImg },
  { name: "Priyanshi", class: "10th", percentage: "94%", stream: "General", image: priyanshiImg },
];

const FlipCard = ({ topper, i }: { topper: Topper; i: number }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <ScrollReveal animation="flip-x" delay={i * 200} duration={0.6}>
      <div
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
            <div className="w-16 h-16 rounded-full navy-gradient flex items-center justify-center mb-3 overflow-hidden border-2 border-gold/50 shadow-inner">
              {topper.image ? (
                <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-primary-foreground font-display font-bold text-xl">
                  {topper.name.charAt(0)}
                </span>
              )}
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
      </div>
    </ScrollReveal>
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
        <ScrollReveal animation="zoom-in">
          <div className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-6 py-2 rounded-full font-semibold text-sm mb-6">
            <Trophy className="w-4 h-4" /> Best Results in Block & District
          </div>
        </ScrollReveal>
        <ScrollReveal animation="zoom-in" delay={80}>
          <h2 className="section-title">Academic Excellence</h2>
        </ScrollReveal>
        <ScrollReveal animation="zoom-in" delay={160}>
          <p className="section-subtitle">
            Our students consistently achieve outstanding results — hover over cards to reveal scores!
          </p>
        </ScrollReveal>
      </div>

      <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
        {/* Statistics Panel */}
        <ScrollReveal animation="fade-right">
          <div className="bg-card shadow-xl rounded-3xl border border-border overflow-hidden h-full flex flex-col">
            <div className="navy-gradient p-6 text-center text-primary-foreground">
              <h3 className="font-display font-bold text-2xl tracking-wide mb-1 text-gold">
                10th CLASS TOPPERS
              </h3>
              <p className="font-semibold tracking-widest text-sm opacity-90 uppercase">
                Session 2024-2025
              </p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-semibold text-muted-foreground">Total Students</span>
                  <span className="font-display font-bold text-xl text-foreground">44</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-semibold text-accent-cyan">Above 90%</span>
                  <span className="font-display font-bold text-xl text-foreground">19</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-semibold text-muted-foreground">80% - 90%</span>
                  <span className="font-display font-bold text-xl text-foreground">14</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-muted-foreground">75% - 80%</span>
                  <span className="font-display font-bold text-xl text-foreground">11</span>
                </div>
              </div>
            </div>

            <div className="mt-auto gold-gradient p-5 text-center">
              <p className="font-semibold text-accent-foreground text-sm leading-snug">
                Prof. Pawan Kumar (Chairman of HBSE Bhiwani) honored our school & student at CM House for Excellence Result
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Toppers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {toppers.map((t, i) => (
            <FlipCard key={t.name} topper={t} i={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
