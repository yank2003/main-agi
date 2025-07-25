import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";

// Custom marker icon fix for Leaflet
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

const MapComponent = ({
  coords = { lat: 19.076, lng: 72.8777 },
  label = "Office Location",
}) => {
  return (
    <MapContainer
      center={coords}
      zoom={23}
      zoomControl={false}
      style={{
        height: "500px",
        width: "100%",
        zIndex: 1,
        position: "relative",
      }}
    >
      <ChangeMapView coords={coords} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={coords} icon={customIcon}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
