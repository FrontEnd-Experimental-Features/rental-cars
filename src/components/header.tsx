'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-slate-800 shadow-md' : 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Aegon
              </span>
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
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
          <div className="flex items-center">
            <DarkModeToggle />
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-300">
    {children}
  </Link>
);

export default Header;
