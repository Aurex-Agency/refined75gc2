import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const results = [
  { treatment: "Lip Enhancement", concern: "Volume & Definition" },
  { treatment: "Forehead Relaxer", concern: "Fine Lines & Wrinkles" },
  { treatment: "Cheek Filler", concern: "Volume Loss & Contour" },
];

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderValues, setSliderValues] = useState([50, 50, 50]);

  const handleSlider = (index: number, value: number) => {
    setSliderValues((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

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
          Drag the slider to see the transformation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, i) => (
            <motion.div
              key={result.treatment}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="relative"
            >
              <div className="relative aspect-square bg-secondary overflow-hidden select-none">
                {/* "After" side */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary text-xs tracking-widest uppercase font-sans">After</span>
                </div>
                {/* "Before" side with clip */}
                <div
                  className="absolute inset-0 bg-charcoal-lighter flex items-center justify-center"
                  style={{ clipPath: `inset(0 ${100 - sliderValues[i]}% 0 0)` }}
                >
                  <span className="text-muted-foreground text-xs tracking-widest uppercase font-sans">Before</span>
                </div>
                {/* Slider line */}
                <div
                  className="absolute top-0 bottom-0 w-px bg-primary"
                  style={{ left: `${sliderValues[i]}%` }}
                />
                {/* Invisible range slider */}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValues[i]}
                  onChange={(e) => handleSlider(i, Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                  aria-label={`Before and after slider for ${result.treatment}`}
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
