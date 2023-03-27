import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios"; 
import espacesData from '/Users/malena/ada_groups/Dataviz/projet-dataviz/dataviz/src/Assets/espaces_verts.json' ; 


function Map() {
  
//   axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&select=geom')
//   .then(resp => {

//     console.log(resp.data);
// });

React.useEffect(() => {
  async function fetchData() {
    const resp = await axios.get(
      `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&refine=nsq_espace_vert:10297`
    )
    .then((resp) => {
      const positionR = [resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
      resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0]];
      console.log(positionR);
      <MapContainer center={[48.87, 2.35]} zoom={12.2}>
       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
      position = {positionR
      }>
      </Marker>

      </MapContainer> 

  })


    // try {
    //   const resp = await axios.get(
    //     `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&refine=nsq_espace_vert:10297`
    //   );
    //   const positionR = [resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
    //   resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0]];
    //   // console.log(resp.data.records[0].record.fields.geom.geometry.coordinates[0][0]);
        
    //   return (
       
    //   <MapContainer center={[48.87, 2.35]} zoom={12.2}>
    //    <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />

    //   <Marker
    //   position = {positionR
    //   }>
    //   </Marker>

    //   </MapContainer> )

    // }
    
    // catch(err) {
    //   console.log(err);
    // }

  
  }fetchData()
})}
  


    export default Map ; 

    // URL API Open Data Paris pour les espaces verts du 75010 : https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010