import React, { Component } from 'react';
import './Post.css';

// class component
class Overground extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Underground</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/k7s76_overground370x229.jpg" alt="Overground" />

          <p>Currently, 40 out of the 83 stations have step-free access from the street to the platform. There are five stations which allow independent step-free access from platform to train. 
            These are Dalston Junction, Haggerston, Hoxton, Shoreditch High Street and Canada Water where you can interchange with the Jubilee Line. 
            All of the stations have manual boarding ramps which can be used by anyone with a mobility impairment, not just wheelchair users.</p>
            
          <p>Since April 2014 you do not need to pre-book assistance when travelling on London Overground. 
            Just ask a member of staff at the station for the assistance you need and they will be able to help you, 
            whether you need a ramp to help you on and off the train, or a member of staff to guide you around the station.
            There will be staff at all London Overground managed stations at all times that the trains are running.
            You can use your Freedom Pass or 60+ Oystercard on London Overground trains 24hours a day.</p>
            
          <h3>Contact</h3>

          <p>Overground Customer Service – Tel: 0207 737 2339.</p>
    
          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Overground</li>
              <li>Accessible</li>
              <li>Ramp</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Overground;