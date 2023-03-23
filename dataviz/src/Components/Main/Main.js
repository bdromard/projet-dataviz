import React, { useEffect } from "react";
import "./Main.css";
import axios from "axios";


let currentTime = new Date().getHours();
 


function Main (){

 if (currentTime < 12 && currentTime >= 0){

  return (
    <div className="main-container-morning">
      <section className="pollution">
        <p>ici la qualité de l'air parisien :&#41;</p>
      </section>
      <section className="map">
      <p>ici la map de Paris</p>
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
      <p>ici la map de Paris</p>
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
      <p>ici la map de Paris</p>
      </section>
    </div>
    )
}
}


export default Main ; 
