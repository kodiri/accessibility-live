import React from 'react';
import './Details.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsChart from './Images/Details-Chart.png';

export default function Details() {
    return (
        <div className="container">
            <div className="container2">
                <h1>
                    Details
                </h1>
                <div className="twitter-timeline">
                <a class="twitter-timeline" data-width="700" data-height="700" data-theme="light" href="https://twitter.com/Access_Live_?ref_src=twsrc%5Etfw">Tweets by Access_Live_</a>
                </div>
                <img src={DetailsChart} />
            </div>
        </div>
    );
}