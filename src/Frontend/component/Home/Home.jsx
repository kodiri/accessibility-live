import React from 'react';
import './Home.css';
// Components
import NavBar from '../NavBar/NavBar';
import Twitter from '../Twitter/Twitter';
import AboutUs from '../About/AboutUs';
import MeetTheTeam from '../../routes/HomePage/MeetTheTeam/Member';

function Home() {
    return (
        <>
        <NavBar />
        <Twitter />
        <AboutUs />
        <MeetTheTeam />
        </>
    );
}

export default Home;