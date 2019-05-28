import React from 'react'; 
import './FooterCSS.css';

import AccessLive from './Images/Disab logo.png';
import GitHub from './Images/githublogo.svg';
import Gmail from './Images/google-plus-logo.svg';
import Facebook from './Images/facebooklogo.svg';
import Twitterlogo from './Images/twitter-logo-button.svg';

export default function Footer () { 
    return(
      <div className='Footer'>
        <div className='contacts'>
          <img src={GitHub} alt='Github logo' />
          <a 
          className="github"
          href="https://github.com/kodiri/accessibility-live"
          target="_blank"
          rel="noopener noreferrer">
          {/* GitHub */}
          </a>
          <img src={Gmail} alt='Gmail logo' />
          <a 
          className="gmail"
          href="https://mail.google.com/mail/u/0/h/1bndjilnmn8lo/?&v=prg"
          target="_blank"
          rel="noopener noreferrer">
          {/* Gmail */}
          </a>
          <img src={Facebook} alt='Facebook logo' />
          <img src={Twitterlogo} alt='Twitter logo' />
          <a 
          className="twitter"
          href="http://www.twitter.com/Access_Live_"
          target="_blank"
          rel="noopener noreferrer">
          {/* Twitter */}
          </a>
        </div>
        <div className='bottom'>
          <div className='alivelogo'>
            <img src={AccessLive} alt='Disab logo' />
          </div>
          <div className='copyright'>
            <p >© All Content is copyright of Team Charlie 2019. All rights reserved.</p>
          </div>
        </div>
      </div>
      );
}  
