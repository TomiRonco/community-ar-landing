import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutUsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <FooterSection />
        <ScrollToTop />
      </div>
    </>
  );
}