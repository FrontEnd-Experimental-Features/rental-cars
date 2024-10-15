import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>Aegon Car Rentals provides premium and budget-friendly car rental services for all your travel needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/cars" className="hover:text-blue-500 transition-colors">Cars</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Car Street, Auto City, AC 12345</p>
            <p>Email: info@aegoncarrentals.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Aegon Car Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
