import { DatabaseInterface } from '../db';
import { CarType, CarCategory } from '../../types/car';

export function createCarData(db: DatabaseInterface) {
  return {
    async getCarTypes(): Promise<CarType[]> {
      const result = await db.query<CarType>('SELECT * FROM CarType WHERE is_active = true ORDER BY type');
      return result.rows;
    },

    async getCarCategories(): Promise<CarCategory[]> {
      const result = await db.query<CarCategory>('SELECT * FROM CarCategory WHERE is_active = true ORDER BY name');
      return result.rows;
    }
  };
}
