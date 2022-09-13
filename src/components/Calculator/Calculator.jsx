import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (event) => {
    const value = event.target.textContent;
    const solution = calculate({ total, next, operation }, value);
    setTotal(solution.total);
    setNext(solution.next);
    setOperation(solution.operation);
  };

  return (
    <div className="calculator-body">
      <p className="display">
        {total}
        {operation}
        {next}
      </p>
      <KeyBoard handler={handleClick} />
    </div>
  );
};

const KeyBoard = (props) => {
  const { handler } = props;
  return (
    <div className="keyBoard">
      <button type="button" onClick={handler} style={{ gridArea: 'zero' }} className="pad">0</button>
      <button type="button" onClick={handler} style={{ gridArea: 'one' }} className="pad">1</button>
      <button type="button" onClick={handler} style={{ gridArea: 'two' }} className="pad">2</button>
      <button type="button" onClick={handler} style={{ gridArea: 'three' }} className="pad">3</button>
      <button type="button" onClick={handler} style={{ gridArea: 'four' }} className="pad">4</button>
      <button type="button" onClick={handler} style={{ gridArea: 'five' }} className="pad">5</button>
      <button type="button" onClick={handler} style={{ gridArea: 'six' }} className="pad">6</button>
      <button type="button" onClick={handler} style={{ gridArea: 'seven' }} className="pad">7</button>
      <button type="button" onClick={handler} style={{ gridArea: 'eight' }} className="pad">8</button>
      <button type="button" onClick={handler} style={{ gridArea: 'nine' }} className="pad">9</button>
      <button type="button" onClick={handler} style={{ gridArea: 'add' }} className="pad operator">+</button>
      <button type="button" onClick={handler} style={{ gridArea: 'minus' }} className="pad operator">-</button>
      <button type="button" onClick={handler} style={{ gridArea: 'division' }} className="pad operator">÷</button>
      <button type="button" onClick={handler} style={{ gridArea: 'X' }} className="pad operator">x</button>
      <button type="button" onClick={handler} style={{ gridArea: 'percentage' }} className="pad operator">%</button>
      <button type="button" onClick={handler} style={{ gridArea: 'AC' }} className="pad red">AC</button>
      <button type="button" onClick={handler} style={{ gridArea: 'masmin' }} className="pad operator">+/-</button>
      <button type="button" onClick={handler} style={{ gridArea: 'decimal' }} className="pad blue">.</button>
      <button type="button" onClick={handler} style={{ gridArea: 'equals' }} className="pad blue">=</button>
    </div>
  );
};

KeyBoard.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Calculator;
