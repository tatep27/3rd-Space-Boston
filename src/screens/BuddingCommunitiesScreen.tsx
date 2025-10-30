import React, { useState, useEffect } from 'react';
import CommunityMapView from '../components/CommunityMapView';
import GrowingCommunityList from '../components/GrowingCommunityList';
import GrowingCommunityCard from '../components/GrowingCommunityCard';
import { getAllCommunities } from '../services/communitiesService';
import { Community } from '../types';

const BuddingCommunitiesScreen: React.FC = () => {
  const [growingCommunities, setGrowingCommunities] = useState<Community[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  useEffect(() => {
    const allCommunities = getAllCommunities();
    // Filter only growing communities
    const growing = allCommunities.filter(c => c.isGrowing === true);
    setGrowingCommunities(growing);
  }, []);

  const handleCommunitySelect = (community: Community) => {
    setSelectedCommunity(community);
  };

  return (
    <div>
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
            communities={growingCommunities}
            selectedCommunity={selectedCommunity}
            onCommunitySelect={handleCommunitySelect}
          />
        </div>

        {/* Right Column - Growing Communities List */}
        <div>
          <GrowingCommunityList
            communities={growingCommunities}
            selectedCommunity={selectedCommunity}
            onCommunitySelect={handleCommunitySelect}
          />
        </div>
      </div>
    </div>
  );
};

export default BuddingCommunitiesScreen;

