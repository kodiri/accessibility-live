import React from 'react';
import { Link } from 'react-router-dom';
import './HeroImg.css';
import paperAirplaneIcon from '../../../Images/icons/start-up.svg';

export default function HeroImg() {
  return (
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
      <Link to="/Search" className="HomePage__HeroPhoto--Button__Download">
        <button type="button" className="HomePage__HeroPhoto__Button">
          Search!
        </button>
      </Link>
      <a href="#Why" className="HomePage__HeroPhoto--Button__Arrow">
        <div className="HomePage__HeroPhoto__Arrow" />
      </a>
    </div>
  );
}
