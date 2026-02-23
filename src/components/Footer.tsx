import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div>
            <p className="font-serif text-xl tracking-widest text-foreground uppercase mb-4">
              Refined <span className="text-primary">Aesthetics</span>
            </p>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Where science meets artistry. Elevating your natural beauty with
              precision and care.
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-xs font-sans font-semibold tracking-widest uppercase mb-4">
              Visit Us
            </h4>
            <div className="text-muted-foreground text-sm font-light space-y-1">
              <p>1200 Wilshire Boulevard, Suite 450</p>
              <p>Beverly Hills, CA 90210</p>
              <p className="mt-3">(310) 555-0178</p>
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-xs font-sans font-semibold tracking-widest uppercase mb-4">
              Hours
            </h4>
            <div className="text-muted-foreground text-sm font-light space-y-1">
              <p>Monday – Friday: 9am – 6pm</p>
              <p>Saturday: 10am – 4pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs font-light">
          <p>© 2026 Refined Aesthetics. All rights reserved.</p>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
