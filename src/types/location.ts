export interface State {
  id: number;
  name: string;
  is_active: boolean;
}

export interface City {
  id: number;
  name: string;
  state_id: number;
  is_active: boolean;
}
