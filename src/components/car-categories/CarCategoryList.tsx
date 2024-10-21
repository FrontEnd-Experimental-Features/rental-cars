import React from 'react';
import CarCategoryGrid from './CarCategoryGrid';
import Loading from '../common/Loading';
import Error from '../common/Error';
import { useCarCategories } from '../../hooks/useCarCategories';
import { useErrorHandler } from '../../hooks/useErrorHandler';

const CarCategoryList: React.FC = () => {
  const { categories, carTypes, isLoading } = useCarCategories();
  const { error, showError } = useErrorHandler();

  React.useEffect(() => {
    if (!categories.length && !carTypes.length && !isLoading) {
      showError('Failed to load car data. Please try again later.');
    }
  }, [categories, carTypes, isLoading,showError]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return <CarCategoryGrid categories={categories} carTypes={carTypes} />;
};

export default CarCategoryList;
