import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'next' | 'prev';
}

const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} custom-arrow ${direction} z-10 bg-white rounded-full shadow-lg p-3 hover:bg-teal-50 transition-colors duration-200 border border-teal-200`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      {direction === 'next' ? (
        <FaChevronRight className="text-teal-600 text-xl" />
      ) : (
        <FaChevronLeft className="text-teal-600 text-xl" />
      )}
    </div>
  );
};

export default CustomArrow;
