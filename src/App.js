import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Calculator from './component/Calculator';
import {Routes, Route, Link, input, button} from 'react-router-dom';
import React, { use, useRef, useState } from 'react';
import LogInOutButton from './component/LogInOutButton';
import ReactPlayer from  "react-player";




function App() {
  
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );
  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  );

  function toggle1(){
    if(bird1.paused){
      bird1.play();
    }else{
      bird1.pause();
    }
  };

  function toggle2(){
    if(bird2.paused){
      bird2.play();
    }else{
      bird2.pause();
    }
  };
 
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <input type='search' placeholder='Search...' className='search-bar' />
        <button className='search-button'>Search</button>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <LogInOutButton isLoggedIn={true}/>
      

      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button><br></br><br></br>

      <Calculator/>

     
      <footer className="footer">
        <p>© 2023 My Website</p>
      </footer>
    </div>
  );
  
};

export default App;
