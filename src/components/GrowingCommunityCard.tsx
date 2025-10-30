import React from 'react';
import { Community } from '../types';

interface GrowingCommunityCardProps {
  community: Community;
  isSelected: boolean;
  onSelect: (community: Community) => void;
}

const GrowingCommunityCard: React.FC<GrowingCommunityCardProps> = ({ community, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(community);
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Book Club': '#8B5CF6',
      'Writing Group': '#F59E0B',
      'Art Workshop': '#EF4444',
      'Study Group': '#10B981',
      'Networking': '#3B82F6',
      'Creative Meetup': '#EC4899',
      'Community Event': '#06B6D4',
      'Workshop': '#84CC16',
    };
    return colors[type] || '#6B7280';
  };

  const progressPercentage = community.memberGoal 
    ? Math.min((community.memberCount / community.memberGoal) * 100, 100)
    : 0;

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: isSelected ? '#F3F4F6' : 'white',
        border: isSelected ? '2px solid #3B82F6' : '1px solid #E5E7EB',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 4px 12px rgba(59, 130, 246, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#1F2937', 
            margin: '0 0 4px 0',
            lineHeight: '1.3'
          }}>
            {community.name}
          </h3>
          <div style={{ 
            display: 'inline-block',
            backgroundColor: getTypeColor(community.type),
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '500',
            marginBottom: '8px'
          }}>
            {community.type}
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        fontSize: '0.875rem', 
        color: '#4B5563', 
        lineHeight: '1.5',
        margin: '0 0 16px 0'
      }}>
        {community.description}
      </p>

      {/* Member Progress */}
      <div style={{ 
        backgroundColor: '#F9FAFB', 
        padding: '12px', 
        borderRadius: '8px',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
            Member Goal Progress
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#3B82F6' }}>
            {community.memberCount} / {community.memberGoal} members
          </div>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#E5E7EB',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progressPercentage}%`,
            height: '100%',
            backgroundColor: '#3B82F6',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '4px' }}>
          {Math.round(progressPercentage)}% to goal
        </div>
      </div>

      {/* Weekly Pledge Cost */}
      <div style={{ 
        backgroundColor: '#EEF2FF',
        border: '1px solid #C7D2FE',
        padding: '12px', 
        borderRadius: '8px',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4338CA' }}>
            Weekly Pledge
          </div>
          <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4338CA' }}>
            ${community.weeklyPledgeCost?.toFixed(2) || '0.00'}/week
          </div>
        </div>
      </div>

      {/* Organizer */}
      <div style={{ 
        fontSize: '0.75rem', 
        color: '#6B7280',
        borderTop: '1px solid #E5E7EB',
        paddingTop: '8px'
      }}>
        Organized by {community.organizer}
      </div>
    </div>
  );
};

export default GrowingCommunityCard;

