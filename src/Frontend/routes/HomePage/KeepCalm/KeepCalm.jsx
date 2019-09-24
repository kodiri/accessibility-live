import React from 'react';
import './KeepCalm.css';
import guyInWheelChairImg from '../../../Images/laptop-smatphone-mockup.jpg';
import googleAppStoreDownload from '../../../Images/Google-Play-Store-Download-APK.webp';

export default function KeepCalm() {
  return (
    <div className="KeepCalm">
      <div className="KeepCalm__Title">
        <h2>
          Keep Calm
          <br />
          &
          <br />
          stay t
          <span className="KeepCalm__text--underline">uned</span>
!
        </h2>
        <a
          className="a__button__apk"
          href="https://mega.nz/#!sZcWnALI!fMMKlbXC3gOAbtfCWMoholqUcE-UDL7mtGNIFGkJWII"
          target="_blank" rel="noopener noreferrer"
        >
          <img src={googleAppStoreDownload} alt="download button" className="Button__Download" />
        </a>
      </div>
      <div className="KeepCalm__Container__Flex">
        <img className="KeepCalm__Photo" src={guyInWheelChairImg} alt="promo app" />
        <div className="KeepCalm__Description">
          <p className="KeepCalm__Description__text">
            We provide you with the latest updates for your search, in real time. If something is not working, we will let you know. 
            We use data from twitter, TfL and passenger feedback. If you discover a lift
            is not working, please be the first to let us know!
          </p>
        </div>
      </div>
    </div>
  );
}
