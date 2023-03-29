import React, {useEffect, useState} from "react";
import axios from "axios";
import { divIcon } from "leaflet";


function Pollution(){

// Stockage des datas de l'API dans le State. 
const [pollution, setPollution] = useState([]);
        
    React.useEffect(() => {    
       async function fetchData(){

 // On va chercher les données de l'API avec une requête GET. 
        
        try {  
        
            const pollution = await axios.get('https://api.airparif.asso.fr/indices/prevision/commune?insee=75056', 
             { headers:{'x-api-key': '899d5237-f25d-91d0-2452-150bd3681d4e'} }) ; 
            console.log(pollution.data)

            const divPol = document.getElementById("root") ; 

            for (let i = 0 ; i < pollution ; i ++){

                const state = document.createElement("p");
                state.innerText = pollution[i];  
           
                divPol.appendChild(state) ;
                

            } ;

        } catch (err) {
            console.log(err) ; 
        }   
            
        }
        fetchData();
    });

}

export default Pollution ; 

