import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";

function Map() {


  return (
    
    <MapContainer center={[48.87, 2.35]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {console.log("coucou")}

      </MapContainer>
      
      ) ; 
     
    } 

    export default Map ; 