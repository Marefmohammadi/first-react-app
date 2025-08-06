import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Promo from './components/Promo'; 
import Photo from './Photo.jpg'; 
import Btn from './Btn';


function App(props) {
  function thirdExample() {
    console.log("Third Example");
  };

  const fourthExample = () => {
    console.log("Fourth Example");
    console.log("This is a second console log in the fourth example");
  };
  return (
    <div className="App">
      <Btn /><br></br>
      <button onClick={function() {console.log("First Example")}}>
        An inline anonymous ES5 funcation event handler 
      </button><br></br>
      <button onClick={() => console.log("Second Example")}>
        An inline anonymous ES6 arrow function event handler
      </button><br></br>
      <button onClick={thirdExample}>
        Using a separate function declration.
      </button><br></br>
      <button onClick={fourthExample}>
        Using a separate function expression.
      </button><br></br>

    </div>
  );
  
};

export default App;
