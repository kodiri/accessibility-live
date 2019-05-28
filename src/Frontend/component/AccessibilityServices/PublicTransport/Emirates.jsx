import React, { Component } from 'react';
import './Post.css';

// class component
class Emirates extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>The Emirate Air Line (Cable Car)</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/1055992255686359108582235840864582725083n.jpg" alt="Emirates" />

          <p>With the cable car you can fly over the Thames from Emirates Greenwich Peninsula to Emirates Royal Docks. It is just five minutes from the O2 by North Greenwich Tube station.</p>

          <p>It is step-free service from street to cabin and suitable for wheelchairs (including electric wheelchairs) and scooters users. 
              However, there are weight restrictions on motorised wheelchairs and only single battery power source motorised wheelchairs up to a width of 80cm can travel. 
              A staff member will slow down the cabin to allow easy access and another staff members at the other end will be waiting for you, to slow down the cabin to allow you to get off easily. 
              Freedom Pass holder’s fare is £3.50 one way, which is a discount of £1.00 on the full fare of £4.50. The person traveling with you will also get £1.00 discount.</p>

          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Accessible</li>
              <li>Emirates Air Line</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Emirates;