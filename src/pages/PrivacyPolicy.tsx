import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/ra-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Refined Aesthetics" className="h-10 md:h-12" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-12">Last updated: March 10, 2026</p>

        <div className="space-y-8 text-muted-foreground font-sans text-sm leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">1. Introduction</h2>
            <p>
              Refined Aesthetics Med Spa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way. Please read this policy carefully. By using our website or services, you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <h3 className="text-foreground font-medium mb-2">Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Date of birth</li>
              <li>Medical history and health information relevant to treatments</li>
              <li>Payment and billing information</li>
              <li>Photos (before and after treatment images)</li>
            </ul>
            <h3 className="text-foreground font-medium mb-2">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide and manage aesthetic treatments and services</li>
              <li>To schedule and confirm appointments</li>
              <li>To process payments and billing</li>
              <li>To communicate with you about your treatments, promotions, and updates</li>
              <li>To improve our website, services, and patient experience</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To respond to your inquiries and customer service requests</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">4. Health Information (HIPAA)</h2>
            <p>
              As a medical spa, we may collect protected health information (PHI) in connection with the treatments we provide. Our use and disclosure of your PHI is governed by the Health Insurance Portability and Accountability Act (HIPAA) and applicable state laws. We maintain appropriate administrative, technical, and physical safeguards to protect your PHI. A separate Notice of Privacy Practices is available at our office and upon request.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">5. Information Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Service providers who assist in operating our business (payment processors, scheduling platforms, email marketing services)</li>
              <li>Healthcare providers involved in your treatment</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">6. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies, pixels, and similar technologies to enhance your browsing experience, analyze website traffic, and deliver targeted advertising. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may limit certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review the privacy policies of any third-party site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">8. Data Security</h2>
            <p>
              We implement commercially reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">9. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-foreground">Refined Aesthetics Med Spa</p>
              <p>Leesburg, VA</p>
              <p>Phone: (703) 794-5689</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
