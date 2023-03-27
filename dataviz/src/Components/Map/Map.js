import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios"; 
// import espacesData from '/Users/malena/ada_groups/Dataviz/projet-dataviz/dataviz/src/Assets/espaces_verts.json' ; 

function Map() {

//   const getData = async () => {
//     axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/') 

// }

  const getData = async () => {
    await axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&select=geom') 

}


    return (
      
  
        <MapContainer center={[48.87, 2.35]} zoom={12.2}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

        {/* {getData(espaces => ( */}
          <Marker 
          position={[getData.geom.geometry.coordinates[0]]}>


          </Marker>

        {/* ))} */}

          </MapContainer>  
          

          
      )

    }

    export default Map ; 

    // URL API Open Data Paris pour les espaces verts du 75010 : https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010