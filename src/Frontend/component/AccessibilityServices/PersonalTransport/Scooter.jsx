import React, { Component } from 'react';
import '../../../css/Post.css';

// class component
class Scooter extends Component {

    render() {
        return (
            <div class="content">
                <div className='post'>
                    <h2>Mobility Scooter</h2>
                    <img class="content-right" src="http://www.transportforall.org.uk/media_assets/uploads/scooter.jpg" alt="Scooter" />

                    <p>Electric mobility scooters are becoming more and more popular. Not having to rely on family, friends or door-to-door services can be a significant boost to your independence.</p>

                    <p>There are several different types of scooter, ranging from lightweight folding scooters, right up to road legal and all-terrain scooters. Prices also vary greatly from £600 to over £4000. 
                        Class 2 vehicles usually have a top speed of 4mph, and are designed to use on the pavement. 
                        Class 3 vehicles can be road legal and travel at 8mph, but can usually also be set to 4mph for use on the pavement.</p>

                    <p>You do not need a driving licence to drive a Type 3 scooter on the road but you must obey the rules of the highway code. You are also required to register the vehicle with the DVLA and display a ‘nil duty’ tax disc.
                        They cannot be used on motorways or bus and cycle lanes. By law, class 3 vehicles must be fitted with lights, indicators, horn, rear view mirror and rear reflectors.</p>

                    <h3>Buying a scooter</h3>
                    <p>There are many companies selling mobility scooters and it can be difficult to know where to start. 
                        Whether you visit a shop, or a salesperson visits your home, there are a few things to remember:
                        <ul>
                            <li>Think about what you want the scooter for, and choose one that suits your needs</li>
                            <li>Not all scooters are allowed on buses so check first. You can use your mobility scooter on buses if the Mobility Aid is a class 2 mobility scooter and it has the following dimensions: 
                                maximum width is 600mm; maximum length is 1000mm; maximum turning radius is 1200mm.</li>
                            <li>Stick to your budget, there is a wide range of products out there, it needn’t cost a fortune.</li>
                            <li>Monthly payment options can work out more expensive in the long run</li>
                            <li>If you can, try out a few different scooters until you are happy</li>
                        </ul>
                    </p>

                    <p>The British Red Cross sell a range of scooters as part of their independent living range:<a href="http://shop.redcross.org.uk/shop/subsection.asp?id=93366"> Scooters</a> Telephone 0844 893 0089</p>

                    <h1>Mobility Aid card</h1>

                    <p>For smaller scooters, TfL now issue a Mobility Aid Card to show to bus drivers, and verify that your scooter is approved for use on buses. Not all scooters are allowed on buses so check first.
                         You can use your mobility scooter on buses if the Mobility Aid is a class 2 mobility scooter and it has the following dimensions: maximum width is 600mm; maximum length is 1000mm;
                          maximum turning radius is 1200mm.</p>

                    <div class="tags">
                        <ul>
                            <li>Personal</li>
                            <li>Transport</li>
                            <li>Accessible</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scooter;