import React from 'react';

interface CommunitySearchBarProps {
  filters: {
    search: string;
    type: string;
    isOpenToNewMembers: boolean;
  };
  onFiltersChange: (filters: {
    search: string;
    type: string;
    isOpenToNewMembers: boolean;
  }) => void;
}

const CommunitySearchBar: React.FC<CommunitySearchBarProps> = ({ filters, onFiltersChange }) => {
  const communityTypes = [
    'Book Club',
    'Writing Group', 
    'Art Workshop',
    'Study Group',
    'Networking',
    'Creative Meetup',
    'Community Event',
    'Workshop'
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({
      ...filters,
      type: e.target.value
    });
  };

  const handleOpenMembersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      isOpenToNewMembers: e.target.checked
    });
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr auto auto', 
        gap: '16px', 
        alignItems: 'end' 
      }}>
        {/* Search Input */}
        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            color: '#374151', 
            marginBottom: '8px' 
          }}>
            Search Communities
          </label>
          <input
            type="text"
            placeholder="Search by name, description, or location..."
            value={filters.search}
            onChange={handleSearchChange}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              transition: 'border-color 0.2s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3B82F6';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1D5DB';
            }}
          />
        </div>

        {/* Type Filter */}
        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            color: '#374151', 
            marginBottom: '8px' 
          }}>
            Community Type
          </label>
          <select
            value={filters.type}
            onChange={handleTypeChange}
            style={{
              padding: '12px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white',
              minWidth: '160px',
            }}
          >
            <option value="">All Types</option>
            {communityTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Open to New Members Filter */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '24px' 
        }}>
          <label style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '0.875rem', 
            color: '#374151',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={filters.isOpenToNewMembers}
              onChange={handleOpenMembersChange}
              style={{
                marginRight: '8px',
                width: '16px',
                height: '16px',
                accentColor: '#3B82F6'
              }}
            />
            Open to new members
          </label>
        </div>
      </div>
    </div>
  );
};

export default CommunitySearchBar;
