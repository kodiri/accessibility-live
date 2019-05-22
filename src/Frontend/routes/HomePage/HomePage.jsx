import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
// Components
import Why from './Why/Why';
import How from './How/How';
import KeepCalm from './KeepCalm/KeepCalm';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam';

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__HeroPhoto">
        <div className="HomePage__HeroPhoto__Title">
          Transforming wheels in
          <br />
          wings...
        </div>
        <div className="HomePage__HeroPhoto__Subtitle">
          <p className="HomePage__HeroPhoto__Subtitle_text">
            First app to keep you updated about all the lifts working in your area
          </p>
        </div>
        <Link to="/Search">
          <button type="button" className="HomePage__HeroPhoto__Button">
            Start now
          </button>
        </Link>
        <a href="#Why">
          <div className="HomePage__HeroPhoto__Arrow" />
        </a>
      </div>
      <Why />
      <How />
      <KeepCalm />
      <MeetTheTeam />
    </div>
  );
}
