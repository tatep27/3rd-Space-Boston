import React from 'react';
import { Space } from '../types';

interface SpaceModalProps {
  space: Space | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpaceModal: React.FC<SpaceModalProps> = ({ space, isOpen, onClose }) => {
  if (!isOpen || !space) return null;

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#6B7280',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          {/* Hero Image */}
          {space.image && (
            <div style={{
              width: '100%',
              height: '200px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '20px',
              backgroundColor: '#F3F4F6',
            }}>
              <img
                src={space.image}
                alt={space.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div
              style={{
                fontSize: '48px',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F9FAFB',
                borderRadius: '16px',
                flexShrink: 0,
              }}
            >
              {getTypeIcon(space.type)}
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{
                margin: '0 0 8px 0',
                fontSize: '28px',
                fontWeight: '700',
                color: '#111827',
                lineHeight: '1.2',
              }}>
                {space.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: getTypeColor(space.type),
                    padding: '6px 12px',
                    borderRadius: '16px',
                  }}
                >
                  {space.type}
                </span>
                <span style={{ fontSize: '16px', color: '#6B7280' }}>
                  📍 {space.neighborhood}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '24px',
        }}>
          <div style={{
            backgroundColor: '#F9FAFB',
            padding: '16px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Capacity</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
              {space.capacity}
            </div>
          </div>

          <div style={{
            backgroundColor: '#F9FAFB',
            padding: '16px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🕒</div>
            <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>Available</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              {space.available}
            </div>
          </div>

          <div style={{
            backgroundColor: '#ECFDF5',
            padding: '16px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #10B981',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
            <div style={{ fontSize: '14px', color: '#059669', marginBottom: '4px' }}>Price</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#047857' }}>
              ${space.pricePerHour}/hour
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
          }}>
            About This Space
          </h3>
          <p style={{
            margin: 0,
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#374151',
          }}>
            {space.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end',
        }}>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#F3F4F6',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E5E7EB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F3F4F6';
            }}
          >
            Save for Later
          </button>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#3B82F6',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563EB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3B82F6';
            }}
          >
            Contact Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceModal;
