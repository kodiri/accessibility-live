import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Underground extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Underground</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/bbunderground17.jpg" alt="Underground" />

          <p>Currently only 70 out of 270 Tube stations have some degree of step-free access. Manual boarding ramps at certain stations and interchanges provide additional step free access.
            Some improvements are planned for the next five years but there’s still a long way to go before the Underground system is fully accessible.</p>
            
          <p></p>
          <h1>Tube Map</h1>

          <p>Out of the 70 step-free stations, only around half are step-free from the platform on to the train. The step-free access may be from a raised platform section, level with the floor of the train,
            or via a manual boarding ramp – see below for a list of Tube stations with manual boarding ramps. On the <a href="https://www.tfl.gov.uk/cdn/static/cms/documents/standard-tube-map.pdf">TfL Tube Map</a>,
            stations marked with a white wheelchair symbol are step-free to platform, but may have a gap or step to the train. 
            Stations marked with a blue wheelchair symbol are step-free from street right onto the train.</p>

          <p>TfL have also released a new Tube map showing routes you can take to avoid areas with large stretches of tunnels. 
            It’s particularly useful for people with claustrophobia or anxiety: <a href="https://tfl.gov.uk/cdn/static/cms/documents/tube-map-with-tunnels.pdf">Download</a></p>

          <p></p>
          <h3>Contact</h3>

          <p>TfL’s Customer Service Centre – Tel: 0343 222 1234.</p>
    
          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Underground</li>
              <li>Accessible</li>
              <li>Ramp</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Underground;