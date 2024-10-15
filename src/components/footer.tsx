import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Aegon Car Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
