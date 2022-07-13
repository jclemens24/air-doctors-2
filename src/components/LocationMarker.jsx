import React, { useState } from 'react';
import { Marker, useMapEvents, Tooltip } from 'react-leaflet';

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Tooltip permanent>You are here</Tooltip>
    </Marker>
  );
};

export default LocationMarker;
