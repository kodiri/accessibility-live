import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
// Components
import Why from './Why/Why';
import How from './How/How';
import KeepCalm from './KeepCalm/KeepCalm';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam';
import AboutUs from '../../component/About/AboutUs';

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__HeroPhoto">
        <div className="HomePage__HeroPhoto__Title">
          Transforming wheels into
          <br />
          wings...
        </div>
        <div className="HomePage__HeroPhoto__Subtitle">
          <p className="HomePage__HeroPhoto__Subtitle_text">
            The first app to keep you updated with information about the lifts working in your area
          </p>
        </div>
        <Link to="/Search">
          <button type="button" className="HomePage__HeroPhoto__Button">
            Search now
          </button>
        </Link>
        <a href="#Why">
          <div className="HomePage__HeroPhoto__Arrow" />
        </a>
      </div>
      <Why />
      <How />
      <KeepCalm />
      <AboutUs />
      <MeetTheTeam />
    </div>
  );
}
