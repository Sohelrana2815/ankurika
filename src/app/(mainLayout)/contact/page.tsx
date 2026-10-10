import ContactHero from "@/components/modules/contact/ContactHero";
import ContactSection from "@/components/modules/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
