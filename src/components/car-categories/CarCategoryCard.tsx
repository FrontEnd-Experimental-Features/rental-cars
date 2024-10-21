import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { CarCategory, CarType } from '../../types/car';

interface CarCategoryCardProps {
  category: CarCategory;
  carType: CarType;
}

const CarCategoryCard: React.FC<CarCategoryCardProps> = ({ category, carType }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[360px] transition-all duration-300 hover:shadow-2xl hover:scale-105 group relative">
      <div className="relative h-56">
        <Image
          src={`/images/carCategories/${category.id}.png`}
          alt={category.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-teal-800 text-xs font-semibold">{carType.title}</span>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-2xl font-bold mb-2 text-teal-800 group-hover:text-teal-600 transition-colors duration-300">{category.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{category.description}</p>
      </div>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
          Explore <FaChevronRight className="ml-2" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default CarCategoryCard;
