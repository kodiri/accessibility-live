import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/charlie-team-logo.svg';

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} alt="logo charlie team" className="NavBar__Logo" />
      <div className="NavBar__Menu">
        <div className="NavBar__Menu_Item">
          <Link to="/">Home</Link>
        </div>

        <div className="NavBar__Menu_Item">
          <Link to="/Search">Search</Link>
        </div>

        <div className="NavBar__Menu_Item">
          <Link to="/Details">Details</Link>
        </div>
        <div className="NavBar__Menu_Item">
          <Link to="/AboutUs">About</Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
