import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          aria-label="অঙ্কুরিকা Home"
          className="text-2xl sm:text-3xl font-extrabold text-emerald-900 dark:text-emerald-500 tracking-tight"
        >
          অঙ্কুরিকা
        </Link>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <NavLinks />
        </nav>

        {/* Mobile Navigation Toggle */}
        <MobileNav />
      </div>
    </header>
  );
}
