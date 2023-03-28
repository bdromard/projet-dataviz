import React, { useEffect, useState } from "react";
import "./Meteo.css";
import axios from "axios";

// const divMeteo = ReactDOM.createMeteo(
// document.getElementById('meteo')
// )

function Meteo(){

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
      
        const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=e00cb81a6b504b01a77131032232303&q=Paris&lang=fr&aqi=yes`
        );
        console.log(response.data)
        setData(response.data)
        }
fetchData();
    }, []);
}
return(
    <div>
    {data &&(
    <Meteo>

    </Meteo>
    )}
    </div>
    
        ) 

export default Meteo;