//import React, { useEffect } from "react";
import './Header.css';
import Clock from '../Clock/Clock';
import Logo from '../../Image/Logo.png';
// ****************************************************************
 function Header(){


return (
  <div id = "FirstPage">
    <Clock />
    <img src={Logo} alt="Logo" className='logo' />
 </div>
)
 }

 export default Header



