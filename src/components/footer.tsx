import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-200 mb-3">{title}</h3>
    {children}
  </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </Link>
  </li>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300 mr-4">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="footer-container" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="Reservations">
            <ul className="space-y-2">
              <FooterLink href="/reservations">Make a Reservation</FooterLink>
              <FooterLink href="/view-modify">View/Modify/Cancel</FooterLink>
              <FooterLink href="/get-a-receipt">Get a Receipt</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Customer Support">
            <ul className="space-y-2">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/roadside-assistance">Roadside Assistance</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Aegon Programs">
            <ul className="space-y-2">
              <FooterLink href="/loyalty-program">Loyalty Program</FooterLink>
              <FooterLink href="/business-rentals">Business Rentals</FooterLink>
              <FooterLink href="/long-term-rentals">Long Term Rentals</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="About Aegon">
            <ul className="space-y-2">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/investor-relations">Investor Relations</FooterLink>
            </ul>
          </FooterSection>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p>&copy; {new Date().getFullYear()} Aegon Car Rentals. All rights reserved.</p>
            </div>
            <div className="flex items-center">
              <SocialIcon href="#" icon={<FaFacebookF />} />
              <SocialIcon href="#" icon={<FaTwitter />} />
              <SocialIcon href="#" icon={<FaInstagram />} />
              <SocialIcon href="#" icon={<FaLinkedinIn />} />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white mr-4">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white mr-4">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
