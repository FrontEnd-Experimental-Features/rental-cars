import { DatabaseInterface } from '../db';
import { State, City } from '../../types/location';

export function createLocationData(db: DatabaseInterface) {
  return {
    async getStates(): Promise<State[]> {
      const result = await db.query<State>('SELECT * FROM States WHERE is_active = true ORDER BY name');
      return result.rows;
    },

    async getCitiesByState(stateId: number): Promise<City[]> {
      const result = await db.query<City>('SELECT * FROM Cities WHERE state_id = $1 AND is_active = true ORDER BY name', [stateId]);
      return result.rows;
    }
  };
}

// You can add more location-related database operations here
