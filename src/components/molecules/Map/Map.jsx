import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define map container styles
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.47093,  // Latitude of the location
  lng: 77.13863  // Longitude of the location
};

const Map = () => {
  const [map, setMap] = useState(null);

  // This is triggered after the map is loaded
  const onLoad = mapInstance => {
    setMap(mapInstance);
  };

  // This is triggered when the map is unloaded
  const onUnmount = () => {
    setMap(null);
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
