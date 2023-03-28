// Importation des différentes librairies utilisées pour le rendu de la carte : React, Leaflet, Axios.

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, Polygon, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios";

// Définition d'une couleur pour le dessin des polygones représentant les espaces verts du 75010.
const redOptions = { color: 'red' }

// Function Map pour le rendu de la map.
function Map() {

    //Définition d'une constante pour la position à utiliser pour le dessin des espaces verts ; utilisation de useState.
  const [position, setPosition] = useState([]);

    //Fonction asynchrone pour la récupération des données de la mairie de Paris.
  React.useEffect(() => {
    async function fetchData() {

        // Réponse par Axios pour recevoir les données des espaces verts du 75010.
      const resp = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010`
      );
      // // Coordonnées de test pour la création d'un marqueur. Peut-être à supprimer.
      // const positionR = [
      //   resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
      //   resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0],
      // ];

      // Travail en cours : boucle forEach pour dessiner un polygone par espace vert. 
      const records = resp.data.records
      const finalArrayCoordinates = []
      const intermediateArrayCoordinates = []
      const polygonReversed = []
        
      for (let i = 0; i < records.length ; i++){
        const polygon = resp.data.records[i].record.fields.geom.geometry.coordinates
        for(let j=0 ; j < polygon.length ; j++){
         intermediateArrayCoordinates.push(polygon)
        } 
      }
      // console.log(intermediateArrayCoordinates)
      let finalPolyArray = [];
      let intermediatePolyArray = [];
      let firstPolyArray = [];

      intermediateArrayCoordinates.forEach(array => {
        array.forEach(anotherArray => {
          anotherArray.forEach(coordinate =>{
            firstPolyArray.push(coordinate.reverse())
          })
        })

        // array.forEach(coordinate => {
        // let reversedCoordinate = coordinate.reverse()
        // console.log(reversedCoordinate)
    })

    // console.log(firstPolyArray)
      
      // for (let k = 0; k < intermediateArrayCoordinates.length ; k++){
    
      //   for (let l = 0 ; l < intermediateArrayCoordinates[k].length ; l++){

      //     // for (let m = 0 ; m < intermediateArrayCoordinates[k][l].length ; m ++){
      //     //   // console.log(intermediateArrayCoordinates[k][l].length)
      //     //   console.log(intermediateArrayCoordinates[k])
      //       // for (let n = 0 ; n < intermediateArrayCoordinates[k][l][m].length ; n++){
      //       //   console.log(intermediateArrayCoordinates[k][l][m])
      //     // let coordinateToPush = polyArray[l][m][n].reverse()
      //     // firstPolyArray.push(coordinateToPush)
      //   }}
      //   }  


        for (let o = 0 ; o < records.length ; o ++){
          let polygon = resp.data.records[o].record.fields.geom.geometry.coordinates
          console.log(polygon)
          intermediatePolyArray.push(polygon)
          finalPolyArray.push(intermediatePolyArray)
          // for (let p = 0 ; p < polygon.length ; p++){
          //   console.log(firstPolyArray)
          //   intermediatePolyArray.push(firstPolyArray[p])
          //   finalPolyArray.push(intermediatePolyArray)
          // }
        } 
        
      

        // console.log(intermediatePolyArray)
        
        
      
        
        // finalArrayCoordinates.push(polygonReversed)
        
        // console.log(finalArrayCoordinates)
      // })
      
        
      
      // for (let i = 0; i < records.length ; i++){
      //   const polygon = resp.data.records[i].record.fields.geom.geometry.coordinates
      //   for(let j=0 ; j < polygon.length ; j++){
      //     for(let k=0 ; k < polygon[j].length ; k++){
            
      //         }
      //   }
      // }

      
        // Constitution d'un tableau, qui recevra d'autres tableaux contenants les coordonnées de l'API de la mairie
        // de Paris. On doit invertir les données de l'API pour chaque tableau, reçues en latitude/longitude ; Leaflet
        // a besoin de données en longitude/latitude.
      // const bigTableau = []
      // const polygonReversed = []
      
      // for(let i=0 ; i < polygon.length ; i++){
      //   for(let j=0 ; j < polygon[i].length ; j++){
      //       polygonReversed.push(polygon[i][j].reverse())
      //       }
      // }
      // bigTableau.push(polygonReversed)
      // ;
      // });
      
      setPosition(finalPolyArray)
    }
    fetchData();
  }, []);
  return (
    // Rendu de la map sur la page et dessin du polygone sur la carte.
    <div>
    {position &&(
    <MapContainer center={[48.87, 2.35]} zoom={12.2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Polygon pathOptions={redOptions} positions={position} />
    </MapContainer>
  )};
  </div>
  )
}

export default Map;

