import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import baBotox from "@/assets/ba-botox.webp";
import baSkincare from "@/assets/ba-skincare.webp";
import baTreatment from "@/assets/ba-treatment.webp";

const results = [
  { image: baBotox, treatment: "BOTOX® & DAXXIFY®", concern: "Fine Lines & Wrinkles" },
  { image: baSkincare, treatment: "Therapeutic Skincare", concern: "Radiance & Rejuvenation" },
  { image: baTreatment, treatment: "Advanced Treatments", concern: "Precision & Results" },
];

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground text-center mb-6"
        >
          Real Patients, Real Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 text-sm font-light"
        >
          See the transformations our expert team delivers every day
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, i) => (
            <motion.div
              key={result.treatment}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={result.image}
                  alt={`${result.treatment} results`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-foreground text-sm font-serif">{result.treatment}</p>
                <p className="text-muted-foreground text-xs font-light mt-1">{result.concern}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#book"
            className="text-primary text-xs font-sans font-semibold tracking-widest uppercase hover:text-gold-light transition-colors"
          >
            Claim your $75 gift card and book your consultation →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;