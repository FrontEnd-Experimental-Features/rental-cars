export interface CarType {
  id: number;
  type: string;
  is_active: boolean;
}

export interface CarCategory {
  id: string;
  name: string;
  description: string | null;
  type_id: number;
  is_active: boolean;
}