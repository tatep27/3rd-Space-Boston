import React, { useState } from 'react';
import FindASpaceScreen from './screens/FindASpaceScreen';
import FindACommunityScreen from './screens/FindACommunityScreen';
import FindAnEventScreen from './screens/FindAnEventScreen';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'create' | 'communities' | 'events'>('create');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FEFCF3' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        {/* App Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '8px' 
          }}>
            ThirdSpace Boston
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            marginBottom: '0' 
          }}>
            ThirdSpace Boston connects communities to local 3rd spaces, like the neighborhood coffee shop or library, by renting their space during off-hours. Find a space to create a local community, while supporting local businesses. Or, join existing communities and find their events!
          </p>
        </div>

        {/* Navigation - Updated */}
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

        {/* Page Content */}
        {currentPage === 'create' && <FindASpaceScreen />}
        {currentPage === 'communities' && <FindACommunityScreen />}
        {currentPage === 'events' && <FindAnEventScreen />}
      </div>
    </div>
  );
}

export default App;
