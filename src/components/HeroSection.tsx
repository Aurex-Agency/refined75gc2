import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spa.jpg";

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
          Your Journey to Timeless Beauty Begins Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Experience bespoke aesthetic treatments, artfully delivered by our expert
          practitioners to enhance your natural radiance.
        </motion.p>

        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Claim Your New Patient Offer — $150 Off
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-muted-foreground text-xs tracking-wider uppercase font-sans"
        >
          <span>Over 1,000 5-Star Reviews</span>
          <span className="hidden md:inline text-primary">✦</span>
          <span>Led by Top-Rated Nurse Injectors</span>
          <span className="hidden md:inline text-primary">✦</span>
          <span>As Seen in Luxe Living Magazine</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
