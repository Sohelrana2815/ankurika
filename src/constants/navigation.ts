export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Plants", href: "/plants" },
  { label: "Plant Pots", href: "/plant-pots" },
  { label: "Instruments", href: "/instruments" },
  { label: "Plant with Pot", href: "/plant-with-pot" },
  { label: "Home Service", href: "/home-service" },
  { label: "Contact", href: "/contact" },
];
