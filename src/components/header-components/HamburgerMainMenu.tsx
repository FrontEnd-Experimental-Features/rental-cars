import React, { useState, useRef, useEffect } from 'react';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';
import { menuItems } from '../../types/hamburger-menu-items';
import { MenuCategory as MenuCategoryType } from './navigation-types';

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-gray-900 hover:text-teal-500 transition-colors duration-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </button>
      {isMenuOpen && (
        <div 
          ref={menuRef} 
          className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 max-h-[80vh] overflow-y-auto"
        >
          {menuItems.map((category: MenuCategoryType, index: number) => (
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
