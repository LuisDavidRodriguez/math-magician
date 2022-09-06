/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/Calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-body">
        <p className="display">895</p>
        <KeyBoard />
      </div>
    );
  }
}

const KeyBoard = () => {
  return (
    <div className="keyBoard">
      <button type="button" style={{ gridArea: 'zero' }} className="pad">0</button>
      <button type="button" style={{ gridArea: 'one' }} className="pad">1</button>
      <button type="button" style={{ gridArea: 'two' }} className="pad">2</button>
      <button type="button" style={{ gridArea: 'three' }} className="pad">3</button>
      <button type="button" style={{ gridArea: 'four' }} className="pad">4</button>
      <button type="button" style={{ gridArea: 'five' }} className="pad">5</button>
      <button type="button" style={{ gridArea: 'six' }} className="pad">6</button>
      <button type="button" style={{ gridArea: 'seven' }} className="pad">7</button>
      <button type="button" style={{ gridArea: 'eight' }} className="pad">8</button>
      <button type="button" style={{ gridArea: 'nine' }} className="pad">9</button>
      <button type="button" style={{ gridArea: 'add' }} className="pad operator">+</button>
      <button type="button" style={{ gridArea: 'minus' }} className="pad operator">-</button>
      <button type="button" style={{ gridArea: 'division' }} className="pad operator">/</button>
      <button type="button" style={{ gridArea: 'X' }} className="pad operator">X</button>
      <button type="button" style={{ gridArea: 'percentage' }} className="pad operator">%</button>
      <button type="button" style={{ gridArea: 'AC' }} className="pad red">AC</button>
      <button type="button" style={{ gridArea: 'masmin' }} className="pad operator">+/-</button>
      <button type="button" style={{ gridArea: 'decimal' }} className="pad blue">.</button>
      <button type="button" style={{ gridArea: 'equals' }} className="pad blue">=</button>
    </div>
  );
};
