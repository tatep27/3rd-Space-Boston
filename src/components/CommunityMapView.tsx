import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Community } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Get emoji for community type
const getCommunityEmoji = (type: string): string => {
  const emojiMap: { [key: string]: string } = {
    'Book Club': '📚',
    'Writing Group': '✍️',
    'Art Workshop': '🎨',
    'Study Group': '📖',
    'Networking': '🤝',
    'Creative Meetup': '💡',
    'Community Event': '🎉',
    'Workshop': '🔧',
  };
  return emojiMap[type] || '👥';
};

// Create custom community marker icon
const createCommunityIcon = (community: Community, isSelected: boolean) => {
  const emoji = getCommunityEmoji(community.type);
  return L.divIcon({
    className: 'custom-community-marker',
    html: `
      <div style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${isSelected ? '#3B82F6' : '#8B5CF6'};
        border: 3px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.3);
        transition: all 0.2s ease;
      ">
        ${emoji}
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

interface CommunityMapViewProps {
  communities: Community[];
  selectedCommunity: Community | null;
  onCommunitySelect: (community: Community) => void;
}

const CommunityMapView: React.FC<CommunityMapViewProps> = ({ 
  communities, 
  selectedCommunity, 
  onCommunitySelect 
}) => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      height: '600px'
    }}>
      <div style={{ 
        padding: '16px 20px', 
        borderBottom: '1px solid #E5E7EB',
        backgroundColor: '#F9FAFB'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#1F2937', 
          margin: 0 
        }}>
          Community Locations
        </h3>
        <p style={{ 
          fontSize: '0.875rem', 
          color: '#6B7280', 
          margin: '4px 0 0 0' 
        }}>
          Click on markers to view community details
        </p>
      </div>
      <div style={{ height: 'calc(100% - 80px)', width: '100%' }}>
        <MapContainer
          center={[42.3601, -71.0589]} // Boston center
          zoom={12}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {communities.map((community) => (
            <Marker
              key={community.id}
              position={[community.lat, community.lng]}
              icon={createCommunityIcon(community, selectedCommunity?.id === community.id)}
              eventHandlers={{
                click: () => onCommunitySelect(community),
              }}
            >
              <Popup>
                <div style={{ minWidth: '200px' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>
                    {community.name}
                  </h3>
                  <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#6b7280' }}>
                    {community.type} • {community.memberCount} members
                  </p>
                  <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#9ca3af' }}>
                    Next: {community.nextMeeting}
                  </p>
                  <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#6b7280' }}>
                    Location: {community.spaceName}
                  </p>
                  <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>
                    {community.description.substring(0, 100)}...
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CommunityMapView;