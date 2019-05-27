import React, { Component } from 'react';
import './Post.css';

// class component
class DLR extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Docklands Light Rail</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/dlr1.jpg" alt="DLR" />

          <p>The Docklands Light Railway runs to East London from Bank or Tower Gateway stations.
            Built in the 1980s, it was designed to be the first fully accessible railway in the UK, providing access for disabled and older people.</p>

          <p>All DLR stations have lift or ramp access to the platforms and relatively level access to the trains. 
              However, it is important to note that the gap between the platform edge and the train is around 75mm (3 inches) and the step up or down between platform and train is around 50mm (2 inches).</p>

          <p>A map of the DLR along with Tube and Train connections can be downloaded here: <a href="http://www.tfl.gov.uk/gettingaround/9441.aspx">Download</a></p>


          <h3>Contact</h3>

          <p>If you would like to try out the service, DLR Community Ambassadors can arrange an accessibility trip for you if you have any concerns about using the DLR. 
            They can meet you at your local station, explain all aspects of using the service and accompany you on your first trip. Telephone: 020 7363 9818.</p>

          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>DLR</li>
              <li>Accessible</li>
              <li>Ramp</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DLR;