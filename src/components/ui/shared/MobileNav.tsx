"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@base-ui/react";
import { NAV_ITEMS } from "@/constants/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-emerald-800 transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>

      {/* Mobile Menu Dropdown Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background/98 backdrop-blur-md border-b border-border p-6 shadow-xl flex flex-col gap-4 z-50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base transition-colors ${
                pathname === item.href
                  ? "text-emerald-800 font-bold dark:text-emerald-400"
                  : "text-muted-foreground hover:text-foreground font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
