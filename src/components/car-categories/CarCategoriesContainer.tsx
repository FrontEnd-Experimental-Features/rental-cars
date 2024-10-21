import React from 'react';
import CarCategoriesGrid from './CarCategoriesGrid';
import Loading from '../common/Loading';
import Error from '../common/Error';
import { useCarData } from '../../hooks/useCarData';
import { useError } from '../../hooks/useError';

const CarCategoriesContainer: React.FC = () => {
  const { categories, carTypes, isLoading } = useCarData();
  const { error, showError } = useError();

  React.useEffect(() => {
    if (!categories.length && !carTypes.length && !isLoading) {
      showError('Failed to load car data. Please try again later.');
    }
  }, [categories, carTypes, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return <CarCategoriesGrid categories={categories} carTypes={carTypes} />;
};

export default CarCategoriesContainer;
