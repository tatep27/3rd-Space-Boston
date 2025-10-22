import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Space } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  spaces: Space[];
  selectedSpace?: Space | null;
  onSpaceSelect: (space: Space) => void;
  center?: [number, number];
  zoom?: number;
}

const MapView: React.FC<MapViewProps> = ({
  spaces,
  selectedSpace,
  onSpaceSelect,
  center = [42.3601, -71.0589], // Boston center
  zoom = 12
}) => {
  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spaces.map((space) => (
          <Marker
            key={space.id}
            position={[space.lat, space.lng]}
            eventHandlers={{
              click: () => onSpaceSelect(space),
            }}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>
                  {space.name}
                </h3>
                <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#6b7280' }}>
                  {space.type} • {space.neighborhood}
                </p>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#9ca3af' }}>
                  Capacity: {space.capacity}
                </p>
                <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>
                  {space.description.substring(0, 100)}...
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
