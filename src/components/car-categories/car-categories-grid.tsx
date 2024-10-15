import React from 'react';
import Image from 'next/image';
import { carCategories, CarCategory } from '../../types/car-categories';

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
    <div className="h-48 relative">
      <Image
        src={category.imageUrl}
        alt={category.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{category.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
        Explore
      </button>
    </div>
  </div>
);

const CarCategoriesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {carCategories.map((category) => (
        <CarCategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CarCategoriesGrid;
