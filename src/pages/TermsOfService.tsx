import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/ra-logo.png";

const TermsOfService = () => {
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
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-12">Last updated: March 10, 2026</p>

        <div className="space-y-8 text-muted-foreground font-sans text-sm leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website and services of Refined Aesthetics Med Spa ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">2. Services Overview</h2>
            <p>
              Refined Aesthetics Med Spa provides aesthetic and cosmetic treatments including, but not limited to, Botox, dermal fillers, laser treatments, skincare services, and body contouring procedures. All medical treatments are performed by or under the supervision of licensed healthcare professionals. Services are provided at our location in Leesburg, Virginia.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age to use our services or submit information through our website. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">4. Appointments and Cancellations</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All appointments are subject to availability and confirmation by our office.</li>
              <li>We require at least 24 hours notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.</li>
              <li>Repeated no-shows may result in the requirement of a deposit for future appointments or restriction of booking privileges.</li>
              <li>We reserve the right to cancel or reschedule appointments at our discretion due to unforeseen circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">5. Informed Consent</h2>
            <p>
              Prior to receiving any medical aesthetic treatment, you will be required to complete an informed consent form. This form will outline the nature of the procedure, expected results, potential risks, side effects, and alternatives. You acknowledge that no guarantee of specific results can be made and that individual outcomes may vary. You are responsible for disclosing your complete medical history, current medications, allergies, and any other relevant health information.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">6. Payment and Pricing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Payment is due at the time of service unless otherwise arranged.</li>
              <li>We accept major credit cards, debit cards, and other payment methods as displayed at our office.</li>
              <li>Prices are subject to change without prior notice. Promotional pricing and gift card offers are subject to specific terms and conditions and may not be combined with other offers unless explicitly stated.</li>
              <li>Aesthetic treatments are elective and generally not covered by health insurance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">7. Promotional Offers and Gift Cards</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Promotional offers, discounts, and gift cards are subject to specific terms and expiration dates as stated at the time of issuance.</li>
              <li>Gift cards are non-refundable and non-transferable unless required by applicable law.</li>
              <li>We reserve the right to modify or discontinue any promotion at any time without prior notice.</li>
              <li>Promotional offers cannot be applied retroactively to previously booked or completed services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">8. Refund and Satisfaction Policy</h2>
            <p>
              Due to the nature of medical aesthetic treatments, all sales are final. Refunds are generally not provided for completed treatments. If you have concerns about your treatment results, please contact our office within 14 days of your procedure so that we can discuss your options, which may include a follow-up appointment or corrective treatment at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">9. Website Use</h2>
            <p className="mb-3">When using our website, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Scrape, copy, or reproduce website content without written permission</li>
              <li>Submit false or misleading information through any forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">10. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, graphics, and design elements, is the property of Refined Aesthetics Med Spa and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">11. Before and After Photos</h2>
            <p>
              Before and after photos displayed on our website are of actual patients who have provided written consent for their images to be used. Results shown are individual and may not be representative of all patient experiences. These images are for illustrative purposes only and should not be interpreted as a guarantee of specific results.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Refined Aesthetics Med Spa and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim related to our services shall not exceed the amount you paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Refined Aesthetics Med Spa and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising out of your use of our website or services, your violation of these terms, or your violation of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">14. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without regard to its conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved in the courts located in Loudoun County, Virginia.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">15. Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg mb-3">16. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
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

export default TermsOfService;
