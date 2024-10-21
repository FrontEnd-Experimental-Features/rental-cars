'use client'

import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';
import { CarCategory, CarType } from '../../types/car';

const CarCategoriesGrid: React.FC = () => {
  const [categories, setCategories] = useState<CarCategory[]>([]);
  const [carTypes, setCarTypes] = useState<CarType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, typesResponse] = await Promise.all([
          fetch('/api/cars?type=categories'),
          fetch('/api/cars?type=types')
        ]);
        
        if (!categoriesResponse.ok || !typesResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const categoriesData = await categoriesResponse.json();
        const typesData = await typesResponse.json();
        
        setCategories(categoriesData);
        setCarTypes(typesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-12">
      {carTypes.map((carType) => {
        const filteredCategories = categories.filter(category => category.type_id === carType.id);
        return (
          <CategorySection 
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

export default CarCategoriesGrid;
