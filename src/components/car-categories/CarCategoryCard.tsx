import React from 'react';
import Image from 'next/image';
import { CarCategory } from '../../types/car-categories';

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <div className="h-48 relative">
      <Image
        src={category.imageUrl}
        alt={category.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow overflow-hidden h-20 line-clamp-3">
        {category.description}
      </p>
      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 mt-auto">
        Explore
      </button>
    </div>
  </div>
);

export default CarCategoryCard;
