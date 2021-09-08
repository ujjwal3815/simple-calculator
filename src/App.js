import React from 'react';
import './style.css';
import { add, sub, mul, div } from './Cal';

const App = () => {
  return (
    <>
      <ul>
        <li> Sum of Two numbers = {add(2,4)} </li>
        <li> Subtraction of Two numbers = {sub(4,2)} </li>
        <li> Multiplication of Two numbers = {mul(2,4)} </li>
        <li> Division of Two numbers = {div(120,7)} </li>
      </ul>
    </>
  );
};

export default App;
