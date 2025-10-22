import eventsData from '../data/events.json';
import { Event } from '../types';

export const getAllEvents = (): Event[] => {
  return eventsData as Event[];
};

export const getUpcomingEvents = (): Event[] => {
  const today = new Date().toISOString().split('T')[0];
  return eventsData.filter(event => event.date >= today) as Event[];
};

export const filterEvents = (events: Event[], filters: {
  search: string;
  communityType: string;
  isOpenToPublic: boolean;
  cost: string;
}): Event[] => {
  return events.filter(event => {
    const matchesSearch = !filters.search || 
      event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.communityName.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.spaceName.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesType = !filters.communityType || event.communityType === filters.communityType;
    
    const matchesPublic = !filters.isOpenToPublic || event.isOpenToPublic;
    
    const matchesCost = !filters.cost || 
      (filters.cost === 'free' && event.cost === 'Free') ||
      (filters.cost === 'paid' && event.cost !== 'Free');
    
    return matchesSearch && matchesType && matchesPublic && matchesCost;
  });
};

export const getEventById = (id: number): Event | undefined => {
  return eventsData.find(event => event.id === id) as Event;
};

export const sortEventsByDate = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });
};
