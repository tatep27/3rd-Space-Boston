import React from 'react';

interface NavigationProps {
  currentPage: 'create' | 'communities' | 'events';
  onPageChange: (page: 'create' | 'communities' | 'events') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      padding: '8px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      gap: '4px'
    }}>
      <button
        onClick={() => onPageChange('create')}
        style={{
          flex: 1,
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: currentPage === 'create' ? '#3B82F6' : 'transparent',
          color: currentPage === 'create' ? 'white' : '#6B7280',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 'create') {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 'create') {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }
        }}
      >
        Create A Community
      </button>
      <button
        onClick={() => onPageChange('communities')}
        style={{
          flex: 1,
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: currentPage === 'communities' ? '#3B82F6' : 'transparent',
          color: currentPage === 'communities' ? 'white' : '#6B7280',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 'communities') {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 'communities') {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }
        }}
      >
        Find A Community
      </button>
      <button
        onClick={() => onPageChange('events')}
        style={{
          flex: 1,
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: currentPage === 'events' ? '#3B82F6' : 'transparent',
          color: currentPage === 'events' ? 'white' : '#6B7280',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 'events') {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 'events') {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }
        }}
      >
        Find An Event
      </button>
    </div>
  );
};

export default Navigation;