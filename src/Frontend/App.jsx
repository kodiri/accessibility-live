import React from 'react';
import './css/App.css';
import AboutUs from './AboutUs';
import Footer from './Footer_get';
import cardImage from './diala.jpg';
// Components
import NavBar from './component/NavBar/NavBar';
import Twitter from './component/Twitter/Twitter';

function App() {
  return (

    <>
      <NavBar />

      <div className="App">
        <div className="card">
          <div className="flipCard">
            <div className="frontCard">
              <img src={cardImage} alt="photo" />
              <div className="frontText">Dial-a-ride</div>
            </div>
            <div className="backCard">
              <div className="text">
                <h1>
                  <b>Dial-a-ride</b>
                </h1>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card2">
          <div className="frontCard2">
            <div className="cardImg">
              <img src={cardImage} alt="photo" className="screen" />
            </div>
            <div className="cardDetails">
              <div className="text2">
                <h2>
                  <b>Dial-a-ride</b>
                </h2>
                <p>Description</p>
              </div>
              <div className="readMore">
                <p>Read more...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card3">
          <img src={cardImage} alt="photo" className="screen3" />
          <div className="text3">
            <div className="description3">
              <div className="title">
                <h3>
                  <b>Dial-a-ride</b>
                </h3>
                <h4>Description</h4>
              </div>
              <div className="secondpara">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ultricies
                  mauris, non lacinia felis.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Twitter />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;
