import React, { useState, useEffect } from 'react';
import CommunityMapView from '../components/CommunityMapView';
import CommunityCard from '../components/CommunityCard';
import CommunitySearchBar from '../components/CommunitySearchBar';
import CommunityList from '../components/CommunityList';
import { getAllCommunities, filterCommunities } from '../services/communitiesService';
import { Community } from '../types';

const FindACommunityScreen: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    isOpenToNewMembers: false,
  });

  useEffect(() => {
    const allCommunities = getAllCommunities();
    // Filter out growing communities, only show existing ones
    const existingCommunities = allCommunities.filter(c => c.isGrowing !== true);
    setCommunities(existingCommunities);
    setFilteredCommunities(existingCommunities);
  }, []);

  useEffect(() => {
    const filtered = filterCommunities(communities, filters);
    setFilteredCommunities(filtered);
  }, [communities, filters]);

  const handleCommunitySelect = (community: Community) => {
    setSelectedCommunity(community);
  };

  return (
    <div>
      {/* Search and Filters */}
        <CommunitySearchBar filters={filters} onFiltersChange={setFilters} />

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}>
          {/* Left Column - Map */}
          <div>
            <CommunityMapView
              communities={filteredCommunities}
              selectedCommunity={selectedCommunity}
              onCommunitySelect={handleCommunitySelect}
            />
          </div>

          {/* Right Column - Existing Communities List */}
          <div>
            <CommunityList
              communities={filteredCommunities}
              selectedCommunity={selectedCommunity}
              onCommunitySelect={handleCommunitySelect}
            />
          </div>
        </div>
    </div>
  );
};

export default FindACommunityScreen;
