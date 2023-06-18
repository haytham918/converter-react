import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {  return (
    <nav className='converter'>
     <Link to='/' className='converter-name'>Converter</Link>
      <ul>
        <li>
        <Link to='/units' className='section'>Units</Link>
        </li>
        <li>
        <Link to='/currency' className='section'>Currency</Link>
        </li>
        <li>
        <Link to='/time' className='section'>Time</Link>
        </li>
      </ul>
      </nav>
   
  );
}

export default NavBar;

