import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar />
      </header>
      {/* Full width canvas for all page sections */}
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
