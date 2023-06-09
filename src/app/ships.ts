export interface ShipApi {
  data: Ship;
}

export interface Ship {
  name: string;
  media: {
    0: {
      source_rul: string;
    };
  };
  type: string;
  // focus: string;
  url: string;
  size: string;
  cargocapacity: number;
  // afterburner_speed: number;
  // scm_speed: number;
  manufacturer: {
    name: string;
  };
  // price: string;
  max_crew: number;
  production_status: string;
}
