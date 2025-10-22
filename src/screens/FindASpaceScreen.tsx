import React, { useState, useEffect } from 'react';
import MapView from '../components/MapView';
import SpaceCard from '../components/SpaceCard';
import SearchBar from '../components/SearchBar';
import SpaceList from '../components/SpaceList';
import SpaceModal from '../components/SpaceModal';
import { getAllSpaces, filterSpaces } from '../services/spacesService';
import { Space, FilterOptions } from '../types';

const FindASpaceScreen: React.FC = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [filteredSpaces, setFilteredSpaces] = useState<Space[]>([]);
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [modalSpace, setModalSpace] = useState<Space | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    capacity: '',
    timeOfDay: '',
    type: '',
  });

  useEffect(() => {
    const allSpaces = getAllSpaces();
    setSpaces(allSpaces);
    setFilteredSpaces(allSpaces);
  }, []);

  useEffect(() => {
    const filtered = filterSpaces(spaces, filters);
    setFilteredSpaces(filtered);
  }, [spaces, filters]);

  const handleSpaceSelect = (space: Space) => {
    setSelectedSpace(space);
    setModalSpace(space);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalSpace(null);
  };

  const handleInvitePeople = () => {
    // TODO: Implement invite people functionality
    alert('Invite people functionality coming soon!');
  };

  const handlePostCommunity = () => {
    // TODO: Implement post community functionality
    alert('Post community functionality coming soon!');
  };

  return (
    <div>
      {/* Header */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#1F2937', 
          margin: '0 0 16px 0' 
        }}>
          Find local community spaces to book for a single or weekly time:
        </h2>
      </div>

      {/* Search and Filters */}
        <SearchBar filters={filters} onFiltersChange={setFilters} />

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '24px',
          alignItems: 'start',
        }}>
          {/* Map */}
          <div>
            <MapView
              spaces={filteredSpaces}
              selectedSpace={selectedSpace}
              onSpaceSelect={handleSpaceSelect}
            />
          </div>

          {/* Space List */}
          <div>
            <SpaceList
              spaces={filteredSpaces}
              selectedSpace={selectedSpace}
              onSpaceSelect={handleSpaceSelect}
            />
          </div>
        </div>

        {/* Description Section */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '24px',
          marginTop: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#1F2937', 
            margin: '0 0 16px 0' 
          }}>
            Community Description:
          </h3>
          <textarea
            placeholder="Enter description here..."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '12px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#3B82F6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#D1D5DB';
            }}
          />
        </div>

        {/* Community Section - Moved to bottom */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '24px',
          marginTop: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: '#1F2937', 
            margin: '0 0 16px 0' 
          }}>
            Find people to make this space a community:
          </h2>
          
          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleInvitePeople}
              style={{
                padding: '12px 24px',
                backgroundColor: '#10B981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#10B981';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>👥</span>
              Invite People
            </button>
            
            <button
              onClick={handlePostCommunity}
              style={{
                padding: '12px 24px',
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3B82F6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>📢</span>
              Post Community to Public
            </button>
          </div>
        </div>

        {/* Modal */}
        <SpaceModal
          space={modalSpace}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
    </div>
  );
};

export default FindASpaceScreen;
