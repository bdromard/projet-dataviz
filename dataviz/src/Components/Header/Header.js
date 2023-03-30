//import React, { useEffect } from "react";
import './Header.css';
import Clock from '../Clock/Clock';
import Logo from '../../Image/Logo.png';
// ****************************************************************
 function Header(){


return (
  <> <section className='Header'>

  <div className='Titre'>
    <p> Paris<br/>
        Respire</p>

  </div>

  <div className = "Clock">
   <p> <Clock> </Clock> </p>
   {/* <img src={Logo} alt="Logo" className='logo' /> */}
  </div>

  </section>
  </>
)
 }

 export default Header


