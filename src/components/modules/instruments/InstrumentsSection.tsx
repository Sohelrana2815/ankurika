import { instruments } from "@/data/instrument-data";
import InstrumentCard from "./InstrumentCard";

export default function InstrumentsSection() {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-background">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            বাগান সামগ্রী (Instruments)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            সহজে ও সঠিক উপায়ে বাগান পরিচর্যার জন্য প্রয়োজনীয় সকল যন্ত্রপাতি সংগ্রহ করুন।
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instruments.map((item) => (
            <InstrumentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}