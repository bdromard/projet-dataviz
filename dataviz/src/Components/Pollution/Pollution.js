import React, {useEffect, useState} from "react";
import axios from "axios";

function Pollution(){

// Stockage des datas de l'API dans le State. 
const [pollution, setPollution] = useState([]);
        
    React.useEffect(() => {    
       async function fetchData(){

 // On va chercher les données de l'API avec une requête GET. 
        
        try {  
        
            const pollution = await axios.get('https://api.meteo-concept.com/api/forecast/daily/0?insee=75056&world=false&token=c565585230c75675206737f0b46af427eb7060b631affa5a132275d74b316be6',
            ) ; 
             
            console.log(pollution.data.forecast.tmax)
            const divPol = document.getElementById("pollution") ; 
                const state = document.createElement("h1");
                state.innerText = pollution.data.forecast.tmax + "°C";  
                divPol.appendChild(state) ;
             ;

        } catch (err) {
            console.log(err) ; 
        }   
            
        }
        fetchData();
    });

}

export default Pollution ; 

