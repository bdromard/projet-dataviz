<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import axios from "axios";
import "./Main.css";

function Main() {
    React.useEffect(() => {
  async function fetchData() {


    try {
      const response = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?limit=100`
      );

      const divRoute = document.getElementById("root");
      response.data.records.forEach((Vert) => {
        const title = document.createElement("h2");
        title.innerText = Vert.record.fields.nom_ev;
        divRoute.appendChild(title);

      });
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
  });
}

export default Main;

// function Main() {
//   async function fetchData() {
//     try {
//       const response = await axios.get(
//         `https://rickandmortyapi.com/api/character`
//       );

//       const divRoute = document.getElementById("root");
//       response.data.results.forEach((character) => {
//         const title = document.createElement("h2");
//         title.innerText = character.name;
//         divRoute.appendChild(title);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   fetchData();
// }

// export default Main;
=======
import React, { useEffect } from "react";
import "./Main.css";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD


let currentTime = new Date().getHours();
 
=======
import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import "./Main.css";
import axios from "axios";
import '../Map/Map.js'; 
import CreateMap from "../Map/Map.js";
>>>>>>> f2fabb5e (sauvegarde map trop naze)
=======
import '../Map/Map';
=======
import Map from '../Map/Map';
>>>>>>> 1f08db5a (map ajoutée au main :))

>>>>>>> 5db850b4 (début de l'affichage map)


function Main (){

 if (currentTime < 12 && currentTime >= 0){

  return (
    <div className="main-container-morning">
      <section className="pollution">
        <p>ici la qualité de l'air parisien :&#41;</p>
      </section>
      <section className="map">
<<<<<<< HEAD
      <CreateMap /> 
      <p>ici la map de Paris</p>
=======
 
      < Map > </Map>

>>>>>>> 1f08db5a (map ajoutée au main :))
      </section>
    </div>
    )

} else  if (currentTime >= 12 && currentTime <= 18){

  return (
    <div className="main-container-afternoon">
        <section className="pollution">
        <p>ici la qualité de l'air parisien :&#41;</p>
      </section>
      <section className="map">
<<<<<<< HEAD
<<<<<<< HEAD
      <CreateMap /> 
=======

>>>>>>> 5db850b4 (début de l'affichage map)
      <p>ici la map de Paris</p>
=======
 
      < Map > </Map>

>>>>>>> 1f08db5a (map ajoutée au main :))
      </section>
    </div>
    )
} else {

  return (
    <div className="main-container-night">
        <section className="pollution">
        <p>ici la qualité de l'air parisien :&#41;</p>
      </section>
      <section className="map">
<<<<<<< HEAD
      <CreateMap /> 
      <p>ici la map de Paris</p>
      </section>
=======
 
    < Map > </Map>

 </section>
>>>>>>> 1f08db5a (map ajoutée au main :))
    </div>
    )
}
}


<<<<<<< HEAD
}; 
 export default Main ; 
>>>>>>> 52ae9a40 (creation header)
=======
export default Main ; 
>>>>>>> 8ded7d4a (création sections map + pollution // tentative de changement du background color selon l'heure // création d'un footer)
