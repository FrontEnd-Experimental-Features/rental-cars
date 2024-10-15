import React from 'react';

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-500">
      <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </div>
);

export default CustomArrow;
