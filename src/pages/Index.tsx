import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ClinicGallery from "@/components/ClinicGallery";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ClinicGallery />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
