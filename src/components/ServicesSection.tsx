import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBotox from "@/assets/service-botox.webp";
import serviceFillers from "@/assets/service-fillers.webp";
import serviceLasers from "@/assets/service-lasers.webp";
import serviceSkincare from "@/assets/service-skincare.webp";

const services = [
  {
    image: serviceBotox,
    title: "BOTOX® & DAXXIFY®",
    description:
      "BOTOX® and DAXXIFY® are almost unbeatable when it comes to reducing fine lines and wrinkles. A cost-effective treatment with little downtime that rejuvenates and prevents further damage.",
  },
  {
    image: serviceFillers,
    title: "Fillers & Skinvive",
    description:
      "With JUVÉDERM®, RHA, and Skinvive, discover a more youthful appearance. We use various facial volumizers to smooth lines, plump up wrinkles and restore harmony to your face.",
  },
  {
    image: serviceLasers,
    title: "Light Therapy, Lasers & Peels",
    description:
      "Repair and renew damaged skin with our advanced light therapy, laser treatments, and chemical peels for a radiant, rejuvenated complexion.",
  },
  {
    image: serviceSkincare,
    title: "Therapeutic Skincare",
    description:
      "Products backed by true science that complement non-surgical treatments. Our experienced skincare professionals create a customized regimen for your skin's needs.",
  },
];

const ServicesSection = () => {
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
          Explore Our Most-Requested Treatments
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="group"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">
                {service.description}
              </p>
              <a
                href="#book"
                className="text-primary text-xs font-sans font-semibold tracking-widest uppercase hover:text-gold-light transition-colors"
              >
                Claim Your $75 Gift Card →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;