import { Pool, QueryResult, QueryResultRow } from 'pg';

export interface DatabaseInterface {
  query<T extends QueryResultRow>(text: string, params?: unknown[]): Promise<QueryResult<T>>;
}

export function createDatabase(config: {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}): DatabaseInterface {
  const pool = new Pool(config);

  return {
    async query<T extends QueryResultRow>(text: string, params?: unknown[]): Promise<QueryResult<T>> {
      const client = await pool.connect();
      try {
        return await client.query<T>(text, params);
      } finally {
        client.release();
      }
    }
  };
}

export const db = createDatabase({
  user: process.env.DB_USER!,
  host: process.env.DB_HOST!,
  database: process.env.DB_NAME!,
  password: process.env.DB_PASSWORD!,
  port: parseInt(process.env.DB_PORT || '5432'),
});
