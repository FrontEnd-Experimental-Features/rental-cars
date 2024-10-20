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
    },

    async getLocationSuggestions(query: string): Promise<string[]> {
      const result = await db.query<{ suggestion: string }>(
        `SELECT CONCAT(c.name, ', ', s.name) as suggestion
         FROM Cities c
         JOIN States s ON c.state_id = s.id
         WHERE c.is_active = true AND s.is_active = true
           AND (LOWER(c.name) LIKE LOWER($1) OR LOWER(s.name) LIKE LOWER($1))
         ORDER BY s.name, c.name
         LIMIT 5`,
        [`%${query}%`]
      );
      return result.rows.map(row => row.suggestion);
    }
  };
}

// You can add more location-related database operations here
