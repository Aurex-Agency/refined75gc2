import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What can I expect during my first consultation?",
    a: "Your initial consultation is a relaxed, one-on-one conversation with one of our expert practitioners. We'll discuss your aesthetic goals, evaluate your unique facial anatomy, and develop a personalized treatment plan — all with absolutely no pressure or obligation.",
  },
  {
    q: "Are the treatments painful?",
    a: "Patient comfort is our top priority. Most treatments involve minimal discomfort. We use advanced numbing techniques, including topical anesthetics and vibration technology, to ensure a virtually pain-free experience.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "That's exactly what your complimentary consultation is for. Our practitioners are trained to listen to your concerns, analyze your features, and recommend the most effective treatments to achieve your desired outcome.",
  },
  {
    q: "Is there any downtime?",
    a: "Most of our treatments require little to no downtime. For injectables, you can typically return to your daily activities immediately. Some treatments may involve mild redness or swelling for 24-48 hours. We'll provide detailed aftercare instructions tailored to your specific treatment.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          Your Questions, Answered
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border px-6"
              >
                <AccordionTrigger className="font-serif text-foreground text-left text-base py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
