import React, { useEffect } from "react";
import "./Main.css";
import axios from "axios";
// import Meteo from "../MeteoApi/Meteo";

function Main (){

  useEffect(() => {
    async function fetchData() {
  
    const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=e00cb81a6b504b01a77131032232303&q=Paris&lang=fr&aqi=yes`
    );
    console.log(response.data)
    
    }
    fetchData()});
    ;

  
    return (
    <div className="main-container-morning">
      <section className="pollution">
        <p>ici la qualité de l'air parisien :&#41;</p>
      </section>
      <section className="map">
 
      <Meteo > </Meteo>

      </section>
    </div>
    )
   


}; 
 export default Main ; 
