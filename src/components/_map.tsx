"use client";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const routes = [
  {
    name: "Route 1",
    position: [28.52680045434033, 77.57537372884804],
  },
];

export default function Map() {
  if (typeof window !== "undefined") {
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
        {routes.map((route, index) => (
          <CircleMarker
            key={index}
            center={route.position as LatLngExpression}
            radius={5}
            color="red"
          >
            <Popup>{route.name}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    );
  }
}
