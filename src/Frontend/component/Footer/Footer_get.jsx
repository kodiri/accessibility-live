import React from 'react'; 
import FooterCSS from './FooterCSS.css'; 

import AccessLive from './Images/Disab logo.png';
import GitHub from './Images/githublogo.svg';
import Gmail from './Images/google-plus-logo.svg';
import Facebook from './Images/facebooklogo.svg';
import Twitterlogo from './Images/twitter-logo-button.svg';


export default function Footer () { 
    return[(
      <div>
        <div className='Footer'>
          <b /><b /><b />
          <div className='contacts'>
          <label id='github' name='GitHub' logo={GitHub} />
              <img src={GitHub} alt='Github logo' />
            <label id='gmail' name='Gmail' logo={Gmail} />
              <img src={Gmail} alt='Gmail logo' />
            <label id='facebook' name='Facebook' logo={Facebook} />
              <img src={Facebook} alt='Facebook logo' />
            <label id='twitter' name='Twitter' logo={Twitterlogo} />
              <img src={Twitterlogo} alt='Twitter logo' />
          </div>
          <div>
            <div className='alivelogo'>
              <label id='accesslive' name='AccessLive' logo={AccessLive} />
              <img src={AccessLive} alt='Disab logo' />
            </div>
            <div className='copyright'>
              <p>© All Content is copyright of Team Charlie 2019. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      )];
}  
