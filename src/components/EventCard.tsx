import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCostColor = (cost: string) => {
    return cost === 'Free' ? '#10B981' : '#F59E0B';
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #E5E7EB',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '20px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: '#1F2937', 
            margin: '0 0 8px 0',
            lineHeight: '1.3'
          }}>
            {event.title}
          </h3>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <div style={{ 
              display: 'inline-block',
              backgroundColor: getTypeColor(event.communityType),
              color: 'white',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {event.communityType}
            </div>
            <div style={{ 
              display: 'inline-block',
              backgroundColor: '#F3F4F6',
              color: '#374151',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {event.communityName}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginLeft: '16px' }}>
          <div style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600',
            color: getCostColor(event.cost),
            marginBottom: '4px'
          }}>
            {event.cost}
          </div>
          {event.registrationRequired && (
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#F59E0B',
              fontWeight: '500'
            }}>
              Registration Required
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        fontSize: '0.875rem', 
        color: '#4B5563', 
        lineHeight: '1.5',
        margin: '0 0 16px 0'
      }}>
        {event.description}
      </p>

      {/* Event Details */}
      <div style={{ 
        backgroundColor: '#F9FAFB', 
        padding: '16px', 
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
              📅 Date & Time
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '2px' }}>
              {formatDate(event.date)}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              {event.time} • {event.duration}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
              📍 Location
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '2px' }}>
              {event.spaceName}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              Capacity: {event.capacity}
            </div>
          </div>
        </div>
      </div>

      {/* Organizer */}
      <div style={{ 
        fontSize: '0.75rem', 
        color: '#6B7280',
        borderTop: '1px solid #E5E7EB',
        paddingTop: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>Organized by {event.organizer}</span>
        {event.isOpenToPublic && (
          <span style={{ color: '#10B981', fontWeight: '500' }}>
            Open to Public
          </span>
        )}
      </div>
    </div>
  );
};

export default EventCard;
