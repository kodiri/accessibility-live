import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class NHS extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Patient Transport Service</h2>
                    <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/patient.jpg" alt="NHS" />

                    <p>The patient transport services are responsible for transporting people to and from hospital appointments</p>

                    <p>Currently individual NHS Trust hospitals contract a service provider to supply and manage transport to their patients.</p>

                    <p>Each NHS Trust has its own procedure for arranging transport. Most require either your GP or hospital doctor to authorise the booking of transport.</p>

                    <p>However, others such as St Bart’s and Guy’s and St Thomas’, run their own booking schemes. The best advice is to mention to your GP at the time of your referral that you might need transport to and from the hospital.
                        If you are already a hospital patient then check with your hospital doctor how you go about arranging transport.</p>

                    <p>Be aware that at present, patient transport tends to involve long waits, and there is clear evidence that some disabled people use
                        Taxicard for hospital journeys because they find the Patient Transport Service so unreliable. However, having a Taxicard is not grounds for the
                        Patient Transport Service to refuse you transport.</p>

                    <p>Many Patient Transport services will ask you a series of questions over the phone to assess your eligibility for the service.
                        These questions can include if you can use public transport, if you have a Blue Badge, or whether you have a Motability vehicle or a family member with a car.
                        Please consider your responses to these questions carefully as they will determine whether you will be allocated Patient Transport.</p>

                    <p>If you have been unfairly denied Patient Transport, or are unhappy with the level of customer service you have received then contact
                        Transport for All and we will be able to advise you and contact the hospital on your behalf. Tel: 020 7737 2339.</p>


                    <h3>The Healthcare Travel Costs Scheme</h3>

                    <p>You may be able to claim a refund under the ‘Healthcare Travel Costs Scheme’ (HTCS) 
                        of the cost of travelling to hospital or other NHS premises for NHS-funded treatment or diagnostic test arranged by a doctor or dentist.</p>

                    <p>To qualify for help with travel costs under the HTCS, you must meet three conditions:
                        <ul>
                            <li>1) At the time of your appointment, you or your partner (including civil partners) must be receiving one of the qualifying benefits or allowances, 
                                or meet the eligibility criteria of the NHS Low Income Scheme.</li>
                            <li>2) Your journey must be made to receive NHS-funded non-primary medical or non-primary dental care services, to which you have been referred to by a GP, dentist or hospital consultant.</li>
                            <li>3) For referrals made by a primary practitioner such a GP or dentist, the service must be provided on a different day and in premises other than those occupied by the practitioner who made the referral.</li>
                        </ul>
                    </p>

                    <p>You can claim travel costs for your children if 2 or 3 above applies to them and you are in group 1 above at the time of the appointment.</p>

                    <p>Refund of travel costs to receive NHS treatment:<a href="http://www.nhs.uk/nhsengland/healthcosts/documents/2011/hc5%28t%29.pdf"> Download</a></p>

                    <p>Refund of travel costs to receive NHS treatment:<a href="http://www.nhs.uk/nhsengland/healthcosts/documents/2011/hc5%28t%29.pdf"> Download</a></p>

                    <h1>Contact</h1>

                    <p>More information can be found at:<a href="http://www.nhs.uk/nhsengland/Healthcosts/pages/Travelcosts.aspx"> NHS Travelcosts</a></p>

                    <div class="tags">
                        <ul>
                            <li>Door to Door</li>
                            <li>Transport</li>
                            <li>NHS</li>
                            <li>Ambulance</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NHS;