import React from 'react';

interface EventSearchBarProps {
  filters: {
    search: string;
    communityType: string;
    isOpenToPublic: boolean;
    cost: string;
  };
  onFiltersChange: (filters: {
    search: string;
    communityType: string;
    isOpenToPublic: boolean;
    cost: string;
  }) => void;
}

const EventSearchBar: React.FC<EventSearchBarProps> = ({ filters, onFiltersChange }) => {
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
      communityType: e.target.value
    });
  };

  const handlePublicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      isOpenToPublic: e.target.checked
    });
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({
      ...filters,
      cost: e.target.value
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
        gridTemplateColumns: '1fr auto auto auto', 
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
            Search Events
          </label>
          <input
            type="text"
            placeholder="Search by title, description, or location..."
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
            Event Type
          </label>
          <select
            value={filters.communityType}
            onChange={handleTypeChange}
            style={{
              padding: '12px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white',
              minWidth: '140px',
            }}
          >
            <option value="">All Types</option>
            {communityTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Cost Filter */}
        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            color: '#374151', 
            marginBottom: '8px' 
          }}>
            Cost
          </label>
          <select
            value={filters.cost}
            onChange={handleCostChange}
            style={{
              padding: '12px 16px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white',
              minWidth: '100px',
            }}
          >
            <option value="">All Events</option>
            <option value="free">Free Only</option>
            <option value="paid">Paid Events</option>
          </select>
        </div>

        {/* Open to Public Filter */}
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
              checked={filters.isOpenToPublic}
              onChange={handlePublicChange}
              style={{
                marginRight: '8px',
                width: '16px',
                height: '16px',
                accentColor: '#3B82F6'
              }}
            />
            Open to public
          </label>
        </div>
      </div>
    </div>
  );
};

export default EventSearchBar;
