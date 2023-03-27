<<<<<<< HEAD
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
=======


import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, Polygon, TileLayer } from "react-leaflet";
>>>>>>> e2716416 (sauvegarde avec dessin de l'espace vert, LET'S FUCKING GO)
import { Icon } from "leaflet";
<<<<<<< HEAD
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
=======
>>>>>>> 00adab87 (sauvegarde Map.js avec URL API deuxième tentative)
import "./Map.css";
import axios from "axios"; 
// import espacesData from '/Users/malena/ada_groups/Dataviz/projet-dataviz/dataviz/src/Assets/espaces_verts.json' ; 


function Map() {
<<<<<<< HEAD

<<<<<<< HEAD
//   const getData = async () => {
//     axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/') 

// }

  const getData = async () => {
    await axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&select=geom') 

}


    return (
      
=======
>>>>>>> 4cb78539 (on est pas loin de la solution pour afficher un pin avec les coordonnées d'un parc)
  
//   axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&select=geom')
//   .then(resp => {

<<<<<<< HEAD
        {/* {getData(espaces => ( */}
          <Marker 
          position={[getData.geom.geometry.coordinates[0]]}>
=======
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
=======
  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&refine=nsq_espace_vert:10297`
      );
      const positionR = [
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0],
      ];
      const polygon = resp.data.records[0].record.fields.geom.geometry.coordinates
      const bigTableau = []
      const polygonReversed = []
      for(let i=0 ; i < polygon.length ; i++){
        for(let j=0 ; j < polygon[i].length ; j++){
            polygonReversed.push(polygon[i][j].reverse())
            }
      }
      bigTableau.push(polygonReversed)
      setPosition(bigTableau);
    }
    fetchData();
  }, []);
  return (
    <div>
    {position &&(
    <MapContainer center={[48.87, 2.35]} zoom={12.2}>
      <TileLayer
>>>>>>> e2716416 (sauvegarde avec dessin de l'espace vert, LET'S FUCKING GO)
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
      position = {positionR
      }>
      </Marker>

      </MapContainer> 

  })
>>>>>>> 4cb78539 (on est pas loin de la solution pour afficher un pin avec les coordonnées d'un parc)


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
<<<<<<< HEAD
>>>>>>> 5db850b4 (début de l'affichage map)
=======

    // URL API Open Data Paris pour les espaces verts du 75010 : https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010
>>>>>>> 00adab87 (sauvegarde Map.js avec URL API deuxième tentative)
