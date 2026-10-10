import HomeServiceBookingForm from "@/components/modules/homeService/HomeServiceBookingForm";
import { Suspense } from "react";

export default function HomeServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            হোম সার্ভিস বুকিং
          </h1>
        </div>

        {/* Wrap in Suspense to mark client-rendered date dynamic */}
        <Suspense
          fallback={
            <div className="p-8 text-center">Loading booking form...</div>
          }
        >
          <HomeServiceBookingForm />
        </Suspense>
      </div>
    </main>
  );
}
