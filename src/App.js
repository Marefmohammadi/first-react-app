import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import {Routes, Route, Link, input, button} from 'react-router-dom';
import React, { use, useRef, useState } from 'react';
import LogInOutButton from './component/LogInOutButton';


function CurrentImage(){
  const time = new Date().getHours();
  const isDaytime = time >=6 && time <=16;

  return (
    <div>
      {isDaytime
      ? "Hello Day time" : "Hello Night time"}
    </div>
  );
}

function CurrentMessage({day}){
  const weekday = (day >=1 && day <= 5);
  const weekend = (day >=6 && day <= 7);
  let message;

  if(weekday){
    message = "Workdays";
  } else if(weekend){
    message = "Rest Day";
  } else{
    message = <h1 style={{color: "red"}}>Error</h1>
  }

  return(
    <div>
      {message}
    </div>
  );
  
}




function App() {
  const time = new Date();
  const day = time.toLocaleDateString("en-us", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours <= 12;
  let dayMessage;
  if(day.toLocaleLowerCase() === "monday"){
    dayMessage = `Happy ${day}`;
  } else if(day.toLowerCase() === "tuesday"){
    dayMessage = `${day}, four days to go`;
  }else if(day.toLowerCase() === "wednesday"){
    dayMessage = `${day}, half way there`;
  }else if(day.toLowerCase() === "thursday"){
    dayMessage = `${day}, start planing the weeked`;
  }else if(day.toLowerCase() === "friday"){
    dayMessage = 'Woo, hooo, the weekend is coming';
  } else{
    dayMessage = "Stay calm and keep having fun";
  }
 
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

      <CurrentImage/>
      <CurrentMessage day={9} />
      <LogInOutButton isLoggedIn={false}/>
      <h1>
        {dayMessage}
      </h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : ""}
      <footer className="footer">
        <p>© 2023 My Website</p>
      </footer>
    </div>
  );
  
};

export default App;
