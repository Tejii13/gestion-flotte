import { Ship } from './ships';

export interface membre {
  name: string;
  token: number;
  fleet: {
    ship: Ship;
  };
}
