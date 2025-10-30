import React from 'react';

interface NavigationProps {
  currentPage: 'create' | 'communities' | 'budding';
  onPageChange: (page: 'create' | 'communities' | 'budding') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <>
      {/* Description for Create A Community */}
      {currentPage === 'create' && (
        <div style={{
          backgroundColor: '#F0F9FF',
          border: '1px solid #BAE6FD',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '16px'
        }}>
          <p style={{
            fontSize: '0.9375rem',
            color: '#0C4A6E',
            margin: 0,
            lineHeight: '1.6'
          }}>
            <strong>Create A Community:</strong> Use this to propose a new group. Select a space and create your community listing.
          </p>
        </div>
      )}

      {/* Description for Budding Communities */}
      {currentPage === 'budding' && (
        <div style={{
          backgroundColor: '#FEF3C7',
          border: '1px solid #FDE047',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '16px'
        }}>
          <p style={{
            fontSize: '0.9375rem',
            color: '#78350F',
            margin: 0,
            lineHeight: '1.6'
          }}>
            <strong>Budding Communities:</strong> These communities are seeking members to help reach their fundraising goals for space rentals. By joining, you'll get access to their online forum. Your pledge is only charged when the community reaches its funding goal and begins meeting.
          </p>
        </div>
      )}

      {/* Description for Existing Communities */}
      {currentPage === 'communities' && (
        <div style={{
          backgroundColor: '#ECFDF5',
          border: '1px solid #86EFAC',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '16px'
        }}>
          <p style={{
            fontSize: '0.9375rem',
            color: '#14532D',
            margin: 0,
            lineHeight: '1.6'
          }}>
            <strong>Existing Communities:</strong> Join active communities that are already meeting regularly. Browse their events and become part of thriving local groups.
          </p>
        </div>
      )}

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
        onClick={() => onPageChange('budding')}
        style={{
          flex: 1,
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.95rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: currentPage === 'budding' ? '#3B82F6' : 'transparent',
          color: currentPage === 'budding' ? 'white' : '#6B7280',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 'budding') {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 'budding') {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }
        }}
      >
        Budding Communities
      </button>
      <button
        onClick={() => onPageChange('communities')}
        style={{
          flex: 1,
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.95rem',
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
        Existing Communities
      </button>
    </div>
    </>
  );
};

export default Navigation;