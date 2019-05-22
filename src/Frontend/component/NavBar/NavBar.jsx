import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='app'>
      <div className="NavBar">
        <a href="" className="NavBar__Logo"> Logo goes here
            </a>

        <input
          className="Menu_Button"
          type="checkbox"
          id="Menu_Button"
        />

        <label
          className="Menu_Icon"
          for="Menu_Button">
          <span className="Hamburger"></span>
        </label>
        
        <ul className="NavBar__Menu">
          <div className="NavBar__Menu_Item"><li><Link to="/">Home</Link></li></div>
          <div className="NavBar__Menu_Item"><li><Link to="/Search">Search</Link></li></div>
          <div className="NavBar__Menu_Item"><li><Link to="/Details">Details</Link></li></div>
          <div className="NavBar__Menu_Item"><li><a href="#Contact">Contact</a></li></div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

/* 
import logo from '../../Images/charlie-team-logo.svg';
Code for the logo <a href="" className="NavBar__Logo"><img src={logo} alt="logo charlie team"/></a>
*/