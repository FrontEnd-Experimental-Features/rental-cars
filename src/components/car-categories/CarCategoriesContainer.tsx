import React from 'react';
import CarCategoriesGrid from './CarCategoriesGrid';
import { useCarData } from '../../hooks/useCarData';

const CarCategoriesContainer: React.FC = () => {
  const { categories, carTypes, isLoading, error } = useCarData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <CarCategoriesGrid categories={categories} carTypes={carTypes} />;
};

export default CarCategoriesContainer;
