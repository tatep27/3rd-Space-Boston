import React from 'react';
import EventCard from './EventCard';
import { Event } from '../types';

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  if (events.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        color: '#6B7280'
      }}>
        <div style={{ fontSize: '1.125rem', marginBottom: '8px' }}>
          No events found
        </div>
        <div style={{ fontSize: '0.875rem' }}>
          Try adjusting your search or filters
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      <div style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        color: '#1F2937', 
        marginBottom: '20px',
        paddingBottom: '12px',
        borderBottom: '1px solid #E5E7EB'
      }}>
        Upcoming Events ({events.length})
      </div>
      
      <div>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
