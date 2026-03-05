import { lazy, Suspense } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";

const EmpathySection = lazy(() => import("@/components/EmpathySection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
const LeadForm = lazy(() => import("@/components/LeadForm"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <Suspense fallback={null}>
        <EmpathySection />
        <ServicesSection />
        <BeforeAfterSection />
        <AuthoritySection />
        <LeadForm />
        <FAQSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
