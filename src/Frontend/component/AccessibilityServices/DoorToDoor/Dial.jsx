import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Dial extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>Dial-a-Ride</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/dialaridesmall.jpg" alt="Dial A Ride" />

          <p>Dial-a-Ride is a membership scheme run by Transport for London (TfL) which provides a bookable door-to-door minibus service free of charge for disabled
            and older people who have difficulties accessing public transport.</p>

          <p>You are automatically eligible for membership of Dial-a-Ride if you are:
           <ul>
              <li>a current member of Taxicard</li>
              <li>in receipt of Higher Rate Mobility Component of Disability Living Allowance</li>
              <li>in receipt of standard or enhanced Mobility Rate of the PIP</li>
              <li>registered blind or partially sighted</li>
              <li>aged 85 or over</li>
              <li>in receipt of Higher Rate Attendance Allowance</li>
              <li>in receipt of a War Pension Mobility Supplement</li>
            </ul>
          </p>

          <p>Don’t worry if none of the above criteria are applicable. You can still apply to use the service if your impairment affects your mobility and you have trouble using public transport.
            You will need to describe your mobility problems and also send written proof provided by a healthcare professional.</p>

          <p>If you wish to apply you need to fill this: <a href="https://www.tfl.gov.uk/modes/dial-a-ride/membership?intcmp=4002">Aplication Form</a>. Before applying it may be beneficial to read the:
          <a href="http://www.transportforall.org.uk/:www.tfl.gov.uk/assets/downloads/dial-a-ride-customer-charter.pdf"> Customer Charter.</a></p>

          <h3>Bookings</h3>

          <p>The Management Control Centre, open Monday to Friday, 9am – 4pm, is the call centre where all the bookings are taken, on 0343 222 7777
            <a href="https://www.tfl.gov.uk/corporate/terms-and-conditions/tfl-call-charges"> (TfL call charges). </a>
            When demand for the service is high (9am– 11am) it can be difficult to get through, so prepare to be kept on hold. It is often better to ring outside these hours.
            If you are calling on busy time and you were unable to get of them, then fill in the online booking:
            <a href="http://www.transportforall.org.uk/files/bookingrequestform.doc"> Online Booking, </a>
            and email it to them on<a href="DAR.reservations@tfl.gov.uk"> DAR.reservations@tfl.gov.uk. </a>When you are booking a trip it helps to be as flexible as possible about when you can travel.
            By the nature of the service, Dial-a-Ride may pick up other service users on the way to your destination.
            This can sometimes prolong the journey so ensure that you leave enough time to take this into account.
            There is also a 15 minute window either side of the time you booked for, so always be ready 15 minutes before your pick up time.</p>

          <p>
            <ul>
              <li>Dial-a-Ride may not be the best option if you are attending an appointment or any event for which you have purchased tickets as they cannot guarantee your drop off time.</li>
              <li>Dial-a-Ride will not take you to a hospital appointment – it can only take you to ‘high street’ medical appointments like the GP or Optician.</li>
              <li>You are entitled to take a carer or someone to assist you if there is space in the vehicle. Let Dial-a-Ride know you want to bring someone at the time of booking your trip.</li>
            </ul>
          </p>

          <p>If you want a trip to the <b>same place at the same time every week</b>, then Dial-a-Ride may be able to offer you a <b>regular booking</b>.
            Once you have secured a regular booking, you don’t have to to ring the call centre each week, the vehicle will turn up on the specified day at the time arranged.</p>

          <p>Unfortunately in certain areas this service is oversubscribed. Check what the situation is in your area by checking with the Call Centre.</p>

          <h1>Track your vehicle</h1>

          <p>You can track your vehicle by calling 0343 222 7777, from 06:00 to 24:00, seven days a week.</p>

          <h1>Contact</h1>

          <p>Tel: 0343 222 7777<a href="https://www.tfl.gov.uk/corporate/terms-and-conditions/tfl-call-charges"> (TfL call charges).</a> Email:<a href="DAR.reservations@tfl.gov.uk"> DAR.reservations@tfl.gov.uk.</a></p>

          <div class="tags">
            <ul>
              <li>Door to Door</li>
              <li>Transport</li>
              <li>Dial-a-Ride</li>
              <li>Accessible</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dial;