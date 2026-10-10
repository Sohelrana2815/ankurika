import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-4 pb-8 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Height increased across break points to show the person fully */}
        <div className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] overflow-hidden rounded-[32px]">
          {/* Hero Image - focused slightly higher using object-[center_20%] */}
          <Image
            src="/assets/contact/contact-hero.jpg"
            alt="যোগাযোগ করুন - Ankurika Contact"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            className="object-cover object-[center_20%]"
          />

          {/* Contrast Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          {/* Banner Text Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center max-w-2xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide drop-shadow-md">
              যোগাযোগ করুন
            </h1>
            <p className="text-lg sm:text-xl font-bold tracking-widest text-emerald-100 uppercase drop-shadow">
              CONTACT US
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
