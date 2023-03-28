// Importation des différentes librairies utilisées pour le rendu de la carte : React, Leaflet, Axios.

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, Polygon, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios";

const adaPosition = [48.8738822, 2.3566908];
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
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010&limit=68`
      );
    
     
      const records = resp.data.records
      
        // Constitution d'un tableau, qui recevra d'autres tableaux contenants les coordonnées de l'API de la mairie
        // de Paris. On doit invertir les données de l'API pour chaque tableau, reçues en latitude/longitude ; Leaflet
        // a besoin de données en longitude/latitude.

        // For loop qui parcourt les résultats de la requête et rassemble les coordonnées de chaque
        // espace vert dans un tableau (intermediateArrayCoordinates)
        let intermediateArrayCoordinates = []
        for (let i = 0; i < records.length ; i++){
        const polygon = resp.data.records[i].record.fields.geom.geometry.coordinates
        for(let j=0 ; j < polygon.length ; j++){
         intermediateArrayCoordinates.push(polygon)
        } 
      }
      
      // Création de tableaux vides pour stocker les données et émuler la structure de données attendue
      // par Leaflet.
      let finalPolyArray = [];
      let intermediatePolyArray = [];
      let firstPolyArray = [];

      // Ensemble de loops forEach pour parcourir la structure de données et invertir les coordonnées. Ensuite
      // on stocke toutes les coordonnées dans un tableau (firstPolyArray)
      intermediateArrayCoordinates.forEach(array => {
        array.forEach(anotherArray => {
          anotherArray.forEach(coordinate =>{
            firstPolyArray.push(coordinate.reverse())
          })
        })
    })


    // For loop finale qui parcourt de nouveau les résultats de la requête, puis push dans le tableau final.
    
        for (let o = 0 ; o < records.length ; o ++){
          let polygon = resp.data.records[o].record.fields.geom.geometry.coordinates
          intermediatePolyArray.push(polygon)
          finalPolyArray.push(intermediatePolyArray)
        } 
        
      
      setPosition(finalPolyArray)
    }
    fetchData();
  }, []);
  return (
    // Rendu de la map sur la page et dessin du polygone sur la carte.
    <div>
    {position &&(
    <MapContainer center={adaPosition} zoom={16}>
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

