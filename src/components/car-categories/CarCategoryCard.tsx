import React from 'react';
import Image from 'next/image';
import { CarCategory } from '../../types/car-categories';

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="group bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-800 dark:to-purple-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 mx-2">
    <div className="h-56 relative overflow-hidden">
      <Image
        src={category.imageUrl}
        alt={category.name}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
    </div>
    <div className="p-6 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">{category.name}</h3>
      <p className="text-blue-100 dark:text-blue-200 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{category.description}</p>
      <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-y-1 group-hover:shadow-lg">
        Explore
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 -mt-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);

export default CarCategoryCard;
