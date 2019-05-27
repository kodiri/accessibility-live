import React from 'react';
import './KeepCalm.css';
import guyInWheelChairImg from '../../../Images/laptop-smatphone-mockup.jpg';

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
      </div>
      <div className="KeepCalm__Container__Flex">
        <img className="KeepCalm__Photo" src={guyInWheelChairImg} alt="wheelchair vs stairs" />
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
