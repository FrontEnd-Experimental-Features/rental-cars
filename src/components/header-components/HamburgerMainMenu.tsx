import React, { useState, useRef, useEffect } from 'react';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';
import { useMenuData } from '../../hooks/useMenuData';
import Loading from '../common/Loading';
import ErrorDisplay from '../common/Error';

const HamburgerMainMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { menuItems, isLoading, error } = useMenuData();

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

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay message={error} />;

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
          {menuItems.map((category) => (
            <MenuCategory key={category.id} title={category.title}>
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

export default HamburgerMainMenu;
