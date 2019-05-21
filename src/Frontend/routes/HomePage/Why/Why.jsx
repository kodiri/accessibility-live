import React from 'react';
import './Why.css';
import guyInWheelChairImg from '../../../images/weelchair_vs_stairs.jpg';

export default function Why() {
  return (
    <div className="Why">
      <div className="Why__Tittle">Why Accessibility Live?</div>
      <div className="Why__Container__Flex">
        <img className="Why__Photo" src={guyInWheelChairImg} alt="wheelchair vs stairs" />
        <div className="Why__Description">
          <p className="Why__Description__text">
            Passengers with disabiities are very important passengers who require accurate
            information when planning their journey. Currently, people with a disability are not
            able to determine whether key facilities, such as a lift, are functioning at a certain
            station. Neither are they able to know if the stations they plan to use are busy.Thus,
            Accessibility live is a website where pertinent information that is useful to such
            important passengers will be readily available.
          </p>
        </div>
      </div>
    </div>
  );
}
