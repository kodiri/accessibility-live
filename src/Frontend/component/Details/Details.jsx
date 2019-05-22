import React from 'react';
import './Details.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsChart from './Images/Details-Chart.png';

export default function Details() {
    return (
        <div className="container">
            <h1>
                Details
            </h1>
            <a class="twitter-timeline"
                    data-width="600"
                    data-height="600"
                    href="https://twitter.com/Access_Live_?ref_src=twsrc%5Etfw"
                    >Tweets by Access_Live_
            </a> 
            <img src={DetailsChart} />
        </div>
    );
}