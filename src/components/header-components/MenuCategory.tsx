import React, { useState } from 'react';
import { MenuCategoryProps } from './navigation-types';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-4 flex justify-between items-center text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200 ease-in-out"
      >
        <span className="uppercase tracking-wide">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-gray-50"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCategory;
