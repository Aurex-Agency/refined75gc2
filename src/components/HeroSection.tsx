import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spa.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
        >
          Feel Beautiful, Look Beautiful
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Inside Refined Aesthetics you'll find a cozy, relaxing space and warm, welcoming
          faces, where experienced medical professionals deliver remarkable results every day.
        </motion.p>

        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Claim Your $75 New Patient Gift Card
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-muted-foreground text-xs tracking-wider uppercase font-sans"
        >
          <span>Led by Sarah Safa, MS, PA-C</span>
          <span className="hidden md:inline text-primary">✦</span>
          <span>Top Expert Injector on the East Coast</span>
          <span className="hidden md:inline text-primary">✦</span>
          <span>6,000+ Providers Trained Nationwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
