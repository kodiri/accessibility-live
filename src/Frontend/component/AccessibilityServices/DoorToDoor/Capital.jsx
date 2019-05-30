import React, { Component } from 'react';
import '../../../css/Post.css';

class Capital extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Capital Call</h2>
                    <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/536r3_minicac.jpg" alt="Capital Call" />

                    <p>Capital Call was introduced by TFL as an addition to Taxicard in the boroughs where black cabs are scarce, and currently operates in
                        Bexley, Ealing, Enfield, Haringey, Hillingdon, Hounslow, Lambeth, Lewisham, Merton and Southwark. You will be given an annual travel budget of £200,
                        to spend how you wish on Capital Call trips booked through the call centre.</p>

                    <p>You must be a member of Taxicard to use Capital Call.</p>
                    <p>When you make a booking, Capital Call arranges for a local minicab firm to collect you. You will pay a flat fare of £1.50 for anything up to £11.80. 
                        The remainder, in this case £10.30, is taken from a £200 per year budget allocated to each member by TfL.</p>

                    <p>Multiple swiping is permitted on Capital Call for fares of up to £59, which is five times the trip subsidy.
                        <ul>
                            <li>For trips up to the value of £11.80 you pay £1.50</li>
                            <li>For trips between £11.81 and £23.60 you pay £3.00</li>
                            <li>For trips between £23.61 and £35.40 you pay £4.50</li>
                            <li>For trips between £35.41 and £47.20 you pay £6.00</li>
                            <li>For trips between £47.21 and £59.00 you pay £7.50</li>
                        </ul>
                    </p>

                    <p>Call Capital Call to register on 020 7275 2446.</p>

                    <p>You can also view, download and print their application:<a href="http://www.hctgroup.org/uploaded/Capital%20Call%20Registration%20Form.pdf"> Download.</a></p>
                    <p>More information about the scheme can be found<a href="http://www.tfl.gov.uk/modes/taxis-and-minicabs/taxicard-and-capital-call#on-this-page-2"> online.</a></p>

                    <h1>Contact</h1>

                    <p>Telephone Capital Call on 020 7275 2446 / Email:<a href="capitalcall@hackneyct.org"> capitalcall@hackneyct.org.</a></p>

                    <div class="tags">
                        <ul>
                            <li>Door to Door</li>
                            <li>Transport</li>
                            <li>Taxi</li>
                            <li>Accessible</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Capital;