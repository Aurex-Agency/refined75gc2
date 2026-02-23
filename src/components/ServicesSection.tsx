import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceInjectables from "@/assets/service-injectables.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBody from "@/assets/service-body.jpg";

const services = [
  {
    image: serviceInjectables,
    title: "BOTOX®, DAXXIFY® & Fillers",
    description:
      "BOTOX® & DAXXIFY® provide solutions for many signs of aging, while fillers and Skinvive restore volume, improve facial symmetry, and return balance to your face.",
  },
  {
    image: serviceSkin,
    title: "Light Therapy, Lasers & Peels",
    description:
      "Repair and renew damaged skin with our advanced light therapy, laser treatments, and chemical peels for a radiant, rejuvenated complexion.",
  },
  {
    image: serviceBody,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
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
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
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
