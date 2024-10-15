import React, { useState } from 'react';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';
import { menuItems } from '../../types/menu-items';

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu}
        className="text-gray-900 hover:text-teal-500 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {menuItems.map((category, index) => (
            <MenuCategory key={index} title={category.title}>
              {category.items.map((item, itemIndex) => (
                <MenuItem key={itemIndex} href={item.href}>
                  {item.label}
                </MenuItem>
              ))}
            </MenuCategory>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
