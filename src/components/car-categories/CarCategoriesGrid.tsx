'use client'

import React from 'react';
import { carCategories, CarCategory } from '../../types/car-categories';
import CategorySection from './CategorySection';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCategoriesGrid: React.FC = () => {
  // Get unique category types
  const categoryTypes = Array.from(new Set(carCategories.map(category => category.type)));

  // Create an object with categories grouped by type
  const categoriesByType = categoryTypes.reduce((acc, type) => {
    acc[type] = carCategories.filter(category => category.type === type);
    return acc;
  }, {} as Record<string, CarCategory[]>);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Discover Our <span className="text-teal-500">Car Categories</span>
        </h2>
        {categoryTypes.map((type, index) => (
          <div key={type} className={index > 0 ? "mt-16" : ""}>
            <CategorySection 
              title={type.charAt(0).toUpperCase() + type.slice(1)} 
              categories={categoriesByType[type]} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCategoriesGrid;
