import React from 'react';
import cardImage from '../Images/diala.jpg';
import './Cards.css';

export default function Cards() {
    return (
        <div className="container">
            <div className="card">
                <div className="cardImg">
                    <img src={cardImage} alt="" />
                    <span class='cardTitle'>Dial-a-Ride</span>
                </div>
                <div className="cardDetails">
                    <p>Description</p>
                </div>
                <div className="readMore">
                    <a href="#" >READ MORE</a>
                </div>
            </div>
        </div>
    );
}
