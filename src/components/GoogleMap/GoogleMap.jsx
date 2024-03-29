import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

const center = {
  lat: -34.397,  // Example latitude, replace with your desired location
  lng: 150.644   // Example longitude, replace with your desired location
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 3000,  // 3 kilometers
  zIndex: 1
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function GoogleMapComp() {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Circle // Circle to represent the area
          center={center}
          options={circleOptions}
        />
      </GoogleMap>
    </LoadScript>
  );
}
