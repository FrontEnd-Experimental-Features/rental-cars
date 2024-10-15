import React from 'react';
import Link from 'next/link';
import { MenuItemProps } from './navigation-types';

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => (
  <li>
    <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500">
      {children}
    </Link>
  </li>
);

export default MenuItem;
