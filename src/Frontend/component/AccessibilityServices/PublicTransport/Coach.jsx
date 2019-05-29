import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Coach extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Coach travel</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/coaches.jpg" alt="Coach" />

          <p>Coach travel can be a cheaper alternative to trains for getting around the UK. The accessibility regulations governing coaches (PSVAR regulations) do not come into force until 2020,
            so many coaches in the UK remain inaccessible to wheelchair users.</p>

          <p>In addition, many coach stops in the UK remain inaccessible to coach users, for example, because street furniture blocks a wheelchair lift from operating.
            So it is worth contacting the coach company before you travel to check if your planned route includes accessible stops.</p>

          <p>Access polices of the largest coach companies operating in London: </p>

          <h1>National Express</h1>

          <p>Most of coaches in National Express’s fleet have a wheelchair lift. However, many wheelchair models do not fit in their ‘accessible’ coaches.
            Thus, you are advised to contact the assisted travel helpline 36 hours in advance of travel with the size,
            make and model of your chair to ensure that your wheelchair fits into the wheelchair space. Call National Express on: 0371 781 8181 </p>

          <p>If you are a scooter user, National Express will not allow you to travel in your scooter. They only accept small lightweight mobility scooters for storage and carriage in the coach luggage hold.
              Again, call the National Express on the number above to find out more or visit their Mobility Scooter Page on their website.</p>

          <p>Regrettably, National Express Coaches have no audio visual information given throughout the journey so ask the driver to announce when you are approaching your destination.
            He or she will also announce any rest breaks during the journey.</p>

          <p>More Information can be found at: <a href="http://www.nationalexpress.com/help-and-advice/about-us/disabled-travellers.aspx">National Express Disabled Travellers</a></p>

          <h3>Oxford Tube</h3>

          <p>The Oxford – London tube service has 26 low floor buses which are accessible to wheelchair users by a ramp at the back of the coach.
            There is only space for one wheelchair user per coach so if it is already being used you will need to wait for the next one. Coaches run every 10 minutes,
            24 hours a day and there is no need to book assistance in advance, just turn up and the driver should be able to help you.</p>

          <p>All coaches have an audio announcement when the coach leaves Oxford or London but the driver will announce all other stops over the radio.</p>

          <p>Regrettably their coaches are not equipped with hearing loops. Their coaches have wheelchair accessible toilets on the London to/from Oxford buses only but not local services.</p>

          <p>More Information can be found at: <a href="http://www.oxfordtube.com/faqs.aspx">OXford Tube faqs</a></p>

          <h1>Megabus</h1>

          <p>Megabus operates low cost coach travel across the UK. The sooner you book your ticket the cheaper it will be. As ticket prices are already subsidised,
            they do not offer concessions for older and disabled passengers. Megabus request that passengers give 48 hours’ notice when booking assistance,
            although they will ‘make reasonable efforts to accommodate your travel needs on one of its buses’.</p>

          <p>f you are a wheelchair or mobility scooter user who can transfer to a seat then you can store your wheelchair or scooter as luggage and the driver will help you to the seat.
            If you prefer to stay in your wheelchair or scooter throughout the journey, you are advised to contact their customer services on 0141 332 9644 before making a booking.</p>

          <p>More Information can be found at: <a href="http://uk.megabus.com/passengers-with-disabilities.aspx">Megabus Passengers with Disabilities</a></p>

          <h3>EasyBus</h3>

          <p>EasyBus run low cost airport transfers bus and coach service to and from central London and Gatwick Airport,
            Luton Airport Stansted Airport and Heathrow. One-way tickets start from £2 online. The sooner you book your ticket online the cheaper it will be.
            You can also buy tickets from EasyBus’ drivers when boarding the bus; though tickets will cost considerably more than booking online in advance.
            There are no additional concessions for older and disabled passengers.</p>

          <p>Luton Airport to/from Central London is run by National Express on behalf of EasyBus. They do operate wheelchair accessible coaches but you need to contact National
            Express directly on 03717 818181 from 8am – 8pm, 7 days a week 36 hours before you are due to travel.</p>

          <p>Stansted / Gatwick / Luton Airports to/from Central London Service is not operated by wheelchair accessible vehicles.
            EasyBus require that wheelchair users may use their services provided they are able to use one of the seats fitted to the vehicle.
            Currently, they also advise wheelchair users that due to the construction and design of their vehicles it is not possible to carry disabled passengers who requires the use of their own wheelchair,
            nor is it possible to carry a wheelchair as luggage. They also do not offer any assistance whatsoever.</p>

          <h3>Stansted Citylink</h3>

          <p>Stansted Citylink is a direct, non-stop route to/from Stansted to London St Pancras/Kings Cross. There is only space for one wheelchair user per coach, with a lift or ramp,
            for an un-powered wheelchair. If you use an electric wheelchair or mobility scooter and can transfer to a seat then you can store your wheelchair or scooter as luggage provided
            that you can dis-assemble into parts weighing not more than 20kg.</p>

          <p>The coach has an on-board toilet.</p>

          <p>More Information can be found at: <a href="http://www.stanstedcitylink.co.uk/accessibility">Stansted Citylink Accessibility</a></p>

          <h3>Victoria Coach Station mobility lounge</h3>

          <p>Transport for London operate a mobility assistance service at Victoria Coach Station which is located opposite Gate 21 in the east departures terminal.
            Disabled and older passengers are entitled to free assistance to and from coaches and a comfortable and safe waiting area.
            The lounge has space for 25 people and their luggage and there is also an accessible toilet.</p>

          <p>You can book assistance by phoning the Mobility Lounge on 020 7027 2520 or book online. TfL would like you to book 24 hours in advance,
            although it is possible to gain access to the lounge if space is available by showing your ticket to travel and concessionary travel card. Please note,
            the mobility lounge is open from 07:00 to 21:30. If you require porter services to help with your luggage, this may incur a charge.</p>

          <p>More Information can be found at: <a href="https://tfl.gov.uk/info-for/media/press-releases/2007/august/victoria-coach-station-opens-new-mobility-assistance-lounge">Victoria Coach Station Mobility Assistance Lounge</a></p>

          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>Bus</li>
              <li>Accessible</li>
              <li>Coach</li>
              <li>National</li>
              <li>Airport</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Coach;