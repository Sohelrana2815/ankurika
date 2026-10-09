import Link from "next/link";
import { Phone, Mail } from "lucide-react";

// Inline Brand Icon Components
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-900 text-white dark:bg-emerald-950">
      <div className="mx-auto max-w-[1536px] px-4 py-10 sm:px-6 lg:px-8">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {/* Column 1: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wide">Contact Info</h3>
            <div className="space-y-2.5 text-sm text-emerald-100/90">
              <a
                href="tel:+1233456779"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+123 345-6779</span>
              </a>
              <a
                href="mailto:info@ankurika.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@ankurika.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-2.5 text-sm text-emerald-100/90 md:items-center">
            <Link href="/brands" className="transition-colors hover:text-white">
              Brands
            </Link>
            <Link
              href="/careers"
              className="transition-colors hover:text-white"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-lg font-bold tracking-wide">Social Media</h3>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-900 transition-transform hover:scale-110"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-900 transition-transform hover:scale-110"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-900 transition-transform hover:scale-110"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-900 transition-transform hover:scale-110"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright Bar */}
        <div className="mt-8 border-t border-emerald-800/80 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-emerald-200/80 sm:flex-row">
            <p>Copyright (Ankurika) plants</p>
            <p>© 2026 Ankurika</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
