import './Map.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';

const Map = () => {
  const position = [34.225727, -77.94471];
  const airDoctorsLocation = [34.2979444, -77.783133];
  return (
    <MapContainer id='map' center={position} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      <Marker position={airDoctorsLocation}>
        <Popup>Air Doctors Heating & Cooling</Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
