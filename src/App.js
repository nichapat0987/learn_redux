
import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {pulse, minus} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h>Counter {counter}</h>
      <button onClick={() => dispatch (pulse())}>+</button>
      <button onClick={() => dispatch (minus())}>-</button>
      {isLogged ? <h3>Valuable Information I Shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
