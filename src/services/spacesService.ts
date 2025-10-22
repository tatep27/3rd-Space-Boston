import { Space, FilterOptions } from '../types';
import spacesData from '../data/spaces.json';

export const getAllSpaces = (): Space[] => {
  return spacesData as Space[];
};

export const filterSpaces = (spaces: Space[], filters: FilterOptions): Space[] => {
  return spaces.filter(space => {
    // Text search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        space.name.toLowerCase().includes(searchLower) ||
        space.neighborhood.toLowerCase().includes(searchLower) ||
        space.type.toLowerCase().includes(searchLower) ||
        space.description.toLowerCase().includes(searchLower);
      
      if (!matchesSearch) return false;
    }

    // Capacity filter
    if (filters.capacity) {
      const capacity = space.capacity;
      switch (filters.capacity) {
        case '5-15':
          if (!capacity.includes('5') && !capacity.includes('8') && !capacity.includes('10') && !capacity.includes('12')) {
            return false;
          }
          break;
        case '15-30':
          if (!capacity.includes('15') && !capacity.includes('20') && !capacity.includes('25')) {
            return false;
          }
          break;
        case '30+':
          if (!capacity.includes('30') && !capacity.includes('35')) {
            return false;
          }
          break;
      }
    }

    // Time of day filter
    if (filters.timeOfDay) {
      const available = space.available.toLowerCase();
      switch (filters.timeOfDay) {
        case 'Morning':
          if (!available.includes('morning') && !available.includes('am')) {
            return false;
          }
          break;
        case 'Afternoon':
          if (!available.includes('afternoon') && !available.includes('pm') && !available.includes('1–5')) {
            return false;
          }
          break;
        case 'Evening':
          if (!available.includes('evening') && !available.includes('6–') && !available.includes('7–')) {
            return false;
          }
          break;
      }
    }

    // Type filter
    if (filters.type && filters.type !== 'All') {
      if (space.type !== filters.type) {
        return false;
      }
    }

    return true;
  });
};

export const getSpaceById = (id: number): Space | undefined => {
  return spacesData.find(space => space.id === id) as Space | undefined;
};
