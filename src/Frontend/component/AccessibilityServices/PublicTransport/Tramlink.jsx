import React, { Component } from 'react';
import '../../../css/Post.css';

class Tramlink extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Tramlink</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/br.jpg" alt="Tramlink" />

          <p>Tramlink is a tram system that operates in South London.</p>

          <p>The network operates from Wimbledon through Croydon and on to Beckenham. Tramlink was introduced in May 2000 and has proven to be a very popular mode of transport in the area it serves.</p>

          <p>The network connects with seven train stations and one London Underground station – Wimbledon on the District Line.
            This station is listed as step-free by Transport for London and while the gaps are TfL’s category A; 0 – 3.3 inches (0 – 85mm), the steps could be anything from 4.7 – 12.7 inches (121 – 323 mm).</p>

          <p>Access to all trams is completely step free at all stops (no ramp or other aids required) and every stop has tactile paving along the entire length of the stop.
            Tram travel is free to all wheelchair users, even if they are not London residents and do not have a Freedom Pass.
            Each tram has two wheelchair spaces complete with intercom should you need to speak to the driver in an emergency and easy reach stop request button.
            There are priority seats for older and disabled people.
            As the tram leaves each stop, the name of the next stop is announced.</p>

          <h3>Tramlink Shop</h3>

          <p>Unit 5, Suffolk House, George Street, Croydon CR0 1PE, Tel: 020 8681 8300</p>

          <p>The shop gives out local transport information and sells travelcards. They also deal with complaints and ticket problems. Penalty fares can be paid here either over the phone or in person.</p>

          <p>Property found on Tramlink services is forwarded to the Tramlink offices. Customers can enquire about lost property at the Tramlink Shop from 9:00-17:00 from Monday to Friday.</p>

          <h1>Useful Links</h1>

          <p><a href="http://www.tfl.gov.uk/assets/downloads/tramlink-network-map.jpg">Tramlink Map </a>/ 
          <a href="http://www.tfl.gov.uk/gettingaround/10355.aspx"> Tramlink Timetables</a></p>

          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Tramlink</li>
              <li>South</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tramlink;