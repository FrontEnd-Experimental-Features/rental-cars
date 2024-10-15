export interface MenuItem {
  href: string;
  label: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuItems: MenuCategory[] = [
  {
    title: "Car Types",
    items: [
      { href: "/cars/sedan", label: "Sedan" },
      { href: "/cars/suv", label: "SUV" },
      { href: "/cars/luxury", label: "Luxury" }
    ]
  },
  {
    title: "Services",
    items: [
      { href: "/services/airport-transfer", label: "Airport Transfer" },
      { href: "/services/chauffeur", label: "Chauffeur Service" },
      { href: "/services/long-term", label: "Long-term Rental" }
    ]
  },
  {
    title: "Support",
    items: [
      { href: "/faq", label: "FAQ" },
      { href: "/support", label: "Customer Support" }
    ]
  }
];
