import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImage from "@/assets/sarah-safa.jpg";
import { Check } from "lucide-react";

const differentiators = [
  {
    title: "Expert-Led Care",
    description:
      "Our practice is led by Sarah Safa, MS, PA-C — a pioneer of facial aesthetics and one of the top expert injectors on the East Coast, having successfully trained over 6,000 aesthetic medical providers nationwide.",
  },
  {
    title: "Bespoke Treatment Plans",
    description:
      "We don't believe in one-size-fits-all. Your journey begins with an in-depth consultation to create a plan tailored to your unique anatomy and goals. We invest in ongoing training and mentorship for our entire team.",
  },
  {
    title: "Non-Surgical Precision",
    description:
      "Our practice is known for meticulous dexterity with laser treatments, advanced injections, and facial mapping — delivering perfectionist quality and natural-looking results. Experience matters.",
  },
];

const AuthoritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          The Refined Aesthetics Difference
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={founderImage}
              alt="Sarah Safa, MS, PA-C — Owner and Lead Practitioner at Refined Aesthetics"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
