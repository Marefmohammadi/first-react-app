import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Main from './components/Main';
import Sidbar from './components/Sidbar';
import Header from './components/Header';
import Promo from './components/Promo'; // Assuming you have a prompt component
import Photo from './Photo.jpg'; // Assuming you have a photo component

const bool = false; // Example boolean variable
function Example(props) {
  const userPic = <img src={Photo} alt="User" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />;
  return userPic;
};

function Card(props) {
  return (
    <div className="card">
        <div>
          <h2>{props.h2}</h2>
          <h3>{props.h3}</h3>
        </div>
      </div>
  );
};
function App(props) {
  return (
    <div>
      <Header />
      <Main />
      <Sidbar />
      <Example  />
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
    
  );
  
};

export default App;
