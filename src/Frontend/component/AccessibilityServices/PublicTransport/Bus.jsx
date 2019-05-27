import React, { Component } from 'react';
import './App.css';

// class component
class Bus extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Bus Service</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/t0jux_buswebpageiman.jpg" alt="Bus" />

          <p>Despite the fact that London has the largest accessible bus fleet in the world, using buses in London can be challenging for Disabled and older people. 
            However, armed with the right information, you should be able to use buses to explore our great city.</p>

          <h1>Accessibility</h1>
          
          <ul>
            <li><b>Assistance dogs </b>are welcome on all buses and may travel upstairs or downstairs.</li>
            <li><b>Audio-visual announcements </b>are available on all London buses informing passengers about destinations and issues. If the system does not seem to be working, speak to the driver.</li>
            <li><b>Priority seats</b>There are priority seats on the lower deck for people who find it difficult to stand. 
            Don’t hesitate to ask passengers to give you their seat if you need it. Don’t forget that TfL has issued a “Please offer me a seat” badge for people with an invisible impairment. </li>
            <li>A <b>Travel Support card </b>is also available for people who need a bit more support from the driver. 
            This can be very useful for people with dementia, people with speech impairments and people with learning difficulties.</li>
            <li><b></b>Buses can also kneel to help you get on-board.</li>
            <li><b>Mobility walkers and shopping trolleys </b>are welcome on-board and you can ask the driver to lower the ramp or kneel the bus if needed.</li>
            <li><b>Ramp: </b>Buses usually have a ramp at the middle doors (wheelchair and mobility scooter users board via these doors). Some single-decker buses have a ramp at the front doors.</li>
            <li><b>Wheelchair priority space: </b>On each bus, there is at least one space in which wheelchair and mobility scooter users have priority over other passengers.</li>
          </ul>

          <h3>Cost</h3>

          <p><b>Freedom pass holders </b>can use any London bus 24 hours a day.</p>
          <p><b>Wheelchair users, mobility scooter users as well as visually impaired people using a guide dog, </b> are entitled to free travel on London buses and do not need to show any ticket or pass.</p>
          <p><b>Personal assistants or carers </b>must hold a valid ticket/Oyster card or bus pass.</p>
          
          <h3>Contact</h3>

          <p>Transport for London helpline – Tel: 0343 222 1234.</p>
    
          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Bus</li>
              <li>Accessible</li>
              <li>Ramp</li>
              <li>Scooter</li>
              <li>Wheelchair</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Bus;