import React from 'react';
import { Space } from '../types';

interface SpaceCardProps {
  space: Space;
  onClick: (space: Space) => void;
  isSelected?: boolean;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space, onClick, isSelected = false }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Coffee Shop':
        return '☕';
      case 'Library':
        return '📚';
      case 'Community Center':
        return '🏢';
      case 'Arts Center':
        return '🎨';
      case 'Cafe':
        return '🍽️';
      case 'Bookstore':
        return '📖';
      default:
        return '📍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Coffee Shop':
        return '#8B4513';
      case 'Library':
        return '#4169E1';
      case 'Community Center':
        return '#228B22';
      case 'Arts Center':
        return '#FF6347';
      case 'Cafe':
        return '#D2691E';
      case 'Bookstore':
        return '#9932CC';
      default:
        return '#666';
    }
  };

  return (
    <div
      onClick={() => onClick(space)}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        cursor: 'pointer',
        border: isSelected ? '2px solid #3B82F6' : '1px solid #E5E7EB',
        boxShadow: isSelected 
          ? '0 4px 12px rgba(59, 130, 246, 0.15)' 
          : '0 2px 4px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        transform: isSelected ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
          e.currentTarget.style.transform = 'none';
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        {/* Image */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '8px',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: '#F3F4F6',
        }}>
          {space.image ? (
            <img
              src={space.image}
              alt={space.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                // Fallback to icon if image fails to load
                e.currentTarget.style.display = 'none';
                const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallbackElement) {
                  fallbackElement.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: space.image ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              backgroundColor: '#F9FAFB',
            }}
          >
            {getTypeIcon(space.type)}
          </div>
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#111827',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {space.name}
            </h3>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'white',
                backgroundColor: getTypeColor(space.type),
                padding: '2px 8px',
                borderRadius: '12px',
                flexShrink: 0,
              }}
            >
              {space.type}
            </span>
          </div>
          
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px', 
            color: '#6B7280',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            📍 {space.neighborhood}
          </p>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>
              👥 {space.capacity}
            </span>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>
              🕒 {space.available.split(',')[0]}
            </span>
            <span style={{ 
              fontSize: '12px', 
              fontWeight: '600',
              color: '#059669',
              backgroundColor: '#ECFDF5',
              padding: '2px 6px',
              borderRadius: '4px',
            }}>
              ${space.pricePerHour}/hr
            </span>
          </div>
          
          <p style={{ 
            margin: 0, 
            fontSize: '13px', 
            color: '#9CA3AF',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {space.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
