import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  console.log("center >>> ", center);
  return (
    <div className="map">
      {/* <h1>{center.lat}</h1>
      <h1>{center.lng}</h1>
      <h1>{zoom}</h1> */}

      <MapContainer center={center} zoom={zoom}>
        {/* <MapContainer center={[50.5, 30.5]} zoom={5}> */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
