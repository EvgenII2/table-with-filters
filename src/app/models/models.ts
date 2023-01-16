type NumberOrNull = number | null;

export interface IData {
  count: NumberOrNull;
  next: NumberOrNull;
  previous: NumberOrNull;
  results: IPlanetData[];
}

export interface IPlanetData {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
