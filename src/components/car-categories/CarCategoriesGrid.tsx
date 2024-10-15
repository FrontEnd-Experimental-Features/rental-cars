'use client'

import React from 'react';
import { carCategories } from '../../types/car-categories';
import CategorySection from './CategorySection';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCategoriesGrid: React.FC = () => {
  const premiumCategories = carCategories.filter(category => category.type === 'premium');
  const budgetCategories = carCategories.filter(category => category.type === 'budget');

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Discover Our <span className="text-teal-500">Car Categories</span>
        </h2>
        <CategorySection title="Premium" categories={premiumCategories} />
        <div className="mt-16">
          <CategorySection title="Budget-Friendly" categories={budgetCategories} />
        </div>
      </div>
    </div>
  );
};

export default CarCategoriesGrid;
