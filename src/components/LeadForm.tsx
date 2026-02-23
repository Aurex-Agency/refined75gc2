import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const LeadForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch shortly to schedule your consultation.");
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <section ref={ref} id="book" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <div className="gold-divider mb-16" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-4"
        >
          Ready to Reveal Your Radiance?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-sm font-light mb-12"
        >
          Complete the form below to book your complimentary consultation and claim
          your $150 new patient credit.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            className="w-full bg-secondary border border-border px-5 py-4 text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="w-full bg-secondary border border-border px-5 py-4 text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={20}
            className="w-full bg-secondary border border-border px-5 py-4 text-foreground text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Start My Transformation
          </button>
        </motion.form>

        <p className="text-muted-foreground text-[10px] mt-6 font-light leading-relaxed">
          By submitting this form, you consent to being contacted by Refined Aesthetics
          via phone, email, or text message regarding your inquiry. Your information
          will never be shared with third parties.
        </p>
      </div>
    </section>
  );
};

export default LeadForm;
