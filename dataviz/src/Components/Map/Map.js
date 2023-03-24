import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
<<<<<<< HEAD
import "./Map.css"


export default function CreateMap() {
    return <MapContainer center={[48.8738857, 2.3566908]} zoom={12}>
        <TileLayer    
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        
    </MapContainer>
} 
=======
import "./Map.css";

function Map() {

  return (
    
    <MapContainer center={[48.87, 2.35]} zoom={12.2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      </MapContainer>  
      ) ; 
    } 

    export default Map ; 
>>>>>>> 5db850b4 (début de l'affichage map)
