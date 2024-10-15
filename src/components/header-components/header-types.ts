import { ReactNode } from 'react';

export interface MenuItemProps {
  href: string;
  children: ReactNode;
}

export interface MenuCategoryProps {
  title: string;
  children: ReactNode;
}
