import React from 'react';
import './KeepCalm.css';
import guyInWheelChairImg from '../../../images/laptop-smatphone-mockup.jpg';

export default function KeepCalm() {
  return (
    <div className="KeepCalm">
      <div className="KeepCalm__Tittle">
        <h2>
          Keep Calm
          <br />
          &
          <br />
          stay t
          <span className="KeepCalm__text--underline">une</span>
!
        </h2>
      </div>
      <div className="KeepCalm__Container__Flex">
        <img className="KeepCalm__Photo" src={guyInWheelChairImg} alt="wheelchair vs stairs" />
        <div className="KeepCalm__Description">
          <p className="KeepCalm__Description__text">
            We provide you in real time the last updates about your search getting data from twitter
            and TfL. If something is not working someone will let you know and if you were surprised
            by a not working lift, please be the first to let know what is going on!
          </p>
        </div>
      </div>
    </div>
  );
}
