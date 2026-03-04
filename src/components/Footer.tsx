import { motion } from "framer-motion";
import { Phone, MapPin, Facebook, Mail, Heart } from "lucide-react";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-navy dark:bg-card text-primary-foreground dark:text-foreground py-12"
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/crm-logo.jpg"
              alt="CRM High School logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-display font-bold text-base">CRM High School</h3>
              <p className="text-primary-foreground/50 dark:text-muted-foreground text-xs">Chulkana Dham • Est. 1988</p>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Permanent Recognized School Code: 14208. Affiliated to Haryana State Board of Education.
            Providing quality education since 1988.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/60 dark:text-muted-foreground">
            {["About", "Results", "Teachers", "Gallery", "Events", "Admissions"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold">Get in Touch</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60 dark:text-muted-foreground">
            <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" />Ganaur Road, Chulkana, Samalkha, Panipat, Haryana – 132101</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />094662 70877</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" />crmhighschool14208@gmail.com</p>
          </div>
          <div className="flex gap-3 mt-4">
            {[Facebook].map((Icon, i) => (
              <motion.a
                key={i}
                href="https://facebook.com/crm14208"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 dark:border-border pt-6 text-center text-sm text-primary-foreground/40 dark:text-muted-foreground">
        <p>© {new Date().getFullYear()} CRM High School Chulkana Dham. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1 mt-1">
          Made with <Heart className="w-3 h-3 text-destructive" /> School Code: 14208
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
