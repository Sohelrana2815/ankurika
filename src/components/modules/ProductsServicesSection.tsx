import { services } from "@/data/goods-service-data";
import ServiceCard from "./ServiceCard";

export default function ProductsServicesSection() {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-background">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            পণ্য ও পরিষেবা
          </h2>
        </div>

        {/* Responsive Grid Layout matching 3 top / 2 bottom layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First 3 cards (Top Row) */}
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {services.slice(3, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
