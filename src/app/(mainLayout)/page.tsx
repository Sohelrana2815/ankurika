import HeroSection from "@/components/modules/home/HeroSection";
import ProductsServicesSection from "@/components/modules/home/ProductsServicesSection";
import GardeningSection from "@/components/modules/home/GardeningSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. Products & Services Section */}
      <ProductsServicesSection />

      {/* 3. Professional Gardening Section */}
      <GardeningSection />
    </main>
  );
}
