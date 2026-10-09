import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-4 pb-12 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Banner with increased height across break points */}
        <div className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px] overflow-hidden rounded-[32px]">
          {/* Background Image with top-focused positioning */}
          <Image
            src="/assets/home/hero-banner.jpg"
            alt="Young plants and greenery for the Ankurika nursery"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            className="object-cover object-top" 
          />

          {/* Overlay for Contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          {/* Text Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-8 text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4 leading-tight drop-shadow-md">
              “নতুন প্রাণের সূচনায়”
            </h1>

            <p className="text-sm sm:text-base md:text-lg mb-7 leading-relaxed text-gray-100 drop-shadow">
              আপনার নিজের সবুজ বাগান শুরু করতে চান? আমাদের সাথে যোগ দিন।
            </p>

            <Button
            //   asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg"
            >
              <Link href="/plants">আমাদের সংগ্রহ দেখুন</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}