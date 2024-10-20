import React from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'prev' | 'next';
}

const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} z-10 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 ${direction === 'prev' ? 'left-0' : 'right-0'}`}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    {direction === 'prev' ? (
      <IoChevronBackOutline className="w-6 h-6 text-teal-500" />
    ) : (
      <IoChevronForwardOutline className="w-6 h-6 text-teal-500" />
    )}
  </div>
);

export default CustomArrow;
