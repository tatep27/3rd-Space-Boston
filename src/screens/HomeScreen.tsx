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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FEFCF3' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '8px' 
          }}>
            Find A Space
          </h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '0' 
          }}>
            Discover spaces perfect for your community gatherings
          </p>
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

        {/* Modal */}
        <SpaceModal
          space={modalSpace}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default FindASpaceScreen;
