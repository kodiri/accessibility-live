import React from 'react'; //?? remove

import AccessLive from './Frontend/Images/AccessLive logo.svg';
import Gmail from './Frontend/Images/Gmail logo.svg';
import Facebook from './Frontend/Images/Facebook logo.svg';
import Twitterlogo from './Frontend/Images/Twitter logo.svg';
// import './Footer.css'; //'./App.css'

export default function Footer () { 
    return[(
      <div>
        <div className='Footer'>
          <b /><b /><b />
          <div className='alivelogo'>
            {/* <div className='footer-logos'> */}
            {/* <img src={props.logo} alt='logo' /> */}
            <ALiveFoot id='accesslive' name='AccessLive' logo={AccessLive} />
          </div>
          <div className='contacts'>
            <ALiveFoot id='gmail' name='Gmail' logo={Gmail} />
            {/* <img src={Gmail} alt='Gmail logo' /> */}
            <ALiveFoot id='facebook' name='Facebook' logo={Facebook} />
            <ALiveFoot id='twitter' name='Twitter' logo={Twitterlogo} />
          </div>
          <div>
            <div className='copyright'>
            <ALiveFoot name='Copyright' logo={<p>
              © All Content is the copyright of Team Charlie 2019. All rights reserved.</p>}/>
            </div>
          </div>
        </div>
      </div>
      )];
}  
  
  
  // <div className="container">
  //             <div className='item'>
  //               <img src={Mulan} alt='Mulan logo' />
  //               <div className='overlay'>
  //                 <h1>Mulan</h1>
  //               </div>
  // export default Footer;
{/* class Footer extends Component {
    render() {
      return (
        <div className="App">
          <
            <Stack name='Patch Adams' logo={PatchAdams} />
            <Stack name='Elf' logo={Elf} />
          </div>

export default Footer; */}

