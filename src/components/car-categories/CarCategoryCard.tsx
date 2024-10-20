import React from 'react';
import Image from 'next/image';
import { CarCategory } from '../../types/car';

interface CarCategoryCardProps {
  category: CarCategory;
}

const CarCategoryCard: React.FC<CarCategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[320px] transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      <div className="relative h-48">
        <Image
          src={`/images/carCategories/${category.id}.png`}
          alt={category.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-bold mb-2 text-teal-700 group-hover:text-teal-600 transition-colors duration-300">{category.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{category.description}</p>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white bg-teal-500 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          Explore
        </span>
      </div>
    </div>
  );
};

export default CarCategoryCard;
