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
  pricePerHour: number;
}

export interface Community {
  id: number;
  name: string;
  description: string;
  type: 'Book Club' | 'Writing Group' | 'Art Workshop' | 'Study Group' | 'Networking' | 'Creative Meetup' | 'Community Event' | 'Workshop';
  meetingFrequency: string;
  nextMeeting: string;
  spaceId: number;
  spaceName: string;
  capacity: string;
  organizer: string;
  contactInfo: string;
  lat: number;
  lng: number;
  image?: string;
  memberCount: number;
  isOpenToNewMembers: boolean;
  costPerWeek?: number; // Cost per week to join (null or 0 means free)
  // Growing community fields
  isGrowing?: boolean;
  memberGoal?: number;
  weeklyPledgeCost?: number;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  communityId: number;
  communityName: string;
  communityType: string;
  spaceId: number;
  spaceName: string;
  date: string; // ISO date string
  time: string; // Time string like "6:00 PM"
  duration: string; // Duration like "2 hours"
  capacity: string;
  organizer: string;
  contactInfo: string;
  lat: number;
  lng: number;
  image?: string;
  isOpenToPublic: boolean;
  registrationRequired: boolean;
  cost: string; // "Free" or "$10" etc.
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