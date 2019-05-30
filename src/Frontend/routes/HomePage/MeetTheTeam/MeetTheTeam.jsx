import React from 'react';
import './MeetTheTeam.css';
import Member from './Member/Member';
import teamSvg from "./../../../Images/icons/group.svg";
// Images
import CarlImg from './MemberPhotos/carl.jpg';
import SuleImg from './MemberPhotos/Sule.png';
import PelinImg from './MemberPhotos/Pelin.jpg';
import SBImg from './MemberPhotos/SB.png';
import WalterImg from './MemberPhotos/walter-gh.jpg';

export default function MeetTheTeam() {
  return (
    <div className="MeetTheTeam">
      <div className="MeetTheTeam__Title">
        <h2><img src={teamSvg} className="MeetTheTeam__Icon" alt="how icon" />Meet the Team</h2>
      </div>
      <div className="MeetTheTeam__Flex__Container">
        <div className="MeetTheTeam__Description">
          Charlie Team is a London based company in the U.K. It is a team of developers with a diverse background, with the ambition of and dedication 
          to help to improve lives.
        </div>
        <div className="MeetTheTeam__Photos">
          <Member name="S.B." photo={SBImg} linkedIn="s-b-63286967/" />
          <Member name="Pelin" photo={PelinImg} linkedIn="walterperezhernandez/" />
          <Member name="Walter" photo={WalterImg} linkedIn="walterperezhernandez/" />
          <Member name="Sule" photo={SuleImg} linkedIn="walterperezhernandez/" />
          <Member name="Carl" photo={CarlImg} linkedIn="walterperezhernandez/" />
        </div>
      </div>
    </div>
  );
}
