import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from './navigation-types';

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => (
  <li>
    <Link 
      href={href} 
      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  </li>
);

export default MenuItem;
