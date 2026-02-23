import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-widest text-foreground uppercase">
          Refined <span className="text-primary">Aesthetics</span>
        </a>
        <a
          href="#book"
          className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Book Consultation
        </a>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
