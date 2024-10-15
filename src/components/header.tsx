'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HamburgerMainMenu from './header-components/HamburgerMainMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-teal-500">Aegon</span>
              <span className="ml-2 text-base font-semibold text-gray-900">Car Rentals</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded-md text-xs transition-colors duration-300">
              Book Now
            </button>
            <HamburgerMainMenu />
          </div>
        </div>
      </div>
      {/* Theme color line */}
      <div className="h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>
    </header>
  );
};

export default Header;
