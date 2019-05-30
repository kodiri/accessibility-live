import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Bluebadge extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Blue Badge Scheme</h2>
                    <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/312212102007.jpg" alt="Blue badge" />

                    <p>The Blue Badge scheme is a Europe-wide scheme that entitles disabled people to additional parking rights. You do not have to be a driver or own a car to obtain a Blue Badge.</p>
                    <p>To obtain a Blue Badge you need to contact your local council or you can apply online. The badge costs £10</p>

                    <h3>Elegibility</h3>

                    <p>People who may be issued with a badge after further assessment are those who are more than two years old and fall within one or more of the following descriptions:
                        <ul>
                            <li>Drives a vehicle regularly, has a severe disability in both arms and is unable to operate, or has considerable difficulty in operating, all or some types of parking meter; or</li>
                            <li>Has a permanent and substantial disability that causes inability to walk or very considerable difficulty in walking.</li>
                        </ul>
                    </p>

                    <p>In addition, children under the age of three may be eligible for a badge if they fall within either or both of the following descriptions:
                        <ul>
                            <li>A child who, on account of a condition, must always be accompanied by bulky medical equipment which cannot be carried around with the child without great difficulty;</li>
                            <li>A child who, on account of a condition, must always be kept near a motor vehicle so that, if necessary, 
                                treatment for that condition can be given in the vehicle or the child can be taken quickly in the vehicle to a place where such treatment can be given</li>
                        </ul>
                    </p>

                    <h3>Automatic Elegibility</h3>

                    <p>People who may be issued with a badge without further assessment are those who are more than two years old and fall within one or more of the following descriptions:
                        <ul>
                            <li>Are registered blind</li>
                            <li>Receive the higher rate of mobility component of DLA</li>
                            <li>Receive a war pension mobility supplement</li>
                            <li>Receive 8 points or more under the “moving around” activity of the mobility component of Personal Independence Payment(PIP)</li>
                            <li>Has been both awarded a lump sum benefit at tariffs 1 – 8 of the Armed Forces Compensation Scheme and certified as having a 
                                permanent and substantial disability which causes inability to walk or very considerable difficulty in walking.</li>
                        </ul>
                    </p>

                    <p>If you used to receive The Higher Rate mobility component of DLA but you did not get 8 points or more on mobility component of PIP, 
                        or you were deemed not eligible for PIP – you can still continue to use your Blue Badge until it expires. 
                        If you did not get 8 points or more on mobility component of PIP or you were deemed not eligible for PIP after the expiry date, 
                        you can apply for a Blue Badge to your local council to see if you meet any of the none automatic eligibility criteria. 
                        If your council decided that you do not meet the criteria then there is no formal right to appeal their decision. 
                        However you can ask them to reconsider the decision if you think they have not assessed your needs correctly.</p>

                    <p>If you used to receive The Higher Rate mobility component of DLA but you did not get 8 points or more on mobility component of PIP, 
                        or you were deemed not eligible for PIP – you can still continue to use your Blue Badge until it expires. 
                        If you did not get 8 points or more on mobility component of PIP or you were deemed not eligible for PIP after the expiry date, 
                        you can apply for a Blue Badge to your local council to see if you meet any of the none automatic eligibility criteria. 
                        If your council decided that you do not meet the criteria then there is no formal right to appeal their decision. 
                        However you can ask them to reconsider the decision if you think they have not assessed your needs correctly.</p>

                    <p>If you are deemed eligible for any other form of travel benefit, such as the Freedom Pass for example, 
                        this is not relevant to your eligibility for a Blue Badge. Similarly, your council cannot refuse you one benefit on the grounds that you use another. 
                        The Blue Badge is issued under completely separate legislation, and councils don’t have any discretionary powers to change the criteria.</p>

                    <p>Important Information: Blue badge locations, timings and restrictions: <a href="http://www.parkingforbluebadges.com/bluebadgemap/online-map"> Link.</a></p>

                    <div class="tags">
                        <ul>
                            <li>Concesionary</li>
                            <li>Transport</li>
                            <li>Accessible</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bluebadge;