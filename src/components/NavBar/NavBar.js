import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="nav-bar">
    <div>
      <h1>Math  Magician</h1>
    </div>
    <div className="links">
      <Link to="/Home" className="home">Home</Link>
      <Link to="/Calculator" className="calculator">Calculator</Link>
      <Link to="/Quote" className="quote">Quote</Link>
    </div>
  </div>
);

export default NavBar;
