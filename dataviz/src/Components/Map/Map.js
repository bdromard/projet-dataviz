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
import axios from "axios"; 
import espacesData from '/Users/malena/ada_groups/Dataviz/projet-dataviz/dataviz/src/Assets/espaces_verts.json' ; 

function Map() {

  const getData = async () => {
    axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/') 

}

    return (
      
  
        <MapContainer center={[48.87, 2.35]} zoom={12.2}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

        {/* {getData(espaces => ( */}
          <Marker 
          position={[getData.data.records.fields.geom.coordinates]}>


          </Marker>

        {/* ))} */}

          </MapContainer>  
          

          
      )

    }

    export default Map ; 
>>>>>>> 5db850b4 (début de l'affichage map)
