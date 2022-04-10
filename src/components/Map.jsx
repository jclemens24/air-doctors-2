import './Map.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer id='map' center={[34.225727, -77.94471]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      <Marker position={[34.2979444, -77.783133]}>
        <Popup>Air Doctors Heating & Cooling</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
