import { useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Mail, Facebook, Send } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <ScrollReveal className="relative" animation="fade-left">
            {!isSubmitted ? (
              <form 
                className="space-y-5 relative z-10 bg-card/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-border shadow-xl" 
                onSubmit={(e) => {
                  e.preventDefault();
                  // Simulate an API call or just show success
                  setFormState({ name: "", email: "", message: "" });
                  setIsSubmitted(true);
                }}
              >
                {[
                  { key: "name", label: "Your Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-semibold text-foreground mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formState[field.key as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition text-foreground placeholder:text-muted-foreground"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient text-accent-foreground px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-card/80 backdrop-blur-md p-8 rounded-3xl border border-border shadow-xl text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-6 shadow-lg shadow-gold/20">
                  <div className="w-10 h-10 border-4 border-accent-foreground rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-2xl font-bold -mt-1">✓</span>
                  </div>
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-8">
                  Your message has been sent successfully. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-2.5 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-accent-foreground transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
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
