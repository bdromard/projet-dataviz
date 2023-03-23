import React, { useEffect } from "react";
import "./Meteo.css";
import axios from "axios";

const divMeteo = ReactDOM.createMeteo(
document.getElementById('meteo')
)

function Meteo(){

    React.useEffect(() => {
        async function fetchData() {
      
      
            try {
                const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=e00cb81a6b504b01a77131032232303&q=Paris&lang=fr&aqi=yes`
            );
            response.data.location.forEach((element) => {
                const paragraph = document.createElement('p');
                paragraph.innerHTML = element;
                divMeteo.appendChild(paragraph)
            })
        }
        }})}

export default Meteo;