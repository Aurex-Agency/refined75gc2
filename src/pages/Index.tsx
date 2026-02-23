import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AuthoritySection from "@/components/AuthoritySection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <EmpathySection />
      <ServicesSection />
      <BeforeAfterSection />
      <AuthoritySection />
      <LeadForm />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
