import React from 'react';
import Image from 'next/image';
import { CarCategory } from '../../types/car-categories';

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="group bg-gradient-to-br from-white to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="h-48 relative overflow-hidden">
      <Image
        src={category.imageUrl}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow bg-white/80 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{category.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow overflow-hidden h-20 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
        {category.description}
      </p>
      <button className="mt-auto w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg">
        Explore
      </button>
    </div>
  </div>
);

export default CarCategoryCard;
