import React, { Component } from 'react';
import './Post.css';

// class component
class Community extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Community Transport</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/ncc14islington.jpg" alt="Community Transport" />

          <p>London is lucky to have a large number of local schemes that all work hard to provide a much needed and valued service to the capital’s disabled and older communities..</p>

          <p>Community Transport schemes are voluntary sector organisations that vary between boroughs both in size and the services they provide.</p>

          <p>Some organisations offer door to door services for individuals, while some only provide services for local groups. 
              Some CTs hire out their vehicles with or without drivers. Some run regular shopping trips and local shopmobility schemes.</p>

          <p>Contact your local organisation for more details:<a href="https://tfl.gov.uk/transport-accessibility/community-transport">Select your Borough</a>.</p>

          <div class="tags">
            <ul>
              <li>Door to Door</li>
              <li>Transport</li>
              <li>Community</li>
              <li>Accessible</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;