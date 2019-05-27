import React, { Component } from 'react';
import './Post.css';

// class component
class Redbridge extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Redbridge Mobility Card</h2>
                    <img class="content-right" src="http://www.stanfordcoachworks.co.uk/wp-content/uploads/2016/07/Stanford-Coachworks-Super-Flat-Floor-Minibus.jpg" alt="Redbridge" />

                    <p>If you are a disabled person living in Redbridge then you may be eligible to join their mobility card scheme.
                        It’s a door to door service which provides accessible transport to local disabled people within 10 miles from the Gants Hill roundabout.
                        You may also be able to make special arrangements to go on journeys longer than 10 miles. The service operates all year round and you can travel from 7am to midnight.</p>

                    <h3>Elegibility</h3>

                    <p>To apply for the mobility card you need to be over two years old and meet the eligibility criteria.</p>

                    <p>You will be allocated 36 trips per year if you have severe difficulty in walking and cannot use public transport without assistance.</p>

                    <p>You will be allocated 84 trips a year if you are registered blind, are a permanent wheelchair user, unable to walk unassisted, 
                        receive the higher rate mobility component of DLA or receive War Pensioners mobility allowance and cannot use public transport but can use a taxi.</p>

                    <p>For each trip you will pay a minimum fare of £2.50 for a journey which would normally cost £10. 
                        Two other people can travel with you free of charge as long as they are starting from the same address as you.</p>

                    <p>Bookings can be made up to 7 days in advance. Your call should be answered within 10 minutes so you should not be kept waiting a long time to make a booking. 
                        If you ask for a journey “as soon as possible” it should arrive within 30 minutes of your booking.</p>

                    <p>Application Form<a href="http://www2.redbridge.gov.uk/cms/council_tax_benefits_housing/welfare_and_benefits/travel_benefits/idoc.ashx?docid=27e020fc-ef12-4e49-a3ae-a5196d3e5a23&version=-1"> Download</a></p>

                    <h3>Contact</h3>

                    <p>Community Care Advice Centre - Tel: 208 708 7333.</p>

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

export default Redbridge;