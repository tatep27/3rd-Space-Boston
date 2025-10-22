import communitiesData from '../data/communities.json';
import { Community } from '../types';

export const getAllCommunities = (): Community[] => {
  return communitiesData as Community[];
};

export const filterCommunities = (communities: Community[], filters: {
  search: string;
  type: string;
  isOpenToNewMembers: boolean;
}): Community[] => {
  return communities.filter(community => {
    const matchesSearch = !filters.search || 
      community.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      community.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      community.spaceName.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesType = !filters.type || community.type === filters.type;
    
    const matchesOpenMembers = !filters.isOpenToNewMembers || community.isOpenToNewMembers;
    
    return matchesSearch && matchesType && matchesOpenMembers;
  });
};

export const getCommunityById = (id: number): Community | undefined => {
  return communitiesData.find(community => community.id === id) as Community;
};
