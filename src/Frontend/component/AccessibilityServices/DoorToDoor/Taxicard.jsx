import React, { Component } from 'react';
import '../../../css/Post.css';

class Taxicard extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Taxicard</h2>
                    <img class="content-right" src="https://www.londoncouncils.gov.uk/sites/default/files/styles/image_230x180/public/homepagetaxiimage.gif?itok=EpZZrT0Q" alt="Taxicard" />

                    <p>The London Taxicard Scheme is funded by 32 participating London boroughs and the Mayor of London,
                        and it aims to provide door-to-door transport for disabled and older people who have mobility impairments and difficulty in using public transport.
                        The Taxicard contract is administered by London Councils, and operated by Computer Cab.</p>

                    <p>Your Taxicard allows you to make a set number of subsidised journeys in licensed London taxis. The number of trips you are allocated differs depending on which borough you live in.</p>

                    <h1>Elegibility</h1>

                    <p>You are automatically eligible for membership if you are:
                        <ul>
                            <li>Receive the Higher Rate Mobility component of the Disability Living Allowance</li>
                            <li>Receive 8 points or more under the moving around activity of the Mobility Component of PIP</li>
                            <li>Are registered as Severely Sight Impaired/Blind (Being partially sighted does not allow automatic entry)</li>
                            <li>Receive a War Pension Mobility Supplement</li>
                        </ul>
                    </p>

                    <p>If you are not in one of the above categories you may still apply, but you may be asked to provide further detailed personal information.</p>
                    <p>Local boroughs are tightening up the assessment process. List exactly what your impairments are, how you are disabled by inaccessible transport services, and what effect this has on your daily life.</p>
                    <p>Many boroughs conduct eligibility assessments carried out by occupational therapists.
                        You may be invited to one where you will be asked questions about your impairments and how they prevent you from using public transport, as well as being monitored while you walk a certain distance.
                        You may also be asked how you traveled to the assessment. </p>

                    <p>To find out which application form you need, visit this<a href="http://www.londoncouncils.gov.uk/services/taxicard/taxicard-and-your-borough"> London Council webpage and click on your borough.</a></p>

                    <h3>Bookings</h3>

                    <p>You can now book a taxicard trip online via<a href="https://www.comcablondon.co.uk/webbook/taxicardlogin.asp"> Computer Cab’s website </a>or by phone: 02077635001 or 02070823131.</p>

                    <p>The Taxicard Call Centre is based in Scotland, and unfortunately it can be difficult to get through. Try to book your journeys in advance to avoid disappointment.
                        You will be asked for your Taxicard number, to confirm your name, the departure and arrival addresses.
                        Always ask for a quote, as for longer journeys it may be cheaper to book a local minicab rather than using your Taxicard.</p>

                    <h3>Service</h3>

                    <p>All taxis should be at your chosen pick up point at the required time of arrival. A minimum cost of £2.40 will be on the meter.
                        It is advised that you are ready to travel at the time booked for your pick up to avoid delays and additional costs.</p>

                    <p>If you think you have been unfairly charged when you when you were ready on time, but the meter was showing a higher amount than the maximum run in charge when you entered the taxi,
                         call Transport for All. We can make a complaint to Taxicard on your behalf. The details of all your journeys are held on your Taxicard account.</p>

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

export default Taxicard;