import React from "react";
import {
  GoogleMap,
  LoadScript,
  LoadScriptNext,
  Circle,
} from "@react-google-maps/api";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";
import "./GoogleMap.css";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 30.26, // Example latitude, replace with your desired location
  lng: -97.74, // Example longitude, replace with your desired location
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: true,
  visible: true,
  radius: 3000, // 3 kilometers
  zIndex: 1,
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function GoogleMapComp() {
  return (
    <MDBAccordion initialActive={0}>
      <MDBAccordionItem
        collapseId={1}
        headerTitle={
          <div className="accordion-header-content">
            <MDBIcon fas icon="map-marker-alt" />
            &nbsp;Open Map
          </div>
        }
      >
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
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
