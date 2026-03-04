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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > 200 && y > lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/crm-logo.jpg"
            alt="CRM High School logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <div className="font-display font-bold text-sm leading-tight text-primary-foreground dark:text-foreground drop-shadow-md">
              CRM High School
            </div>
            <div className="text-[10px] text-gold font-medium">Est. 1988</div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 dark:text-foreground/80 hover:text-gold transition-colors drop-shadow-sm"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-full text-primary-foreground/80 dark:text-foreground/80 hover:text-gold transition-colors"
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
          className="lg:hidden text-primary-foreground dark:text-foreground"
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
            className="lg:hidden glass overflow-hidden"
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
    </motion.nav>
  );
};

export default Navbar;
