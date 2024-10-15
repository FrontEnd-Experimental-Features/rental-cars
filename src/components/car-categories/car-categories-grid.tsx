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
    <div className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySection title="Premium" categories={premiumCategories} />
        <CategorySection title="Budget-Friendly" categories={budgetCategories} />
      </div>
    </div>
  );
};

export default CarCategoriesGrid;
