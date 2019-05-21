import React from 'react';
import './MeetTheTeam.css';
import Member from './Member/Member';
// Images
import CarlImg from './MemberPhotos/carl.jpg';
import SuleImg from './MemberPhotos/Sule.png';
import PelinImg from './MemberPhotos/Pelin.jpg';
import SBImg from './MemberPhotos/SB.png';
import GrayImg from './MemberPhotos/Grau.png';
import WalterImg from './MemberPhotos/walter-gh.jpg';

export default function MeetTheTeam() {
  return (
    <div className="MeetTheTeam">
      <div className="MeetTheTeam__Tittle">
        <h2>Meet the Team</h2>
      </div>
      <div className="MeetTheTeam__Flex__Container">
        <div className="MeetTheTeam__Description">
          Charlie Team is based in London, UK. It a team of developers with a diverse background but
          with big aim to help and improve the live of our world.
        </div>
        <div className="MeetTheTeam__Photos">
          <Member name="Gray" photo={GrayImg} />
          <Member name="S.B." photo={SBImg} />
          <Member name="Pelin" photo={PelinImg} />
          <Member name="Walter" photo={WalterImg} />
          <Member name="Sule" photo={SuleImg} />
          <Member name="Carl" photo={CarlImg} />
        </div>
      </div>
    </div>
  );
}
