import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Teachers", href: "#teachers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ scrolled = false }: { scrolled?: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav
      className={`transition-colors duration-300 ${
        scrolled ? "glass shadow-md" : "bg-background/95 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/crm-logo.jpg"
            alt="CRM High School logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div
              className={`font-display font-bold text-sm sm:text-base leading-tight ${
                scrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              CRM High School
            </div>
            <div
              className={`text-[10px] font-medium ${scrolled ? "text-muted-foreground" : "text-gold"}`}
            >
              Est. 1988
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-4 lg:gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/90 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-full text-foreground/90 hover:text-gold transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
          <a
            href="tel:09466270877"
            className="flex items-center gap-1.5 text-sm gold-gradient text-accent-foreground px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            <Phone className="w-3.5 h-3.5" /> Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-gold transition py-1"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggle}
                  className="p-2 rounded-full text-foreground hover:text-gold transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="tel:09466270877"
                  className="flex items-center gap-1.5 text-sm gold-gradient text-accent-foreground px-4 py-2 rounded-full font-semibold w-fit"
                >
                  <Phone className="w-3.5 h-3.5" /> 094662 70877
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
