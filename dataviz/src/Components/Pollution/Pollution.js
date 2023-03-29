import React, {useEffect, useState} from "react";
import axios from "axios";


function Pollution(){

const [pollution, setPollution] = useState([]);
        
    React.useEffect(() => {    
       async function fetchData(){

            const pollution = await axios.get('https://api.airparif.fr/indices/prevision/commune?insee=75056', 
            { headers:{'x-api-key': '899d5237-f25d-91d0-2452-150bd3681d4e'} })
             
            console.log(pollution)

            setPollution(pollution)
        }
        fetchData();}, [])

        
    return (

        <div>
            {pollution.map}
        </div>
    )

}

export default Pollution ; 

