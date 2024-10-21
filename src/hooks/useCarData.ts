import { useState, useEffect } from 'react';
import { CarCategory, CarType } from '../types/car';

export function useCarData() {
  const [categories, setCategories] = useState<CarCategory[]>([]);
  const [carTypes, setCarTypes] = useState<CarType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching car data...');
        const [categoriesResponse, typesResponse] = await Promise.all([
          fetch('/api/cars?type=categories'),
          fetch('/api/cars?type=types')
        ]);
        
        if (!categoriesResponse.ok || !typesResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const categoriesData = await categoriesResponse.json();
        const typesData = await typesResponse.json();
        
        console.log('Fetched categories:', categoriesData);
        console.log('Fetched car types:', typesData);

        setCategories(categoriesData);
        setCarTypes(typesData);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load car data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, carTypes, isLoading, error };
}
