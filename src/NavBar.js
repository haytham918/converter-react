import React from 'react';
import './NavBar.css'

const NavBar = () => {  return (
    <nav className='converter'>
     <a href='/' className='converter-name'>Converter</a>
      <ul>
        <li>
        <a href='/units' className='section'>Units</a>
        </li>
        <li>
        <a href='/currency' className='section'>Currency</a>
        </li>
        <li>
        <a href='/time' className='section'>Time</a>
        </li>
      </ul>
      </nav>
   
  );
}

export default NavBar;

