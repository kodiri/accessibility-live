import React from 'react';
import './Details.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsChart from './Images/Details-Chart.png';

export default function Details() {
    return (
        <div className="Details">
            <h1 className="Details__title">
                Details
            </h1>
            <div className="Details__flex_container">
                <div
                    className="Details__flex_container--item-1">
                    <a
                        className="twitter-timeline"
                        data-width="700" 
                        data-height="700"
                        data-theme="light"
                        href="https://twitter.com/Access_Live_?ref_src=twsrc%5Etfw"
                        >
                        Tweets by Access_Live
                    </a>
                </div>
                <div className="Details__flex_container--item-2">
                    <img
                    src={DetailsChart}
                    />
                </div>
            </div>
        </div>
    );
}