import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Promo from './components/Promo'; 
import Photo from './Photo.jpg'; 
import Btn from './Btn';
import ModeToggler from './ModeToggler';
import React, { use, useRef, useState } from 'react';


function InputComponent() {
  const [inputText, setText] = useState("Hello");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input value={inputText} onChange={handleChange}/>
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Hello")}>Reset</button><br></br><br></br>
    </div>
  );
}

function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukas@gmail.com",
  });
  
  function getFormData(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
    event.preventDefault();
  }
  return (
   <div>
      <label>
        First Name:
        <input 
          name="firstName"
          value={form.firstName}
          onChange={getFormData}
        />
      </label><br></br>
      <label>
          Last Name:
          <input
            name='lastName'
            value={form.lastName}
            onChange={getFormData}
          />
      </label><br></br>
      <label>
        Email:
        <input
          name='email'
          value={form.email}
          onChange={getFormData}
        />
      </label><br></br>
      <button onClick={() => setForm({
        firstName: "Luke",
        lastName: "Jones",
        email: "lukas@gmail.com"
      })}>Reset</button><br></br>

      <p>
        {form.firstName}{""}
        {form.lastName}{""}
        {form.email}{""}
      </p>
    </div>
  );
  

}

function TextInputWithFocusButton() {
  const inputEI = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEI.current.focus();
  };
  return (
    <div>
      <input ref={inputEI} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </div>
  );
}

function App(props) {
 
  return (
    <div className="App">
      <InputComponent/>
      <RegisterForm/>
      <TextInputWithFocusButton/>
    </div>
  );
  
};

export default App;
