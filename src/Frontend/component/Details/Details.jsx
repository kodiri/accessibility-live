import React from 'react';
import './Details.css';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Details() {
    return (
        <Router>
            <div className="app">
                <h1 className="section-heading">
                    Details
                </h1>
                <div className="container">
                    <a className="twitter-timeline"
                        data-width="700"
                        data-height="700"
                        href="https://twitter.com/TfLAccess?ref_src=twsrc%5Etfw"
                    > Tweets by TfLAccess
                    </a>
                    <div className="details">
                        <p1 className="p1-heading">Some details about diability.</p1>
                        <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p2>
                    </div>
                </div>
            </div>
        </Router>
    );
}