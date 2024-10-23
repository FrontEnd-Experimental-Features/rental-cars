export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}
