import React from 'react';
import { MenuCategoryProps } from './header-types';

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, children }) => (
  <div className="px-4 py-2">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <ul className="mt-2 space-y-2">
      {children}
    </ul>
  </div>
);

export default MenuCategory;
