import React from 'react';
import { Space } from '../types';
import SpaceCard from './SpaceCard';

interface SpaceListProps {
  spaces: Space[];
  selectedSpace?: Space | null;
  onSpaceSelect: (space: Space) => void;
  isLoading?: boolean;
}

const SpaceList: React.FC<SpaceListProps> = ({
  spaces,
  selectedSpace,
  onSpaceSelect,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center', color: '#6B7280' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #E5E7EB',
            borderTop: '3px solid #3B82F6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px',
          }} />
          <p style={{ margin: 0, fontSize: '16px' }}>Loading spaces...</p>
        </div>
      </div>
    );
  }

  if (spaces.length === 0) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '40px 20px',
        textAlign: 'center',
        color: '#6B7280',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#374151' }}>
          No spaces found
        </h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      height: '600px',
      overflowY: 'auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
        }}>
          Available Spaces
        </h2>
        <span style={{
          fontSize: '14px',
          color: '#6B7280',
          backgroundColor: '#F3F4F6',
          padding: '4px 8px',
          borderRadius: '12px',
        }}>
          {spaces.length} found
        </span>
      </div>

      <div style={{ paddingRight: '8px' }}>
        {spaces.map((space) => (
          <SpaceCard
            key={space.id}
            space={space}
            onClick={onSpaceSelect}
            isSelected={selectedSpace?.id === space.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceList;
