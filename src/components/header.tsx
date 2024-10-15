'use client'

import { FC } from 'react';
import dynamic from 'next/dynamic';

const DarkModeToggle = dynamic(() => import('./dark-mode-toggle'), {
  ssr: false,
});

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-800 dark:to-purple-800 text-white py-6 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-yellow-300">Aegon</span> Car Rentals
        </h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Cars</a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Contact</a>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
