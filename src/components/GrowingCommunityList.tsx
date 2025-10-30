import React from 'react';
import GrowingCommunityCard from './GrowingCommunityCard';
import { Community } from '../types';

interface GrowingCommunityListProps {
  communities: Community[];
  selectedCommunity: Community | null;
  onCommunitySelect: (community: Community) => void;
}

const GrowingCommunityList: React.FC<GrowingCommunityListProps> = ({ 
  communities, 
  selectedCommunity, 
  onCommunitySelect 
}) => {
  if (communities.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        color: '#6B7280'
      }}>
        <div style={{ fontSize: '1.125rem', marginBottom: '8px' }}>
          No growing communities found
        </div>
        <div style={{ fontSize: '0.875rem' }}>
          Check back soon for new opportunities to help bring communities to life!
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      height: 'fit-content',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      {/* Title */}
      <div style={{ 
        fontSize: '1.125rem', 
        fontWeight: '600', 
        color: '#1F2937', 
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid #E5E7EB'
      }}>
        Budding Communities ({communities.length})
      </div>
      
      <div>
        {communities.map((community) => (
          <GrowingCommunityCard
            key={community.id}
            community={community}
            isSelected={selectedCommunity?.id === community.id}
            onSelect={onCommunitySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default GrowingCommunityList;

