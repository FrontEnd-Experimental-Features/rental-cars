'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderMenu from './header-components/HeaderMenu';

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
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Book Now
            </button>
            <HeaderMenu />
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

export default Header;
