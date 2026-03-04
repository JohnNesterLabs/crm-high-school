import { useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Mail, Facebook, Send } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <ScrollReveal animation="zoom-in">
            <h2 className="section-title">Contact Us</h2>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={80}>
            <p className="section-subtitle">
              We'd love to hear from you
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal animation="fade-left">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { key: "name", label: "Your Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
              ].map((field, i) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    value={formState[field.key as keyof typeof formState]}
                    onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-foreground"
                    placeholder={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition resize-none text-foreground"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="gold-gradient text-accent-foreground px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Info + Map */}
          <ScrollReveal animation="fade-right" delay={80}>
            <div className="space-y-6">
              <div className="space-y-4">
              {[
                { icon: MapPin, text: "Ganaur Road, Chulkana, Samalkha, Panipat, Haryana – 132101" },
                { icon: Phone, text: "094662 70877" },
                { icon: Mail, text: "crmhighschool14208@gmail.com" },
                { icon: Facebook, text: "facebook.com/crm14208" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-foreground text-sm mt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={120} className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                title="CRM High School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.123!2d76.9!3d29.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChulkana%2C+Panipat!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
