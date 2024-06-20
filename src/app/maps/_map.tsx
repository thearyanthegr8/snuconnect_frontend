"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[28.52680045434033, 77.57537372884804]}
      zoom={16}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
