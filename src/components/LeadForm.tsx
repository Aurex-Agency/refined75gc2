import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import logo from "@/assets/ra-logo.png";

const LeadForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://site.refinedaestheticsmedspa.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={ref} id="book" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(212 45% 9%)' }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="relative z-10 container mx-auto px-6 max-w-xl text-center">
        <div className="gold-divider mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-4"
        >
          Claim Your $75 New Patient Gift Card Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-sm font-light mb-12"
        >
          Complete the form below to book your complimentary consultation and claim
          your $75 new patient gift card.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            src="https://link.alphacrm.io/widget/form/eRczUcfB3QlUQV8iep2B"
            style={{ width: "100%", height: "626px", border: "none", borderRadius: "3px" }}
            id="inline-eRczUcfB3QlUQV8iep2B"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="$75 OFF New LP 75gc2"
            data-height="626"
            data-layout-iframe-id="inline-eRczUcfB3QlUQV8iep2B"
            data-form-id="eRczUcfB3QlUQV8iep2B"
            title="$75 OFF New LP 75gc2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
