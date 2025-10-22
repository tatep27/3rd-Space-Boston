import React from 'react';
import { FilterOptions } from '../types';

interface SearchBarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, onFiltersChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, capacity: e.target.value });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, timeOfDay: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, type: e.target.value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      capacity: '',
      timeOfDay: '',
      type: '',
    });
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Search Input */}
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Search spaces, neighborhoods, or types..."
          value={filters.search}
          onChange={handleSearchChange}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
          onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
        />
      </div>

      {/* Filter Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px',
        marginBottom: '16px',
      }}>
        {/* Capacity Filter */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px',
          }}>
            Capacity
          </label>
          <select
            value={filters.capacity}
            onChange={handleCapacityChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          >
            <option value="">All Capacities</option>
            <option value="5-15">5-15 people</option>
            <option value="15-30">15-30 people</option>
            <option value="30+">30+ people</option>
          </select>
        </div>

        {/* Time Filter */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px',
          }}>
            Time Available
          </label>
          <select
            value={filters.timeOfDay}
            onChange={handleTimeChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          >
            <option value="">Any Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px',
          }}>
            Space Type
          </label>
          <select
            value={filters.type}
            onChange={handleTypeChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          >
            <option value="">All Types</option>
            <option value="Coffee Shop">Coffee Shop</option>
            <option value="Library">Library</option>
            <option value="Community Center">Community Center</option>
            <option value="Arts Center">Arts Center</option>
            <option value="Cafe">Cafe</option>
            <option value="Bookstore">Bookstore</option>
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(filters.search || filters.capacity || filters.timeOfDay || filters.type) && (
        <button
          onClick={clearFilters}
          style={{
            padding: '8px 16px',
            backgroundColor: '#F3F4F6',
            border: '1px solid #D1D5DB',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#6B7280',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E5E7EB';
            e.currentTarget.style.color = '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#6B7280';
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default SearchBar;
