import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CalPage from '../CalcPage/CalcPage';
import Home from '../Home/Home';
import './App.css';
import Calculator from '../Calculator/Calculator';

const App = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
