import React from "react";
import "./Main.css";
import axios from "axios";

export default Main (){

  return(
    
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      console.log(response.data.results);

      const divPlop = document.getElementById("plop");

      response.data.results.forEach((character) => {
        const title = document.createElement("h2");
        title.innerText = character.name;

        divPlop.appendChild(title);
      });
    
    }
    ))
    }

