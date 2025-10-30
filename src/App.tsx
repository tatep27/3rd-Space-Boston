import React, { useState } from 'react';
import FindASpaceScreen from './screens/FindASpaceScreen';
import FindACommunityScreen from './screens/FindACommunityScreen';
import BuddingCommunitiesScreen from './screens/BuddingCommunitiesScreen';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'create' | 'communities' | 'budding'>('create');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FEFCF3' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        {/* App Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            ThirdSpace Boston
          </h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6B7280', 
            marginBottom: '16px',
            maxWidth: '800px',
            margin: '0 auto 16px auto',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            ThirdSpace Boston makes it easier to create local communities by connecting people to community spaces. Find and rent local third spaces—like your neighborhood coffee shop or library—and gather with like-minded people!
          </p>
        </div>

        {/* Navigation - Updated */}
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

        {/* Page Content */}
        {currentPage === 'create' && <FindASpaceScreen />}
        {currentPage === 'communities' && <FindACommunityScreen />}
        {currentPage === 'budding' && <BuddingCommunitiesScreen />}
      </div>
    </div>
  );
}

export default App;
