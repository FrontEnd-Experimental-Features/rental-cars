'use client'

import React from 'react';
import CarCategorySlider from './CarCategorySlider';
import { CarCategory, CarType } from '../../types/car';

interface CarCategoriesGridProps {
  categories: CarCategory[];
  carTypes: CarType[];
}

const CarCategoryGrid: React.FC<CarCategoriesGridProps> = ({ categories, carTypes }) => {
  if (!carTypes || carTypes.length === 0) {
    return <div>No car types available.</div>;
  }

  return (
    <div className="space-y-12">
      {carTypes.map((carType) => {
        const filteredCategories = categories.filter(category => category.type_id === carType.id);
        return (
          <CarCategorySlider 
            key={carType.id} 
            title={carType.title} 
            categories={filteredCategories} 
            carType={carType}
          />
        );
      })}
    </div>
  );
};

export default CarCategoryGrid;
