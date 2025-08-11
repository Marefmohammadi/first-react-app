import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import {Routs, Route} from 'react-router-dom';
import React, { use, useRef, useState } from 'react';




function App() {
 
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#" className='nav-item'>Home</a>
        <a href="#" className='nav-item'>About Me</a>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
  
};

export default App;
