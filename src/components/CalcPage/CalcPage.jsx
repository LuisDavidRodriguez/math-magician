import React from 'react';
import Calculator from '../Calculator/Calculator';
import './CalcPage.css';

const CalcPage = () => (
  <div className="cal-page">
    <div className="cal-title">
      <p>Let&apos;s do some Math!</p>
    </div>
    <div className="cal-body">
      <Calculator />
    </div>
  </div>
);

export default CalcPage;
