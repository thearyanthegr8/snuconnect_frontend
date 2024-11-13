"use client";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import axios from "axios";

const busIcon = new L.Icon({
  iconUrl: "/images/bus.png", // Path to your bus image
  iconSize: [20, 20], // Size of the icon
  iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
});

export default function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await axios.get("/api/get-location");

      setLocations(data.data);
      // if (error) console.error('Error fetching data:', error); else setLocations(data);
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 2000); // Fetch every x millisecond

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <MapContainer
      center={[28.525173, 77.574996]}
      zoom={55}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc: any) => (
        <Marker key={loc.id} position={[loc.LAT, loc.LONG]} icon={busIcon}>
          <Popup>
            Shuttle ID: {loc.id} <br /> Timestamp:{" "}
            {new Date("10/4/2024, 1:00:00 AM").toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
