import React, { Component } from 'react';
import './Post.css';

// class component
class Cycling extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Cycling</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/cycling2.jpg" alt="Bike" />

          <p>We all know that cycling has health and wellbeing benefits, but what if you don’t think you can cycle? Well, there’s some good news; you probably can and more easily that you’d think.</p>

          <p>There are many different types of cycles out there these days. Hand cycles, recumbent cycles, trikes, side by side bikes and tandems, so most people can get out there on two (or three or four) wheels.</p>

          <p>For some people it’s an activity to take part in with family and friends, get some exercise and have some fun. For others it can be a passport to travel. 
              Many cyclists use their bikes as their main means of transport. No more waiting around at bus stops on your routes to work.</p>

          <p>Recently, there has been an increase in the number of organisations offering cycling opportunities to disabled people. 
              These range from group sessions where disabled people and their families/friends can cycle together to one-to-one training. 
              Some of these organisations provide advice to individuals, groups and other organisations and also campaign for disabled cyclists.</p>

          <p>If you fancy giving cycling a go and experiencing the freedom you can get from it either get in touch with 
              <a href="http://www.wheelsforwellbeing.org.uk/"> Wheels for Wellbeing</a>, 
              Tel: 020 7346 8482 who operate in Lambeth and Croydon. Alternatively, have a look online for a similar organisation close to you – there are lots of them about. 
              Cycling is for anybody who wants to feel the wind in their hair and enjoy the freedom that it can give you.</p>

          <p>
            <ul>
              <li><a href="http://www.hackney-cyclists.org.uk/pedalpower.htm">Pedal Power (Hackney)</a></li>
              <li><a href="http://www.bikeworks.org.uk/all-ability-rental.php">Bikeworks (Tower Hamlets, Hackney and Kensington and Chelsea)</a></li>
              <li><a href="http://www.companioncycling.org.uk/">Companion Cycling (Richmond)</a></li>
              <li><a href="http://www.enabledlondon.info/default/5.venues/activity/londonRecumbents.htm">Enabled London (Southwark) </a></li>
              <li><a href="http://www.wheelsforwellbeing.org.uk/docs/MSSC%20PUBLICITY.pdf">Merton Sports and Social Club (Merton)</a></li>
              <li><a href="http://www.ecolocal.org.uk/project-detail.php?id=51">Ecolocal (Sutton)</a></li>
              <li><a href="http://www.vision-rcl.org.uk/adapted_bikes.html">Redbridge Cycle Centre (Redbridge)</a></li>
              <li><a href="http://www.kentsport.org/cycling4.cfm">Kent Sport (Kent)</a></li>
              <li><a href="http://inclusivecyclingforum.org.uk/">Inclusive Cycling Forum (country-wide)</a> (for information only, don’t offer cycling instruction)</li>
              <li><a href="http://www.sustrans.org.uk/">Sustrans (countrywide)</a> (for information only, don’t offer cycling instruction)</li>
              <li><a href="http://www.interactive.uk.net//">Interactive (London-wide)</a> (for information only, don’t offer cycling instruction)</li>
              <li><a href="http://www.handcyclinguk.org.uk/">Handcycling UK</a></li>
            </ul>
          </p>

          <p>The downside is that specialised bikes can be quite expensive. Some wheelchairs can be adapted to be used as a handcycle.
               Wheels for Wellbeing have put together an information sheet to help you find funding toward buying a cycle:<a href="http://www.wheelsforwellbeing.org.uk/docs/WfWGettingFundingForACycle.pdf">Download</a></p>

          <div class="tags">
            <ul>
              <li>Personal</li>
              <li>Transport</li>
              <li>Bycicle</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cycling;