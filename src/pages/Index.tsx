import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CourseGrid } from "@/components/CourseGrid";
import { FeaturesStrip } from "@/components/FeaturesStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <HeroSection videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID" />
      <CourseGrid />
      <FeaturesStrip />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
