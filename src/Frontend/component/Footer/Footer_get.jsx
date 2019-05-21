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
          <img src={Gmail} alt='Gmail logo' />
          <img src={Facebook} alt='Facebook logo' />
          <img src={Twitterlogo} alt='Twitter logo' />
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
