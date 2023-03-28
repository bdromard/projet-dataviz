import React from "react";
import './Header.css';
// import Clock from '../Clock/Clock';
import Hour from "../Hour/Hour";


function Header(){
   return(
    <>
    <div className="container">
        <Hour />
    </div>
    
    </>
   )  
}

export default Header ; 
