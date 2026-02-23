import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/ra-logo.png";

const EmpathySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(212 45% 9%)' }}>
      {/* Step-repeat logo pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <div className="gold-divider mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight"
        >
          Tired of a Skincare Routine That Doesn't Deliver?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed font-light"
        >
          You've invested in countless creams and serums, hoping to turn back the
          clock, only to feel disappointed by the results. At Refined Aesthetics,
          we move beyond temporary fixes. Our team pays scrupulous attention to each
          patient's goals and we take extra time to educate and ensure your understanding
          of recommended treatments, delivering lasting, natural-looking results you deserve.
        </motion.p>

        <div className="gold-divider mt-16" />
      </div>
    </section>
  );
};

export default EmpathySection;