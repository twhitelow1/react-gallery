import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav class="main-nav">
        <ul>
          <li><a href='/harry potter'>Harry Potter</a></li>
          <li><a href='/star wars'>Star Wars</a></li>
          <li><a href='/marvel heroes'>Marvel Heroes</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;


