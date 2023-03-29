import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import "./Main.css";
import axios from "axios";
import Map from '../Map/Map';
import Pollution from "../Pollution/Pollution";
import '../Pollution/Pollution'; 



function Main (){


let currentTime = new Date().getHours();
const [time, setTime] = useState(currentTime);
const updateTime = () => {
   let currentTime = new Date().getHours();
   setTime(currentTime);
}

useEffect(()=> {
  setInterval(updateTime, 3.6e+6);
})
console.log(currentTime)

 if (time < 12 && time >= 0){

  return (
    <div className="main-container-morning">
      <section className="pollution">
      <h id="pollution" > 
         <Pollution></Pollution>
         </h>  
        
      </section>
      <section className="map">
 
      < Map > </Map>

      </section>
    </div>
    )

} else  if (time >= 12 && time <= 18){

  return (
    <div className="main-container-afternoon">
         <section className="pollution">
      <p id="pollution">   
         <Pollution></Pollution>
         </p>  
      </section>
      <section className="map">
 
      < Map > </Map>

      </section>
    </div>
    )
} else {

  return (
    <div className="main-container-night">
        <section className="pollution">
        
        <h1 id="pollution">   
  
         </h1>  
      </section>
      <section className="map">
 
    < Map > </Map>

 </section>
    </div>
    )
}
}



export default Main ; 
