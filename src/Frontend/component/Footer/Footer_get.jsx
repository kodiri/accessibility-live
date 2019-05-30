import React from 'react'; 
import './FooterCSS.css';

import AccessLive from './Images/Disab logo.png';
import GitHub from './Images/githublogo.svg';
import Gmail from './Images/google-plus-logo.svg';
import Twitterlogo from './Images/twitter-logo-button.svg';

export default function Footer () { 
    return(
      <div className='Footer'>
        <div className='contacts'>
          <a href="https://github.com/kodiri/accessibility-live" >
          <img src={GitHub} alt='Github logo' />
          </a>
          <a href="https://mail.google.com/mail/accesibilitylive@gmail.com">
          <img src={Gmail} alt='Gmail logo' />
          </a> 
          <a href="http://www.twitter.com/Access_Live_" >
          <img src={Twitterlogo} alt='Twitter logo' />
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
