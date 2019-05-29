import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class National extends Component {

  render() {
    return (
      <div class="content">
        <div className='post'>
          <h2>National Rail</h2>
          <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/br.jpg" alt="National Rail" />

          <p>The accessibility of the national train network has improved significantly over the last decade.
              Train companies have invested in trains with a number of accessibility features, including wheelchair spaces and accessible toilets.</p>

          <p>However the main problem that rail passengers face is actually getting onto the train in the first place.
              Station accessibility is improving but still leaves a lot to be desired. However all Train Operating Companies (TOCs) are obliged to offer you assistance in making your trip.
              You do however need to inform them up to 24 hours before you embark on your journey.
              Assistance can include a ramp being laid out for you to board and disembark the train, or making a staff member available to accompany you.</p>

          <p>In some cases where the TOCs cannot offer you assistance or access at a particular station, you are well within your rights to ask for a taxi to the nearest station where assistance can be given.
              This falls under the ‘reasonable adjustments’ clause of the Disability Discrimination Act (DDA)</p>

          <h1>Mobility scooters on trains</h1>

          <p>Not all mobility scooters are allowed on trains, and different train companies have policies about the scooters they will allow on.</p>

          <p>It largely depends on the size and weight of your scooter, but the organisation Rica has put together an information sheet setting out the policies of each different company.
            You can find the information here: <a href="http://rica.org.uk/sites/default/files/documents/pdfs/mobility/mobility-scooters-and-trains.pdf">Mobility Scooters and Trains</a></p>

          <h3>Priority Seating Card</h3>

          <p>Many train companies have launched a Priority Seating Card Scheme. The cards are designed for people, including pregnant and older people, who need a seat on public transport to show.
            They say, “Recognised by Southern (or First Capital Connect, or First Great Western) as needing a seat”.</p>

          <p>They aim to minimise the embarrassment some disabled people, especially people with invisible impairments,
            face when asking for a seat in the face of members of the public who may judge you as ‘not looking disabled’.</p>

          <p>You can apply for the card by filling out a form from the train companies’ websites, enclosing evidence of your impairment or pregnancy
            (for example, a doctor’s note or a certificate): <a href="https://www.gwr.com/plan-journey/journey-information/assisted-travel">Great Western Railway, </a>
            <a href="http://www.firstcapitalconnect.co.uk/customer-care/priority-cards/">First Capital Connect, </a>
            <a href="http://www.southernrailway.com/your-journey/accessibility/priority-seat-card/">Southern, </a>
            <a href="http://www.thameslinkrailway.com/contact-us/priority-card/priority-card-faqs/">Thames Link </a>and 
            <a href="https://www.southeasternrailway.co.uk/your-journey/assisted-travel/priority-seating/"> South Eastern. </a>
            You can also phone Transport for All and we can post you the form and details.</p>

          <p>Priority seat cards are available if you:
            <ul>
              <li>Have an impairment or medical condition that affects your ability to stand safely or comfortability during a train journey;</li>
              <li>Are registered as having a visual impairment;</li>
              <li>Are pregnant;</li>
              <li>Are over 65 years old;</li>
              <li>Are carrying a child under 3 years old (this doesn’t cover those who keep the child in a buggy or pushchair).</li>
            </ul>
          </p>

          <div class="tags">
            <ul>
              <li>Public</li>
              <li>Transport</li>
              <li>National Rail</li>
              <li>Accessible</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default National;