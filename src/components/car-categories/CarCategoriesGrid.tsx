'use client'

import React, { useState, useEffect } from 'react';
import CategorySection from './CategorySection';
import { CarCategory } from '../../types/car';

const CarCategoriesGrid: React.FC = () => {
  const [categories, setCategories] = useState<CarCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('Fetching categories...');
        const response = await fetch('/api/cars?type=categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        console.log('Fetched categories:', data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  console.log('Rendering categories:', categories);

  const premiumCategories = categories.filter(category => category.type_id === 1);
  const budgetCategories = categories.filter(category => category.type_id === 2);

  console.log('Premium categories:', premiumCategories);
  console.log('Budget categories:', budgetCategories);

  return (
    <div className="space-y-12">
      <CategorySection title="Premium Cars" categories={premiumCategories} />
      <CategorySection title="Budget-Friendly Options" categories={budgetCategories} />
    </div>
  );
};

export default CarCategoriesGrid;
