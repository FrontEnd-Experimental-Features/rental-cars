import { useState, useEffect } from 'react';
import { MenuCategory } from '../types/hamburger-menu-items';

export function useMenuData() {
  const [menuItems, setMenuItems] = useState<MenuCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/api/menu');
        if (!response.ok) {
          throw new Error('Failed to fetch menu data');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setError('Failed to load menu data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return { menuItems, isLoading, error };
}
