import React from 'react';
import About from '../component/About/AboutUs';
import MeetTheTeam from './HomePage/MeetTheTeam/MeetTheTeam'; 


export default function AboutPage() {
  return (
    <div className="AboutPage">
      <p>About Page</p>
      <About/>
      <MeetTheTeam/>
    </div>
  );
}
