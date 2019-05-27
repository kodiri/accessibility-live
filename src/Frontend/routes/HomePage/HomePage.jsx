import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
// Components
import HeroImg from './HeroImg/HeroImg';
import Why from './Why/Why';
import How from './How/How';
import KeepCalm from './KeepCalm/KeepCalm';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam';
import AboutUs from '../../component/About/AboutUs';

export default function HomePage() {
  return (
    <div className="HomePage">
      <HeroImg />
      <Why />
      <How />
      <KeepCalm />
      <AboutUs />
      <MeetTheTeam />
    </div>
  );
}
