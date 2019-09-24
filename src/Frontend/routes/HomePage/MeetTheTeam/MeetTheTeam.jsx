import React from 'react';
import './MeetTheTeam.css';

export default function MeetTheTeam() {
  return (
    <div className="MeetTheTeam">
      <div id="position">
        <div id="row">
          <div className="tittle">
            <h1>MEET THE TEAM</h1>
          </div>
          <div id="column">
            <div className="cube shar">
              <div className="member">
                <div className='name'>Sharleen</div>
                <div className='surname'>Braham</div>
              </div>
              <div className="whiteBorder"></div>
              <div className="opacity"></div>
              <div className="linkedinProfile">
                <ul>
                  <li><a href=" "><span className="fab fa-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="cube pelin">
              <div className="member">
                <div className='name'>Pelin</div>
                <div className='surname'>Diskan</div>
              </div>
              <div className="whiteBorder"></div>
              <div className="opacity"></div>
              <div className="linkedinProfile">
                <ul>
                  <li><a href=" "><span className="fab fa-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="cube walter">
              <div className="member">
                <div className='name'>Walter</div>
                <div className='surname'>Perez</div>
              </div>
              <div className="whiteBorder"></div>
              <div className="opacity"></div>
              <div className="linkedinProfile">
                <ul>
                  <li><a href="https://www.linkedin.com/in/walterperezhernandez/"><span className="fab fa-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="cube sule">
              <div className="member">
                <div className='name'>Suleman</div>
                <div className='surname'>Tunkara</div>
              </div>
              <div className="whiteBorder"></div>
              <div className="opacity"></div>
              <div className="linkedinProfile">
                <ul>
                  <li><a href=" "><span className="fab fa-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="cube carl">
              <div className="member">
                <div className='name'>Carl</div>
                <div className='surname'>Cross</div>
              </div>
              <div className="whiteBorder"></div>
              <div className="opacity"></div>
              <div className="linkedinProfile">
                <ul>
                  <li><a href=" "><span className="fab fa-linkedin-in"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}