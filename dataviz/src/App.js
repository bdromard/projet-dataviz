import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Clock from './Components/Clock/Clock';

function App() {
  return (
    
    <>
    <Routes>
      <Route exact path="/" element={<Header/>}/>
    </Routes>
    
    <Routes>
      <Route exact path="/" element={<Main/>}/>
    </Routes>
    
    <Clock/>
    </>
      
      // import Footer from './Footer/Footer';
      // import Header from './Header/Header';
      // import Content from './Content/Content';
      
      // function App() {
      //   return (
      //    <div>
      //     <Header/>
      //     <Content/>
      //     <Footer/> 
      //    </div> 
        // );
      // }
      
      // export default App;
  
  
  
  );
}

export default App;
