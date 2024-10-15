'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-500">
                Aegon
              </span>
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Car Rentals
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cars">Cars</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Book Now
            </button>
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
                  <MenuCategory title="Car Types">
                    <MenuItem href="/cars/sedan">Sedan</MenuItem>
                    <MenuItem href="/cars/suv">SUV</MenuItem>
                    <MenuItem href="/cars/luxury">Luxury</MenuItem>
                  </MenuCategory>
                  <MenuCategory title="Services">
                    <MenuItem href="/services/airport-transfer">Airport Transfer</MenuItem>
                    <MenuItem href="/services/chauffeur">Chauffeur Service</MenuItem>
                    <MenuItem href="/services/long-term">Long-term Rental</MenuItem>
                  </MenuCategory>
                  <MenuCategory title="Support">
                    <MenuItem href="/faq">FAQ</MenuItem>
                    <MenuItem href="/support">Customer Support</MenuItem>
                  </MenuCategory>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-900 hover:text-teal-500 font-medium transition-colors duration-300">
    {children}
  </Link>
);

const MenuCategory: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="px-4 py-2">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <ul className="mt-2 space-y-2">
      {children}
    </ul>
  </div>
);

const MenuItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-500">
      {children}
    </Link>
  </li>
);

export default Header;
