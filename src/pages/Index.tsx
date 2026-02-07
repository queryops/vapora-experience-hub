import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductsGrid from "@/components/ProductsGrid";
import InstagramFeed from "@/components/InstagramFeed";
import ExperienceSection from "@/components/ExperienceSection";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <ProductsGrid />
        <InstagramFeed />
        <ExperienceSection />
        <PackagesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
