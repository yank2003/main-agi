import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

// Fix Leaflet marker icon issue
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = {
  Mumbai: { lat: 19.0760, lng: 72.8777 },
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Delhi: { lat: 28.6139, lng: 77.2090 },
  Bangalore: { lat: 12.9716, lng: 77.5946 },
};

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

function MapComponent() {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const coords = locations[selectedCity];

  return (
    <div className="flex  flex-col md:flex-row gap-2 w-full max-w-8xl mx-auto py-6">
      {/* Map Section */}
      <div className="flex-1">
        <MapContainer center={coords} zoom={13} style={{ height: '400px', width: '100%' , zIndex:'1' }}>
          <ChangeMapView coords={coords} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={coords} icon={customIcon}>
            <Popup>{selectedCity} Office</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Buttons Section */}
      <div className="w-full md:w-54 flex flex-col gap-3">
        {Object.entries(locations).map(([city]) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`py-2 px-1 text-left rounded border-b transition 
              ${selectedCity === city
                ? 'border-grey-600 bg-zinc-200 font-semibold'
                : 'border-gray-300 hover:border-zinc-600'}
            `}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MapComponent;
