import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceBookingForm from "./ServiceBookingForm";

export default function GardeningSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-background">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              আপনার বাগান সাজান <br />
              পেশাদারিত্বের সাথে
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              আপনার বাগান সাজান পেশাদারিত্বের সাথে এবং বাগান রক্ষণাবেক্ষণ। আপনার
              বাগান সাজান সাধারণ থেকে অনবদ্য করে তুলুন আমাদের সেরা দল দ্বারা।
            </p>

            <div>
              <Button
                // asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl text-base font-semibold shadow-lg transition-all"
              >
                <Link href="/plants">সংগ্রহ দেখুন</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-5 w-full">
            <ServiceBookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}