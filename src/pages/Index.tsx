import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CareerSection from "@/components/CareerSection";
import Stacks from "@/components/Stacks";
import Languages from "@/components/Languages";
import College from "@/components/College";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CareerSection />
      <College />
      <Stacks />
      <Languages />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
