import React from 'react';
import Image from 'next/image';
import { carCategories, CarCategory } from '../../types/car-categories';

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
    <div className="h-56 relative overflow-hidden">
      <Image
        src={category.imageUrl}
        alt={category.name}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{category.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        Explore
      </button>
    </div>
  </div>
);

const CarCategoriesGrid: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Premium Categories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carCategories.map((category) => (
            <CarCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCategoriesGrid;
