import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-teal-500 transition-colors duration-300">
    {children}
  </Link>
);

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection title="About Us">
            <p className="text-gray-600">Aegon Car Rentals provides premium and budget-friendly car rental services for all your travel needs.</p>
          </FooterSection>
          
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/cars">Cars</FooterLink></li>
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </FooterSection>
          
          <FooterSection title="Contact Us">
            <p className="text-gray-600">123 Car Street, Auto City, AC 12345</p>
            <p className="text-gray-600">Email: info@aegoncarrentals.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </FooterSection>
          
          <FooterSection title="Follow Us">
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<FaFacebookF className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<FaTwitter className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<FaInstagram className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<FaLinkedinIn className="w-5 h-5" />} />
            </div>
          </FooterSection>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Aegon Car Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
