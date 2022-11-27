import React, {useState} from "react";
// CSS
import './App.css';
// COMPONENTS
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from 'react';


const App= ()=> {

  const [input , setInput] =useState(" ");
  const [todos, setTodos] = useState([]);


  return (
  <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
  </div>
  );
}

export default App;
