"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm lg:text-base font-semibold transition-colors ${
              isActive
                ? "text-emerald-800 dark:text-emerald-400"
                : "text-foreground/80 hover:text-emerald-800 dark:hover:text-emerald-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
