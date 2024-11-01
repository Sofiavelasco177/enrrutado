import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
          </li>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;
