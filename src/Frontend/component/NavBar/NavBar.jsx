import React from 'react';
import './NavBar.css';
import {
  Link, BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

function NavBar() {
  return (
    <Router>
      <div className="Container">
        <nav className="NavBarContainer">
          <ul className="NavBar">
            <li>
              <Link
                className="link"
                to="/Home"
                style={{ color: '#2D3E4F' }}
                activeStyle={{ color: 'red' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Accesibilty Services"
                style={{ color: '#2D3E4F' }}
                activeStyle={{ color: 'red' }}
              >
                Accesibilty Services
              </Link>
            </li>
            <li>
              <Link to="/Details" style={{ color: '#2D3E4F' }} activeStyle={{ color: 'red' }}>
                Details
              </Link>
            </li>
            <li>
              <Link to="/Useful Links" style={{ color: '#2D3E4F' }} activeStyle={{ color: 'red' }}>
                Useful Links
              </Link>
            </li>
            <li>
              <Link to="/About Us" style={{ color: '#2D3E4F' }} activeStyle={{ color: 'red' }}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default NavBar;
