export interface Space {
  id: number;
  name: string;
  type: 'Coffee Shop' | 'Library' | 'Community Center' | 'Arts Center' | 'Cafe' | 'Bookstore';
  capacity: string;
  available: string;
  neighborhood: string;
  description: string;
  lat: number;
  lng: number;
  image?: string;
}

export interface FilterOptions {
  search: string;
  capacity: string;
  timeOfDay: string;
  type: string;
}

export interface MapCenter {
  lat: number;
  lng: number;
  zoom: number;
}
