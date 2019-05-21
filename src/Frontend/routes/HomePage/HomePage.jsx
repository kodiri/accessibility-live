import React from 'react';
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
        <button type="button" className="HomePage__HeroPhoto__Button">
          Start now
        </button>
        <div className="HomePage__HeroPhoto__Arrow" />
      </div>
      <Why />
      <How />
      <KeepCalm />
      <MeetTheTeam />
    </div>
  );
}
