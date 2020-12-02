import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav class="main-nav">
        <ul>
          <li><NavLink to='/potter'>Harry Potter</NavLink></li>
          <li><NavLink to='/starwars'>Star Wars</NavLink></li>
          <li><NavLink to='/marvel'>Marvel</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;


