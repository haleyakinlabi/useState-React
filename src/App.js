import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Counter from './components/Counter';

function App() {
  
  
  return (
    <div className="App">
    <Counter count={5}></Counter>

    </div>
  );
}

export default App;

// hooks:

// useState is a helper function that sets up a variable and setter function for that variable
// we can use the setter function to change the value of the variable (i.e. state)
// and react will automatically rerender the state change




